'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Home">
          Zoftware<span>Development</span>
        </Link>
        <nav className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
        </nav>
        <Link href="mailto:zoftwaredevelopment@yahoo.com" className="btn btn-primary">
          Contact us
        </Link>
        <button
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
