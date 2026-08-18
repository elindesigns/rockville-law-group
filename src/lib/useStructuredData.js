import { useEffect } from 'react'

/**
 * Injects a JSON-LD <script> tag into <head> for the current page and
 * removes it on unmount, so route changes never stack multiple
 * conflicting structured-data blocks. Pass one schema object, or an
 * array of independent, self-contained schema objects (each keeps its
 * own @context — Google's parser accepts a top-level JSON-LD array).
 */
export default function useStructuredData(schema) {
  // Callers typically build `schema` fresh each render, so key the
  // effect off its serialized value rather than object identity —
  // otherwise the script tag would be torn down and rebuilt on every
  // render instead of only when the data actually changes.
  const json = schema ? JSON.stringify(schema) : null

  useEffect(() => {
    if (!json) return undefined

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = json
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [json])
}
