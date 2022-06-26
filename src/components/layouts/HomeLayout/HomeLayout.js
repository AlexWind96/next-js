import { AppShell } from '@mantine/core'
import React from 'react'

import { HomeHeader } from './HomeHeader'

const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/profile',
    label: 'Profile',
  },
  {
    to: '/posts',
    label: 'Posts',
  },
]

export function HomeLayout({ children }) {
  return (
    <AppShell
      padding={'sm'}
      header={<HomeHeader links={links} />}
      // footer={<Footer links={links} />}
      styles={() => ({
        main: {
          minHeight: '100vh',
        },
      })}
    >
      {children}
    </AppShell>
  )
}
