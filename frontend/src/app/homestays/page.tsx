'use client'

import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import HomestayCard from '@/components/HomestayCard'
import { useEffect, useState } from 'react'

type Homestay = {
  id: string
  name: string
  image: string
  fasilitas: string[] // backend harus kirim array string, bukan string biasa
  mapsLink: string
  whatsapp: string
}

export default function HomestaysPage() {
  const [homestays, setHomestays] = useState<Homestay[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/homestays')
      .then((res) => res.json())
      .then((data) => setHomestays(data))
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto bg-white rounded-t-3xl p-6">
        <Breadcrumbs />
        <h2 className="text-xl font-semibold my-4">Homestay</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {homestays.map((h, i) => (
            <HomestayCard
              key={i}
              name={h.name}
              image={h.image}
              fasilitas={h.fasilitas} // ⬅️ pastikan ini array
              mapsLink={h.mapsLink}
              whatsapp={h.whatsapp}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
