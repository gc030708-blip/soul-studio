# Soul Studio 5.10.1 — third beta revision

This update keeps the approved compact five-tab add panel and focuses on editing reliability, optional media replacement, sound and messaging.

## Changes

- Shapes use synchronous cached vector silhouettes and eager page rows, so the first page no longer depends on a scroll to appear. The Pie silhouette also has a proper cutout rather than duplicating Circle.
- Timeline layers scroll vertically with a finger. The Top layers and Bottom layers buttons are removed. Direction-aware trim gestures yield vertical swipes to the layer list, preserve long-press reorder and clean up interrupted gestures.
- The main clip inspector keeps Transform, Effects and AI controls without a second preview. The editor's main preview and the dedicated Typography editing preview remain. Text entry in the main inspector is compact rather than a second large styled view.
- The app soundtrack is the bundled Soul Studio Theme with a volume slider and no track selector. It pauses in the editor, during My Music listening, during recording and when the app is inactive. Personal imported listening stays separate from project exports.
- Intro sound is scheduled independently from visual animation and haptics, once per launch, with the SFX preference and hardware Silent setting respected.
- Messages use a compact inbox, cleaner thread spacing, grouped sender avatars/timestamps and visible New message / Create group actions. Existing attachments, replies, search, retry and group management remain.
- Alight scene XML can be opened without original media. Missing slots use explicitly labelled local image cards or silent audio. Choose replacements from Photos or Files, or provide a local ZIP containing the XML and matching media. Editable layer timing and basic transform tracks remain; original media is optional.
- Portable project validation now accepts the same existing, acyclic layer parents as the editor, including null objects. Alight import uses the package-compatible 500-layer cap. Missing or cyclic parents remain rejected.
- The official website includes more real native screens, a user-controlled screen-tour video, strict static resource/security headers and validated release metadata. The app's About link now goes directly to the official Cloudflare address.

## Installation and scope

The IPA is an unsigned arm64 iPhone build for iOS 26 or newer. A compatible signing tool is required before installation. This is an actively developed beta; simulator and package checks do not replace physical iPhone acceptance. No zero-bug or universal import/download/AI accuracy claim is made.

Alight compatibility remains a layout beta. Proprietary effects, masks, custom geometry, fonts, nested compositing and exact easing require review and may need rebuilding. A QR holds a hosted package address, not the actual media. Soul Studio can locally review supported official Alight QR links and open the official provider handoff; direct retrieval of proprietary hosted QR package media is not implemented. Local XML/media ZIP packages are supported within documented safety limits. Replacement media is fitted to the existing layer duration, which can change playback speed; adjust timing after import. Replacing a shared video with a still image silences its separate audio-only layers. The creator's unavailable media cannot be recreated by importing XML alone.

The app keeps cloud sharing safeguards. No Firebase rule changes, billing, domain purchases, new model downloads or third-party AI uploads were performed for this revision. Website and IPA publication use the already approved public destinations; application source remains private.

Physical acceptance still includes actual finger gestures on several screen sizes, hardware Silent switch/headphone/interruption behavior, Photos/iCloud providers, authenticated live messaging and large projects. Previous limitations around partial translation coverage, provider-restricted downloader links, Spotify Free streaming and phone video generation remain as documented in earlier release notes.

## Primary references

- [Apple gesture recognizer interoperability](https://developer.apple.com/documentation/SwiftUI/UIGestureRecognizerRepresentable)
- [Apple simultaneous gestures](https://developer.apple.com/documentation/swiftui/view/simultaneousgesture(_:including:))
- [Apple ambient audio behavior](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/ambient)
- [Alight Motion project package export/import](https://support.alightmotion.com/hc/en-us/articles/13724965664785-How-do-I-back-up-my-projects)
- [Alight Motion iOS package handoff](https://support.alightmotion.com/hc/en-us/articles/16175375909905-I-can-t-import-my-project-package-on-iOS-What-should-I-do)
- [Cloudflare static asset limits](https://developers.cloudflare.com/pages/platform/limits/)

Verification counts, artifact fingerprints and publication evidence are supplied separately after the final build.
