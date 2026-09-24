# Backend batch: security and domain services

This batch adds the next backend layer: authentication boundaries, role checks, admin quiz creation, moderation reports, audit logs, notifications, channels, health checks, rate limiting primitives, and the expanded Prisma schema.

The current token verifier is deliberately a development adapter. Production must validate Keycloak OIDC/JWT signatures and issuer/audience claims before enabling external access.
