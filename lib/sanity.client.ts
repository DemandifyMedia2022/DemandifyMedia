import { createClient } from 'next-sanity'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-01'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

if (!projectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to your .env.local and restart the dev server.'
  )
}

export const client = createClient({ projectId, dataset, apiVersion, useCdn: false })
