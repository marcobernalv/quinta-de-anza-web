const services = [
  {
    icon: '',
    name: 'Bodas',
    description: 'Celebra el día más importante de tu vida en un entorno romántico y elegante. Nuestros jardines y salones se transforman en el escenario de ensueño para tu boda.',
    benefit: 'Un escenario mágico que hará que tus fotos y recuerdos sean eternos.',
    tag: 'Más popular',
  },
  {
    icon: '',
    name: 'XV Años',
    description: 'Festeja la quinceañera en un espacio que combina elegancia, amplitud y versatilidad. Decoración adaptable a cualquier temática, con espacio para pista y escenario.',
    benefit: 'El lugar perfecto para una celebración digna de una princesa en Hermosillo.',
  },
  {
    icon: '',
    name: 'Baby Showers',
    description: 'Un ambiente cálido, luminoso y natural para celebrar la llegada del nuevo integrante de la familia con las personas más queridas.',
    benefit: 'Ambiente íntimo y acogedor ideal para momentos llenos de amor y emoción.',
  },
  {
    icon: '',
    name: 'Cumpleaños',
    description: 'Desde fiestas íntimas hasta grandes celebraciones, contamos con espacios flexibles que se adaptan al tamaño y estilo de la fiesta que imaginas.',
    benefit: 'Celebra con estilo sin preocuparte por la logística, nosotros te apoyamos.',
  },
  {
    icon: '',
    name: 'Eventos Corporativos',
    description: 'Reuniones de empresa, convenciones, presentaciones y cenas de gala en un entorno profesional y elegante que impresiona a tus clientes y socios.',
    benefit: 'Proyecta imagen corporativa de alto nivel en un espacio memorable.',
  },
  {
    icon: '',
    name: 'Renta de Jardín y Terraza',
    description: 'Espacios al aire libre con vegetación natural y terraza techada, perfectos para eventos diurnos y nocturnos con iluminación cálida ambiente.',
    benefit: 'La versatilidad de un espacio exterior con toda la comodidad de un salón.',
  },
  {
    icon: '',
    name: 'Montaje Personalizado',
    description: 'Nuestro equipo te apoya en la organización y montaje del evento, adaptando el espacio a tu visión, decoración y temática particular.',
    benefit: 'Tu evento exactamente como lo soñaste, sin estrés y con apoyo profesional.',
  },
  {
    icon: '',
    name: 'Apoyo en Logística',
    description: 'Acompañamiento integral desde la planeación hasta el día del evento. Coordinamos detalles, tiempos y espacios para que tú solo disfrutes.',
    benefit: 'Vive tu celebración sin preocupaciones, con todo perfectamente organizado.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-[#b8964a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
              Lo que ofrecemos
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2d2926] mb-4">
            Servicios para
            <em className="font-medium text-[#b8964a] ml-2">Cada Ocasión</em>
          </h2>
          <p className="font-sans text-[#6b5e56] max-w-2xl mx-auto text-base leading-relaxed">
            Desde bodas íntimas hasta grandes eventos corporativos, Quinta de Anza tiene el espacio
            y el equipo ideal para hacer de tu celebración una experiencia única en Hermosillo.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-card relative bg-[#faf8f3] border border-[#b8964a]/12 rounded-2xl p-6 flex flex-col"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 bg-[#b8964a] text-white text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full tracking-wide">
                  {service.tag}
                </span>
              )}
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-[#2d2926] mb-3">{service.name}</h3>
              <p className="font-sans text-[#6b5e56] text-sm leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <div className="pt-3 border-t border-[#b8964a]/15">
                <p className="font-sans text-[#b8964a] text-xs font-medium leading-snug">
                  ✓ {service.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/526624246043?text=Hola,%20me%20interesa%20cotizar%20un%20evento%20en%20Quinta%20de%20Anza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#b8964a] hover:bg-[#8c6f32] text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}
