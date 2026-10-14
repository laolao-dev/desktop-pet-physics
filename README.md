# Desktop pet physics — v0.7.0 geometry and flight component

## FINAL ARCHIVE RELEASE — v0.7.0

This is the final archive of the currently completed public scope, dated 2026-10-14. It does not imply future maintenance, production maturity, commercial validation, or renewed development.

Only generic geometry/flight code, example, tests and documentation are released. The complete desktop application, four AI brand characters, animation assets, controller data and private configuration are excluded. GUI, animation quality and user acceptance are NOT_RUN. The installed RC1 application is outside this release.

See CHANGELOG.md, RELEASE_NOTES.md, RELEASE_ASSETS.md, PUBLIC_FILE_MANIFEST.json and SHA256SUMS for release scope, validation and integrity records.

A small geometry and flight component extracted from the local 0.7.0-rc1 desktop-pet application. It clamps a 220 × 240 window to a desktop work area and simulates gravity, edge collisions, damping and settling.

```sh
node --test test.mjs
node example.mjs
```

Requires Node.js 24 or newer, with built-in TypeScript stripping. Import `fit`, `bounds` and `flight` from physics.ts. `flight` updates the position object in place; pass elapsed seconds as `dt`.

This is **only a reusable code component**, not the complete desktop application or its stable binary. No controller, animation system or character assets are included. Brand artwork permissions and the full upstream dependency/material audit remain unresolved, so those assets are withheld. The original local RC1 and shortcuts remain unchanged.

Publication checks cover boundary clamping and a complete falling trajectory; see VALIDATION.md. They do not validate desktop GUI behavior, visual animation quality or user acceptance. Extremely small work areas and invalid dt/input values have limited handling. The upstream MIT notice is preserved in LICENSE; see THIRD_PARTY.md.

Questions and bug reports are welcome in [Issues](https://github.com/laolao-dev/desktop-pet-physics/issues).
