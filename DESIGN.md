# ProcureX Design System

## Neo-Industrial Minimal Aesthetic

ProcureX uses a unique **Neo-Industrial Minimal** design language that combines enterprise professionalism with modern web aesthetics.

### Core Principles

1. **Glass Morphism**: Subtle backdrop blur effects with translucent panels
2. **Metallic Accents**: Gradients that evoke industrial materials
3. **Glowing Elements**: Soft primary color glows for interactive states
4. **Depth Through Shadow**: Elevated shadows create visual hierarchy
5. **Smooth Motion**: Framer Motion animations for micro-interactions

---

## Color Palette

### Primary Color
- **ProcureX Violet**: `hsl(250 70% 58%)` - `#6C5CE7`
- Used for: Primary actions, active states, brand elements

### Dark Mode (Default)
- **Background Layers**:
  - Primary: `hsl(240 10% 6%)` - Deep industrial gray
  - Secondary: `hsl(240 8% 10%)` - Card surfaces
  - Tertiary: `hsl(240 6% 14%)` - Muted surfaces

- **Text**:
  - Primary: `hsl(0 0% 100%)` - Pure white
  - Muted: `hsl(240 5% 64%)` - Subtle gray

### Light Mode
- **Background**: `hsl(240 10% 98%)` - Off-white
- **Card**: `hsl(0 0% 100%)` - Pure white

---

## Typography

### Font Stack
- **Headings**: Space Grotesk (bold, compact, industrial feel)
- **Body**: Inter Regular (readable, professional)

### Usage
```tsx
className="font-heading font-bold" // For page titles
className="font-sans" // For body text (default)
```

---

## Component Patterns

### Glass Panel
Cards with subtle glass effect:
```tsx
<Card className="glass-panel">
```

Generates:
- Backdrop blur: `backdrop-blur-lg`
- Border: `border border-white/10`
- Background: Semi-transparent gradient

### Glow Effects
Primary color glow on hover/active:
```tsx
className="glow-primary"
```

Applies: `box-shadow: 0 0 24px rgba(108, 92, 231, 0.45)`

### Text Gradient
For brand elements:
```tsx
className="text-gradient-primary"
```

---

## Layout Grid

### Sidebar
- **Collapsed**: 64px (icon rail)
- **Expanded**: 260px (full labels)
- Smooth width animation via Framer Motion

### Topbar
- **Height**: 64px (4rem)
- Fixed at top, with backdrop blur

### Content Area
- **Padding**: 2rem (32px) on all sides
- **Max Width**: Fluid, constrained by viewport

---

## Motion System

### Animations
1. **Fade In**: Used for page transitions
   - Duration: 0.6s
   - Easing: ease-out

2. **Scale In**: Used for cards/modals
   - Duration: 0.4s
   - Scale: 0.95 → 1

3. **Slide In**: Used for sidebar
   - Duration: 0.3s
   - Transform: translateX

4. **Glow Pulse**: Used for notification badges
   - Duration: 2s
   - Infinite loop

### Usage
```tsx
className="animate-fade-in"
className="animate-scale-in"
className="animate-glow-pulse"
```

---

## Shadows

### Elevated Shadow
For hover states and important cards:
```tsx
className="shadow-elevated"
```
`box-shadow: 0 10px 50px -10px hsla(0, 0%, 0%, 0.6)`

### Glow Shadow
For primary interactive elements:
```tsx
className="shadow-glow"
```
`box-shadow: 0 0 24px rgba(108, 92, 231, 0.45)`

---

## Interactive States

### Buttons
- **Default**: Primary gradient background
- **Hover**: Scale 1.05, increased brightness
- **Active**: Scale 0.95

### Sidebar Items
- **Default**: Ghost background
- **Hover**: Subtle accent background, scale 1.02
- **Active**: Accent background + animated indicator pill + glow

---

## Accessibility

- **Focus States**: All interactive elements have visible focus rings
- **Contrast**: WCAG AA compliant color combinations
- **Motion**: Respects `prefers-reduced-motion` (via Framer Motion)
- **ARIA Labels**: All buttons and links have descriptive labels

---

## Brand Tokens

Store in `tailwind.config.ts` and `index.css`:

```css
--primary: 250 70% 58%;
--primary-glow: 250 70% 68%;
--gradient-primary: linear-gradient(135deg, hsl(250 70% 58%) 0%, hsl(280 65% 60%) 100%);
--shadow-glow: 0 0 24px rgba(108, 92, 231, 0.45);
```

---

## Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px (Sidebar becomes visible)
- **xl**: 1280px
- **2xl**: 1536px

---

## Performance

- **Lighthouse Score Target**: ≥ 90 Performance, ≥ 95 Accessibility
- **Lazy Loading**: Images and heavy components
- **Code Splitting**: Route-based with React Router
- **Animation**: Hardware-accelerated transforms only

---

## Future Enhancements

- [ ] Command Palette (CMD+K) for quick navigation
- [ ] Mobile drawer sidebar for small screens
- [ ] Skeleton loaders with shimmer effects
- [ ] Data virtualization for large tables
- [ ] Dark/Light theme switcher in Topbar
