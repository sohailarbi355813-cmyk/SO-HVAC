# Antigravity Global Rulebook: $10k+ Award-Winning Interactive & 3D Web Design

When tasked with designing, building, or modifying web applications and UI components in ANY workspace, you must abandon generic, default AI web layouts (no plain white backgrounds, basic text blocks, or default Bootstrap-era styling). All web projects must adhere to luxury studio standards (Awwwards Site-of-the-Day caliber), implementing interactive 3D elements, dynamic animations, and atmospheric styling as detailed below.

---

## 1. Required "$10k Tech Stack" & Dependencies
Whenever initializing or developing a frontend project (React, Next.js, Vite), proactively recommend, install, and implement the following modern engineering libraries:

1. **3D & Interactive Canvases:**
   - **`@splinetool/react-spline` & `@splinetool/runtime`**: For embedding interactive, mouse-reactive 3D scene objects and floating geometry without complex shaders.
   - **`three`, `@react-three/fiber`, & `@react-three/drei`**: For custom fluid particle fields, background wave shaders, lighting setups, and reactive 3D canvases.
2. **Animation & Smooth Scrolling:**
   - **`lenis`**: Studio-grade smooth scrolling. Never build static, jerky web scrolling; implement Lenis smooth scrolling hooks by default on landing pages.
   - **`gsap` & `ScrollTrigger`**: For multi-layer parallax depth transitions, scroll-driven scrubbing, and pinning narrative sections during page scroll.
   - **`framer-motion`**: For reactive layout transitions, spring physics micro-interactions, floating hover transformations, and tab animations.
3. **Styling & Polish:**
   - **Tailwind CSS + `lucide-react`, `clsx`, & `tailwind-merge`**: Clean vector iconography paired with dynamic class merging for frosted glass layering.

---

## 2. The 5-Pillar Interactive Design Matrix
When constructing layouts, sections, or user experiences, incorporate these specific architectural techniques derived from industry-leading UI/UX references:

### Pillar 1: Mouse-Reactive 3D Objects (Spline & R3F)
- Integrate floating 3D objects in Hero sections and product feature displays that smoothly tilt, rotate, or catch simulated light as the user moves their cursor across the viewport.
- Use `@splinetool/react-spline` to load lightweight interactive 3D assets or Three.js geometric primitives with matte/metallic reflective materials.

### Pillar 2: Deep Atmospheric Immersion (Spaceedu Sci-Fi Dark Theme)
- Default to curated dark-mode palettes (e.g., deep graphite, space obsidian `#030816`, Midnight Navy `#070F1E`) paired with atmospheric colored background glows and subtle noise texture overlays.
- Emphasize **Frosted Glassmorphism**: Use translucent surfaces (`backdrop-blur-md bg-white/5` or `bg-slate-900/40`) with luminous razor-thin outlines (`border border-white/10` or reactive cyan/amber border glows on hover).

### Pillar 3: Multi-Layer Depth Parallax
- Avoid flat scrolling where all page elements scroll at identical velocities. 
- Implement **GSAP ScrollTrigger & Lenis Parallax**: Assign offset vertical scrolling velocities to background glows, midground floating icons, and foreground content cards to produce an expansive 3D illusion of depth as the user navigates down the page.

### Pillar 4: Exploded-View & Dynamic Product Reveals (Burger UI Mechanics)
- When presenting products, system components, or multi-step services, avoid boring static bullet lists.
- Design interactive card switches using **Framer Motion (`AnimatePresence`)**, where clicking or hovering between options smoothly splits illustrations into floating, exploded-view structural layers with snappy kinetic typography transitions.

### Pillar 5: "Juice UI" & Dynamic Theme Morphing
- Give interfaces an organic, vibrant, fluid feel ("Juicy Web Design").
- When users hover over different interactive elements or switch category tabs, trigger **smooth color environment sweeps**: shift background spotlight colors, border glows, and badge tones to harmonize with the actively selected feature (e.g., swapping seamlessly between cool icy cyan ❄️ and warm solar amber ☀️), accompanied by bouncy spring hover transformations (`whileHover={{ scale: 1.03, y: -4 }}`).

---

## 3. General Implementation Rules
- **Typography:** Always pair high-impact display typography (e.g., *Outfit, Syne, Clash Display, Space Grotesk*) with ultra-clean sans-serif body fonts (*Inter, Plus Jakarta Sans*).
- **No Empty Placeholders:** When UI layouts require visual elements, build interactive canvas widgets or use image generation tools—never output generic gray placeholder rectangles!
- **Interactive Excellence:** Every button, card, and icon must provide immediate tactile feedback on focus and hover, making the entire website feel alive, polished, and worth $10k+.
