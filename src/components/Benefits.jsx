const benefits = [
  {
    number: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Ubicación Privilegiada en Hermosillo',
    description: 'Situados en la Colonia del Razo, una de las zonas más accesibles de Hermosillo, Sonora. Fácil acceso para todos tus invitados, con estacionamiento disponible.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Arquitectura Colonial Única',
    description: 'Arcos de piedra, jardines exuberantes e iluminación cálida crean un ambiente histórico y elegante que transforma cada fotografía en una obra de arte.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Atención Personalizada y Apoyo Logístico',
    description: 'Nuestro equipo te acompaña en cada paso, desde la primera visita hasta el último detalle del evento. No estás solo: somos tus aliados para que todo sea perfecto.',
  },
  {
    number: '04',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Espacios Versátiles para Todo Tipo de Evento',
    description: 'Jardín exterior, terraza, salón interior y espacios combinados. Se adapta a bodas íntimas de 50 personas o grandes celebraciones. Capacidad y flexibilidad para tu evento ideal.',
  },
  {
    number: '05',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Reputación Comprobada: 4.7 Estrellas',
    description: 'Más de 250 familias y parejas de Hermosillo nos han calificado con 4.7 estrellas. Somos uno de los jardines de eventos mejor valorados en Sonora.',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1209 0%, #2d1e08 50%, #1a1209 100%)' }}>

      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #b8964a 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-[#d4af6e] text-xs tracking-[0.3em] uppercase font-sans font-medium">
              ¿Por qué elegirnos?
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
            5 Razones para Celebrar
            <br />
            <em className="font-medium" style={{
              background: 'linear-gradient(135deg, #c9a55a, #f0d882)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>en Quinta de Anza</em>
          </h2>
          <p className="font-sans text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Llevamos años siendo el escenario de los momentos más importantes de las familias
            de Hermosillo. Esto es lo que nos hace diferentes.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.number}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1
                ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
                border-[#b8964a]/20 hover:border-[#b8964a]/50`}
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-serif text-5xl font-light leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #b8964a, #8c6f32)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                  {benefit.number}
                </span>
                <div className="text-[#b8964a] mt-1">{benefit.icon}</div>
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">{benefit.title}</h3>
              <p className="font-sans text-white/60 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-serif text-white/70 text-lg italic mb-6">
            "El lugar favorito de Hermosillo para celebrar con estilo"
          </p>
          <a
            href="https://wa.me/526624246043?text=Hola,%20quiero%20agendar%20una%20visita%20a%20Quinta%20de%20Anza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#b8964a] text-[#d4af6e] hover:bg-[#b8964a] hover:text-white font-semibold px-8 py-3 rounded-full text-sm transition-all duration-300"
          >
            Agendar visita al lugar
          </a>
        </div>
      </div>
    </section>
  )
}
