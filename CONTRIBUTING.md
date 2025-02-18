# Contributing Guide 🌟

First off, thank you for considering contributing! We appreciate your time and effort.

## Code of Conduct 📜

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Getting Started 🛠️

1. **Fork** the repository
2. **Clone** your fork

   ```bash
   git clone https://github.com/yourusername/express-template.git
   ```

3. **Set Up** development environment
   ```bash
   pnpm install
   docker-compose up -d
   ```

## Development Workflow 🔄

### Branch Naming

- `feat/`: New features
- `fix/`: Bug fixes
- `docs/`: Documentation changes
- `chore/`: Maintenance tasks

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Pull Requests

1. Create a descriptive title
2. Reference related issues
3. Update documentation
4. Include tests
5. Ensure CI passes

## Testing Standards 🧪

- Unit tests: 95% coverage minimum
- E2E tests for critical flows
- Test files should mirror source structure:
  ```
  src/modules/user/service.ts → tests/modules/user/service.spec.ts
  ```

## Code Style 💅

- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier (2 spaces, single quotes)
- **Types**: Strict TypeScript checks enabled

```bash
# Check code quality
pnpm run lint

# Auto-format code
pnpm run format
```

## Reporting Issues 🐛

Use our issue template:

```markdown
## Description

[Clearly explain the issue]

## Steps to Reproduce

1. ...
2. ...

## Expected Behavior

[What should happen]

## Actual Behavior

[What actually happens]

## Environment

- OS: [e.g. macOS 12.6]
- Node: [e.g. 18.12.1]
- Commit: [e.g. a1b2c3d]
```

## Requesting Features ✨

1. Check existing issues
2. Create new issue with:
   - Use case description
   - Proposed solution
   - Alternative options

## Need Help? 🙋

Join our [Discussions](https://github.com/yourusername/express-template/discussions) forum!
