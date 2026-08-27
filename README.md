# newdemo

A tiny Express + Mongoose service used to exercise CodeWeave.

## Layout
- `src/app.js` — express app and route mounting
- `src/routes/user.routes.js` — HTTP routes
- `src/controllers/user.controller.js` — request handling
- `src/services/user.service.js` — business logic
- `src/models/user.model.js` — mongoose schema
- `src/middleware/auth.js` — bearer token guard
- `tests/user.test.js` — service tests
