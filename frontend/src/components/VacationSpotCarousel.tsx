'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

function VacationSpotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('next');

  // Sample data - replace with your actual data
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Tempat 1",
      subtitle: "Tanjung Medang",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Tempat 2",
      subtitle: "Tanjung Medang",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Tempat 3",
      subtitle: "Tanjung Medang",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Tempat 4",
      subtitle: "Tanjung Medang",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Tempat 5",
      subtitle: "Tanjung Medang",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
    }
  ];

  const itemsPerView = 4;
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAnimating]);

  function nextSlide() {
    if (isAnimating) return;
    setAnimationDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }

  function prevSlide() {
    if (isAnimating) return;
    setAnimationDirection('prev');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }

  function getVisibleItems() {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % carouselItems.length;
      items.push({ ...carouselItems[index], displayIndex: i });
    }
    return items;
  }

  return (
    <section id="vacation-spot">
    <div className="mx-auto px-4 py-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">With Pride</h1>
        <p className="text-gray-600 mb-6">Presenting, Rupat Utara</p>
        <button className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
          See more
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <div className="overflow-hidden" style={{ minHeight: '550px', paddingTop: '40px', paddingBottom: '40px' }}>
          <div 
            className={`flex gap-4 transition-all duration-500 ease-in-out items-end ${
              isAnimating ? 'transform' : ''
            }`}
          >
            {getVisibleItems().map((item, index) => (
              <div 
                key={`${item.id}-${currentIndex}-${index}`}
                className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer flex-shrink-0 w-1/4 
                  transform transition-all duration-500 ease-in-out
                  ${isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}
                  hover:scale-105 hover:shadow-xl hover:-translate-y-3
                  ${index % 2 === 0 ? 'translate-y-0' : 'translate-y-16'}
                  ${index % 2 === 0 ? 'hover:translate-y-[-12px]' : 'hover:translate-y-8'}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-120"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-3 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <h3 className="text-lg font-semibold transform translate-x-2 group-hover:translate-x-0 transition-transform duration-600 ease-out">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-700 ease-out">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-105 group-hover:scale-100"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className={`p-4 rounded-full transition-all duration-400 transform hover:scale-125 active:scale-95 hover:rotate-12 ${
              isAnimating 
                ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                : 'bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 hover:shadow-xl shadow-md'
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className={`p-4 rounded-full transition-all duration-400 transform hover:scale-125 active:scale-95 hover:-rotate-12 ${
              isAnimating 
                ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black hover:shadow-xl shadow-lg'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
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
};

export default VacationSpotCarousel;