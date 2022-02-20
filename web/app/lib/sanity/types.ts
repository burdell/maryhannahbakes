import { BlockContentProps } from '@sanity/block-content-to-react'

type SanityDocument = {
  _id: string
}

export type Page = SanityDocument & {
  slug: string
  title: string
  text: BlockContentProps
}

export type Picture = SanityDocument & {
  asset: {
    assetId: string
    url: string
  }
}

export type Bake = SanityDocument & {
  name: string
  pictures: Picture[]
  blurb: string
  body: BlockContentProps
}
