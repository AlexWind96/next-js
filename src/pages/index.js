import { HomeLayout } from '@/components/layouts'
import { Title } from '@mantine/core'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Index page | Next.js</title>
      </Head>
      <Title>Home page</Title>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
