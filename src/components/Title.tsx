import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
}

export const Title: React.VFC<Props> = ({ className }) => {
  return (
    <>
      <h1 className={clsx('title font-bold', className)}>
        Next.js Boilerplate
      </h1>
      <style jsx>{`
        .title {
          font-size: 5vw;
        }
      `}</style>
    </>
  )
}
