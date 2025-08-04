'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

type Homestay = {
  id: string
  name: string
  image: string
  fasilitas: string[]
  mapsLink: string
  whatsapp: string
}

export default function CarouselHomestay() {
  const [homestays, setHomestays] = useState<Homestay[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/homestays')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setHomestays(data)
        } else if (Array.isArray(data.data)) {
          setHomestays(data.data)
        } else {
          console.error('Format respons tidak sesuai:', data)
        }
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  useEffect(() => {
    if (isPlaying && homestays.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % homestays.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, homestays])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homestays.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + homestays.length) % homestays.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  if (homestays.length === 0) {
    return <div className="text-center text-gray-500 py-20">Loading homestays...</div>
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {homestays.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-30' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})`, zIndex: 10 }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-40 flex items-center justify-center h-full px-4 sm:px-8">
            <div className="max-w-3xl text-center text-white">
              <a
                href={slide.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-6xl font-bold block hover:underline"
              >
                {slide.name}
              </a>
              <p className="text-lg sm:text-xl block mb-2 opacity-90">{slide.id}</p>
              <ul className="text-sm sm:text-base mb-4 opacity-90">
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
        {homestays.map((_, index) => (
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
          style={{ width: `${((currentSlide + 1) / homestays.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
