import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Waves } from 'lucide-react'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#chambres', label: 'Chambres' },
  { href: '#equipements', label: 'Équipements' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#temoignages', label: 'Avis' },
  { href: '#reservation', label: 'Réservation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(10,45,63,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" onClick={(e) => handleNav(e, '#accueil')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-coral-500 flex items-center justify-center group-hover:bg-coral-400 transition-colors">
              <Waves size={16} className="text-white" />
            </div>
            <div>
              <div className="font-display text-white text-lg leading-tight tracking-wide">La Terrasse</div>
              <div className="font-body text-sea-300 text-[10px] tracking-[0.2em] uppercase leading-none">Villa Guesthouse · Djibouti</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-body text-sm text-white/80 hover:text-coral-300 transition-colors tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-coral-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => handleNav(e, '#reservation')}
              className="btn-primary !py-2 !px-5 text-xs"
            >
              Réserver
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-sea-900 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-display text-2xl text-white hover:text-coral-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => handleNav(e, '#reservation')}
              className="btn-primary mt-4"
            >
              Réserver maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
