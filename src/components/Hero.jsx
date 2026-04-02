export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/public/images/venue2.jpeg"
          alt="Quinta de Anza - Jardín de eventos en Hermosillo"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Decorative border */}
      <div className="absolute inset-6 border border-[#b8964a]/30 pointer-events-none hidden md:block" />
      <div className="absolute inset-8 border border-[#b8964a]/15 pointer-events-none hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-20">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-px bg-[#b8964a]" />
          <span className="text-[#d4af6e] text-xs tracking-[0.35em] uppercase font-sans font-medium">
            Hermosillo, Sonora
          </span>
          <span className="w-10 h-px bg-[#b8964a]" />
        </div>

        {/* Logo */}
        <img
          src="/public/images/logo.jpeg"
          alt="QA Logo"
          className="w-24 h-24 object-cover rounded-full border-2 border-[#b8964a] mx-auto mb-6 shadow-2xl"
        />

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-4">
          Donde Cada
          <br />
          <span className="italic font-medium" style={{
            background: 'linear-gradient(135deg, #c9a55a 0%, #f0d882 50%, #b8964a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Celebración
          </span>
          <br />
          Se Vuelve Inolvidable
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Jardín y salón de eventos con arquitectura estilo hacienda,
          jardines naturales y atención personalizada para bodas,
          XV años y celebraciones especiales en Hermosillo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://wa.me/526624246043?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Quinta%20de%20Anza%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25d366] hover:bg-[#1da851] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whatsapp-pulse"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Cotizar por WhatsApp
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-[#2d2926] font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
          >
            Ver Disponibilidad
          </a>
        </div>

        {/* Stats + Photo */}
        <div className="flex flex-col items-center justify-center mt-32 sm:mt-40">
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 text-center mt-8">
            {[
              { value: '4.7★', label: 'Calificación' },
              { value: '+250', label: 'Reseñas' },
              { value: '24/7', label: 'Disponible' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-semibold" style={{
                  background: 'linear-gradient(135deg, #c9a55a, #f0d882)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>{stat.value}</p>
                <p className="text-white/70 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-16 bg-[#b8964a]/40" />

          {/* Photo */}
          <div className="hidden relative flex-shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#b8964a]/60 shadow-2xl gallery-item">
              <img
                src="/images/event-decor.jpeg"
                alt="Decoración de evento en Quinta de Anza Hermosillo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold corner accent */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#b8964a] rounded-br-lg" />
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#b8964a] rounded-tl-lg" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase"></span>
        <div className="w-px h-10 bg-gradient-to-b from-[#b8964a] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
