import { HomeLayout } from '@/components/layouts'
import { Title } from '@mantine/core'
import Head from 'next/head'

export default function Index() {
  return (
    <HomeLayout>
      <Head>
        <title>Index page | Next.js</title>
      </Head>
      <Title>Hello</Title>
    </HomeLayout>
  )
}
