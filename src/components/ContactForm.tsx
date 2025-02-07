'use client'

import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyqlkdn")

  if (state.succeeded) {
    return (
      <motion.div 
        className="text-center p-8 bg-green-50 rounded-lg shadow-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3, type: "spring" }}
        >
          <FaCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
        </motion.div>
        <motion.h3 
          className="text-2xl font-bold text-green-700 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          ¡Mensaje enviado con éxito!
        </motion.h3>
        <motion.p 
          className="text-green-600 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          Gracias por su consulta. Nos pondremos en contacto a la brevedad.
        </motion.p>
      </motion.div>
    )
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre y Apellido *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-14"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Teléfono *
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-14"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Tu Consulta *
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          required
          className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#DC3545] text-white py-4 px-4 rounded-md hover:bg-[#c82333] focus:outline-none focus:ring-2 focus:ring-[#DC3545] focus:ring-offset-2 transition-colors disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {state.submitting ? 'Enviando...' : 'ENVIAR'}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm 