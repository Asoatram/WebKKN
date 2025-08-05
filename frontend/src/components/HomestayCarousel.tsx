'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Homestay {
  id: number;
  name: string;
  location: string;
  image: string;
}

export default function HomestayCarousel() {
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  const itemsPerView = 4;

  useEffect(() => {
    fetch('http://localhost:5000/api/homestays')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setHomestays(data);
        } else if (Array.isArray(data.data)) {
          setHomestays(data.data);
        } else {
          console.error('Unexpected data format:', data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch homestays:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && homestays.length > 0) nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating, homestays]);

  function nextSlide() {
    if (isAnimating || homestays.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % homestays.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }

  function prevSlide() {
    if (isAnimating || homestays.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + homestays.length) % homestays.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }

  function getVisibleItems() {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % homestays.length;
      items.push(homestays[index]);
    }
    return items;
  }

  if (loading) {
    return <div className="text-center py-16 text-gray-500">Loading homestays...</div>;
  }

  if (homestays.length === 0) {
    return <div className="text-center py-16 text-gray-500">No homestays found.</div>;
  }

  return (
    <section id='homestays'>
    <div className="mx-auto px-4 py-8 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Feels like Home</h1>
        <p className="text-gray-600 mb-6">Enjoy your stay in Kasongan</p>
        <a href='/homestays' className="inline-block mb-4">
        <button className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
          See more
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden pt-10 pb-10" style={{ minHeight: '550px' }}>
          <div className="flex gap-4 items-end">
            {getVisibleItems().map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -12 }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0 w-1/4 bg-white"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 text-white transition-all">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-200">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className={`p-4 rounded-full transition-all transform hover:scale-125 active:scale-95 hover:rotate-12 ${
              isAnimating
                ? 'bg-gray-300 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-gray-200 to-gray-300 hover:shadow-xl shadow-md'
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className={`p-4 rounded-full transition-all transform hover:scale-125 active:scale-95 hover:-rotate-12 ${
              isAnimating
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:shadow-xl shadow-lg'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-3">
          {homestays.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all transform hover:scale-125 ${
                index === currentIndex
                  ? 'bg-gray-800 w-8 shadow-md'
                  : 'bg-gray-300 hover:bg-gray-500 w-3 hover:shadow-sm'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
