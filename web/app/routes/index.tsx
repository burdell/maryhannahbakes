import { Link, LinkProps } from 'react-router-dom'

import { usePageData } from '~/data'

function PageLink({ children, ...props }: LinkProps) {
  return (
    <div>
      <Link {...props}>
        <div className="border rounded-sm border-solid border-slate-700 mx-2 text-2xl px-8 py-2 mb-6 text-center text-slate-00 font-light hover:text-yellow-600 hover:border-yellow-600 transition-colors">
          {children}
        </div>
      </Link>
    </div>
  )
}

export default function Index() {
  let { pages } = usePageData()
  return (
    <div className="flex h-screen items-center flex-col sm:justify-center md:-mt-8">
      <div className="w-full">
        <div className="bg-[url('/logo-med.png')] h-logoHeight bg-no-repeat bg-contain bg-center" />
        <div className="flex-1 flex justify-center mt-14 flex-col sm:flex-row">
          {pages.map((page) => (
            <PageLink key={page.slug} to={page.slug}>
              {page.title}
            </PageLink>
          ))}
        </div>
      </div>
    </div>
  )
}
