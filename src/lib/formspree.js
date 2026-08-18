// ============================================================
// FORMSPREE
// Lets the consultation and attorney-coverage forms submit
// directly to an inbox instead of relying on the visitor's own
// email client. Inert until a real form ID is supplied — see
// .env.example. This file must never be edited to hardcode a real
// ID; that value is environment-specific and belongs in .env, not
// source control.
// ============================================================

const CONSULTATION_FORM_ID = import.meta.env.VITE_FORMSPREE_CONSULTATION_ID
const ATTORNEY_FORM_ID = import.meta.env.VITE_FORMSPREE_ATTORNEY_ID

export const consultationFormConfigured = Boolean(CONSULTATION_FORM_ID)
export const attorneyFormConfigured = Boolean(ATTORNEY_FORM_ID)

async function post(formId, formData) {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    return response.ok
  } catch {
    return false
  }
}

/** Submits the consultation form's FormData directly to Formspree. Resolves false on any failure (network, rejected, not configured) — callers should have already checked consultationFormConfigured. */
export function submitConsultation(formData) {
  return post(CONSULTATION_FORM_ID, formData)
}

/** Submits the attorney coverage form's FormData directly to Formspree. Resolves false on any failure (network, rejected, not configured) — callers should have already checked attorneyFormConfigured. */
export function submitAttorneyCoverage(formData) {
  return post(ATTORNEY_FORM_ID, formData)
}
