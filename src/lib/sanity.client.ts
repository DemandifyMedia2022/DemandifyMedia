import { createClient } from 'next-sanity'

export const apiVersion: string = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-01'
export const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const envProjectId: string | undefined = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

if (!envProjectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to your .env.local and restart the dev server.'
  )
}

export const projectId: string = envProjectId

export const client = createClient({ projectId, dataset, apiVersion, useCdn: false })
