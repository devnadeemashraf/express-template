# Express TypeScript Backend Template 🚀

[![CI](https://github.com/yourusername/express-template/actions/workflows/ci.yml/badge.svg)](https://github.com/devnadeemashraf/express-template/actions)
[![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

A production-ready Node.js/Express backend template with TypeScript, following SOLID principles and clean architecture.

## Features ✨

- ✅ Layered Architecture (Controller-Service-Repository)
- 🔐 JWT Authentication (HTTP-only cookies + Bearer tokens)
- 🛡️ Security Best Practices (Helmet, rate limiting, sanitization)
- 🗄️ Database Agnostic (PostgreSQL/PostgreSQL ready)
- 📈 Redis Caching & Pub/Sub
- 📝 OpenAPI Documentation
- 🧪 Jest Testing with 95% coverage
- 🐳 Dockerized Development
- 🔄 CI/CD Pipeline
- 📦 Dependency Injection
- 🚦 RBAC (Role-Based Access Control)
- 📊 Structured Logging

## Architecture 🏛️

```mermaid
graph TD
    A[Client] --> B[API Gateway]
    B --> C[Authentication]
    B --> D[User Module]
    B --> E[Product Module]
    C --> F[(Redis)]
    D --> G[(Database)]
    E --> G
    style B fill:#4CAF50,stroke:#388E3C
    style C fill:#2196F3,stroke:#1976D2
```

**Flow**:
`Request → Middleware → Router → Controller → Service → Repository → Database`

## Folder Structure 📂

```
src/
├── modules/                        # Feature modules
│   └── auth/                       # Example feature module
│       └── v1/                     # Feature Version
│           ├── controllers/        # Request Controllers
│           ├── services/           # Feature services for business logics
│           ├── repositories/       # Database Query/Logics
│           ├── routes/             # Feature Router
│           ├── interfaces/         # Feature-Specific Interfaces
│           ├── dtos/               # Feature-Specific Data Transfer Objects
│           ├── validators/         # Feature-Specific Request and Misc. Validators
│           └── index.ts            # Entry File to export everything for cleaner imports
│
├── shared/                         # Cross-cutting concerns
│   ├── config/                     # Environment setup
│   ├── middleware/                 # Auth/RBAC/Validation
│   ├── utils/                      # Helpers/Constants
│   ├── cache/                      # Cache Wrappers and Abstractions
│   ├── database/                   # Database Abstractions
│   └── logging/                    # Logger configuration
│
├── types/                          # Global type declarations
├── app.ts                          # Express app configuration
└── server.ts                       # Server entry
```

## Getting Started 🚦

### Prerequisites

- Node.js 23+
- pnpm
- Docker & Docker Compose
- PostgreSQL & Redis

### Installation

```bash
git clone https://github.com/devnadeemashraf/express-template.git
cd express-template
pnpm install
cp .env.example .env
```

### Configuration

```env
# ========================
# Core Configuration
# ========================
HOST='http://localhost'
PORT=3000
NODE_ENV='development'

# ========================
# Database
# ========================
DATABASE_URL='postgres://postgres:password@localhost:5432/local'
REDIS_URL='redis://localhost:6379'

# ========================
# Authentication
# Use: "openssl rand --hex 32" to generate secret keys
# ========================
JWT_SECRET='your_super_hard_secret'
JWT_EXPIRES_IN='15m'
REFRESH_TOKEN_EXPIRES_IN='7d'
COOKIE_SECRET='your_super_hard_secret'

# ========================
# Security
# ========================
CORS_ORIGIN=['http://localhost:3000','http://localhost:5173']
RATE_LIMIT_DURATION='15s'
RATE_LIMIT_MAX='100'

# ========================
# Email (SMTP)
# ========================
SMTP_HOST='smtp.mailtrap.io'
SMTP_PORT=2525
SMTP_USER='your_smtp_user'
SMTP_PASSWORD='your_smtp_password'
EMAIL_FROM='no-reply@yourapp.com'

# ========================
# Monitoring
# ========================
SENTRY_DSN='your_sentry_dsn'

# ========================
# API Documentation
# ========================
SWAGGER_ENABLED=true
```

### Running Locally

```bash
# Development
pnpm run dev

# Production
pnpm run build && pnpm start

# With Docker
docker-compose up -d
```

## Creating a New Module 🧩

1. Generate module structure:

```bash
mkdir -p src/modules/new-feature/{application,domain,infrastructure}
```

2. Implement core components:

```typescript
// Example Service
export class NewFeatureService {
  constructor(@inject("Repository") private repository: IRepository) {}

  async executeBusinessLogic() {
    return this.repository.find();
  }
}
```

## API Documentation 📘

Access Swagger UI at `http://localhost:3000/api-docs`

[![Swagger Preview](https://img.shields.io/badge/Swagger-UI-green)](http://localhost:3000/api-docs)

## Testing 🧪

```bash
# Unit tests
pnpm test

# Coverage report
pnpm run test:cov

# E2E tests
pnpm run test:e2e
```

## Deployment 🚀

```bash
# Build production image
docker build -t express-template .

# Run with environment
docker run -p 3000:3000 --env-file .env express-template
```

## Contributing 🤝

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) before submitting PRs.

## License 📄

You can read about the License [here](LICENSE.md).
