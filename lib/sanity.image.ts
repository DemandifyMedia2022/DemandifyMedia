import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from './sanity.client'

const builder = createImageUrlBuilder({ projectId, dataset })

export function urlForImage(source: Image | any) {
  try {
    return builder.image(source)
  } catch (e) {
    return null as any
  }
}
