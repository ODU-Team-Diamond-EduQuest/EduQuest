# Frontend contribution

The existing website is rendered through React components in src/website.jsx. All project text, biographies, photos, and resource URLs come from index.html. That HTML remains readable when JavaScript is disabled.

## Components

- Header, Home, About, and Footer preserve the existing content.
- Navigation indicates the current section and supports anchor links.
- Team cards expand or collapse each complete biography.
- Documents and Presentation keep direct resource links above previews, with Show/Hide and Reload controls.

Buttons use React Native Pressable and Text through React Native Web, matching one of the frontend technologies in the presentation. Semantic HTML supplies headings, links, and document frames. JavaScript provides interactions. This does not select a final mobile-app framework.

No new project sections, dashboards, accounts, backend, or device controls are included. How EduQuest Works has been removed.

## Build and preview

Requires Node.js 22.12+ and pnpm 10. Run these commands from the repository:

    pnpm install --frozen-lockfile
    pnpm build
    python -m http.server 8041 --bind 127.0.0.1

Open http://127.0.0.1:8041/. Edit content in index.html, interactions in src/website.jsx, and styling in style.css. Rebuild after JavaScript changes and refresh.

The generated assets/frontend/website.js bundle is committed for static GitHub Pages compatibility. Include the rebuilt bundle with component changes. The build replaces only assets/frontend/. Preserve dependency license comments.

GitHub Actions rebuilds and checks the committed bundle. It does not deploy or change Pages settings.

## Review

Check navigation, keyboard access, independent biography controls, preview controls, direct resource links, and phone layouts. Disable JavaScript to verify original content remains available.

PDF support and Google Slides availability depend on the browser and network. React cannot guarantee external previews load; direct links remain available.
## Resource viewers

The outline uses PDF.js to render its original pages without a browser PDF plugin. Its standalone viewer is outline.html. The presentation preserves the original Google Slides embed, with an optional text fallback from the published deck (25 slides, captured September 28, 2026). Its standalone viewer is presentation.html. The saved fallback in src/presentation.json must be refreshed when the team changes the deck; the original embed remains live.

The build also creates viewer.js, shared chunks, and pdf.worker.min.mjs in assets/frontend/. Include the whole generated folder when committing a rebuild.
