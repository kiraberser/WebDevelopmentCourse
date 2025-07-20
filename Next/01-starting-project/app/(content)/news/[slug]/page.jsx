import { DUMMY_NEWS } from '@/data/dummy-news'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

function Page({ params }) {
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.slug)

  if (!newsItem) {
    notFound()
  }

  return (
    <article className='article'>
      <header>
        <Link href={`/news/${newsItem.slug}/image/`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200}/>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}

export default Page
