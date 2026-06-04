import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const PHOTOS = [
  { src: '/la-terrasse-villa-guesthouse.jpg', alt: 'La Terrasse Villa Guesthouse', span: 'tall' },
  { src: '/Double-bed.jpg', alt: 'Chambre Double', span: 'normal' },
  { src: '/roof-top.jpg', alt: 'Terrasse panoramique', span: 'wide' },
  { src: '/suite-lac-abbe-privative.jpg', alt: 'Suite Lac Abbé', span: 'normal' },
  { src: '/breakfast.jpg', alt: 'Petit-déjeuner maison', span: 'normal' },
  { src: '/room-lac-assal.jpg', alt: 'Chambre Lac Assal', span: 'tall' },
  { src: '/single-bed.jpg', alt: 'Chambre Simple', span: 'normal' },
  { src: '/quadruple-room.jpg', alt: 'Chambre Familiale', span: 'wide' },
  { src: '/Fa%C3%A7ade.jpg', alt: 'Façade de la villa', span: 'normal' },
  { src: '/la-terrasse.jpg', alt: 'La terrasse', span: 'normal' },
  { src: '/Salle%20de%20bain.jpg', alt: 'Salle de bain', span: 'normal' },
  { src: '/salle%20de%20bain%202.jpg', alt: 'Salle de bain (suite)', span: 'normal' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setLightbox((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
  const next = () => setLightbox((i) => (i + 1) % PHOTOS.length)

  return (
    <section id="galerie" className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Decorative number */}
      <span className="deco-number text-sea-900" style={{ position: 'absolute', top: 10, right: -10, opacity: 0.03 }} aria-hidden>06</span>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="section-badge mx-auto"><span>En images</span></div>
          <h2 className="section-title text-sea-900 mb-3">Notre galerie</h2>
          <p className="section-subtitle text-sea-600">Découvrez La Terrasse en photos</p>
          <div className="w-20 h-0.5 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }} />
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              className="masonry-item relative group cursor-pointer overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-sea-900/0 group-hover:bg-sea-900/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-sea-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-body">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-sea-950/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
              />
              <p className="absolute -bottom-8 left-0 right-0 text-center font-body text-white/60 text-sm">
                {PHOTOS[lightbox].alt}
              </p>

              {/* Controls */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={28} />
              </button>
              <button
                onClick={prev}
                className="absolute -left-14 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Précédent"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={next}
                className="absolute -right-14 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Suivant"
              >
                <ChevronRight size={32} />
              </button>

              {/* Counter */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-white/40 font-body text-xs tracking-widest">
                {lightbox + 1} / {PHOTOS.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
