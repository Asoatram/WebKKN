'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

export const homestayData = [
  {
    id: 1,
    title: "Homestay Tok Dalang",
    subtitle: "Rupat Utara, Riau",
    description: "1 kasur, WiFi, kamar mandi dalam, dekat pantai. Cocok untuk liburan tenang di tengah alam.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    mapsLink: "https://www.google.com/maps?q=Homestay+Tok+Dalang",
    whatsapp: "https://wa.me/6281234567890",
    fasilitas: [
      "1 kasur",
      "WiFi",
      "Kamar mandi dalam",
      "Dekat pantai",
      "Parkir gratis"
    ]
  },
  {
    id: 2,
    title: "Homestay Pantai Damai",
    subtitle: "Teluk Rhu, Rupat Utara",
    description: "Nikmati suasana nyaman dengan fasilitas lengkap di tepi pantai.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80",
    mapsLink: "https://www.google.com/maps?q=Homestay+Pantai+Damai",
    whatsapp: "https://wa.me/6289876543210",
    fasilitas: [
      "2 kasur",
      "AC & WiFi",
      "Kamar mandi",
      "Dapur kecil",
      "Dekat warung makan"
    ]
  },
  {
    id: 3,
    title: "Homestay Laut Tenang",
    subtitle: "Pasir Putih, Rupat",
    description: "Suasana laut yang menenangkan, cocok untuk keluarga atau pasangan.",
    image: "https://picsum.photos/id/1018/1920/1080",
    mapsLink: "https://www.google.com/maps?q=Homestay+Laut+Tenang",
    whatsapp: "https://wa.me/6285678901234",
    fasilitas: [
      "1 tempat tidur queen",
      "WiFi",
      "Dekat pantai pasir putih",
      "Pemandangan laut",
      "Sarapan tersedia"
    ]
  }
]

export default function CarouselHomestay() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % homestayData.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homestayData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + homestayData.length) % homestayData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {homestayData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-30' : 'opacity-0 z-0'
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})`, zIndex: 10 }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Foreground content */}
          <div className="relative z-40 flex items-center justify-center h-full px-4 sm:px-8">
            <div className="max-w-3xl text-center text-white">
              <a
                href={slide.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-6xl font-bold block hover:underline"
              >
                {slide.title}
              </a>
              <a
                href={slide.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl block mb-2 hover:underline"
              >
                {slide.subtitle}
              </a>
              <p className="mb-4 text-sm sm:text-base opacity-90">{slide.description}</p>
              <ul className="text-sm sm:text-base mb-6 opacity-90">
                {slide.fasilitas.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
              <div className="flex justify-center gap-4">
                <a href={slide.mapsLink} target="_blank" rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow">
                  Lokasi
                </a>
                <a href={slide.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigasi kiri/kanan */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {homestayData.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button onClick={togglePlayPause}
        className="absolute bottom-8 right-8 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3">
        {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-50">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / homestayData.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
