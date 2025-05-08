'use client'

import { useContext } from 'react'
import clsx from 'clsx'
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext"

import {themedBg} from '../utils/themeClass'

const BlogListSkeleton = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={clsx(
            'card w-full shadow-xl',
            themedBg(theme, 'bg-gray-800', 'bg-white')
          )}
        >
          <div
            className={clsx(
              'skeleton h-48 w-full animate-pulse',
              themedBg(theme, 'bg-gray-700', 'bg-gray-200')
            )}
          ></div>
          <div className="card-body">
            <div
              className={clsx(
                'skeleton h-6 w-3/4 animate-pulse',
                themedBg(theme, 'bg-gray-700', 'bg-gray-200')
              )}
            ></div>
            <div
              className={clsx(
                'skeleton h-4 w-1/4 mt-2 animate-pulse',
                themedBg(theme, 'bg-gray-700', 'bg-gray-200')
              )}
            ></div>
            <div
              className={clsx(
                'skeleton h-4 w-full mt-2 animate-pulse',
                themedBg(theme, 'bg-gray-700', 'bg-gray-200')
              )}
            ></div>
            <div
              className={clsx(
                'skeleton h-4 w-2/3 mt-2 animate-pulse',
                themedBg(theme, 'bg-gray-700', 'bg-gray-200')
              )}
            ></div>
            <div className="flex justify-between items-center mt-4">
              <div
                className={clsx(
                  'skeleton h-8 w-24 animate-pulse',
                  themedBg(theme, 'bg-gray-700', 'bg-gray-200')
                )}
              ></div>
              <div
                className={clsx(
                  'skeleton h-8 w-24 animate-pulse',
                  themedBg(theme, 'bg-gray-700', 'bg-gray-200')
                )}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default BlogListSkeleton