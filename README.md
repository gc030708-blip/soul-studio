# Soul Studio website

Official project website for the Soul Studio iPhone beta.

- Website: https://soul-studio-official.pages.dev/
- Distribution: verified IPA releases on MediaFire.
- Hosting: Cloudflare Pages, free static direct upload. GitHub retains a compatibility address and website-only source.

This repository contains website files only. The iOS application's source, user files, signing credentials and IPA binaries are not included.

## Updating a release

Build and verify the iPhone release, upload to MediaFire, download it back and compare its SHA-256. Only then update `release.json`, every fallback download anchor in `index.html`, release notes, requirements and native screenshots. Never advertise unfinished features. Test keyboard navigation, mobile layout and download destinations before publishing.

The website has no advertising trackers, accounts, forms or third-party JavaScript dependencies.
