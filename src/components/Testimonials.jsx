import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const REVIEWS = [
  {
    id: 0,
    name: 'Sarah T.',
    country: 'France',
    date: 'Janvier 2024',
    rating: 5,
    text: 'Michèle est une hôtesse exceptionnelle. Elle a rapidement obtenu nos Lettres d\'Invitation pour le visa et préparé des plats français incroyables avec des fruits de mer frais. La terrasse au coucher du soleil est inoubliable.',
    avatar: 'ST',
  },
  {
    id: 1,
    name: 'Ahmed M.',
    country: 'Éthiopie',
    date: 'Mars 2024',
    rating: 5,
    text: 'Une villa magnifique dans un quartier calme et résidentiel. La terrasse panoramique est sublime pour les petits-déjeuners en plein air. Les chambres sont spacieuses et très propres. Je recommande vivement !',
    avatar: 'AM',
  },
  {
    id: 2,
    name: 'Pierre L.',
    country: 'Belgique',
    date: 'Novembre 2023',
    rating: 5,
    text: 'Propreté irréprochable, chambres confortables et bien décorées. Le meilleur rapport qualité-prix de Djibouti ! L\'accueil de Michèle est chaleureux et ses conseils sur les excursions sont précieux.',
    avatar: 'PL',
  },
  {
    id: 3,
    name: 'Marina V.',
    country: 'Italie',
    date: 'Août 2023',
    rating: 4,
    text: 'L\'escapade sur l\'île Moucha organisée par la maison était un moment magique — plage de sable blanc, snorkeling et mangroves. La Terrasse est bien plus qu\'une chambre d\'hôtes, c\'est une expérience Djiboutienne authentique.',
    avatar: 'MV',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setCurrent((c) => (c + 1) % REVIEWS.length) }, 6000)
    return () => clearInterval(t)
  }, [])

  const go = (i) => { setDir(i > current ? 1 : -1); setCurrent(i) }
  const prev = () => { setDir(-1); setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length) }
  const next = () => { setDir(1); setCurrent((c) => (c + 1) % REVIEWS.length) }

  return (
    <section id="temoignages" className="relative bg-sea-900 py-28 px-6 overflow-hidden">
      {/* Decorative number */}
      <span className="deco-number text-white" style={{ position: 'absolute', top: 10, right: -10, opacity: 0.04 }} aria-hidden>05</span>

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-coral-700/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-sea-600/15 blur-3xl pointer-events-none" />

      {/* Top accent */}
      <div className="accent-gradient w-full mb-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-coral-500" />
            <span className="font-body text-coral-400 tracking-[0.25em] text-xs uppercase">Ce qu'ils disent</span>
            <div className="w-6 h-px bg-coral-500" />
          </div>
          <h2 className="section-title text-white mb-3">Témoignages</h2>
          <p className="section-subtitle text-sea-300">La parole de nos voyageurs</p>
          <div className="w-20 h-0.5 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }} />
        </motion.div>

        {/* Big quote & review */}
        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full"
            >
              {/* Large quote mark */}
              <div
                className="font-display text-[8rem] leading-none mb-4 select-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(224,107,74,0.25), rgba(75,184,199,0.25))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '0.8',
                }}
                aria-hidden
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className={i < REVIEWS[current].rating ? 'text-coral-400 fill-coral-400' : 'text-sea-700'} />
                ))}
              </div>

              {/* Text */}
              <p className="font-accent italic text-white/85 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
                {REVIEWS[current].text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center text-sm font-display font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(224,107,74,0.3), rgba(75,184,199,0.3))',
                    border: '1px solid rgba(224,107,74,0.4)',
                    color: '#F4977A',
                  }}
                >
                  {REVIEWS[current].avatar}
                </div>
                <div>
                  <div className="font-body font-semibold text-white text-sm">{REVIEWS[current].name}</div>
                  <div className="font-body text-sea-400 text-xs">{REVIEWS[current].country} · {REVIEWS[current].date}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-6">
          <button onClick={prev} className="text-sea-500 hover:text-coral-400 transition-colors" aria-label="Précédent">
            <ChevronLeft size={20} />
          </button>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-1.5' : 'w-1.5 h-1.5 bg-sea-700 hover:bg-sea-500'}`}
              style={i === current ? { background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' } : {}}
              aria-label={`Avis ${i + 1}`}
            />
          ))}
          <button onClick={next} className="text-sea-500 hover:text-coral-400 transition-colors" aria-label="Suivant">
            <ChevronRight size={20} />
          </button>

          <span className="ml-auto font-body text-sea-600 text-xs tracking-widest">
            {String(current + 1).padStart(2, '0')} / {String(REVIEWS.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
