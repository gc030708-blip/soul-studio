# Soul Studio website

Official project website for the Soul Studio iPhone beta.

- Website: https://gc030708-blip.github.io/soul-studio/
- Distribution: verified IPA releases on MediaFire.
- Hosting: GitHub Pages, static HTML/CSS/JavaScript, main branch / root.

This repository contains website files only. The iOS application's source, user files, signing credentials and IPA binaries are not included.

## Updating a release

Build and verify the iPhone release, upload to MediaFire, download it back and compare its SHA-256. Only then update `release.json`, every fallback download anchor in `index.html`, release notes, requirements and native screenshots. Never advertise unfinished features. Test keyboard navigation, mobile layout and download destinations before publishing.

The website has no advertising trackers, accounts, forms or third-party JavaScript dependencies.
