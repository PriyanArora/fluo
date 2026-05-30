---
name: Kinetic Logic
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5c5f62'
  primary: '#070a0c'
  on-primary: '#ffffff'
  primary-container: '#1e2124'
  on-primary-container: '#86888c'
  inverse-primary: '#c5c6ca'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#0d0805'
  on-tertiary: '#ffffff'
  tertiary-container: '#261f1b'
  on-tertiary-container: '#918680'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e2e6'
  primary-fixed-dim: '#c5c6ca'
  on-primary-fixed: '#191c1f'
  on-primary-fixed-variant: '#44474a'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#eee0d9'
  tertiary-fixed-dim: '#d1c4bd'
  on-tertiary-fixed: '#211a16'
  on-tertiary-fixed-variant: '#4e4540'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  interface-surface: '#FDFDFD'
  interface-border: '#E5E5E5'
  spectrum-start: '#FF0000'
  spectrum-mid: '#00FF00'
  spectrum-end: '#0000FF'
  monochrome-gradient-dark: '#000000'
  monochrome-gradient-light: '#666666'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  node-gap: 32px
---

## Brand & Style

The design system is engineered for high-stakes procurement environments where clarity equals speed. It balances the raw, "EvilCorp" aesthetic—characterized by high-contrast, difference-mode blending, and stark geometries—with the sophisticated, architectural precision required for defense-grade software. 

The visual direction is **Minimalist-Technocratic**. It utilizes a "light mode" base of surgical off-whites and cool grays, interrupted by aggressive monochrome and spectrum gradients that signify active "orchestration" layers. The aesthetic is inspired by visual programming environments (like n8n), prioritizing the flow of data through distinct nodes and clear visual hierarchies. 

Key attributes include:
*   **Authoritative & Serious:** High-contrast interactions and precise linework.
*   **Tactical Sophistication:** Heavy use of negative space to isolate critical decision points.
*   **Geometric Rigor:** Hard edges and repeating patterns that suggest systemic order.

## Colors

The palette is built on a foundation of **Surgical Whites**. 
*   **Primary Base:** An off-white surface (#FDFDFD) reduces eye strain while maintaining a high-fidelity, printed-document feel.
*   **The Difference Layer:** Branding elements and primary navigation markers utilize `mix-blend-mode: difference` against white backgrounds to create an "inverse-monochrome" effect.
*   **Geometric Accents:** Use the monochrome and spectrum gradients strictly as background accents for "node" containers or as progress indicators. These should feel like data-visualizations rather than decorative flourishes.
*   **Functionality Over Form:** Standard semantic colors (success, error, warning) are applied with high saturation but low surface area, ensuring they pierce through the neutral backdrop.

## Typography

Typography is the primary driver of authority in this design system.
*   **Headlines:** Hanken Grotesk provides a modern, sharp, and structured feel that mimics the "Alliance" aesthetic. Tight letter spacing is required for larger sizes.
*   **Body:** Inter is used for its utilitarian clarity in data-dense procurement tables.
*   **Technical Data:** JetBrains Mono is utilized for all metadata, procurement IDs, and orchestration logic. This reinforces the "defense-grade" and "visual programming" tone.
*   **Branding:** The "EvilCorp" style logo must be rendered in a bold weight of the headline font with the difference blend mode enabled.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model.
*   **Navigation:** A top-level, persistent slim navigation bar (64px height) with minimal icons and sharp text.
*   **Grid:** A 12-column grid for dashboard views, moving to a single-column flow for "orchestration" screens where nodes are connected via SVG paths.
*   **Whitespace:** Generous external margins (48px) provide a "gallery" feel for complex data. Internal component spacing should be tight and logical, using a 4px base unit to maintain a technical appearance.
*   **Responsive Reflow:** On mobile, sidebars collapse into a bottom-anchored menu, and the 12-column grid collapses to a 2-column or 1-column layout depending on the complexity of the procurement data.

## Elevation & Depth

Hierarchy is established through **Tonal Layering and Sharp Outlines** rather than traditional shadows.
*   **Surface tiers:** The background is #F9F9F9. Primary cards and work-areas are #FFFFFF with a 1px solid border (#E5E5E5).
*   **Floating Elements:** Modals and tooltips use a very thin, 1px high-contrast black border and a minimal, non-diffused 4px "hard shadow" to mimic physical technical manuals.
*   **Orchestration Nodes:** Elements in a workflow utilize gradient backgrounds only when "active" or "focused," creating a sense of illuminated depth on an otherwise flat plane.
*   **Interaction:** Active states should use a subtle 10% black overlay or a change in border-weight (e.g., from 1px to 2px) to signify selection.

## Shapes

The shape language is **Uncompromisingly Sharp**. 
*   **Zero Radius:** All buttons, input fields, cards, and containers feature 90-degree corners. This evokes a sense of precision, engineering, and industrial reliability.
*   **Geometric Boxes:** Gradient accents are always contained within perfect rectangles. No circles or organic shapes are permitted, except for status pips which must be small (8px) squares.

## Components

*   **Buttons:** Rectangular with no border-radius. Primary buttons are solid #1E2124 with white JetBrains Mono text. Secondary buttons are transparent with a 1px border.
*   **Chips/Tags:** Monospaced text inside a light-gray box with a 1px border. No rounded corners.
*   **Input Fields:** Bottom-border only or 1px full-border with no radius. Focus states are indicated by the primary monochrome gradient as a 2px underline.
*   **Cards:** Pure white background, 1px #E5E5E5 border. Header sections of cards can feature a subtle 4px top-accent using the monochrome gradient.
*   **Workflow Nodes:** These represent procurement stages. They consist of a header with a monochrome gradient background, monospaced ID labels, and input/output ports on the left/right sides for "n8n-style" visual linking.
*   **Checkboxes/Radios:** Square and sharp. Active states are filled solid black with a white "X" (instead of a check) to maintain the "EvilCorp" aesthetic.