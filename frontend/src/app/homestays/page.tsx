'use client'

import { Suspense, useEffect, useState } from 'react'
import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import HomestayCard from '@/components/HomestayCard'
import LenisClient from '../providers/LenisScrollPRoviders'

type Homestay = {
  id: string
  name: string
  image: string
  fasilitas: string[]
  mapsLink: string
  whatsapp: string
}

function HomestayContent() {
  const [homestays, setHomestays] = useState<Homestay[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homestays`)
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA DARI BACKEND:", data)
        if (Array.isArray(data)) {
          setHomestays(data)
        } else if (Array.isArray(data.data)) {
          setHomestays(data.data)
        } else {
          console.error('Format respons tidak sesuai:', data)
          setHomestays([])
        }
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-t-3xl p-6">
      <Breadcrumbs />
      <h2 className="text-xl font-semibold my-4">Homestay</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {homestays.map((h, i) => (
          <HomestayCard
            key={i}
            name={h.name}
            image={h.image}
            fasilitas={h.fasilitas}
            mapsLink={h.mapsLink}
            whatsapp={h.whatsapp}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomestaysPage() {
  return (
    <LenisClient>
      <Suspense fallback={<div className="text-center py-20">Loading homestays...</div>}>
        <div className="min-h-screen">
          <Header />
          <HomestayContent />
        </div>
      </Suspense>
    </LenisClient>
  )
}
