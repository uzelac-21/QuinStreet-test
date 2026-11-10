# HomeBuddy QA – Playwright tests

Automated tests for the HomeBuddy staging site (https://hb-test.stage.sirenltd.dev/), part of a QA Engineer take-home assignment.

Author: Aleksandar Uzelac

## Tests

| File | What it checks |
|------|----------------|
| `complete-the-wizard-with-valid-info.spec.ts` | Happy path: ZIP `10001`, through the whole wizard, ends on the thank-you screen. |
| `invalid-zip.spec.ts` | An invalid ZIP (`1234`) shows the error "The ZIP Code must be 5 digits with no spaces". |


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
