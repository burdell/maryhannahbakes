import { ReactNode } from 'react'

export function PageContent({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  return (
    <div>
      <div className="w-9/12 lg:w-1/2 m-auto">
        <h1 className="text-2xl mb-2">{heading}</h1>
        <div className=" font-serif">{children}</div>
      </div>
    </div>
  )
}
