import { HomeLayout } from '@/components/layouts'
import { List, Title } from '@mantine/core'
import Head from 'next/head'
import Link from 'next/link'

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts | Next.js</title>
      </Head>

      <section>
        <Title order={'3'}>Posts</Title>
        <List>
          {posts.map(({ id, title, author }) => (
            <List.Item key={id}>
              <Link href={`/posts/${encodeURIComponent(id)}`}>
                <a>
                  {title} | {author}
                </a>
              </Link>
              <br />
            </List.Item>
          ))}
        </List>
      </section>
    </>
  )
}

export async function getServerSideProps({ res }) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const response = await fetch('http://localhost:4200/posts')
  const data = await response.json()
  return {
    props: {
      posts: data,
    },
  }
}

Posts.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
