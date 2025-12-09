import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Home Chef',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The quality of vegetables is unmatched! I love how fresh everything is when it arrives. Grocify has completely changed how I shop for groceries.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Fitness Enthusiast',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Super fast delivery and great packaging. The fruits are always ripe and ready to eat. Highly recommended for anyone looking for quality.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Working Mom',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'As a busy mom, Grocify is a lifesaver. The app is so easy to use, and I can trust them to pick the best items for my family.',
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400"
          >
            Don't just take our word for it. Here is what our community has to say about their experience.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-6xl text-orange-100 dark:text-orange-900/20 font-serif leading-none">
                "
              </div>

              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-30'}>
                    ★
                  </span>
                ))}
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed relative z-10">
                {review.content}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-100 dark:ring-orange-900/30"
                />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-50 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
