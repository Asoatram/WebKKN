'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-white text-black px-6 py-4 fixed w-full top-0 left-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <h1 className="text-xl font-bold flex-shrink-0">Rupat Utara.</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-2 border border-gray-300 rounded-full p-1 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium transition-colors duration-200">Home</Link>
            <Link href="/about" className="px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-gray-100">About</Link>
            <Link href="/spots" className="px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-gray-100">Spots</Link>
            <Link href="/homestays" className="px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-gray-100">Homestays</Link>
          </nav>

          {/* Animated icon */}
          <motion.button
            className="md:hidden focus:outline-none z-[60] relative"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            ref={menuRef}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-12 left-0 right-0 z-[50] bg-white shadow-lg px-6 py-6 space-y-4"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-black text-base font-medium">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-black text-base font-medium">About</Link>
            <Link href="/spots" onClick={() => setIsOpen(false)} className="block text-black text-base font-medium">Spots</Link>
            <Link href="/homestays" onClick={() => setIsOpen(false)} className="block text-black text-base font-medium">Homestays</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
