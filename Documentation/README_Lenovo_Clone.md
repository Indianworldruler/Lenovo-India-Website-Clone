# Lenovo India Website Clone

## Problem Statement

Lenovo India’s site caters to a broad audience including students, professionals, and gamers.  
The challenge is integrating detailed product filters, easy customization, and efficient order tracking on a scalable platform.

---

## Tools & Technologies Used

**Tools:**
- Figma

**Technologies Used:**
- HTML  
- CSS  
- JavaScript

---

## Creative Features Added

- Customize Page feature  
- Smart Filter feature  

> Unlike the original site, mine is lightweight, fast-loading, and doesn’t rely on heavy frameworks.  
> There are no login paywalls or interruptions.

---

## Pricing Strategy or Product Flow

**Observed Pricing Model:** Static Display (Fixed Pricing)  

The site shows fixed prices for each laptop or product. There is no real-time pricing logic like discounts, configuration-based changes, or bundles.

**Why this model?**  
Since it's a frontend-only clone with no backend or dynamic pricing logic, a static (fixed) pricing model is the most practical approach.  
It keeps the focus on UI/UX design, layout accuracy, and performance, which aligns with the goal of showcasing a clone or prototype.

---

## Challenges Faced and Solutions Implemented

### 1. Replicating a Complex Commercial UI
- **Challenge:** The original Lenovo site has a multi-layered, dynamic UI with mega menus, sliders, and product cards — which are hard to mimic without access to backend logic or component libraries.
- **Solution:** I carefully analyzed the DOM and recreated key components using pure HTML, CSS, and vanilla JavaScript, focusing on pixel-perfect layout and responsive design without depending on external frameworks.

### 2. Hover-Based Mega Navigation
- **Challenge:** Implementing hover-triggered dropdowns that don’t break the layout or disappear when moving the mouse across them.
- **Solution:** Used `position: absolute`, `z-index`, and precise hover states with `:hover` and `display: block` to ensure fluid interaction, avoiding flickers and layout shifts.

### 3. Responsive Design Across Devices
- **Challenge:** Ensuring the cloned layout works smoothly on mobile, tablet, and desktop screen sizes.
- **Solution:** Implemented a custom media query system and percentage-based widths to adapt the layout. Adjusted font sizes, nav stacking, and product grid collapses for smaller screens.

### 4. No Backend / Dynamic Functionality
- **Challenge:** The original Lenovo site uses backend systems for dynamic pricing, cart management, login, and product filtering — which are not directly clonable.
- **Solution:** Focused on building a clean front-end replica that demonstrates the flow and UI of the original site while simulating real elements like pricing and layout without needing backend support.

### 5. Maintaining Design Consistency
- **Challenge:** Keeping font sizes, spacing, and colors close to the original Lenovo India design for authenticity.
- **Solution:** Used browser DevTools to inspect original styles, then replicated them using custom CSS variables and consistent class naming, ensuring scalable and reusable design tokens.

---

## Supporting Resources

- 📄 [PDF with Website Screenshots](https://drive.google.com/file/d/1qjMr8I-F9pzvyU6E_48Li66CbjUPz8UN/view?usp=drive_link)  
- 🎨 [Figma Frames](https://www.figma.com/design/3aLPFTFJm9EbdDA7vOsNQA/Lenovo-India-website-clone?node-id=0-1&t=K05P4BWv6HnCk0Yy-1)
