# ClientFlow

ClientFlow is a multi-tenant **Client Operations Portal** SaaS for service businesses (agencies, consultancies, accounting firms, recruiters, IT service providers, etc.).

Each business (tenant) gets an isolated workspace for:

- Branding and custom client portal access
- Internal users, roles, and permissions
- Clients, projects, tasks, documents, and invoices
- Activity logs, subscriptions, and usage tracking

## Product Model

### Multi-tenancy

The MVP uses a shared database with strict tenant scoping on all business entities through `tenant_id`.

Every authenticated request must be scoped by the current user's tenant membership.

### Subscription Plans

| Plan | Price | Limits |
|---|---:|---|
| Starter | ₹999/month | 3 team members, 20 clients |
| Growth | ₹2,999/month | 15 members, 100 clients |
| Business | ₹7,999/month | 50 members, unlimited clients |
| Enterprise | Custom | SSO, audit logs, dedicated DB, SLA |

Usage-based add-ons can be billed separately for AI credits, storage, messaging, and extra seats.

## MVP Scope

1. Organization/tenant management
2. Team and role management
3. Client management
4. Projects/tasks
5. Client portal
6. Stripe/Razorpay subscription billing

## Suggested Stack

- Frontend: React.js
- Backend: Node.js/Express
- Database: PostgreSQL
- Authentication: JWT
- Billing: Stripe (+ Razorpay for India)
- Storage: S3 / Cloudflare R2
- Queue: Redis + BullMQ
- Email: Custom SMTP

## Database Schema

An initial PostgreSQL schema covering the required core tables is provided in:

- `/home/runner/work/ClientFlow/ClientFlow/schema.sql`

## Frontend (React)

A React frontend is available in:

- `/home/runner/work/ClientFlow/ClientFlow/frontend`

To run it locally:

1. `cd /home/runner/work/ClientFlow/ClientFlow/frontend`
2. `npm install`
3. `npm run dev`

For production build validation:

- `npm run build`