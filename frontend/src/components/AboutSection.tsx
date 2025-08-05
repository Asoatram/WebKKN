'use client'
import React from 'react'

export default function AboutSection() {
  return (
    <section id='about' className="px-6 py-12 md:py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Title Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold border-b-2 border-black inline-block mb-4">
            About
          </h2>
          <h3 className="text-2xl font-medium leading-snug mt-6">
            Eksplorasi Keindahan <br />
            Rupat Utara, Surga <br />
            Tersembunyi di Ujung <br />
            Sumatera
          </h3>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 text-base leading-relaxed text-justify">
          <p className="mb-4">
            Kami adalah platform pariwisata yang bertujuan untuk memperkenalkan pesona alam dan budaya
            Rupat Utara, sebuah kawasan eksotis di Kabupaten Bengkalis, Riau. Dikenal dengan pantai-pantai
            berpasir putih, hutan mangrove yang asri, serta budaya Melayu yang kental, Rupat Utara adalah
            destinasi ideal bagi pecinta alam, budaya, dan petualangan.
          </p>
          <p className="mb-4">
            Melalui website ini, kami menyediakan informasi lengkap seputar destinasi wisata, aktivitas
            menarik, akomodasi, kuliner lokal, serta cerita-cerita dari warga dan wisatawan. Kami percaya
            bahwa pariwisata yang berkelanjutan dapat meningkatkan perekonomian masyarakat lokal sekaligus
            menjaga kelestarian lingkungan dan budaya.
          </p>
          <p className="font-semibold">
            Mari jelajahi Rupat Utara — tempat di mana keindahan alam bertemu dengan keramahan budaya.
          </p>
        </div>
      </div>
    </section>
  )
}
