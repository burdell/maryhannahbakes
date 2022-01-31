import { BlockContentProps } from '@sanity/block-content-to-react'

type SanityDocument = {
  _id: string
}

export type Page = SanityDocument & {
  slug: string
  title: string
  text: BlockContentProps
}
