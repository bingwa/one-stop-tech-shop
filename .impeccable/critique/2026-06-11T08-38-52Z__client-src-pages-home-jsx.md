---
target: client/src/pages/Home.jsx
total_score: 29
p0_count: 0
p1_count: 2
timestamp: 2026-06-11T08-38-52Z
slug: client-src-pages-home-jsx
---
# Critique: client/src/pages/Home.jsx

## Design Health Score: 29/40 (Good)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover states clear; static page |
| 2 | Match System / Real World | 4 | Plain, locally-grounded copy |
| 3 | User Control and Freedom | 3 | Control lives in global nav |
| 4 | Consistency and Standards | 4 | Tight token system |
| 5 | Error Prevention | 3 | No forms; neutral |
| 6 | Recognition Rather Than Recall | 3 | Everything visible |
| 7 | Flexibility and Efficiency | 2 | Single linear path |
| 8 | Aesthetic and Minimalist Design | 2 | Weight hierarchy collapsed; template lane |
| 9 | Error Recovery | 2 | n/a |
| 10 | Help and Documentation | 3 | Phone + contact visible |

## Anti-Patterns Verdict
Partially AI-looking. Detector clean ([]). Tell is the neobrutalism-offset-shadow lane (second-order reflex) plus thinness (no proof). Reveal/motion/reduced-motion implemented correctly.

## What's Working
1. Copy: specific, no buzzwords, no em dashes.
2. Motion + a11y baseline correct (reveal enhances visible default, reduced-motion handled).
3. Hero 01/02/03 process earns its numbering (real sequence).

## Priority Issues
- [P1] Weight hierarchy collapsed — font-black on nearly everything. Fix: reserve black for headings/numerals, drop body weights. (/impeccable typeset)
- [P1] No proof for trust-conversion goal — no work, clients, metrics, team. Fix: add proof band. (/impeccable craft)
- [P2] Four identical service cards (absolute-ban tell). Fix: break rhythm, vary sizes/lead. (/impeccable layout)
- [P2] Headline overflow risk at xl:text-8xl + leading-0.96 in 1fr column; no text-balance. Fix: add balance, test 1024-1280, consider text-7xl. (/impeccable adapt)
- [P2] Neobrutalism template lane not distinctive. Fix: one signature move (photo/mark/accent). (/impeccable delight or bolder)

## Persona Red Flags
- Jordan: nothing between claim and CTA to build belief.
- Casey: tall hero before first service one-handed.
- Wanjiru (SME owner): no proof/pricing/timeline signal; leaves to compare.

## Minor Observations
- Two identical "Request a quote" labels; bottom one could be more specific.
- Contrast passes AA throughout.
- Scroll-ready class timing avoids flash.

## Questions
- Why does proof not exist if belief depends on it?
- What if one element were loudest instead of all at weight 900?
- What signature detail can't a competitor copy in an afternoon?
