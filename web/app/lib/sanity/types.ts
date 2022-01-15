type SanityDocument = {
  _id: string
}

export type Page = SanityDocument & {
  slug: string
  title: string
}
