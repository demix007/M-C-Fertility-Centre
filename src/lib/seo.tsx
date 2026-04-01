import { useEffect } from 'react'

type SeoOptions = {
  title: string
  description?: string
  jsonLd?: Record<string, unknown>[]
  image?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSeo({ title, description, jsonLd, image }: SeoOptions) {
  useEffect(() => {
    document.title = title

    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
      upsertMeta('name', 'twitter:description', description)
    }
    upsertMeta('property', 'og:title', title)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    if (image) {
      upsertMeta('property', 'og:image', image)
      upsertMeta('name', 'twitter:image', image)
    }

    if (jsonLd && jsonLd.length > 0) {
      const id = 'mc-jsonld'
      const prev = document.getElementById(id)
      if (prev) prev.remove()

      const script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd)
      document.head.appendChild(script)
    } else {
      const prev = document.getElementById('mc-jsonld')
      if (prev) prev.remove()
    }
  }, [title, description, jsonLd, image])
}

