function SectionLabel({ children }) {
  return (
    <div className="ornament-divider mb-4">
      <span className="text-[#b8964a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
        {children}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="gallery-item rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src="/public/images/venue2.jpeg"
                    alt="Quinta de Anza de noche - montaje elegante"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="/images/foto3.0.jpeg"
                    alt="Decoración con luces neon y esferas doradas en Quinta de Anza"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="gallery-item rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="/images/venue-day.jpeg"
                    alt="Quinta de Anza de día - jardín y arcos coloniales"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gold accent card */}
                <div className="rounded-2xl p-5 flex flex-col items-center justify-center text-center"
                     style={{ background: 'linear-gradient(135deg, #b8964a, #8c6f32)' }}>
                  <p className="font-serif text-white text-4xl font-semibold">4.7</p>
                  <div className="flex gap-0.5 my-1">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 text-xs font-sans">+250 reseñas</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#b8964a]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#b8964a]/20 rounded-full -z-10" />
          </div>

          {/* Text content */}
          <div>
            <SectionLabel>Sobre Nosotros</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2d2926] mb-6 leading-tight">
              Un Lugar Diseñado
              <br />
              <em className="font-medium text-[#b8964a]">para lo Extraordinario</em>
            </h2>

            <p className="font-sans text-[#5a524a] leading-relaxed mb-5">
              Quinta de Anza es un exclusivo jardín y salón de eventos ubicado en el corazón de
              Hermosillo, Sonora, diseñado para crear momentos que perduran para siempre. Nuestra
              arquitectura estilo hacienda colonial, con arcos de piedra y jardines naturales exuberantes,
              ofrece un escenario único que combina la elegancia clásica con la calidez del entorno natural.
            </p>
            <p className="font-sans text-[#5a524a] leading-relaxed mb-8">
              Cada celebración en Quinta de Anza recibe atención personalizada de nuestro equipo,
              que te acompaña desde la planificación hasta el último detalle del evento, asegurando
              que todo salga perfecto. Somos el espacio favorito de las familias, parejas y empresas
              de Hermosillo que buscan vivir experiencias memorables con estilo y comodidad.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '', title: 'Jardines Naturales', desc: 'Amplias áreas verdes cuidadas con esmero' },
                { icon: '', title: 'Arquitectura Colonial', desc: 'Arcos de piedra y estilo hacienda auténtico' },
                { icon: '', title: 'Atención Personalizada', desc: 'Tu equipo de apoyo desde el inicio hasta el final' },
                { icon: '', title: 'Disponible 24/7', desc: 'El recinto está disponible para tu evento en cualquier momento' },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-white shadow-sm border border-[#b8964a]/10">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-sans font-semibold text-[#2d2926] text-sm">{item.title}</p>
                    <p className="font-sans text-[#8a7d74] text-xs mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-[#b8964a] font-sans font-semibold text-sm tracking-wide group"
            >
              Solicitar información
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
