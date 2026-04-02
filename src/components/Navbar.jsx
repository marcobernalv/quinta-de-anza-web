import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-glass
        ${scrolled
          ? 'bg-white/95 shadow-md py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="Quinta de Anza Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-[#b8964a]"
          />
          <div className="hidden sm:block">
            <p className="font-serif text-xl font-semibold leading-none"
               style={{ color: scrolled ? '#2d2926' : '#fff' }}>
              Quinta de Anza
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5"
               style={{ color: scrolled ? '#b8964a' : '#d4af6e' }}>
              Espacio Colonial · Hermosillo
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-sans font-medium tracking-wide transition-colors duration-200
                hover:text-[#b8964a]
                ${scrolled ? 'text-[#2d2926]' : 'text-white'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/526624246043?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Quinta%20de%20Anza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b8964a] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#8c6f32] transition-colors duration-200"
          >
            Cotizar Evento
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#2d2926]' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#2d2926]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#2d2926]' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white/98 navbar-glass
        ${menuOpen ? 'max-h-96 border-t border-[#b8964a]/20' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#2d2926] font-medium text-base py-1 border-b border-stone-100 hover:text-[#b8964a] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/526624246043?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Quinta%20de%20Anza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b8964a] text-white text-center font-medium px-5 py-3 rounded-full mt-2 hover:bg-[#8c6f32] transition-colors"
          >
            Cotizar mi Evento
          </a>
        </nav>
      </div>
    </header>
  )
}
