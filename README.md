# Aneis

Aneis is a verified college-community platform built to connect students through curated hubs, public discovery, trusted access, and secure communication.

This repository is the initial MVP scaffold for the product foundation. It combines the best open-source components for authentication, messaging, federation, and deployment while keeping the custom business logic for the verified-access experience in our own codebase.

## Product vision

Aneis helps students:
- join subject-specific communities and channels
- access spaces only after passing validation checks
- discover activity across the ecosystem
- communicate securely in private direct messages
- interact with public communities and decentralized feeds

## Stack

- Frontend: Next.js 14
- Backend: NestJS
- Database: PostgreSQL
- Cache: Redis
- Auth: Keycloak / Authentik compatible
- Messaging: Matrix / Synapse compatible
- Federated feed: ActivityPub compatible services
- Infra: Docker Compose

## Repository structure

```text
.
├── apps/
│   ├── web/
│   └── api/
├── docker-compose.yml
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── docs/
    └── architecture.md
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start local infrastructure

```bash
docker compose up -d
```

### 3. Start app services

```bash
npm run dev
```

### 4. Open the app

- Frontend: http://localhost:3000
- API: http://localhost:4000

## Environment variables

Copy `.env.example` to `.env` and adjust values for your environment.

## MVP goals covered in this scaffold

- global product architecture
- landing page for the brand
- API backend foundation
- frontend foundation
- database and infra defaults
- auth and messaging integration points
- modular service design for the gatekeeper workflow

## Important note

This repo is intentionally structured to use open-source foundations and keep custom product logic in-house. The verified access gatekeeper, quiz-based onboarding, and moderation workflows are the primary differentiators and should be built on top of the infrastructure included here.

## License

This project is currently in active scaffolding mode and is intended for internal MVP development.
