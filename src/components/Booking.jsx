import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Users, Home, Send, CheckCircle } from 'lucide-react'

const ROOM_OPTIONS = [
  'Chambre Simple',
  'Chambre Double',
  'Chambre Lac Assal',
  'Suite Lac Abbé (Privative)',
  'Chambre Familiale (×4)',
  'Escapade Île Moucha',
]

const inputClass =
  'w-full bg-white/10 border border-white/20 text-white placeholder-white/40 font-body text-sm px-4 py-3 rounded-sm focus:border-coral-400 focus:bg-white/15 transition-all duration-300 outline-none'

const labelClass = 'block font-body text-white/70 text-xs tracking-widest uppercase mb-2'

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '1', room: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: '1', room: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="reservation" className="relative bg-sea-900 py-28 px-6 overflow-hidden">
      {/* Decorative number */}
      <span className="deco-number text-white" style={{ position: 'absolute', top: 10, left: -10, opacity: 0.04 }} aria-hidden>07</span>

      {/* Background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-coral-700/8 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-sea-600/20 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-coral-500" />
            <span className="font-body text-coral-400 tracking-[0.25em] text-xs uppercase">Votre séjour</span>
            <div className="w-6 h-px bg-coral-500" />
          </div>
          <h2 className="section-title text-white mb-3">Demande de réservation</h2>
          <p className="section-subtitle text-sea-300">Nous vous répondrons sous 24h</p>
          <div className="w-20 h-0.5 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, #E06B4A, #4BB8C7)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <CheckCircle size={56} className="text-coral-400 mx-auto mb-6" />
              <h3 className="font-display text-white text-2xl font-semibold mb-3">Message envoyé !</h3>
              <p className="font-body text-sea-300 text-base">
                Merci pour votre demande. Michèle vous contactera dans les 24 heures pour confirmer votre réservation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone + Guests */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+253 XX XX XX XX"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    <Users size={10} className="inline mr-1" />
                    Nombre de voyageurs *
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={inputClass + ' cursor-pointer'}
                    required
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n} className="bg-sea-900">{n} personne{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Dates */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    <CalendarDays size={10} className="inline mr-1" />
                    Date d'arrivée *
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    value={form.checkin}
                    onChange={handleChange}
                    className={inputClass + ' cursor-pointer [color-scheme:dark]'}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    <CalendarDays size={10} className="inline mr-1" />
                    Date de départ *
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    value={form.checkout}
                    onChange={handleChange}
                    className={inputClass + ' cursor-pointer [color-scheme:dark]'}
                    required
                  />
                </div>
              </div>

              {/* Row 4: Room */}
              <div>
                <label className={labelClass}>
                  <Home size={10} className="inline mr-1" />
                  Type de chambre souhaité
                </label>
                <select
                  name="room"
                  value={form.room}
                  onChange={handleChange}
                  className={inputClass + ' cursor-pointer'}
                >
                  <option value="" className="bg-sea-900">-- Sélectionner une chambre --</option>
                  {ROOM_OPTIONS.map((r) => (
                    <option key={r} value={r} className="bg-sea-900">{r}</option>
                  ))}
                </select>
              </div>

              {/* Row 5: Message */}
              <div>
                <label className={labelClass}>Message ou demandes spéciales</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Heure d'arrivée prévue, demandes particulières, excursions souhaitées..."
                  className={inputClass + ' resize-none'}
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="font-body text-white/40 text-xs leading-relaxed max-w-xs">
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre réservation.
                </p>
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2 whitespace-nowrap"
                >
                  <Send size={14} />
                  Envoyer ma demande
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
