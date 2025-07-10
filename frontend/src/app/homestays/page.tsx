'use client'

import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import HomestayCard from '@/components/HomestayCard'
import { homestayData } from '@/components/CarouselHomestay'

export default function HomestaysPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto bg-white rounded-t-3xl p-6">
        <Breadcrumbs />
        <h2 className="text-xl font-semibold my-4">Homestay</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {homestayData.map((h, i) => (
            <HomestayCard
              key={i}
              name={h.title}
              image={h.image}
              facilities={h.fasilitas}
              mapsLink={h.mapsLink}
              whatsapp={h.whatsapp}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
