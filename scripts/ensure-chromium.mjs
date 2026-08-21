// ============================================================
// ENSURE CHROMIUM
// Runs before the build. Puppeteer normally downloads Chromium in a
// postinstall script, but that does not reliably happen in CI: npm may
// run with --ignore-scripts, or in production mode where
// devDependencies are skipped. When it doesn't, prerendering silently
// degrades to a plain SPA build.
//
// `puppeteer browsers install chrome` is idempotent and returns almost
// immediately when the browser is already cached, so this just always
// runs it rather than trying to detect the binary first —
// puppeteer.executablePath() reports a path even when nothing has been
// downloaded, which makes it an unreliable check.
//
// This never fails the build. If the download can't happen, the
// prerender step says so and leaves a valid SPA build in place.
// ============================================================

import { execFileSync } from 'node:child_process'

try {
  await import('puppeteer')
} catch {
  console.log('[chromium] puppeteer is not installed; skipping.')
  process.exit(0)
}

try {
  execFileSync('npx', ['puppeteer', 'browsers', 'install', 'chrome'], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })
} catch (err) {
  console.warn(`[chromium] install failed: ${err.message.split('\n')[0]}`)
  console.warn('[chromium] continuing; the prerender step will report whether it could launch.')
}
