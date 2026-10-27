# Official Soul Studio website

Static website for Soul Studio's iPhone beta. Primary address: https://soul-studio-official.pages.dev/ . The older GitHub Pages address remains a compatibility redirect.

Only public website files belong in the public repository. Never publish application source, credentials, user projects or personal screenshots here. IPA downloads stay on MediaFire.

## Release update

1. Finish and verify a real iPhone archive. Preserve earlier releases.
2. Upload the final unsigned IPA to the approved MediaFire account, obtain the real share URL, download it back and compare SHA-256 and size.
3. Update `release.json`, all three fallback download anchors, version/revision/date, filename/size/SHA and release notes together.
4. Capture the app using synthetic examples. Replace relevant screenshots and the silent native tour when behavior changes. Do not use private messages, Photos or account details in public media.
5. Package files at the ZIP root, deploy to the existing Cloudflare Pages project on its Free plan and verify rendered public pages, download links, metadata, images and video playback. `_headers` applies on Cloudflare Pages.
6. Synchronize the public website-only GitHub compatibility copy, retaining its canonical link and redirect to the clean address.

No advertising scripts, analytics SDKs, contact forms, external video embeds or login is used on this static site. Playback starts only when the visitor presses Play. Security headers restrict resource origins and framing; they do not guarantee security of third-party downloads or linked services.
