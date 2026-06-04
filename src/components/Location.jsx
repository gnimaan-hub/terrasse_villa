import { motion } from 'framer-motion'
import { MapPin, Clock, Plane, Navigation } from 'lucide-react'

const INFO = [
  { icon: MapPin, label: 'Adresse', value: 'Quartier Héron, Rue Addis Abeba — Lot 40\nDjibouti-Ville, République de Djibouti' },
  { icon: Plane, label: 'Aéroport', value: 'Aéroport International Ambouli\nà 8,5 km — ~15 min en taxi' },
  { icon: Clock, label: 'Horaires', value: 'Check-in : 14h00\nCheck-out : 11h00' },
  { icon: Navigation, label: 'GPS', value: '11.5832° N, 43.1507° E' },
]

export default function Location() {
  return (
    <section id="localisation" className="relative bg-ivory py-28 px-6 overflow-hidden grain">
      <span className="deco-number text-sea-900" style={{ position: 'absolute', top: 10, left: -10, opacity: 0.035 }} aria-hidden>08</span>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="section-badge mx-auto"><span>Nous trouver</span></div>
          <h2 className="section-title text-sea-900 mb-3">Localisation</h2>
          <p className="section-subtitle text-sea-600">Au cœur du Quartier Héron</p>
          <div className="w-20 h-0.5 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 rounded-sm overflow-hidden shadow-xl border border-dune"
          >
            <iframe
              title="La Terrasse Villa Guesthouse Djibouti"
              src="https://www.openstreetmap.org/export/embed.html?bbox=43.1407%2C11.5782%2C43.1607%2C11.5882&layer=mapnik&marker=11.5832%2C43.1507"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block', filter: 'saturate(0.9) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 space-y-4"
          >
            {INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="bg-white border border-sand rounded-sm p-5 flex gap-4 hover:border-coral-200 hover:shadow-md transition-all duration-300"
              >
                <div className="p-2.5 bg-sea-50 text-sea-600 rounded-sm flex-shrink-0 h-fit">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="font-body text-coral-500 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                  <p className="font-body text-sea-800 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Google Maps link */}
            <motion.a
              href="https://maps.google.com/?q=11.5832,43.1507"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="btn-primary flex items-center justify-center gap-2 w-full text-center"
            >
              <Navigation size={14} />
              Itinéraire Google Maps
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
