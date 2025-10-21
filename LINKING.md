# ProcureX Routing & Navigation

## Project Structure

This is a single-project setup where both the landing page and the ProcureX app are contained in the same React application.

## Routes

### Public Routes
- `/` - Landing page (marketing site)
- `/auth` - Authentication (sign in / sign up)

### Protected Routes (requires authentication)
- `/app/*` - All app routes are protected
- `/app/dashboard` - Main dashboard
- `/app/vendors` - Vendor management
- `/app/items` - Item catalog
- `/app/rfqs` - Request for Quotations
- `/app/pos` - Purchase Orders
- `/app/grn` - Goods Receipt Notes
- `/app/invoices` - Invoice management
- `/app/approvals` - Approval workflows
- `/app/budgets` - Budget tracking
- `/app/settings` - Settings

## Authentication Flow

1. **Unauthenticated users**: CTAs on landing page redirect to `/auth`
2. **Authenticated users**: CTAs redirect directly to `/app/dashboard`
3. **Session check**: Landing page CTAs check for active Supabase session before routing

## How CTAs Work

The CTA components (Navbar, Hero, CTA section) use the `useAuth` hook to:
1. Check if user has an active session
2. Route authenticated users to `/app/dashboard`
3. Route unauthenticated users to `/auth`

## Modifying Routes

To change target URLs:
1. **Landing CTAs**: Edit `src/components/Navbar.tsx` and `src/components/CTA.tsx`
2. **App routes**: Edit `src/App.tsx` routing configuration
3. **Protected route logic**: Edit `src/components/app/AppLayout.tsx`

## Deployment (Netlify/Lovable)

The `netlify.toml` ensures SPA fallback routing works correctly:
- All routes redirect to `/index.html` with 200 status
- This allows React Router to handle routing on the client side
- Prevents 404 errors on direct URL access or page refresh
