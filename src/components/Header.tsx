'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Bergaglio & Asociados Abogados' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="fixed w-full z-50 bg-[#DC3545] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Bergaglio & Asociados Abogados"
              width={100}
              height={100}
              className="w-auto h-12"
              priority
              quality={100}
            />
            <span className="pl-4 text-lg font-semibold text-white">
              Bergaglio & Asociados Abogados
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-200 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5491151276311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaWhatsapp size={16} className="text-[#DC3545]" />
              </a>
              <a 
                href="https://facebook.com/bergaglioabogados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaFacebook size={16} className="text-[#DC3545] translate-y-[0.5px]" />
              </a>
              <a 
                href="https://instagram.com/bergaglioabogados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaInstagram size={16} className="text-[#DC3545]" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-[#DC3545]"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex space-x-4 pt-4">
            <a 
              href="https://wa.me/5491151276311" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <FaWhatsapp size={16} className="text-[#DC3545]" />
            </a>
            <a 
              href="https://facebook.com/bergaglioabogados" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <FaFacebook size={16} className="text-[#DC3545] translate-x-[1px]" />
            </a>
            <a 
              href="https://instagram.com/bergaglioabogados" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <FaInstagram size={16} className="text-[#DC3545]" />
            </a>
          </div>
        </div>
      </motion.nav>
    </header>
  )
}

export default Header 