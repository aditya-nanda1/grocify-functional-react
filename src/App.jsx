import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Process } from './components/Process'
import { Products } from './components/Products'
import { Reviews } from './components/Reviews'
import { CartDrawer } from './components/CartDrawer'
import { Checkout } from './components/Checkout'
import { Footer } from './components/Footer'
import { OrderSuccess } from './components/OrderSuccess'
import { Contact } from './components/Contact'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [view, setView] = useState('home') // 'home' | 'checkout'

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const handleClear = () => setCartItems([])

  const handlePlaceOrder = () => {
    setShowSuccess(true)
    setCartItems([])
    setCartOpen(false)
    setView('home')
  }

  const handleContinueShopping = () => {
    setShowSuccess(false)
    setView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCheckout = () => {
    setCartOpen(false)
    setView('checkout')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showSuccess) {
    return <OrderSuccess onContinueShopping={handleContinueShopping} />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Process />
            <Products onAddToCart={handleAddToCart} />
            <Reviews />
            <Contact />
          </>
        ) : (
          <div className="pt-20">
            <button
              onClick={() => setView('home')}
              className="mx-4 sm:mx-6 mb-4 text-sm text-zinc-500 hover:text-primary flex items-center gap-1"
            >
              ← Back to Home
            </button>
            <Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
          </div>
        )}
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onClear={handleClear}
        onCheckout={handleCheckout}
      />
    </div>
  )
}

export default App
