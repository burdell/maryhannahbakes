import { Link, LinkProps } from 'react-router-dom'
import { LinksFunction, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

import { Header } from '~/components/Header'
import { PageContent } from '~/components/PageContent'
import { getPage } from '~/data'
import { Page } from '~/lib/sanity/types'
import { BlockContent } from '~/components/BlockContent'

import blockContent from '~/components/BlockContent/styles.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: blockContent }]
}

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.pageId
  if (!pageId) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  const page = await getPage(pageId)
  if (!page) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return page
}

export default function Index() {
  const page = useLoaderData<Page>()
  console.log('=== page', page)
  return (
    <div>
      <Header />
      <PageContent heading={page.title}>
        {page.text && <BlockContent blocks={page.text} />}
      </PageContent>
    </div>
  )
}
