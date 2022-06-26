import { HomeLayout } from '@/components/layouts'
import { Text } from '@mantine/core'
import Error from 'next/error'
import Head from 'next/head'

export default function Post({ data, errorCode }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <Text>{data.title}</Text>
      <Text>{data.author}</Text>
    </>
  )
}

export async function getServerSideProps({ query, res }) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const response = await fetch(`${process.env.BASE_API}/posts/${query.id}`)
  const errorCode = response.ok ? false : response.statusCode
  const data = await response.json()
  return {
    props: {
      errorCode,
      data,
    },
  }
}

Post.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
