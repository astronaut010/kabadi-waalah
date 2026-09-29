<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- Waste dataset lives in `src/data/wastes.ts` as typed static data (20 items × 3 pathways, EN/TA/HI) — no backend is needed for an MVP lookup tool.
- UI translations live in `src/lib/i18n.tsx` with a React context + localStorage; every user-facing string goes through `t()` so all three languages stay in sync.
- Camera identification runs in the server function `src/lib/scan.functions.ts` against the Lovable AI Gateway Responses endpoint, so the API key never reaches the browser.
- Category illustrations are shared per material category via `src/lib/category-images.ts` to keep the bundle small and the palette consistent.
