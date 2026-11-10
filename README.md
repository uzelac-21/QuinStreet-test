# HomeBuddy QA – Playwright tests

Automated tests for the HomeBuddy staging site (https://hb-test.stage.sirenltd.dev/), part of a QA Engineer take-home assignment.

Author: Aleksandar Uzelac

## Tests

| File | What it checks |
|------|----------------|
| `tests/invalid-zip-simple.spec.ts` | An invalid ZIP (`1234`) shows the error "The ZIP Code must be 5 digits with no spaces". |
| `tests/happy-flow-simple.spec.ts` | Happy path: ZIP `10001`, through the whole wizard, ends on the thank-you screen. |
| `tests/tc12-invalid-zip.spec.ts` | Extended version of the invalid ZIP case: `ABCDE`, `1234` (format error), `00000`, `99999` (out-of-area message, API `isOutOfArea: true`), and `10001` as a positive control. |

## Setup

Requires Node.js 18+.

```bash
npm install
npx playwright install chromium
```

## Run

```bash
npx playwright test                                   # all tests
npx playwright test tests/invalid-zip-simple.spec.ts  # one file
npx playwright test --headed                          # watch the browser
npx playwright show-report                            # HTML report after a run
```
