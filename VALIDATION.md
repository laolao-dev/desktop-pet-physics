# Validation boundary

Publication checks (2026-10-13 JST): Node.js 24; node --test test.mjs returned 2/2 passed (off-screen clamp and full landing trajectory within work area); node example.mjs completed. Full Electron application, controller, animation, artwork and desktop user acceptance: NOT_RUN/excluded. Source comes from the original RC1 physics component; original RC1 application is unchanged.

## Final archive checks — 2026-10-14

Node.js 24: node --test test.mjs: 2/2 passed; node example.mjs completed. No desktop application or GUI test.

All retained executable/Skill source bytes match the previously reviewed public commit. Python files were parsed without writing bytecode. The complete public file set, staged changes and release attachments are scanned for prohibited files, private paths, credentials and non-public links. No newly generated test data, dependency implementations or local logs are bundled. SHA256SUMS covers repository payload and the file manifest; the archive checksum is attached to the GitHub Release.

Only generic geometry/flight code, example, tests and documentation are released. The complete desktop application, four AI brand characters, animation assets, controller data and private configuration are excluded. GUI, animation quality and user acceptance are NOT_RUN. The installed RC1 application is outside this release.

The previous file manifest used Windows CRLF bytes for `LICENSE`. Those hashes were verified after exact LF-to-CRLF conversion. This release corrects the manifest to actual Git blob / ZIP bytes; source content is unchanged.
