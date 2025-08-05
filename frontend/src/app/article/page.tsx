'use client'

import { Suspense } from 'react'
import NewsCard from './components/ArticleCard'
import { NewsItem } from './components/ArticleCard'
import LenisClient from '../providers/LenisScrollPRoviders'

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    image: '/Foto-berita.png',
  },
  {
    id: 2,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    image: '/Foto-berita.png',
  },
  {
    id: 3,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    image: '/Foto-berita.png',
  },
  {
    id: 4,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    image: '/Foto-berita.png',
  },
  {
    id: 5,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    image: '/Foto-berita.png',
  },
]

function NewsContent() {
  return (
    <div className="space-y-8 w-full max-w-6xl">
      {newsData.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  )
}

export default function NewsPage() {
  return (
    <LenisClient>
      <main className="px-4 py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-12 text-center">News</h1>
        <Suspense fallback={<div className="text-center py-20">Loading news...</div>}>
          <NewsContent />
        </Suspense>
      </main>
    </LenisClient>
  )
}
