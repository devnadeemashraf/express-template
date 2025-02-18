# Express TS Backend Template: Atomic Tasks

## Phase 1: Project Foundation (3 Days)

### TypeScript Setup (4 tasks | 2.5 hours)

- [x] Initialize npm project  
       `pnpm init -y`  
       Status: Finished | Estimate: 10min

- [x] Configure TypeScript  
       `tsc --init` with strict: true  
       Status: Finished | Estimate: 20min

- [x] Path Aliases  
       Configure `baseUrl` and `paths` in tsconfig  
       Status: Finished | Estimate: 15min

- [x] Basic Express Server  
       Create `src/server.ts` with hello world  
       Status: Finished | Estimate: 30min

### Docker Environment (3 tasks | 2 hours)

- [ ] Dockerfile  
       Multi-stage build for dev/prod  
       Status: Not Started | Estimate: 45min

- [ ] docker-compose.yml  
       Node + PostgreSQL + Redis services  
       Status: Not Started | Estimate: 30min

- [ ] Dev Scripts  
       `docker:dev` and `docker:build` commands  
       Status: Not Started | Estimate: 15min

### CI/CD Pipeline (5 tasks | 2.5 hours)

- [ ] Husky Setup  
       pre-commit and pre-push hooks  
       Status: Not Started | Estimate: 20min

- [ ] ESLint Config  
       AirBnB base + TypeScript rules  
       Status: Not Started | Estimate: 30min

- [ ] Prettier Setup  
       .prettierrc with 2-space indent  
       Status: Not Started | Estimate: 15min

- [ ] lint-staged  
       Run on staged .ts files  
       Status: Not Started | Estimate: 20min

- [ ] GitHub Actions  
       Basic CI workflow  
       Status: Not Started | Estimate: 30min

## Phase 2: Core Modules (5 Days)

### Database (6 tasks | 6 hours)

- [x] Prisma Init  
       `npx prisma init`  
       Status: Finished | Estimate: 15min

- [x] Schema & Models  
       `User` and other related schema with core fields  
       Status: Finished | Estimate: 30min

- [ ] Base Repository  
       Generic CRUD operations  
       Status: Not Started | Estimate: 2h

- [x] DB Client Singleton  
       Prevent multiple instances  
       Status: Finished | Estimate: 1h

- [x] Migrations  
       Initial migration file  
       Status: Finished | Estimate: 30min

- [ ] Seeding Script  
       `prisma/seed.ts` for test data  
       Status: Not Started | Estimate: 1h

### Authentication (8 tasks | 8 hours)

- [ ] JWT Service  
       Sign/verify tokens  
       Status: Not Started | Estimate: 1.5h

- [ ] Cookie Strategy  
       HTTP-only cookie setup  
       Status: Not Started | Estimate: 1h

- [ ] Bearer Strategy  
       Authorization header flow  
       Status: Not Started | Estimate: 1h

- [ ] Auth Middleware  
       Protect routes with JWT  
       Status: Not Started | Estimate: 1.5h

- [ ] Password Hashing  
       bcrypt integration  
       Status: Not Started | Estimate: 30min

- [ ] Login Route  
       `/auth/login` with validation  
       Status: Not Started | Estimate: 1h

- [ ] Refresh Tokens  
       Rotation strategy  
       Status: Not Started | Estimate: 1.5h

- [ ] Logout Handler  
       Clear cookie/token  
       Status: Not Started | Estimate: 30min

### Security (5 tasks | 3 hours)

- [ ] Helmet Config  
       Security headers  
       Status: Not Started | Estimate: 30min

- [ ] CORS Setup  
       Allowlist origins  
       Status: Not Started | Estimate: 30min

- [ ] Rate Limiter  
       express-rate-limit config  
       Status: Not Started | Estimate: 45min

- [ ] Sanitization  
       express-mongo-sanitize  
       Status: Not Started | Estimate: 15min

- [ ] CSRF Protection  
       Token-based validation  
       Status: Not Started | Estimate: 1h

## Phase 3: Advanced Features (4 Days)

### RBAC (4 tasks | 6 hours)

- [ ] Role Enum  
       ADMIN, USER, etc.  
       Status: Not Started | Estimate: 30min

- [ ] Permission Matrix  
       Define resource-access rules  
       Status: Not Started | Estimate: 2h

- [ ] Authorization Middleware  
       Check user roles  
       Status: Not Started | Estimate: 2h

- [ ] Admin Seed  
       Create default admin user  
       Status: Not Started | Estimate: 1h

### Redis (5 tasks | 5 hours)

- [ ] Redis Client  
       Connection setup  
       Status: Not Started | Estimate: 45min

- [ ] Cache Decorator  
       Method-level caching  
       Status: Not Started | Estimate: 2h

- [ ] Invalidation Strategy  
       On write operations  
       Status: Not Started | Estimate: 1h

- [ ] Health Check  
       Redis ping endpoint  
       Status: Not Started | Estimate: 30min

- [ ] Rate Limiter Storage  
       Use Redis for rate limits  
       Status: Not Started | Estimate: 1h

### Validation (3 tasks | 3 hours)

- [ ] Zod Integration  
       Request schema validation  
       Status: Not Started | Estimate: 1h

- [ ] Error Formatter  
       Uniform validation errors  
       Status: Not Started | Estimate: 1h

- [ ] Middleware  
       Auto-validate routes  
       Status: Not Started | Estimate: 1h

## Phase 4: Testing & Docs (3 Days)

### Testing (6 tasks | 8 hours)

- [ ] Jest Setup  
       TS config + supertest  
       Status: Not Started | Estimate: 1h

- [ ] Auth Tests  
       Login/logout flows  
       Status: Not Started | Estimate: 2h

- [ ] RBAC Tests  
       Role-based access cases  
       Status: Not Started | Estimate: 2h

- [ ] Integration Tests  
       Full route testing  
       Status: Not Started | Estimate: 2h

- [ ] Test Database  
       Separate DB for testing  
       Status: Not Started | Estimate: 1h

### Documentation (4 tasks | 4 hours)

- [ ] Swagger Setup  
       OpenAPI spec  
       Status: Not Started | Estimate: 2h

- [ ] API Examples  
       Curl commands in docs  
       Status: Not Started | Estimate: 1h

- [ ] Deployment Guide  
       Heroku/DigitalOcean  
       Status: Not Started | Estimate: 1h

### Operations (3 tasks | 3 hours)

- [ ] Health Check  
       `/health` endpoint  
       Status: Not Started | Estimate: 30min

- [ ] Logging Dashboard  
       Basic Kibana setup  
       Status: Not Started | Estimate: 2h

- [ ] Env Validation  
       Check required variables  
       Status: Not Started | Estimate: 30min

## Phase 5: Demo Modules (2 Days)

- [ ] User Management (4h)  
       CRUD endpoints + tests

- [ ] Product Catalog (4h)  
       Categories + inventory

- [ ] Caching Demo (2h)  
       Show Redis performance gain

## Final Polish (1 Day)

- [ ] Architecture Diagram (1h)  
       Mermaid/Excalidraw

- [ ] README.md (2h)  
       Dev setup + features list

- [ ] Postman Collection (1h)  
       Export all endpoints

---

### Realistic Time Estimates Key:

- Based on intermediate developer speed
- Includes research + debugging time
- Actual times may vary ±20%

### Completion Strategy:

1. Vertical Slices: Complete one flow end-to-end (e.g., auth)
2. Daily Goals: 3-4 tasks/day (4-6 hours of focused work)
3. Weekly Review: Every Friday, update progress
