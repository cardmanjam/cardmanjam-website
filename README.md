# Card Man Jam Vault v6

This is a static storefront prototype built from the prior Card Man Jam retro-vault site.

## What changed
- Removed all eBay storefront links
- Added hand-picked product cards
- Added category filters
- Added a browser-based cart
- Added sold-vault archive support
- Added policy page drafts
- Added "Why it's in the Vault" notes
- Kept the retro Card Man Jam visual identity

## How to add products now
Open `products.js` and duplicate one product object.

Fields:
- `id`: unique ID
- `title`
- `price`: number without $
- `category`: slab, single, sealed, or sold
- `status`: available or sold
- `badge`
- `meta`
- `image`: e.g. `images/my-card.jpg`
- `note`: your personal reason for listing it

Put product photos inside the `images` folder.

## Important
The cart works in the browser, but real checkout is intentionally disabled.

## Recommended next conversion
Move this design into Next.js and connect:
1. Supabase for products, photos, inventory, admin login, and orders
2. Stripe Checkout for payments
3. Shippo or EasyPost for shipping labels and tracking
4. Resend for order and shipping emails

## Before launch
- Replace policy drafts with reviewed final policies
- Confirm NJ sales-tax registration requirements
- Configure Stripe Tax or another tax service
- Set final shipping and return rules
- Replace sample products and placeholder images
