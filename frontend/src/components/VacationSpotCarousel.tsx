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
      title: "Beting Aceh",
      subtitle: "Rupat Utara",
      image: "/betingAceh.jpg"
    },
    {
      id: 2,
      title: "Pantai Tanjung Lapin",
      subtitle: "Tanjung Punak",
      image: "/tanjungLapin.jpg"
    },
    {
      id: 3,
      title: "Pantai Pesona",
      subtitle: "Teluk Rhu",
      image: "/PantaiPesonaTelukRhuRupatUtara.png"
    },
    {
      id: 4,
      title: "Pantai Tanjung Jaya",
      subtitle: "Teluk Rhu",
      image: "/tanjungJaya.jpg"
    },
    {
      id: 5,
      title: "Pulau Beruk",
      subtitle: "Tanjung Medang",
      image: "/pulauBeruk.png"
    },
    {
      id: 6,
      title: "Kelenteng",
      subtitle: "Tanjung Medang",
      image: "/kelenteng.png"
    },
    {
      id: 7,
      title: "Vihara Wisata Maitreya",
      subtitle: "Tanjung Medang",
      image: "/vihara.png"
    },
    {
      id: 8,
      title: "Masjid Besar",
      subtitle: "Tanjung Medang",
      image: "/masjid.png"
    },
    {
      id: 9,
      title: "Pantai Tanjung Medang",
      subtitle: "Tanjung Medang",
      image: "/tanjungMedang.jpg"
    },
  ];
  
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

  // Generate enough items to fill different screen sizes
  function getVisibleItems() {
    const items = [];
    // Generate 4 items (max needed for desktop)
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % carouselItems.length;
      items.push({ ...carouselItems[index], displayIndex: i });
    }
    return items;
  }

  return (
    <section id="vacation-spot">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-white">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">With Pride</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Presenting, Rupat Utara</p>
          <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors text-sm sm:text-base">
            See more
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-[650px] py-10 sm:py-12 lg:py-16">
            <div 
              className={`flex gap-2 sm:gap-3 lg:gap-4 transition-all duration-500 ease-in-out items-end ${
                isAnimating ? 'transform' : ''
              }`}
            >
              {getVisibleItems().map((item, index) => (
                <div 
                  key={`${item.id}-${currentIndex}-${index}`}
                  className={`relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg group cursor-pointer flex-shrink-0
                    /* Responsive widths using Tailwind breakpoints */
                    w-full sm:w-1/2 md:w-1/3 lg:w-1/4
                    /* Hide items beyond screen capacity */
                    ${index === 0 ? 'block' : ''}
                    ${index === 1 ? 'hidden sm:block' : ''}
                    ${index === 2 ? 'hidden md:block' : ''}
                    ${index === 3 ? 'hidden lg:block' : ''}
                    
                    transform transition-all duration-500 ease-in-out
                    ${isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}
                    hover:scale-105 hover:shadow-xl hover:-translate-y-2 sm:hover:-translate-y-3
                    
                    /* Alternating heights - only on larger screens */
                    sm:translate-y-0 md:translate-y-0 lg:translate-y-0
                    ${index % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-16'}
                    ${index % 2 === 0 ? 'lg:hover:translate-y-[-12px]' : 'lg:hover:translate-y-8'}
                    hover:translate-y-[-8px] sm:hover:translate-y-[-8px] md:hover:translate-y-[-8px]`}
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
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 sm:group-hover:scale-120"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500" />
                    <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 text-white transform translate-y-2 sm:translate-y-3 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold transform translate-x-1 sm:translate-x-2 group-hover:translate-x-0 transition-transform duration-600 ease-out">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200 transform translate-x-2 sm:translate-x-3 lg:translate-x-4 group-hover:translate-x-0 transition-transform duration-700 ease-out">
                        {item.subtitle}
                      </p>
                    </div>
                    
                    {/* Animated border on hover */}
                    <div className="absolute inset-0 border-2 border-white/30 rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-105 group-hover:scale-100"></div>
                    
                    {/* Floating particles effect - hidden on mobile for performance */}
                    <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
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
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-3 sm:space-x-4">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className={`p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-400 transform hover:scale-110 sm:hover:scale-125 active:scale-95 hover:rotate-6 sm:hover:rotate-12 ${
                isAnimating 
                  ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 hover:shadow-lg sm:hover:shadow-xl shadow-md'
              }`}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className={`p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-400 transform hover:scale-110 sm:hover:scale-125 active:scale-95 hover:-rotate-6 sm:hover:-rotate-12 ${
                isAnimating 
                  ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black hover:shadow-lg sm:hover:shadow-xl shadow-lg'
              }`}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3 flex-wrap">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-500 transform hover:scale-110 sm:hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-gray-800 w-6 sm:w-8 shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-500 w-2 sm:w-3 hover:shadow-sm'
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