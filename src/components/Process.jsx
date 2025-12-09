import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Select Items',
    description: 'Browse our wide selection of fresh fruits, vegetables, and daily essentials.',
    icon: '🥦',
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    id: 2,
    title: 'AddTo Cart',
    description: 'Add your favorite items to the cart and review your order instantly.',
    icon: '🛒',
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
  },
  {
    id: 3,
    title: 'Fast Payment',
    description: 'Secure and quick payment options including UPI, Cards, and COD.',
    icon: '💳',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    id: 4,
    title: 'Enjoy Delivery',
    description: 'Sit back and relax while we deliver fresh groceries to your doorstep.',
    icon: '🚀',
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  },
]

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50"
          >
            Simple Process to Order
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400"
          >
            We have simplified the grocery shopping experience to just a few taps.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-3xl mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-center lg:text-left">
                {step.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed text-center lg:text-left">
                {step.description}
              </p>

              {/* Step Number */}
              <div className="absolute top-4 right-4 text-6xl font-black text-zinc-50 dark:text-zinc-800 -z-10 opacity-50 select-none">
                0{step.id}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Safety First</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2">We follow strict safety protocols to ensure your health.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center">
              <div className="w-12 h-12 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-2xl mb-4">
                🌡️
              </div>
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Temperature Checks</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Regular temperature checks for all our staff and delivery partners.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl mb-4">
                🧤
              </div>
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Sanitized Handling</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Strict sanitization of warehouses and use of gloves/masks.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center">
              <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-2xl mb-4">
                📦
              </div>
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Contactless Delivery</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Safe delivery at your doorstep without any physical contact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
