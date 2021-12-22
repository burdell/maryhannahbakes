import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'

import tailwind from './tailwind.css'

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
        'https://fonts.googleapis.com/css2?family=Poppins&family=Spectral:wght@300;400&display=swap',
    },
    { rel: 'stylesheet', href: tailwind },
  ]
}
export const meta: MetaFunction = () => {
  return { title: 'Mary Hannah Bakes' }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
