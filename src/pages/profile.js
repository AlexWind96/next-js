import { HomeLayout } from '@/components/layouts'
import { Loader, Text, Title } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import profilePic from '../../public/images/user.jpg'

export default function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loader />

  if (!data) return null

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Title order={1}>Profile</Title>
      <Text>{data.name}</Text>
      <Text>{data.birthday}</Text>
      <Text>{data.email}</Text>
      <Image src={profilePic} alt="Picture of the author" placeholder="blur" />
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
