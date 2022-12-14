import { useEffect } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import HomeCell from 'src/components/HomeCell'

import './index.css'
import '../../index.css'

const HomePage = ({ appName }) => {
  return (
    <>
      <MetaTags title="One Labs" description="Dashboard" />
      <div className="navbar flex items-center justify-center">
        <img src="/logo_inverted.png" alt="logo" className="logoImg" />
        <p className="logoFont px-5 text-3xl text-white">One Labs</p>
      </div>
      <div className="flex gap-4">
        <div>
          <aside className="w-64" aria-label="Menu">
            <div className="light:bg-gray-800 min-h-screen overflow-y-auto rounded bg-gray-50 py-4 px-3">
              <ul className="space-y-2">
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                      appName === 'mintbase.near' || appName === undefined
                        ? 'bg-gray-700'
                        : ''
                    }`}
                    to={routes.app({ appName: 'mintbase.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://awesome-near.s3.amazonaws.com/mintbase.jpg"
                      alt="Mintbase"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${
                        appName === 'mintbase.near' || appName === undefined
                          ? 'text-white'
                          : 'text-stone-900 '
                      }`}
                    >
                      Mintbase
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                      appName === 'learnclub.near' ? 'bg-gray-700' : ''
                    }`}
                    to={routes.app({ appName: 'learnclub.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://awesome-near.s3.amazonaws.com/learn-near.jpg"
                      alt="Learn NEAR Club"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${
                        appName === 'learnclub.near'
                          ? 'text-white'
                          : 'text-stone-900 '
                      }`}
                    >
                      Learn NEAR Club
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                      appName === 'fewandfar.near' ? 'bg-gray-700' : ''
                    }`}
                    to={routes.app({ appName: 'fewandfar.near' })}
                  >
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://awesome-near.s3.amazonaws.com/few-and-far.jpg"
                      alt="Few and Far"
                    />
                    <span
                      className={`ml-3 flex-1 whitespace-nowrap hover:text-white ${
                        appName === 'fewandfar.near'
                          ? 'text-white'
                          : 'text-stone-900 '
                      }`}
                    >
                      Few and Far
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="flex-grow">
          <div className="p-4 pb-0">
            <HomeCell appName={appName || 'mintbase.near'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
