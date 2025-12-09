import React from 'react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20 aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Fresh vegetables in a market"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Since 2023</p>
                  <p className="text-orange-200">Serving Freshness Daily</p>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-orange-100 dark:bg-orange-900/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
              <span>About Grocify</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
              We Deliver The <span className="text-primary">Freshest</span> Produce To Your Doorstep
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              At Grocify, we believe that everyone deserves access to fresh, organic, and high-quality food. We partner directly with local farmers to bring you the best seasonal produce, ensuring that what you eat is not only delicious but also healthy and sustainable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl">
                  🌿
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">100% Organic</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Sourced directly from certified organic farms.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl">
                  🚚
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Fast Delivery</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Same-day delivery for all orders placed before 2 PM.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-2xl">
                  ✨
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Quality Check</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Every item is handpicked and checked for quality.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-2xl">
                  🎧
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">24/7 Support</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Our team is always here to help you.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">15k+</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">500+</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Farmers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">50+</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Cities</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#products" className="btn-primary">
                Explore Our Products
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
