# Tests directory

This repository uses the following test locations and conventions:

- Frontend (Create React App)
  - tests live under `cms/frontend/src/__tests__/` and use React Testing Library (already listed in `cms/package.json` deps).
  - Run frontend tests from the `cms` directory with `npm test`.

- Backend
  - Backend tests (once added) should live under `cms/backend/tests/` or a top-level `tests/backend/` folder.
  - The backend currently has no `package.json` or test runner configured; add `jest` or `mocha` and a `backend/package.json` if you want CI/test scripts for the server.

Example quick check:

From project root:

```bash
cd cms
npm test -- --watchAll=false
```
