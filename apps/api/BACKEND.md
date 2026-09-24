# Backend progress

The API now has a database-first domain foundation.

## Added

- Prisma/PostgreSQL schema for users, hubs, memberships, quizzes, attempts, and access grants
- DTO validation through `class-validator`
- persistent user and hub endpoints
- hub membership endpoint
- quiz lookup and submission endpoint
- automatic access grant creation after a passing quiz
- access-status endpoint
- global validation and Prisma module

## Endpoints

- `GET /users`
- `POST /users`
- `GET /hubs`
- `POST /hubs`
- `POST /hubs/:hubId/join/:userId`
- `GET /quizzes/:hubSlug`
- `POST /quizzes/submit`
- `GET /access/:userId/:hubId`

## Local setup

Set `DATABASE_URL=postgresql://aneis:aneis123@localhost:5432/aneis?schema=public` in `.env`, then run:

```bash
npm install
npm run db:generate
npm run db:migrate
npm run dev --workspace @aneis/api
```

The quiz submission requires `userId`; this deliberately keeps access grants tied to a real account instead of granting anonymous access.
