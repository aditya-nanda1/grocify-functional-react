import React from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products'

export function Products({ onAddToCart }) {
  return (
    <section
      id="products"
      className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-950"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="space-y-2">
            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight"
            >
              Popular Groceries
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg text-sm sm:text-base">
              Handpicked fresh items for your daily needs. Tap on any item to quickly add it to your cart.
            </p>
          </div>
          <a href="#" className="text-primary font-semibold text-sm hover:text-orange-600 transition-colors flex items-center gap-1">
            View All Products
            <span className="text-lg">→</span>
          </a>
        </header>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="card group overflow-hidden flex flex-col h-full border-zinc-200/60 dark:border-zinc-800"
            >
              <div className="relative h-40 sm:h-48 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>

              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">{product.unit}</p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    ₹{product.price}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-medium text-yellow-500">
                    <span>★</span>
                    <span className="text-zinc-500 dark:text-zinc-400">4.8</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
