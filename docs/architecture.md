# Aneis architecture

## Overview

Aneis uses a modular architecture built around a central product layer that sits above open-source systems for identity, chat, and federation.

## High level architecture

```text
Browser / Mobile App
        │
        ▼
Next.js frontend
        │
        ├── auth flows
        ├── hub browsing
        ├── public feed UI
        ├── quiz access UI
        └── admin dashboard
        │
        ▼
NestJS API
        │
        ├── users
        ├── hubs
        ├── access requests
        ├── quizzes
        ├── moderation
        └── activity records
        │
        ├──────────────┬───────────────┐
        │              │               │
        ▼              ▼               ▼
PostgreSQL     Redis            Keycloak / Auth
        │              │               │
        │              │               └── central identity provider
        │              │
        │              └─────── event queue / cache / sessions
        │
        ▼
Matrix / Synapse
        │
        └── DMs + encrypted community messaging

ActivityPub-compatible federation layer
        └── public feed + external interactions
```

## Core product modules

### 1. Authentication and access
- central login with SSO
- user profiles with identity and role mapping
- role gates for students, admins, moderators

### 2. Hubs and channels
- subject-based community pages
- channel-based communication
- access restrictions via quiz validation

### 3. Public discovery feed
- open public timeline
- follow / unfollow flows
- likes, shares, and cross-platform compatibility

### 4. Verified entry flow
- admin-defined quiz challenges
- minimum pass threshold
- gating per hub or channel
- cooldown and rerun controls

### 5. Secure communication
- encrypted direct messaging via Matrix
- separate public vs direct messaging
- optional message retention and backup policy

## Why this structure

This design keeps the product flexible while leveraging proven open-source tooling. The custom product layer is what makes Aneis different: verified access, brand experience, moderation policies, and student community logic.
