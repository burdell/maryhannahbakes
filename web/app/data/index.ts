import { useContext, createContext } from 'react'

import { getClient } from '~/lib/sanity/getClient'
import type { Page, Bake } from '~/lib/sanity/types'

export async function getPages() {
  const pages = await getClient().fetch<Page[]>(
    `*[_type == "page"]{ _id, title, "slug": slug.current }`,
  )

  return pages
}

export async function getPage(pageId: string) {
  const query = `*[_type == "page" && slug.current == $pageId] { 
      title,
      "slug": slug.current,
      text,
      bakes[]->{
        _id,
        name,
        body,
        blurb,
        pictures[]{
          asset->{url, assetId},
        }
      }
    } | order(_updatedAt desc) [0]`

  const pageData = await getClient().fetch<Page>(query, { pageId })
  return pageData
}

export const PageContext = createContext<{ pages: Page[] } | undefined>(
  undefined,
)

const { Provider } = PageContext
export { Provider as PageDataProvider }

export function usePageData() {
  const data = useContext(PageContext)
  if (!data) {
    throw new Error('Used PageContext without a corresponding Provider')
  }

  return data
}

export async function getBakes() {
  const query =
    '*[_type == "bake"] { _id, name, body, pictures[]{ asset->{url, assetId} }, blurb, categories[]->{title, slug} } | order(_updatedAt desc)'

  const pageData = await getClient().fetch<Bake[]>(query, {})
  return pageData
}
