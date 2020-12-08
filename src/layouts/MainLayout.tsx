import React from 'react'
import { Footer } from '../components/Footer'
import clsx from 'clsx'

type Props = {
  className?: string
}

export const MainLayout: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className={clsx('flex-1 container mx-auto', className)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
