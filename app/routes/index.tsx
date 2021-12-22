import { Link, LinkProps } from 'react-router-dom'

function PageLink({ children, ...props }: LinkProps) {
  return (
    <div>
      <div className="uppercase mx-2 text-2xl border-2 border-solid border-slate-700 px-10 py-2 mb-6 text-center text-slate-00 font-light hover:text-yellow-600 hover:border-yellow-600 transition-colors">
        <Link {...props}>{children}</Link>
      </div>
    </div>
  )
}

export default function Index() {
  return (
    <div className="flex h-screen items-center flex-col sm:justify-center md:-mt-8 mt-10">
      <div className="w-full">
        <div className="bg-[url('/logo-med.png')] h-logoHeight bg-no-repeat bg-contain bg-center" />
        <div className="font-serif flex-1 flex justify-center mt-14 flex-col sm:flex-row">
          <PageLink to="/about">About</PageLink>
          <PageLink to="/bakes">Bakes</PageLink>
          <PageLink to="/events">Events</PageLink>
        </div>
      </div>
    </div>
  )
}
