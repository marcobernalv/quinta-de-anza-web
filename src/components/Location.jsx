export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Info column */}
          <div>
            <div className="ornament-divider mb-4 justify-start">
              <span className="text-[#b8964a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
                Ubicación
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2d2926] mb-4">
              Encuéntranos en
              <br />
              <em className="font-medium text-[#b8964a]">Hermosillo, Sonora</em>
            </h2>
            <p className="font-sans text-[#6b5e56] leading-relaxed mb-8 text-sm">
              Quinta de Anza se encuentra en una de las zonas más accesibles y
              reconocidas de Hermosillo, con fácil acceso desde las principales avenidas
              de la ciudad y estacionamiento disponible para tus invitados.
            </p>

            {/* Address card */}
            <div className="bg-white rounded-2xl p-6 border border-[#b8964a]/15 shadow-sm mb-6">
              <div className="flex gap-4 items-start mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #b8964a, #8c6f32)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#2d2926] text-sm mb-1">Dirección</p>
                  <p className="font-sans text-[#6b5e56] text-sm leading-relaxed">
                    Pbro. Pedro Villegas Ramírez No. 2<br />
                    Col. del Razo, C.P. 83070<br />
                    Hermosillo, Sonora, México
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-[#b8964a]/10 pt-5">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#faf8f3]">
                    <svg className="w-4 h-4 text-[#b8964a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[#2d2926] text-xs">Disponibilidad</p>
                    <p className="font-sans text-[#6b5e56] text-xs mt-0.5">24 horas, 7 días</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#faf8f3]">
                    <svg className="w-4 h-4 text-[#b8964a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[#2d2926] text-xs">Teléfono</p>
                    <p className="font-sans text-[#6b5e56] text-xs mt-0.5">662 424 6043</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zones served */}
            <div className="mb-8">
              <p className="font-sans font-semibold text-[#2d2926] text-sm mb-3">Atendemos eventos de toda la zona:</p>
              <div className="flex flex-wrap gap-2">
                {['Hermosillo', 'Col. del Razo', 'Centro', 'San Benito', 'Pitic', 'Villas del Río', 'Proyectos del Sur', 'Sonora'].map(zone => (
                  <span key={zone} className="bg-white border border-[#b8964a]/20 text-[#5a524a] font-sans text-xs px-3 py-1.5 rounded-full">
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://www.google.com/maps/place/Quinta+de+Anza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d2926] text-white font-sans font-medium px-6 py-3 rounded-full text-sm hover:bg-[#b8964a] transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Cómo llegar
            </a>
          </div>

          {/* Map column */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#b8964a]/15 h-[480px]">
            <iframe
              title="Mapa Quinta de Anza Hermosillo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.4!2d-110.9476547!3d29.0766658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce84a88b7bae11%3A0x4e2c71b11e8d5a5f!2sQuinta%20de%20Anza!5e0!3m2!1ses!2smx!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
