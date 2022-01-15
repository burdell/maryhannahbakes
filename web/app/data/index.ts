import { useContext, createContext } from 'react'

import { getClient } from '~/lib/sanity/getClient'
import type { Page } from '~/lib/sanity/types'

export async function getPages() {
  const pages = await getClient().fetch<Page[]>(
    `*[_type == "page"]{ _id, title, "slug": slug.current }`,
  )

  return pages
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
