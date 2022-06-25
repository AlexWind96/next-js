import { AppShell } from '@mantine/core'
import React from 'react'

import { Footer } from './Footer'
import { HomeHeader } from './HomeHeader'

const links = [
  {
    to: '/home',
    label: 'Home',
  },
  {
    to: '/contacts',
    label: 'Contacts',
  },
  {
    to: '/about',
    label: 'About',
  },
]

export function HomeLayout({ children }) {
  return (
    <AppShell
      padding={'sm'}
      header={<HomeHeader links={links} />}
      footer={<Footer links={links} />}
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
