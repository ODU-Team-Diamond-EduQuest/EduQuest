# EduQuest browser frontend prototype

React and React Native Web provide the interface. Vite builds it, and pnpm manages dependencies. It runs in a browser on Windows; it is not a packaged Windows app or configured native mobile build.

This folder extends the existing local prototype. Original team website files and their build configuration are unchanged. The two builds have separate outputs.

## Run

Requires Node.js 22.12+ and pnpm 10. From `frontend`:

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm build
```

From the repository root:

```sh
python -m http.server 8043 --bind 127.0.0.1
```

Open `http://127.0.0.1:8043/frontend/app/`, or use the website's **Try Prototype** button. The prototype build writes only `frontend/app/`. Commit that output with source changes so static GitHub Pages hosting can serve it. Use `pnpm dev` from `frontend` for development. GitHub Actions checks both builds, runs the prototype model tests, and verifies the committed bundles.

## Features

- Parent settings: correct answers per reward, reward minutes, base allowance, bonus cap, and subject.
- Child questions: answer choices, reading passages, feedback, explanations, Next Question, and progress toward the reward.
- Only correct answers advance the goal. Repeated submissions cannot award twice.
- Learning progress: attempted/correct answers by subject, accuracy, earned minutes, timestamped activity, and Today/Last 7 days/All filters.
- Back to Dashboard navigation and explicit empty/completed states.
- Existing custom questions, settings validation, and reset confirmation remain.

## Backend handoff

State is in memory and resets on refresh. Period filters cover only available session attempts. Rewards are simulated within EduQuest. There is no backend, database connection, authentication, device blocking, or usage tracking.

The backend must provide authenticated profiles, questions, parent settings, authoritative grading/rewards, and persisted progress. Demo attempts record the timestamp and actual reward amount, preserving earned totals when settings change. Browser calculations must not become authoritative balances.

## Slide ownership

Priyaja owns frontend code and the frontend technology description. Coordinate the browser frontend and API contract with Luke's component/architecture slides and Sincere's backend. Describe this implementation as React Native Web in a browser on Windows. A native mobile framework has not been configured.
