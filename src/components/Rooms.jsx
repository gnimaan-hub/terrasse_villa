import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Maximize2, Wifi, Wind, ChevronRight, Check } from 'lucide-react'

const ROOMS = [
  {
    id: 'simple',
    num: '01',
    name: 'Chambre Simple',
    desc: 'Cosy et lumineuse, idéale pour les voyageurs solo en quête d\'authenticité et de calme.',
    img: '/single-bed.jpg',
    guests: 1, size: '14',
    priceFDJ: '7 800', priceUSD: '44',
    features: ['Lit simple', 'Climatisation', 'WiFi', 'Petit-déjeuner inclus'],
    accent: 'coral',
  },
  {
    id: 'double',
    num: '02',
    name: 'Chambre Double',
    desc: 'Spacieuse et élégante, avec un grand lit confortable et une décoration soignée.',
    img: '/Double-bed.jpg',
    guests: 2, size: '20',
    priceFDJ: '12 000', priceUSD: '68',
    features: ['Grand lit double', 'Climatisation', 'WiFi', 'Petit-déjeuner inclus'],
    accent: 'sea',
    popular: true,
  },
  {
    id: 'lac-assal',
    num: '03',
    name: 'Chambre Lac Assal',
    desc: 'Nommée en hommage au lac le plus salé du monde. Décoration djiboutienne exclusive.',
    img: '/room-lac-assal.jpg',
    guests: 2, size: '22',
    priceFDJ: '13 500', priceUSD: '76',
    features: ['Grand lit double', 'Climatisation', 'WiFi', 'Décor exclusif'],
    accent: 'coral',
  },
  {
    id: 'lac-abbe',
    num: '04',
    name: 'Suite Lac Abbé',
    desc: 'Notre suite privative premium. Espace privatif avec salon, inspirée des paysages lunaires\'.',
    img: '/suite-lac-abbe-privative.jpg',
    guests: 2, size: '28',
    priceFDJ: '15 500', priceUSD: '87',
    features: ['Suite privative', 'Salle de bain privée', 'Salon', 'Petit-déjeuner inclus'],
    accent: 'sea',
  },
  {
    id: 'quadruple',
    num: '05',
    name: 'Chambre Familiale',
    desc: 'Grande chambre quadruple pour familles ou groupes. Espace généreux et rangements abondants.',
    img: '/quadruple-room.jpg',
    guests: 4, size: '32',
    priceFDJ: '20 000', priceUSD: '113',
    features: ['4 lits', 'Climatisation', 'WiFi', 'Espace famille'],
    accent: 'coral',
  },
]

function RoomCard({ room, index }) {
  const [hovered, setHovered] = useState(false)
  const isSeaAccent = room.accent === 'sea'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative bg-white overflow-hidden cursor-pointer card-hover-border"
      style={{
        border: hovered
          ? '1.5px solid transparent'
          : '1.5px solid #EDE5D4',
        background: hovered
          ? 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #E06B4A, #4BB8C7) border-box'
          : 'white',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Popular badge */}
      {room.popular && (
        <div
          className="absolute top-4 left-4 z-20 text-white text-[10px] font-body tracking-widest uppercase px-3 py-1"
          style={{ background: 'linear-gradient(135deg, #E06B4A, #4BB8C7)' }}
        >
          Le plus populaire
        </div>
      )}

      {/* Room number */}
      <div
        className="absolute top-4 right-4 z-20 font-display text-white/90 text-sm font-semibold"
        style={{
          textShadow: '0 1px 8px rgba(0,0,0,0.4)',
        }}
      >
        {room.num}
      </div>

      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={room.img}
          alt={room.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sea-950/60 via-transparent to-transparent" />

        {/* Price chip */}
        <div className="absolute bottom-4 right-4 text-right">
          <div className="font-display text-white text-xl font-semibold leading-none">
            {room.priceFDJ} <span className="text-sm font-body text-white/70">FDJ</span>
          </div>
          <div className="font-body text-white/50 text-xs mt-0.5">≈ {room.priceUSD} USD</div>
        </div>
      </div>

      {/* Accent bar (coral or sea) */}
      <div
        className="h-0.5 w-full"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, #E06B4A, #4BB8C7)'
            : isSeaAccent
            ? '#4BB8C7'
            : '#E06B4A',
        }}
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-sea-900 text-xl font-semibold mb-2 leading-tight">{room.name}</h3>
        <p className="font-body text-sea-700/65 text-sm leading-relaxed mb-5">{room.desc}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sea-600/60 text-xs mb-5">
          <span className="flex items-center gap-1"><Users size={11} /> {room.guests} pers.</span>
          <span className="flex items-center gap-1"><Maximize2 size={11} /> {room.size} m²</span>
          <span className="flex items-center gap-1"><Wifi size={11} /> WiFi</span>
          <span className="flex items-center gap-1"><Wind size={11} /> Clim.</span>
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-6">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs font-body text-sea-700/70">
              <Check size={10} className={isSeaAccent ? 'text-sea-500' : 'text-coral-500'} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#reservation"
          onClick={(e) => { e.preventDefault(); document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' }) }}
          className={`inline-flex items-center gap-2 text-xs font-body font-medium tracking-widest uppercase transition-all duration-200 group/link ${
            isSeaAccent ? 'text-sea-600 hover:text-sea-900' : 'text-coral-600 hover:text-coral-800'
          }`}
        >
          Réserver cette chambre
          <ChevronRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Rooms() {
  return (
    <section id="chambres" className="relative bg-sea-50 py-28 px-6 overflow-hidden">
      {/* Decorative number */}
      <span className="deco-number text-sea-900" style={{ position: 'absolute', top: 10, left: -20, opacity: 0.035 }} aria-hidden>02</span>

      {/* Top border accent */}
      <div className="accent-gradient w-full mb-0" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto"><span>Nos chambres</span></div>
          <h2 className="section-title text-sea-900 mb-3">Chambres & Tarifs</h2>
          <p className="section-subtitle text-sea-600">Confort et authenticité djiboutienne</p>
          <div
            className="w-20 h-0.5 mx-auto mt-6"
            style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }}
          />
          <p className="font-body text-sea-700/55 text-sm mt-5 max-w-md mx-auto">
            Toutes les chambres incluent le WiFi gratuit, la climatisation et le petit-déjeuner servi sur la terrasse panoramique.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-body text-sea-600/50 text-xs mt-8 tracking-widest uppercase"
        >
          Check-in 14h00 · Check-out 11h00 · Transfert aéroport disponible
        </motion.p>
      </div>
    </section>
  )
}
