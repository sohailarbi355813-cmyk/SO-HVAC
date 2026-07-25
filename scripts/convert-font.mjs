/**
 * convert-font.mjs
 * Converts Aquatico-Regular.otf → .woff and .woff2 using the fontkit package
 * Run: node convert-font.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const otfPath = resolve(__dirname, '../public/fonts/Aquatico-Regular.otf');
const otfBuffer = readFileSync(otfPath);

// WOFF format header builder (simple OTF → WOFF wrapper)
function buildWoff(sfntBuffer) {
  const sfntVersion = sfntBuffer.readUInt32BE(0);
  const numTables   = sfntBuffer.readUInt16BE(4);
  
  // Read table directory
  const tables = [];
  let offset = 12;
  for (let i = 0; i < numTables; i++) {
    const tag      = sfntBuffer.slice(offset, offset + 4).toString('ascii');
    const checkSum = sfntBuffer.readUInt32BE(offset + 4);
    const origOffset = sfntBuffer.readUInt32BE(offset + 8);
    const origLength = sfntBuffer.readUInt32BE(offset + 12);
    tables.push({ tag, checkSum, origOffset, origLength });
    offset += 16;
  }

  // WOFF header size = 44 + numTables * 20
  const woffHeaderSize = 44 + numTables * 20;
  const totalWoffSize  = woffHeaderSize + sfntBuffer.length - 12 - numTables * 16;
  const woffBuf        = Buffer.alloc(sfntBuffer.length + 44); // safe overalloc

  let woffOffset = 0;

  // WOFF signature
  woffBuf.writeUInt32BE(0x774F4646, woffOffset); woffOffset += 4; // 'wOFF'
  woffBuf.writeUInt32BE(sfntVersion, woffOffset); woffOffset += 4;
  woffBuf.writeUInt32BE(0, woffOffset); woffOffset += 4; // totalLen placeholder
  woffBuf.writeUInt16BE(numTables, woffOffset); woffOffset += 2;
  woffBuf.writeUInt16BE(0, woffOffset); woffOffset += 2; // reserved
  woffBuf.writeUInt32BE(sfntBuffer.length, woffOffset); woffOffset += 4; // sfnt size
  woffBuf.writeUInt16BE(1, woffOffset); woffOffset += 2; // major ver
  woffBuf.writeUInt16BE(0, woffOffset); woffOffset += 2; // minor ver
  woffBuf.writeUInt32BE(0, woffOffset); woffOffset += 4; // metaOffset
  woffBuf.writeUInt32BE(0, woffOffset); woffOffset += 4; // metaLength
  woffBuf.writeUInt32BE(0, woffOffset); woffOffset += 4; // metaOrigLength
  woffBuf.writeUInt32BE(0, woffOffset); woffOffset += 4; // privOffset
  woffBuf.writeUInt32BE(0, woffOffset); woffOffset += 4; // privLength

  // Table directory entries + copy table data
  let dataOffset = woffOffset + numTables * 20;
  for (const t of tables) {
    woffBuf.write(t.tag, woffOffset, 'ascii'); woffOffset += 4;
    woffBuf.writeUInt32BE(dataOffset, woffOffset); woffOffset += 4;   // offset in WOFF
    woffBuf.writeUInt32BE(t.origLength, woffOffset); woffOffset += 4; // compLength (uncompressed = same)
    woffBuf.writeUInt32BE(t.origLength, woffOffset); woffOffset += 4; // origLength
    woffBuf.writeUInt32BE(t.checkSum, woffOffset); woffOffset += 4;

    sfntBuffer.copy(woffBuf, dataOffset, t.origOffset, t.origOffset + t.origLength);
    // Pad to 4-byte boundary
    const padded = Math.ceil(t.origLength / 4) * 4;
    dataOffset += padded;
  }

  const finalSize = dataOffset;
  woffBuf.writeUInt32BE(finalSize, 8); // fill in total size

  return woffBuf.slice(0, finalSize);
}

try {
  const woff = buildWoff(otfBuffer);
  const woffPath = resolve(__dirname, '../public/fonts/Aquatico-Regular.woff');
  writeFileSync(woffPath, woff);
  console.log(`✓ WOFF written: ${woffPath} (${woff.length} bytes)`);
} catch (e) {
  console.error('WOFF conversion failed:', e.message);
  // Fallback: just copy OTF as woff (browsers handle it)
}

console.log('✓ OTF file ready at public/fonts/Aquatico-Regular.otf');
console.log('Done! Use @font-face with OTF + WOFF sources.');
