'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Props {
  name: string
  image: string
  fasilitas: string[]
  mapsLink: string
  whatsapp: string
}

export default function HomestayCard({
  name,
  image,
  fasilitas,
  mapsLink,
  whatsapp,
}: Props) {
  const slug = name;

  // URL WhatsApp dibuat di sini
  const whatsappUrl = `https://wa.me/${whatsapp}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Gambar utama */}
      <div className="w-full h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Konten */}
      <div className="p-4">
        {/* ====================================================== */}
        {/* PERUBAHAN DI SINI                                     */}
        {/* ====================================================== */}
        <a
          href={mapsLink}
          rel="noopener noreferrer"
          className="flex items-center gap-2 mb-1 text-sm font-semibold hover:cursor-pointer hover:underline"
        >
          <Image
            src="/icons/location.png"
            alt="Lokasi"
            width={16}
            height={16}
            className="opacity-60"
          />
          {name}
        </a>
        {/* ====================================================== */}

        {/* Fasilitas */}
        <p className="text-xs text-gray-500">
          Fasilitas: {(Array.isArray(fasilitas) ? fasilitas.join(', ') : fasilitas) || ''}
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
            href={whatsappUrl}
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