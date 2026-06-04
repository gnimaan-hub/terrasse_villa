import { motion } from 'framer-motion'
import { Anchor, Fish, TreePine, Sun } from 'lucide-react'

const HIGHLIGHTS = [
  { icon: Fish, label: 'Snorkeling & Plongée' },
  { icon: TreePine, label: 'Mangroves' },
  { icon: Sun, label: 'Plage de sable blanc' },
  { icon: Anchor, label: 'Escapade week-end' },
]

export default function MouchaIsland() {
  return (
    <section className="relative bg-sea-800 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[560px]">

        {/* Left: image panel */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden lg:min-h-[560px] min-h-[260px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/la-terrasse.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-800/0 via-sea-800/20 to-sea-800/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-sea-800/60 to-transparent lg:hidden" />

          {/* Decorative coral accent */}
          <div className="absolute top-8 left-8 w-14 h-14 border-t-2 border-l-2 border-coral-400 opacity-70" />
          <div className="absolute bottom-8 right-8 w-14 h-14 border-b-2 border-r-2 border-sea-400 opacity-70" />
        </motion.div>

        {/* Right: content */}
        <div className="relative flex items-center px-8 md:px-14 py-16">
          {/* Decorative number */}
          <span className="deco-number text-white" style={{ position: 'absolute', top: 0, right: -10, opacity: 0.05 }} aria-hidden>04</span>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 max-w-lg"
          >
            <div className="section-badge mb-0">
              <span className="text-coral-400" style={{ color: '#F4977A' }}>Annexe insulaire</span>
            </div>

            <h2 className="font-display text-white text-4xl md:text-5xl font-semibold leading-tight mt-6 mb-3">
              Échappée à <br />
              <span className="gradient-text">l'Île Moucha</span>
            </h2>

            <div className="w-16 h-0.5 mb-8" style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }} />

            <p className="font-body text-white/65 leading-relaxed mb-5 text-[15px]">
              Michèle gère une annexe exclusive sur <strong className="text-white">l'Île Moucha</strong>, en bordure d'une crique de sable blanc. À 5 minutes en canoë des mangroves et idéalement positionné pour le snorkeling dans les eaux turquoise du Golfe d'Aden.
            </p>
            <p className="font-body text-white/65 leading-relaxed mb-10 text-[15px]">
              Organisez votre escapade week-end depuis La Terrasse — transport, hébergement et activités nautiques inclus.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3"
                >
                  <h.icon size={15} className="text-coral-400 flex-shrink-0" />
                  <span className="font-body text-white/80 text-sm">{h.label}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#reservation"
              onClick={(e) => { e.preventDefault(); document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              Réserver une escapade
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
