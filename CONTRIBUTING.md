# Contributing

Thanks for your interest in improving **@freakycoder/react-native-header-view**!

## What this package is

This package is a thin **barrel** that re-exports six standalone React Native
header components, each published as its own npm package:

| Export           | Source package                 |
| ---------------- | ------------------------------ |
| `GorgeousHeader` | `react-native-gorgeous-header` |
| `AppleHeader`    | `react-native-apple-header`    |
| `ModernHeader`   | `react-native-modern-header`   |
| `ClassicHeader`  | `react-native-classic-header`  |
| `ProfileHeader`  | `react-native-profile-header`  |
| `ElegantHeader`  | `react-native-elegant-header`  |

There is **no UI code** in this repo — `lib/index.js` is the entire library.
A bug in a header's _rendering or props_ almost always belongs in that header's
own repository. Issues here should be about the aggregator: missing/incorrect
exports, types, docs, packaging, or peer-dependency metadata.

## Development setup

```bash
git clone https://github.com/kuraydev/react-native-header-view.git
cd react-native-header-view
npm install --legacy-peer-deps
```

The sub-packages are declared as **optional** peer dependencies and are not
required to develop or test the barrel — the test suite mocks them.

## Scripts

| Script                 | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run typecheck`    | `tsc --noEmit` against the shipped type defs |
| `npm run lint`         | ESLint (flat config)                         |
| `npm run format`       | Prettier write                               |
| `npm run format:check` | Prettier check (CI gate)                     |
| `npm test`             | Jest contract tests                          |

## Guidelines

- **Do not rename or remove any of the six exports.** Doing so breaks every
  dependent. Keep `GorgeousHeader`, `AppleHeader`, `ModernHeader`,
  `ClassicHeader`, `ProfileHeader`, and `ElegantHeader`.
- **Do not change the npm package name/scope** (`@freakycoder/...`).
- Preserve prop names and runtime defaults. Fix docs to match the code, not the
  reverse, unless it is a genuine bug.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit
  messages.
- Add a line under `## [Unreleased]` in `CHANGELOG.md` for any user-facing change.

## Submitting changes

1. Fork and create a feature branch.
2. Make your change, keeping the checks above green.
3. Open a PR using the template. Link any issues it closes.
