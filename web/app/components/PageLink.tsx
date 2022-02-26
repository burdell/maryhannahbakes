import { NavLink, NavLinkProps, useMatch } from 'react-router-dom'

export function PageLink({
  children,
  ...props
}: Omit<NavLinkProps, 'to'> & { to: string }) {
  const match = useMatch(props.to)
  return (
    <NavLink {...props}>
      <div
        className={`uppercase mx-6 text-lg text-left text-slate-00 font-light hover:text-yellow-600 transition-colors ${
          match
            ? 'border-b-2 border-yellow-600'
            : 'border-b-2 border-transparent'
        }`}
      >
        {children}
      </div>
    </NavLink>
  )
}
