import React from 'react'

export function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-800 py-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        <p>
          Grocify Website clone • Built with React, Vite, Tailwind CSS & Framer Motion • Functional cart & checkout
          demo by <span className="font-semibold">Aditya Nanda</span>.
        </p>
        <a href="#home" className="hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
