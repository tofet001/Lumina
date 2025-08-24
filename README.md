# Lumina

Christian social media app for web and mobile.

## Structure
- `apps/web`: Next.js web app
- `apps/mobile`: React Native mobile app
- `packages/api`: Node.js/Express backend
- `packages/ui`: Shared UI components
- `prisma`: Database schema and migrations

## Setup
1. Install dependencies: `yarn install`
2. Configure `.env` files in each app/package.
3. Run database migrations: `yarn workspace packages/api migrate`
4. Start the backend: `yarn workspace packages/api dev`
5. Start web: `yarn workspace apps/web dev`
6. Start mobile: `yarn workspace apps/mobile start`