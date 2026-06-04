import { motion } from 'framer-motion'
import { Waves, MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from 'lucide-react'

const QUICK_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#chambres', label: 'Chambres & Tarifs' },
  { href: '#equipements', label: 'Équipements' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#reservation', label: 'Réservation' },
  { href: '#localisation', label: 'Localisation' },
]

const nav = (e, href) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

export default function Footer() {
  return (
    <footer className="bg-sea-950 text-white">
      {/* Top accent gradient line */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #E06B4A 30%, #4BB8C7 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #E06B4A, #4BB8C7)' }}
              >
                <Waves size={17} className="text-white" />
              </div>
              <div>
                <div className="font-display text-xl text-white leading-tight">La Terrasse</div>
                <div className="font-body text-sea-500 text-[10px] tracking-[0.2em] uppercase">Villa Guesthouse · Djibouti</div>
              </div>
            </div>
            <p className="font-body text-sea-500 text-sm leading-relaxed max-w-xs mb-6">
              Chambre d'hôtes de charme au Quartier Héron, Djibouti-Ville. Accueil chaleureux, terrasse panoramique et escapades vers l'Île Moucha.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/people/Djibouti-Villa-Guesthouse-La-terrasse/100063966333836/', Icon: Facebook, label: 'Facebook' },
                { href: '#', Icon: Instagram, label: 'Instagram' },
                { href: 'https://www.tripadvisor.com/Hotel_Review-g293787-d15666632-Reviews-La_Terrasse_Villa_Guesthouse-Djibouti.html', Icon: ExternalLink, label: 'TripAdvisor' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-sea-700 hover:border-coral-500 flex items-center justify-center text-sea-500 hover:text-coral-400 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body text-white font-medium text-xs tracking-[0.2em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => nav(e, link.href)}
                    className="font-body text-sea-500 text-sm hover:text-coral-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-white font-medium text-xs tracking-[0.2em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-coral-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-sea-500 text-sm leading-relaxed">
                  Quartier Héron, Rue Addis Abeba<br />Lot 40, Djibouti-Ville
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-coral-500 flex-shrink-0" />
                <a href="tel:+25377884400" className="font-body text-sea-500 text-sm hover:text-coral-400 transition-colors">
                  +253 77 88 44 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-coral-500 flex-shrink-0" />
                <a href="mailto:contact@laterrassedjibouti.com" className="font-body text-sea-500 text-sm hover:text-coral-400 transition-colors break-all">
                  contact@laterrassedjibouti.com
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-sea-800">
              <p className="font-body text-sea-600 text-xs">Check-in : 14h00 · Check-out : 11h00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sea-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-sea-700 text-xs">
            © {new Date().getFullYear()} La Terrasse Villa Guesthouse Djibouti. Tous droits réservés.
          </p>
          <p className="font-body text-sea-700 text-xs">
            Développé par <span className="text-coral-600">WebSense</span> · Djibouti, 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
