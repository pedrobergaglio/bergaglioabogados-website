'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative bg-[#212529] text-white py-12">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-1.jpg"
          alt="Footer background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bergaglio & Asociados Abogados</h3>
            <p className="text-gray-300">
              Somos un estudio jurídico de abogados especialistas en derecho laboral y derecho civil.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://wa.me/5491151276311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#DC3545] rounded-full flex items-center justify-center hover:bg-[#c82333] transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="https://facebook.com/bergaglioabogados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#DC3545] rounded-full flex items-center justify-center hover:bg-[#c82333] transition-colors"
              >
                <FaFacebook size={20} className="translate-x-[1px]" />
              </a>
              <a 
                href="https://instagram.com/bergaglioabogados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#DC3545] rounded-full flex items-center justify-center hover:bg-[#c82333] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-gray-300 hover:text-white transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="text-gray-300 hover:text-white transition-colors">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 relative">
                <Image
                  src="/images/location.png"
                  alt="Ubicación"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300">Rivadavia 18222, Morón</p>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 relative">
                <Image
                  src="/images/phone.png"
                  alt="Teléfono"
                  fill
                  className="object-contain"
                />
              </div>
              <a 
                href="tel:+5491151276311" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                11 5127-6311
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 relative">
                <Image
                  src="/images/mail.png"
                  alt="Email"
                  fill
                  className="object-contain"
                />
              </div>
              <a 
                href="mailto:contacto@bergaglioabogados.com.ar" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                contacto@bergaglioabogados.com.ar
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 Bergaglio & Asociados Abogados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 