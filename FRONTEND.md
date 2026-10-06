# Frontend contribution

React enhances navigation and team biographies through src/website.jsx. All other sections stay in index.html so team content updates are preserved. The HTML also provides a readable fallback when JavaScript is disabled.

## Changes

- React navigation indicates the current section and supports anchor links.
- Each team biography can be expanded or collapsed independently.
- Header, Home, About, Footer, and all original content are preserved.
- Documents, presentations, glossary, references, and footer links remain unchanged by React.

Buttons use React Native Pressable and Text via React Native Web. Semantic HTML provides website structure. This frontend contribution does not select the final mobile application framework.

## Build and preview

Requires Node.js 22.12+ and pnpm 10. From this repository, run:

    pnpm install --frozen-lockfile
    pnpm build
    python -m http.server 8041 --bind 127.0.0.1

Open http://127.0.0.1:8041/ in a regular browser. Edit content in index.html, interactions in src/website.jsx, and styling in style.css. Rebuild JavaScript changes, then refresh.

Commit assets/frontend/website.js with source changes for static GitHub Pages compatibility. The build replaces only assets/frontend/. Keep dependency license comments intact. GitHub Actions checks the bundle but does not deploy.

## Browser support

The PDF embed requires a browser with a PDF viewer. Google Slides requires network access. Embedded in-app browsers may not support PDF display, external frames, or new-tab links. Use regular Edge or Chrome to review the original viewers. Website code cannot enable a host browser feature that is disabled.