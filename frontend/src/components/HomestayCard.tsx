'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Props {
  name: string
  image: string
  facilities: string[]
  mapsLink: string
  whatsapp: string
}

export default function HomestayCard({
  name,
  image,
  facilities,
  mapsLink,
  whatsapp,
}: Props) {
  const slug = name.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Gambar utama */}
      <div className="w-full h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Konten */}
      <div className="p-4">
        {/* Nama homestay yang bisa diklik ke Google Maps */}
        <div className="flex items-center gap-2 mb-1">
          <Image
            src="/icons/location.png"
            alt="Lokasi"
            width={16}
            height={16}
            className="opacity-60"
          />
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold hover:underline"
          >
            {name}
          </a>
        </div>

        {/* Fasilitas */}
        <p className="text-xs text-gray-500">
          Fasilitas: {facilities.slice(0, 3).join(', ')}...
        </p>

        {/* Tombol aksi */}
        <div className="mt-2 flex justify-between">
          <Link
            href={`/homestay/${slug}`}
            className="text-xs bg-black text-white rounded-full px-2 py-1 hover:bg-gray-800 transition"
          >
            Detail
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-white border text-black rounded-full px-2 py-1 hover:bg-gray-100 transition"
          >
            Contact WA
          </a>
        </div>
      </div>
    </div>
  )
}
