import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
}

export const Footer: React.VFC<Props> = ({ className }) => {
  return (
    <footer className={clsx('flex justify-center items-center p-4', className)}>
      <a
        href="https://github.com/yicru/nextjs-boilerplate.git"
        className="text-sm bg-black text-white py-2 px-4 rounded-full"
      >
        GitHub Repository
      </a>
    </footer>
  )
}
