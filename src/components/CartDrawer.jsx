import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CartDrawer({ open, onClose, cartItems, onIncrement, onDecrement, onClear, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = subtotal > 0 ? 40 : 0
  const total = subtotal + delivery

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-slate-900 z-50 shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-50">
                Your Cart
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-sm text-slate-500 hover:text-primary"
              >
                Close ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {cartItems.length === 0 && (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Your cart is empty. Add a few groceries to see the checkout in action.
                </p>
              )}

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 border border-slate-100 dark:border-slate-800 rounded-xl px-3 py-2"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onDecrement(item.id)}
                      className="h-7 w-7 rounded-full border border-slate-200 text-sm"
                    >
                      −
                    </button>
                    <span className="text-sm font-medium w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onIncrement(item.id)}
                      className="h-7 w-7 rounded-full border border-slate-200 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 px-5 py-4 space-y-2">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>Delivery</span>
                <span>{delivery === 0 ? 'Free' : `₹${delivery.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-slate-900 dark:text-slate-50">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClear}
                  className="flex-1 rounded-full border border-slate-200 text-xs sm:text-sm py-2"
                >
                  Clear Cart
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    if (onCheckout) onCheckout()
                  }}
                  className="flex-1 btn-primary text-center text-xs sm:text-sm"
                >
                  Checkout
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
