import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix'
import type { MetaFunction } from 'remix'

import tailwind from './tailwind.css'
import { getPages, PageDataProvider } from '~/data'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.png',
      type: 'image/png',
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css',
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Spectral:wght@300;400&display=swap',
    },
    { rel: 'stylesheet', href: tailwind },
  ]
}
export const meta: MetaFunction = () => {
  return { title: 'Mary Hannah Bakes' }
}

export async function loader() {
  const pages = await getPages()
  return { pages }
}
type LoaderData = AsyncReturnType<typeof loader>

export default function App() {
  let { pages } = useLoaderData<LoaderData>()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="max-w-screen-xl my-0 mx-auto">
        <PageDataProvider value={{ pages }}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </PageDataProvider>
      </body>
    </html>
  )
}
