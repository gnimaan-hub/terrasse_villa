import { motion } from 'framer-motion'
import { Star, Award, Coffee, Home } from 'lucide-react'

const STATS = [
  { icon: Star, value: '4.5', label: 'Note TripAdvisor', color: 'coral' },
  { icon: Home, value: '5', label: 'Types de chambres', color: 'sea' },
  { icon: Coffee, value: '100%', label: 'Petit-déj. maison', color: 'coral' },
  { icon: Award, value: '10+', label: 'Années d\'accueil', color: 'sea' },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
}

export default function About() {
  return (
    <section id="apropos" className="relative bg-ivory py-28 px-6 overflow-hidden grain">
      {/* Decorative section number */}
      <span
        className="deco-number text-sea-900 select-none"
        style={{ position: 'absolute', top: 20, right: 20, opacity: 0.04 }}
        aria-hidden="true"
      >
        01
      </span>

      {/* Top accent line */}
      <div className="accent-gradient w-full mb-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: image with overlapping badge */}
          <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/Fa%C3%A7ade.jpg"
                alt="La Terrasse Villa Guesthouse — Façade"
                className="w-full h-full object-cover"
              />
              {/* Coral top-left corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-coral-500" />
              {/* Teal bottom-right corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-sea-400" />
              {/* Gradient image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sea-900/30 to-transparent" />
            </div>

            {/* Floating location badge */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-5 -left-5 bg-sea-800 text-white px-6 py-4 shadow-2xl"
            >
              <div className="font-display text-2xl font-semibold text-coral-400">Quartier Héron</div>
              <div className="font-body text-sea-300 text-xs tracking-widest uppercase mt-1">Djibouti-Ville</div>
            </motion.div>

            {/* Breakfast image inset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-5 right-5 w-28 h-28 shadow-xl overflow-hidden border-2 border-ivory"
            >
              <img src="/breakfast.jpg" alt="Petit-déjeuner maison" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <div className="lg:pl-8">
            {/* Badge */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="section-badge mb-6">
                <span>Notre histoire</span>
              </div>
              <h2 className="section-title text-sea-900 mb-2">
                Un refuge de charme
              </h2>
              <h3 className="section-subtitle text-sea-600 mb-8">
                au cœur de Djibouti
              </h3>
            </motion.div>

            {/* Accent line under subtitle */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-16 h-0.5 mb-8 origin-left"
              style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }}
            />

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-sea-800/75 font-body leading-relaxed text-[15px]"
            >
              <p>
                Nichée dans le paisible <strong className="text-sea-800">Quartier Héron</strong>, La Terrasse est une villa guesthouse de charme qui vous accueille comme chez vous. Loin de l'agitation de la capitale, notre établissement offre une parenthèse de sérénité au cœur de Djibouti-Ville.
              </p>
              <p>
                Gérée avec passion par <strong className="text-sea-800">Michèle</strong>, notre maîtresse de maison, La Terrasse se distingue par son accueil chaleureux, ses chambres soigneusement décorées et ses petits déjeuners généreux.
              </p>
              <p>
                Depuis notre <strong className="text-sea-800">terrasse panoramique</strong>, savourez les matins Djiboutiens dans une atmosphère unique — entre la fraîcheur de l'aube et les premières lueurs sur la ville.
              </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 bg-white border border-sand hover:border-coral-200 transition-colors"
                >
                  <div className={`p-2 ${stat.color === 'coral' ? 'bg-coral-50 text-coral-500' : 'bg-sea-50 text-sea-500'}`}>
                    <stat.icon size={16} />
                  </div>
                  <div>
                    <div className={`font-display text-2xl font-semibold ${stat.color === 'coral' ? 'text-coral-500' : 'text-sea-600'}`}>
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-sea-700/65">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.55 }} className="mt-10">
              <a
                href="#reservation"
                onClick={(e) => { e.preventDefault(); document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                Réserver votre séjour
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
