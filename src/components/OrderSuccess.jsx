import React from 'react'
import { motion } from 'framer-motion'

export function OrderSuccess({ onContinueShopping }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-900 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-5xl"
          >
            🎉
          </motion.div>
          {/* Confetti particles could be added here for extra flair */}
        </div>

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50"
          >
            Congratulations!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Your order has been placed successfully.
            <br />
            It will arrive at your doorstep soon!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={onContinueShopping}
            className="btn-primary w-full sm:w-auto px-8 py-3 text-lg shadow-xl shadow-orange-500/20"
          >
            Continue Shopping
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
