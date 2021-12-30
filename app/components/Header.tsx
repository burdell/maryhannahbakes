import { NavLink, NavLinkProps, useMatch } from 'react-router-dom'

function PageLink({
  children,
  ...props
}: Omit<NavLinkProps, 'to'> & { to: string }) {
  const match = useMatch(props.to)
  console.log(match, props.to)
  return (
    <div>
      <NavLink {...props}>
        <div
          className={`uppercase mx-2 text-lg px-8 text-left text-slate-00 font-light hover:text-yellow-600 transition-colors ${
            match
              ? 'border-b-2 border-yellow-600'
              : 'border-b-2 border-transparent'
          }`}
        >
          {children}
        </div>
      </NavLink>
    </div>
  )
}

export function Header() {
  return (
    <div className="p-6 flex lg:flex-row flex-col items-center">
      <NavLink className="w-64 flex-initial mb-4 lg:mb-0" to="/">
        <div className="bg-[url('/logo-sm.png')] h-headerLogoHeight bg-no-repeat bg-contain bg-left" />
      </NavLink>
      <div className="flex flex-1 items-center">
        <PageLink to="/about">
          <div>About</div>
        </PageLink>
        <PageLink to="/bakes">
          <div>Bakes</div>
        </PageLink>
        <PageLink to="/events">
          <div>Events</div>
        </PageLink>
      </div>
    </div>
  )
}
