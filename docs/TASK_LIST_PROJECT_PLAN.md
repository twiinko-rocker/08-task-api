# task-api: Project Plan

> Living document. Update the Status section after every session. If a chat with Claude gets long or is restarted, paste this file to resume where you left off.

## Overview
- **Goal:** Backend-first REST API for tasks, then a basic React client on top. Portfolio project with tests and a live deployment.
- **Repo:** github.com/twiinko-rocker/08-task-api
- **Availability:** 35 min/day, weekdays (10 sessions per sprint)
- **Manager/mentor:** Claude (Software Dev Manager project), focus on backend depth

## Stack
- Node + Express (ES modules), port 3000
- SQLite via `better-sqlite3` (prepared statements only)
- Jest + Supertest (API tests)
- Sprint 2: React (Vite) + React Testing Library

## Data model: `tasks`
| Field | Type | Rules |
|---|---|---|
| id | integer | PK, autoincrement |
| title | text | required |
| description | text | optional |
| status | text | `todo` / `doing` / `done`, default `todo`, CHECK constraint |
| createdAt | text | default current timestamp |

## Working agreements
- Branching: `main → dev → feature/*`. Never commit directly to `dev` or `main`.
- Conventional commits (`feat:`, `fix:`, `chore:`, `test:`, `docs:`). Re-read the message before committing.
- Every change goes through a PR into `dev`. After merge: `git checkout dev && git pull origin dev`.
- No secrets in the repo. `.env` and `tasks.db` stay in `.gitignore`.
- Tests are a standing priority, not an afterthought.
- Guide over solutions: stuck? Share the code and the exact error.

## Sprint 1: Backend (Sep 25 to Oct 9)
| # | Date | Deliverable | Status |
|---|---|---|---|
| 1 | Fri Sep 25 | Repo, branches, Express, `GET /health` | ✅ Done |
| bonus | Sat Sep 26 | `npm start` script (`feature/start-script`, full PR flow) | ⬜ |
| 2 | Mon Sep 28 | SQLite schema + `db.js` module | ⬜ |
| 3 | Tue Sep 29 | `POST /tasks` with validation | ⬜ |
| 4 | Wed Sep 30 | `GET /tasks`, `GET /tasks/:id` (404 handling) | ⬜ |
| 5 | Thu Oct 1 | `PATCH /tasks/:id`, `DELETE /tasks/:id` | ⬜ |
| 6 | Fri Oct 2 | Centralized error-handling middleware | ⬜ |
| 7 | Mon Oct 5 | Integration tests (part 1) | ⬜ |
| 8 | Tue Oct 6 | Integration tests (part 2) | ⬜ |
| 9 | Wed Oct 7 | Filtering (`?status=`) + pagination | ⬜ |
| 10 | Thu Oct 8 | README, cleanup, sprint review | ⬜ |

## Sprint 2: Frontend + Deploy (Oct 12 to Oct 23)
Rule: functional, not pretty. No UI libraries, no animations.

| # | Date | Deliverable | Status |
|---|---|---|---|
| 11 | Mon Oct 12 | Vite + React setup, CORS on API, list tasks | ⬜ |
| 12 | Tue Oct 13 | Create-task form (show API validation errors) | ⬜ |
| 13 | Wed Oct 14 | Change status + delete | ⬜ |
| 14 | Thu Oct 15 | Loading/error states, status filter | ⬜ |
| 15 | Fri Oct 16 | Basic component tests | ⬜ |
| 16 | Mon Oct 19 | Client wired to API, README update | ⬜ |
| 17-18 | Tue-Wed Oct 20-21 | Deploy API + client, verify live links | ⬜ |
| 19-20 | Thu-Fri Oct 22-23 | Buffer, polish, final review | ⬜ |

## Stretch goals (backend only)
- API-key auth middleware
- Rate limiting
- OpenAPI docs

## Status (update after every session)
- **Last completed:** Session 1 (repo, branching flow, `GET /health` verified with curl)
- **Next up:** Sat: `npm start` script. Mon: Session 2 (SQLite schema + `db.js`)
- **Blockers:** none

## Decisions log
- SQLite chosen over Mongo on purpose: practice relational data modeling.
- API is finished and tested before any frontend work starts.
- PR merge style: _(decide and note here: merge commit / squash / rebase)_

## Lessons learned
- Push `dev` to remote *before* branching `feature/*` off it.
- `curl` needs the server running in another terminal first.
- Deleting a merged branch is safe: the commits live on in `dev` and the PR.
