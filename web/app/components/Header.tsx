import { NavLink, NavLinkProps, useMatch } from 'react-router-dom'

import { usePageData } from '~/data'
import { PageLink } from './PageLink'

export function Header() {
  const { pages } = usePageData()
  return (
    <div className="p-6 flex lg:flex-row flex-col items-center">
      <NavLink className="w-64 flex-initial mb-4 lg:mb-0" to="/">
        <div className="bg-[url('/logo-sm.png')] h-headerLogoHeight bg-no-repeat bg-contain bg-left" />
      </NavLink>
      <div className="flex flex-1 items-center">
        {pages.map((page) => (
          <PageLink key={page.slug} to={`/${page.slug}`}>
            <div>{page.title}</div>
          </PageLink>
        ))}
      </div>
    </div>
  )
}
