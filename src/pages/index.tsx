import React from 'react'
import { NextPage } from 'next'
import { MainLayout } from '../layouts/MainLayout'
import { Title } from '../components/Title'

export const Home: NextPage = () => {
  return (
    <MainLayout className="flex justify-center items-center">
      <div>
        <Title className="text-gray-900" />
        <div className="mt-4">
          <p className="text-xl font-bold italic">This boilerplate includes</p>
          <ul className="list-disc list-inside mt-4 space-y-4 text-xs font-mono">
            <li>
              <a
                href="https://www.typescriptlang.org/"
                className="bg-gray-200 py-1 px-2 rounded"
              >
                Typescript
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                className="bg-gray-200 py-1 px-2 rounded"
              >
                TailwindCSS
              </a>
            </li>
            <li>
              <a
                href="https://eslint.org/"
                className="bg-gray-200 py-1 px-2 rounded"
              >
                ESLint
              </a>
            </li>
            <li>
              <a
                href="https://prettier.io/"
                className="bg-gray-200 py-1 px-2 rounded"
              >
                Prettier
              </a>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
