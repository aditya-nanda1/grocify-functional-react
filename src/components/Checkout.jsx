import React, { useState } from 'react'

export function Checkout({ cartItems, onPlaceOrder }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [submitted, setSubmitted] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = subtotal > 0 ? 40 : 0
  const total = subtotal + delivery

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.address) return

    // Simulate API call
    console.log('Checkout payload:', { form, cartItems })

    // Trigger success flow
    if (onPlaceOrder) {
      onPlaceOrder()
    }
    setSubmitted(true)
  }

  return (
    <section
      id="checkout"
      className="py-10 sm:py-12 bg-white dark:bg-slate-900"
      aria-labelledby="checkout-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2
            id="checkout-heading"
            className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4"
          >
            Checkout
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            No real payment will be processed and no actual order will be created through this checkout.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:border-primary"
                placeholder="Aditya Nanda"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:border-primary"
                placeholder="99999 99999"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Delivery Address
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:border-primary"
                rows={3}
                placeholder="House no, street, locality, city, pin code"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Place Order
            </button>
            {submitted && (
              <p className="text-xs text-emerald-600 mt-2">
                Order submitted in console.log() for evaluation. You can show this during your demo.
              </p>
            )}
          </form>
        </div>

        <div className="card p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3">
            Order Summary
          </h3>
          <div className="space-y-2 max-h-52 overflow-y-auto mb-3">
            {cartItems.length === 0 && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                No items added yet. Go back and add a few groceries.
              </p>
            )}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0 dark:border-slate-800"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{delivery === 0 ? 'Free' : `₹${delivery.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-50 pt-1">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
