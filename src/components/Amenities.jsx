import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sunrise, Wifi, Wind, Coffee, Car, Shield, Utensils, Anchor } from 'lucide-react'

const TABS = ['Confort', 'Services', 'Expériences']

const AMENITIES = {
  Confort: [
    { icon: Wind, title: 'Climatisation', desc: 'Climatisation individuelle et ventilateurs de plafond dans chaque chambre.' },
    { icon: Wifi, title: 'WiFi gratuit', desc: 'Connexion haut débit incluse dans toutes les chambres et espaces communs.' },
    { icon: Utensils, title: 'Cuisine partagée', desc: 'Cuisine entièrement équipée avec réfrigérateur individuel pour chaque hôte.' },
    { icon: Sunrise, title: 'Terrasse panoramique', desc: 'Rooftop panoramique avec vue sur Djibouti-Ville — l\'âme de La Terrasse.' },
  ],
  Services: [
    { icon: Coffee, title: 'Petit-déjeuner maison', desc: 'Déjeuner généreux préparé chaque matin avec produits frais, servi en terrasse.' },
    { icon: Car, title: 'Transfert aéroport', desc: 'Navette depuis/vers l\'Aéroport International Ambouli (8,5 km — ~15 min).' },
    { icon: Shield, title: 'Assistance visa', desc: 'Michèle vous aide à obtenir votre Lettre d\'Invitation pour le visa à l\'arrivée.' },
    { icon: Anchor, title: 'Escapade Île Moucha', desc: 'Organisation d\'escapades week-end sur l\'île Moucha — plage et snorkeling inclus.' },
  ],
  Expériences: [
    { icon: Anchor, title: 'Plongée & Snorkeling', desc: 'Excursions dans les eaux cristallines du Golfe de Tadjourah et de la mer Rouge.' },
    { icon: Car, title: 'Excursions 4×4', desc: 'Lac Assal, Lac Abbé, Golfe de Tadjourah — avec nos partenaires locaux certifiés.' },
    { icon: Sunrise, title: 'Coucher de soleil', desc: 'Vue spectaculaire chaque soir depuis la terrasse panoramique sur la ville.' },
    { icon: Utensils, title: 'Gastronomie locale', desc: 'Carnet d\'adresses exclusif de Michèle — restaurants, marchés et plats typiques.' },
  ],
}

export default function Amenities() {
  const [activeTab, setActiveTab] = useState('Confort')

  return (
    <section id="equipements" className="relative bg-ivory py-28 px-6 overflow-hidden grain">
      {/* Decorative number */}
      <span className="deco-number text-sea-900" style={{ position: 'absolute', top: 10, right: -10, opacity: 0.035 }} aria-hidden>03</span>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto"><span>Ce qui nous distingue</span></div>
          <h2 className="section-title text-sea-900 mb-3">Équipements & Services</h2>
          <p className="section-subtitle text-sea-600">Tout pour votre confort à Djibouti</p>
          <div className="w-20 h-0.5 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }} />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Left: rooftop image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src="/roof-top.jpg" alt="Terrasse panoramique La Terrasse" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-sea-900/60 to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-coral-400" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-sea-400" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-white text-xl font-semibold">Terrasse Panoramique</p>
                <p className="font-body text-white/65 text-sm mt-1">Petit-déjeuner avec vue sur Djibouti</p>
              </div>
            </div>

            {/* Breakfast badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-5 -right-5 w-32 h-32 border-4 border-ivory overflow-hidden shadow-2xl"
            >
              <img src="/breakfast.jpg" alt="Petit-déjeuner maison" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Right: tabs + grid */}
          <div className="lg:col-span-3">
            {/* Tab bar */}
            <div className="flex gap-0 mb-10 border-b border-sand">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative font-body text-sm px-5 py-3 transition-colors duration-200 ${
                    activeTab === tab ? 'text-sea-900 font-medium' : 'text-sea-700/60 hover:text-sea-800'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-line"
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {AMENITIES[activeTab].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="bg-white p-5 border border-sand hover:border-coral-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-sea-50 text-sea-600 group-hover:bg-coral-50 group-hover:text-coral-500 transition-colors">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-display text-sea-900 font-semibold text-base mb-1">{item.title}</h4>
                        <p className="font-body text-sea-700/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
