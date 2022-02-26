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

  const response: PageData = {
    page,
  }
  return response
}

export default function Index() {
  const { page } = useLoaderData<PageData>()

  return (
    <>
      <Header />
      <PageContent heading={page.title}>
        {page.text && <BlockContent blocks={page.text} />}
        {page.bakes && page.bakes.length > 0 ? (
          <div className="flex justify-center">
            <BakeList bakes={page.bakes} />
          </div>
        ) : null}
      </PageContent>
    </>
  )
}
