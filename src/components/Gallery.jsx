import { useState } from 'react'

const galleryItems = [
  {
    src: '/images/foto1.jpeg',
    alt: 'Jardín colonial de Quinta de Anza con arcos de piedra y mesas decoradas',
    label: 'Jardín Colonial',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/foto2.jpeg',
    alt: 'Montaje nocturno elegante con iluminación cálida en Quinta de Anza',
    label: 'Ambiente Nocturno',
    span: '',
  },
  {
    src: '/images/foto3.jpeg',
    alt: 'Logo oficial de Quinta de Anza - Espacio Colonial Hermosillo',
    label: 'Espacio Colonial',
    span: '',
  },
  {
    src: '/images/foto4.jpeg',
    alt: 'Boda romántica en Quinta de Anza Hermosillo',
    label: 'Boda Romántica',
    span: 'col-span-2',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="galeria" className="py-24 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-[#b8964a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
              Galería
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2d2926] mb-4">
            Espacios que
            <em className="font-medium text-[#b8964a] ml-2">Enamoran</em>
          </h2>
          <p className="font-sans text-[#6b5e56] max-w-xl mx-auto text-sm leading-relaxed">
            Cada rincón de Quinta de Anza fue pensado para crear imágenes memorables.
            Descubre los espacios que harán de tu evento algo irrepetible.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {/* Large hero image */}
          <div
            className="gallery-item col-span-2 row-span-2 rounded-2xl overflow-hidden cursor-pointer relative group shadow-lg"
            onClick={() => setLightbox(galleryItems[0])}
          >
            <img src={galleryItems[0].src} alt={galleryItems[0].alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-serif text-lg">{galleryItems[0].label}</span>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Night venue */}
          <div
            className="gallery-item rounded-2xl overflow-hidden cursor-pointer relative group shadow-lg"
            onClick={() => setLightbox(galleryItems[1])}
          >
            <img src={galleryItems[1].src} alt={galleryItems[1].alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-serif text-sm">{galleryItems[1].label}</span>
            </div>
          </div>

          {/* Logo/brand */}
          <div className="gallery-item rounded-2xl overflow-hidden cursor-pointer relative group"
          onClick={() => setLightbox(galleryItems[2])}
          >
            <img 
            src={galleryItems[2].src} 
            alt={galleryItems[2].alt} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <span className="text-white font-serif text-sm">
              
              {galleryItems[2].label}
              
              </span>
              </div>
              </div>

          {/* Wide bottom image */}
          <div
            className="gallery-item col-span-2 rounded-2xl overflow-hidden cursor-pointer relative group shadow-lg"
            onClick={() => setLightbox(galleryItems[3])}
          >
            <img src={galleryItems[3].src} alt={galleryItems[3].alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-serif text-lg">{galleryItems[3].label}</span>
            </div>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/quinta.deanza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#b8964a] border border-[#b8964a]/40 hover:bg-[#b8964a] hover:text-white font-sans font-medium px-7 py-3 rounded-full text-sm transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Ver más fotos en Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
