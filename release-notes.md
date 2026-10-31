# Soul Studio 5.10.2 — second layout revision

31 October 2026 · iPhone beta · Revision 2

This second layout revision gives the preview more space and puts a shorter full-width controls panel below the timeline.

- **Larger viewer, closer controls.** The preview, timeline and tools now use proportions closer to the supplied editing reference. The normal panel stays the same height across Transform, Effects, AI, Sound and Speed. Expand and Compact are available in its three-dot menu.
- **One tool row.** Back, tool tabs and clip actions share a compact header. The duplicate layer-title row is removed. A Studio menu keeps every workspace available while clip tools are open; the normal bottom tabs return when tools close.
- **Flat adjustments.** Transform and effect rows use aligned labels, exact real-unit values and rulers, with animation controls in a fixed left rail. Effect sections form a continuous stack, and the first effect opens on entry.
- **Predictable dismissal.** Closing clip tools cancels any queued presentation, so a late open cannot reopen the dismissed panel.
- **Visible layers.** The timeline retains permanent eye/lock controls, vertical finger scrolling, horizontal scrubbing and keyframes. The approved fixed add tray stays available.

Physical iPhone gestures, keyboard/VoiceOver behavior and sustained performance remain acceptance work. This is a layout revision; no new AI model, dependency, backend rule, rendering feature or 3D sample is introduced. The first5.10.2 fixes below remain included.

## Included from the first 5.10.2 release

This update focuses on usable clip controls, a quieter Color workspace and clearer conversations.

- **More room for adjustments.** Transform, Effects, AI, Sound and Speed have a larger panel, with an explicit Expand/Compact control. Tool tabs remain pinned while adjustments scroll independently. Touch targets are larger, and exact-value rows adapt to accessibility text sizes. The panel adapts to available phone height while retaining the main composition preview and selected timeline row. The expanded inspector also offers a compact preview menu for viewing options.
- **A more focused editing workspace.** When clip tools are open, compact project/playback controls give more space to the preview and adjustments. Composition details and preview quality are in the viewer menu. Effect stacks put Add, Search, Looks and bypass above compact cards, with real parameter units and fixed keyframe controls beside the adjustment rulers. Soul Studio’s AI, Draw and other tools remain available.
- **Reliable effect copies.** Add or duplicate visual effects with independent values and keyframes. Undo and reopening the project preserve repeated filter instances; the128-effect limit remains.
- **A simpler Color tab.** Scopes are removed. Adjusted/Original preview, Primary, Wheels, Curves, Looks, grade copy/paste and reset remain available.
- **Refined Messages.** Inbox spacing, conversation headers, reply quotes, bubbles and the composer have clearer hierarchy and consistent controls. A changed or invalid attachment no longer keeps the previous decoded photo visible. The Inbox account subtitle uses only the signed-in account’s own username.
- **Restrained motion.** Short new-message transitions apply only to small live arrivals while the reader is already at the latest messages. Loading history, searching and bulk reconnects stay still. Reduce Motion and Optimize Mode disable decorative movement. Animation does not force the conversation to scroll or change measured message heights.

The existing Community image/video feed, local editing, fixed Media/Audio/Shape/Text/Elements tray, vertical timeline scrolling and left-side layer visibility/lock controls remain included. Native Soul project files/links and portable effect packs remain supported. Alight Motion project QR/XML import remains removed.

**Unsigned arm64 IPA for iOS 26+. Sign before installing.**

Native captures and bounded automated checks support this update; they do not prove every project, effect stack or physical-phone frame rate. Physical-device gestures, keyboard/VoiceOver behavior, hardware audio handling and sustained large-project performance still require acceptance. Public captures use original demo artwork and fictional conversations, not private messages or real user projects.

No backend rule, index, trusted-cleanup, paid service, dependency or 3D sample change is part of 5.10.2. Community keeps existing verification and cloud safeguards. The revised trusted cleanup cascade remains tested locally but not deployed; removed new Community posts can retain reserved storage until owner maintenance is updated.

Existing limits remain: partial translation coverage; provider-restricted media downloads; no full native Spotify Free streaming; optional phone image models require a model download and compatible hardware; video generation uses an optional configured computer workflow. Terminated-app message notifications require APNs/server integration. Fit preserves the whole composition; Fill may crop only the viewer and does not change exported frames.
