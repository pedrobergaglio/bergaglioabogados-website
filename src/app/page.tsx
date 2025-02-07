'use client'

import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#DC3545]/90">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            DEFENDEMOS AL TRABAJADOR
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            CONTACTANOS HOY Y RECIBÍ ASESORAMIENTO SIN CARGO
          </motion.p>
          <motion.a 
            href="#contacto"
            className="inline-block bg-white text-[#212529] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            Contactanos
          </motion.a>
        </div>
        <Image
          src="/images/img-5.jpg"
          alt="Bergaglio & Asoc Abogados"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
      </section>

      {/* Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[120px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#212529]">¿Tuviste un accidente laboral?</h3>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[120px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#212529]">¿Te despidieron?</h3>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[120px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#212529]">¿Estás en negro?</h3>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[120px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#212529]">¿Sufrís maltrato laboral?</h3>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[120px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#212529]">¿Querés asesorarte?</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#212529]">
            ¿QUÉ OFRECEMOS?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trabajador Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/trabajador.jpg"
                  alt="Servicios al trabajador"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#212529]">SERVICIOS AL TRABAJADOR</h3>
                <p className="text-gray-700">
                  Despidos, reclamos, cálculo y cobro de indemnizaciones, maltrato laboral, trabajo en negro, accidentes laborales, mobbing/acoso, trabajo nocturno, trabajo insalubre, enfermedad profesional /laboral, horas extras, licencias por enfermedad/fallecimiento/maternidad/nacimiento de hijo, diferencias salariales, categoría laboral, renuncia, cambios en el trabajo.
                </p>
              </div>
            </motion.div>

            {/* Empleador Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/empleador.jpg"
                  alt="Servicios al empleador"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#212529]">SERVICIOS AL EMPLEADOR</h3>
                <p className="text-gray-700">
                  Brindamos servicios jurídicos de excelencia a empresas y pymes organizando los vínculos con sus trabajadores.
                </p>
              </div>
            </motion.div>

            {/* Especializados Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/especializados.jpg"
                  alt="Servicios especializados"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#212529]">DERECHO CIVIL Y DE DAÑOS</h3>
                <p className="text-gray-700">
                  Sucesiones, reclamos sobre derecho del consumidor, amparos, daños y perjuicios, accidentes de tránsito, desalojos, contratos y alquileres, negociaciones judiciales y extrajudiciales, redacción de cartas documento, divorcios.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#212529]"
            {...fadeInUp}
          >
            POR QUÉ ELEGIRNOS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <motion.div 
                key={num}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: num * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={`/images/${num}.png`}
                    alt={`Benefit ${num}`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#212529]">
                  {num === 1 && "Somos especialistas"}
                  {num === 2 && "Brindamos asesoramiento personalizado"}
                  {num === 3 && "Optimizamos tiempos y procesos"}
                  {num === 4 && "Honorarios mínimos legales"}
                </h3>
                <p className="text-gray-700">
                  {num === 1 && "Nos dedicamos al derecho laboral y civil."}
                  {num === 2 && "Te acompañamos durante todo el proceso judicial."}
                  {num === 3 && "Tu tiempo vale."}
                  {num === 4 && "Nuestro objetivo es que resuelvas tus problemas de forma accesible."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#212529]"
            {...fadeInUp}
          >
            NUESTRA EXPERIENCIA
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              className="text-gray-700 mb-12"
              {...fadeInUp}
            >
              Somos un estudio jurídico de abogados especialistas en derecho laboral y derecho civil. Brindamos asesoramiento personalizado a nuestros clientes con eficiencia y honestidad, optimizando tiempos y procesos. Ofrecemos un servicio 100% personalizado, abonando honorarios mínimos legales. Te asesoramos en CABA Y Prov. De Bs. As. por medio de consultas virtuales y presenciales.
            </motion.p>

            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
            >
              <div className="relative w-72 h-72 mx-auto mb-6">
                <Image
                  src="/images/imag-abogado.png"
                  alt="DR. LEONEL E. BERGAGLIO"
                  fill
                  className="object-cover object-center rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#212529]">DR. LEONEL E. BERGAGLIO</h3>
              <p className="text-gray-700">Abogado. Especialista en derecho laboral</p>
              <p className="text-gray-700">Socio fundador de Bergaglio & Asociados Abogados.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#212529]">
              RECIBÍ ASESORAMIENTO HOY MISMO
            </h2>
            <p className="text-gray-700 mb-4">
              Sabemos que muchos trabajadores sufren diariamente despidos, maltrato laboral, entre otras irregularidades.
            </p>
            <p className="text-gray-700 mb-4">
              En Bergaglio & Asociados ABOGADOS estamos para acompañarte durante todo el proceso legal.
            </p>
            <p className="text-gray-700 mb-8">
              Nuestro equipo de profesionales se encuentra altamente capacitado para ir en busca del éxito en cada gestión.
            </p>
            <a 
              href="#contacto"
              className="inline-block bg-[#DC3545] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c82333] transition-colors"
            >
              Contactanos
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#212529]">
            DEJANOS TU CONSULTA
          </h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
