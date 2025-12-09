import React from 'react'
import { motion } from 'framer-motion'
import basketImage from '../assets/basket.png'

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:bg-orange-900/10" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:bg-yellow-900/10" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center relative z-10">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold text-orange-700 tracking-wide uppercase shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse" />
              No.1 Grocery Delivery Service
            </motion.span>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-zinc-900 dark:text-zinc-50 tracking-tight">
                <span className="block">Fresh & Organic</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Delivered Daily
                </span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                Experience the finest quality fruits, vegetables, and daily essentials delivered straight to your doorstep within minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97, y: 0 }}
                className="btn-primary text-base px-8 py-3.5"
                onClick={() => {
                  const el = document.getElementById('products')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Start Shopping
              </motion.button>
              <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200" />
                  ))}
                </div>
                <p>10k+ Happy Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Right basket image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-80 sm:w-96 md:w-[32rem] aspect-square flex items-center justify-center"
              >
                <img
                  src={basketImage}
                  alt="Full shopping basket with fresh groceries"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-1/3 z-20 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">🥬</div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Freshness</p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">100% Organic</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-1/4 z-20 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">⚡</div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Delivery</p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">30 Mins</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
