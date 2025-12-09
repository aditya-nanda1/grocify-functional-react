import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact Us' },
]

export function Navbar({ onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const { theme, toggleTheme } = useTheme()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    console.log('Searching for:', search) // required by assignment
    setSearch('')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 py-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="mx-auto max-w-7xl rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm border border-white/20 dark:border-zinc-800"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-primary transition-colors">
                Grocify
              </span>
            </div>
          </a>

          {/* Center nav - desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search pill */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden sm:flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 px-3 py-1.5 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all"
            >
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none placeholder:text-zinc-400 text-sm w-24 lg:w-40 text-zinc-700 dark:text-zinc-200"
              />
              <button
                type="submit"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs hover:bg-secondary transition-colors"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </form>

            {/* Icons */}
            <button
              type="button"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-orange-50 hover:text-primary dark:hover:bg-zinc-800 transition-colors"
              aria-label="Wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={onOpenCart}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-orange-50 hover:text-primary dark:hover:bg-zinc-800 transition-colors relative"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 5c.07.286.07.586 0 .872a2.002 2.002 0 01-1.942 1.516H6.573a2.002 2.002 0 01-1.942-1.516l1.263-5a2.002 2.002 0 011.942-1.516h8.31a2.002 2.002 0 011.942 1.516z" />
              </svg>
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-zinc-100 dark:border-zinc-800"
            >
              <div className="px-4 py-4 space-y-4">
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2"
                >
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search groceries..."
                    className="bg-transparent outline-none placeholder:text-zinc-400 text-sm flex-1 text-zinc-700 dark:text-zinc-200"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </form>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-orange-50 hover:text-primary dark:hover:bg-zinc-800 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
