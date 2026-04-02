const testimonials = [
  {
    name: 'Claudia Rodríguez',
    event: 'Boda · Noviembre 2024',
    rating: 5,
    avatar: 'CR',
    text: 'Celebré mi boda en Quinta de Anza y fue absolutamente perfecto. Los jardines son increíblemente hermosos, con esos arcos de piedra que le dan un toque mágico a cada fotografía. El equipo nos apoyó en todo momento y nuestros invitados no pararon de hacer comentarios sobre lo elegante del lugar. Sin duda, el mejor salón de eventos en Hermosillo.',
  },
  {
    name: 'Valeria Morales',
    event: 'XV Años · Marzo 2025',
    rating: 5,
    avatar: 'VM',
    text: 'Desde que vi las fotos de Quinta de Anza supe que era el lugar perfecto para los XV de mi hija. La terraza iluminada de noche es de otro mundo. Toda la coordinación fue excelente y el lugar se adaptó perfectamente a nuestra decoración temática. Mis invitados quedaron impresionados. ¡100% recomendado!',
  },
  {
    name: 'Roberto Acuña',
    event: 'Evento Corporativo · Enero 2025',
    rating: 5,
    avatar: 'RA',
    text: 'Organizamos la cena de fin de año de nuestra empresa en Quinta de Anza y fue una experiencia excepcional. La combinación de jardines naturales y ambiente elegante proyectó exactamente la imagen que buscábamos. El personal fue muy profesional y el apoyo logístico nos facilitó enormemente la organización. Lo recomendamos ampliamente.',
  },
  {
    name: 'Marcela Fuentes',
    event: 'Baby Shower · Septiembre 2024',
    rating: 5,
    avatar: 'MF',
    text: 'Organicé el baby shower de mi hermana en Quinta de Anza y fue una tarde mágica. El ambiente natural del jardín con la luz del día fue simplemente precioso. La atención del equipo fue muy amable y nos dieron toda la libertad de decorar como quisimos. El lugar es amplio, limpio y muy fotogénico. ¡Gracias por hacerlo tan especial!',
  },
  {
    name: 'Jorge Ibarra',
    event: 'Cumpleaños · Agosto 2024',
    rating: 4,
    avatar: 'JI',
    text: 'Festejamos los 50 años de mi papá en Quinta de Anza y fue una noche memorable. El espacio es muy versátil y logramos montar exactamente lo que teníamos en mente. Los arcos coloniales iluminados de noche son espectaculares. Muy buen lugar para eventos especiales en Hermosillo, con un ambiente diferente al de cualquier otro salón.',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-4 h-4 ${i <= count ? 'text-[#b8964a]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-[#b8964a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
              Testimonios
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2d2926] mb-4">
            Lo que Dicen
            <em className="font-medium text-[#b8964a] ml-2">Nuestros Clientes</em>
          </h2>
          <p className="font-sans text-[#6b5e56] max-w-xl mx-auto text-sm leading-relaxed">
            Más de 250 familias y empresas de Hermosillo han confiado en nosotros para sus momentos más especiales.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 bg-[#faf8f3] border border-[#b8964a]/20 px-6 py-3 rounded-full">
            <span className="font-serif text-2xl font-semibold text-[#b8964a]">4.7</span>
            <StarRating count={5} />
            <span className="font-sans text-[#6b5e56] text-sm">+250 reseñas en Google</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-[#faf8f3] border border-[#b8964a]/10 rounded-2xl p-7 hover:shadow-xl transition-shadow duration-300
                ${i === 0 ? 'lg:col-span-1 lg:row-span-1' : ''}`}
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 font-serif text-6xl text-[#b8964a]/15 leading-none select-none">"</div>

              <StarRating count={t.rating} />

              <p className="font-sans text-[#5a524a] text-sm leading-relaxed mt-4 mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-[#b8964a]/10 pt-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-sans font-semibold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #b8964a, #8c6f32)' }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#2d2926] text-sm">{t.name}</p>
                  <p className="font-sans text-[#b8964a] text-xs">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Quinta+de+Anza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5a524a] hover:text-[#b8964a] font-sans text-sm transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>
            </svg>
            Ver todas las reseñas en Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
