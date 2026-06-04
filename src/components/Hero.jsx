import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, MapPin, Star, Home, Plane, Anchor } from 'lucide-react'

const PARTICLES = [
  { id: 0, left: '8%', top: '18%', size: 9, color: 'rgba(224,107,74,0.55)', dur: 5.2, delay: 0, dy: -28, dx: 10 },
  { id: 1, left: '20%', top: '72%', size: 5, color: 'rgba(75,184,199,0.45)', dur: 4.1, delay: 0.8, dy: -20, dx: -6 },
  { id: 2, left: '35%', top: '25%', size: 7, color: 'rgba(255,255,255,0.25)', dur: 6.0, delay: 1.5, dy: -22, dx: 5 },
  { id: 3, left: '55%', top: '65%', size: 11, color: 'rgba(224,107,74,0.4)', dur: 4.8, delay: 0.3, dy: -32, dx: -8 },
  { id: 4, left: '70%', top: '30%', size: 6, color: 'rgba(75,184,199,0.5)', dur: 5.5, delay: 1.2, dy: -18, dx: 12 },
  { id: 5, left: '85%', top: '55%', size: 8, color: 'rgba(255,255,255,0.2)', dur: 3.9, delay: 2.0, dy: -25, dx: -4 },
  { id: 6, left: '12%', top: '45%', size: 4, color: 'rgba(224,107,74,0.3)', dur: 6.5, delay: 0.6, dy: -15, dx: 7 },
  { id: 7, left: '48%', top: '85%', size: 6, color: 'rgba(75,184,199,0.35)', dur: 4.4, delay: 1.8, dy: -30, dx: -10 },
  { id: 8, left: '78%', top: '15%', size: 10, color: 'rgba(224,107,74,0.45)', dur: 5.8, delay: 0.4, dy: -24, dx: 6 },
  { id: 9, left: '92%', top: '78%', size: 5, color: 'rgba(255,255,255,0.3)', dur: 3.6, delay: 2.5, dy: -19, dx: -3 },
  { id: 10, left: '28%', top: '55%', size: 7, color: 'rgba(75,184,199,0.4)', dur: 5.1, delay: 1.1, dy: -26, dx: 9 },
  { id: 11, left: '63%', top: '40%', size: 4, color: 'rgba(224,107,74,0.35)', dur: 4.7, delay: 0.7, dy: -17, dx: -5 },
  { id: 12, left: '42%', top: '12%', size: 8, color: 'rgba(255,255,255,0.22)', dur: 6.2, delay: 1.6, dy: -21, dx: 11 },
  { id: 13, left: '17%', top: '88%', size: 5, color: 'rgba(75,184,199,0.45)', dur: 4.3, delay: 2.2, dy: -29, dx: -7 },
  { id: 14, left: '95%', top: '35%', size: 6, color: 'rgba(224,107,74,0.5)', dur: 5.6, delay: 0.9, dy: -23, dx: 4 },
]

const STATS = [
  { icon: Star, value: '4.5 / 5', label: 'TripAdvisor' },
  { icon: Home, value: '5', label: 'Types de chambres' },
  { icon: Plane, value: '8,5 km', label: 'Aéroport Ambouli' },
  { icon: Anchor, value: 'Île Moucha', label: 'Escapades insulaires' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="accueil" ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/roof-top1.jpg')" }}
        />
      </motion.div>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sea-950/85 via-sea-900/55 to-sea-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-sea-950/70 via-sea-950/20 to-transparent" />

      {/* Coral/teal ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 110% 55% at 15% 90%, rgba(224,107,74,0.14) 0%, transparent 55%),' +
            'radial-gradient(ellipse 70% 45% at 85% 10%, rgba(75,184,199,0.12) 0%, transparent 50%)',
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: p.color, filter: 'blur(0.5px)' }}
            animate={{ y: [0, p.dy, 0], x: [0, p.dx, 0], opacity: [0.3, 0.85, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Vertical scroll text — right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-coral-400" />
        <span className="writing-vertical font-body text-white/40 text-[9px] tracking-[0.35em] uppercase rotate-180">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-coral-400 to-transparent"
        />
      </motion.div>

      {/* Left accent — horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
        className="absolute left-0 top-1/2 w-10 h-px bg-coral-400 origin-left hidden lg:block z-20"
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-28"
        style={{ opacity }}
      >
        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-2.5 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm mb-8"
        >
          <MapPin size={12} className="text-coral-400" />
          <span className="font-body text-white text-xs tracking-[0.3em] uppercase">
            Quartier Héron · Djibouti-Ville
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white leading-none mb-4"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          La Terrasse
        </motion.h1>

        {/* Gradient accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-0.5 mb-5 origin-center"
          style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="font-accent italic text-white text-xl md:text-2xl mb-3"
        >
          Villa Guesthouse Djibouti
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-white/90 text-sm md:text-base max-w-sm leading-relaxed mb-10"
        >
          "Un havre de paix entre Mer Rouge et désert"
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#reservation"
            onClick={(e) => { e.preventDefault(); document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            Réserver votre séjour
          </a>
          <a
            href="#chambres"
            onClick={(e) => { e.preventDefault(); document.querySelector('#chambres')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-outline text-white border-white/30 hover:border-white/70"
          >
            Nos chambres
          </a>
        </motion.div>
      </motion.div>

      {/* Stats strip — frosted glass bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10"
        style={{ background: 'rgba(10,29,38,0.75)', backdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-3 px-4 py-2 ${i < STATS.length - 1 ? 'border-r border-white/10' : ''}`}
            >
              <stat.icon size={15} className="text-coral-400 flex-shrink-0" />
              <div>
                <div className="font-display text-white text-base md:text-lg font-semibold leading-tight">{stat.value}</div>
                <div className="font-body text-white/60 text-[10px] tracking-widest uppercase">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.button
        onClick={() => document.querySelector('#apropos')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-white/40 hover:text-coral-400 transition-colors"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        aria-label="Défiler"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  )
}
