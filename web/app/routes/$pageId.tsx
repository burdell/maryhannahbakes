import { Link, LinkProps } from 'react-router-dom'
import { LinksFunction, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import reachStyles from '@reach/dialog/styles.css'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Header } from '~/components/Header'
import { PageContent } from '~/components/PageContent'
import { getPage, getBakes } from '~/data'
import { Page, Bake } from '~/lib/sanity/types'
import { BlockContent } from '~/components/BlockContent'

import blockContent from '~/components/BlockContent/styles.css'
import { BakeList } from '~/components/BakeList'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: blockContent },
    { rel: 'stylesheet', href: reachStyles },
    { rel: 'stylesheet', href: carouselStyles },
  ]
}

type PageData = {
  page: Page
  bakes: Bake[] | undefined
}

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.pageId
  if (!pageId) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  const [page, bakes] = await Promise.all([
    getPage(pageId),
    pageId === 'bakes' ? getBakes() : undefined,
  ])
  if (!page) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  const response: PageData = {
    bakes,
    page,
  }
  return response
}

export default function Index() {
  const { page, bakes } = useLoaderData<PageData>()

  return (
    <div>
      <Header />
      <PageContent heading={page.title}>
        {page.text && <BlockContent blocks={page.text} />}
        {bakes && bakes.length > 0 ? (
          <div className="flex justify-center">
            <BakeList bakes={bakes} />
          </div>
        ) : null}
      </PageContent>
    </div>
  )
}
