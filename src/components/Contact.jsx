import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    // Simulate form submission
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                We'd Love to Hear from You
              </h2>
              <p className="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Have a question about our products, delivery, or just want to say hello?
                Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 text-xl shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Visit Us</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    123 Grocery Street, Fresh Market Area<br />
                    Bhubaneswar, Odisha 751024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Call Us</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    +91 99999 99999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 text-xl shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Email Us</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    support@grocify.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 dark:bg-zinc-800/50 p-6 sm:p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-primary transition-colors text-zinc-900 dark:text-zinc-100"
                  placeholder="Aditya Nanda"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-primary transition-colors text-zinc-900 dark:text-zinc-100"
                  placeholder="aditya@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-primary transition-colors text-zinc-900 dark:text-zinc-100 resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3.5 text-base"
              >
                Send Message
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-600 dark:text-green-400 font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
