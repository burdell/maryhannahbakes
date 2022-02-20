import { NavLink, NavLinkProps, useMatch } from 'react-router-dom'

export function PageLink({
  children,
  ...props
}: Omit<NavLinkProps, 'to'> & { to: string }) {
  const match = useMatch(props.to)
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
