import { useState } from 'react'

const eventTypes = [
  'Boda',
  'XV Años',
  'Baby Shower',
  'Cumpleaños',
  'Evento Corporativo',
  'Reunión Empresarial',
  'Otro',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventType: '', eventDate: '', guests: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleWhatsApp = (e) => {
    e.preventDefault()
    const msg = `Hola, me interesa cotizar un evento en Quinta de Anza.

    *Nombre:* ${form.name}

    *Teléfono:* ${form.phone}

    *Email:* ${form.email}

    *Tipo de evento:* ${form.eventType}

    *Fecha estimada:* ${form.eventDate}

    *Número de invitados:* ${form.guests}

    *Mensaje:* ${form.message}`.trim();
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left info panel */}
          <div className="lg:col-span-2">
            <div className="ornament-divider mb-4 justify-start">
              <span className="text-[#b8964a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
                Contacto
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2d2926] mb-4 leading-tight">
              Reserva tu
              <br />
              <em className="font-medium text-[#b8964a]">Fecha Ideal</em>
            </h2>
            <p className="font-sans text-[#6b5e56] text-sm leading-relaxed mb-8">
              Contáctanos hoy para conocer disponibilidad, hacer una visita al lugar
              y comenzar a planear el evento de tus sueños en Hermosillo.
            </p>

            {/* Contact channels */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="https://wa.me/526624246043?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Quinta%20de%20Anza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#25d366]/30 bg-[#f0fdf4] hover:bg-[#dcfce7] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#2d2926] text-sm">WhatsApp</p>
                  <p className="font-sans text-[#6b5e56] text-xs">662 424 6043 / 662 400 8540</p>
                </div>
                <svg className="w-4 h-4 text-[#25d366] ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="tel:6624246043"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#b8964a]/20 bg-[#faf8f3] hover:bg-[#f0e8d8] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #b8964a, #8c6f32)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#2d2926] text-sm">Teléfono</p>
                  <p className="font-sans text-[#6b5e56] text-xs">662 424 6043</p>
                </div>
                <svg className="w-4 h-4 text-[#b8964a] ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:ventas@quintadeanza.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#b8964a]/20 bg-[#faf8f3] hover:bg-[#f0e8d8] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #b8964a, #8c6f32)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#2d2926] text-sm">Email</p>
                  <p className="font-sans text-[#6b5e56] text-xs">ventas@quintadeanza.com</p>
                </div>
                <svg className="w-4 h-4 text-[#b8964a] ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div>
              <p className="font-sans text-[#2d2926] font-semibold text-xs tracking-widest uppercase mb-3">Síguenos</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/quintadeanza" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#faf8f3] border border-[#b8964a]/20 flex items-center justify-center text-[#b8964a] hover:bg-[#b8964a] hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/quinta.deanza" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#faf8f3] border border-[#b8964a]/20 flex items-center justify-center text-[#b8964a] hover:bg-[#b8964a] hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#faf8f3] rounded-2xl border border-[#b8964a]/15 px-8">
                <div className="w-16 h-16 rounded-full bg-[#25d366]/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#25d366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#2d2926] mb-2">¡Mensaje enviado!</h3>
                <p className="font-sans text-[#6b5e56] text-sm mb-6">
                  Tu solicitud fue enviada por WhatsApp. Nos pondremos en contacto contigo muy pronto.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="font-sans text-[#b8964a] text-sm underline underline-offset-2">
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsApp}
                className="bg-[#faf8f3] rounded-2xl border border-[#b8964a]/15 p-8 shadow-sm">
                <h3 className="font-serif text-2xl text-[#2d2926] mb-6">
                  Solicitar Cotización
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-[#2d2926] mb-2 tracking-wide uppercase">
                      Nombre completo *
                    </label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full bg-white border border-[#b8964a]/20 rounded-xl px-4 py-3 font-sans text-sm text-[#2d2926] placeholder-[#b8a89a] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-[#2d2926] mb-2 tracking-wide uppercase">
                      Teléfono *
                    </label>
                    <input
                      type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="662 000 0000"
                      className="w-full bg-white border border-[#b8964a]/20 rounded-xl px-4 py-3 font-sans text-sm text-[#2d2926] placeholder-[#b8a89a] transition-all"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-sans text-xs font-semibold text-[#2d2926] mb-2 tracking-wide uppercase">
                    Correo electrónico
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full bg-white border border-[#b8964a]/20 rounded-xl px-4 py-3 font-sans text-sm text-[#2d2926] placeholder-[#b8a89a] transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-[#2d2926] mb-2 tracking-wide uppercase">
                      Tipo de evento *
                    </label>
                    <select
                      name="eventType" required value={form.eventType} onChange={handleChange}
                      className="w-full bg-white border border-[#b8964a]/20 rounded-xl px-4 py-3 font-sans text-sm text-[#2d2926] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Seleccionar...</option>
                      {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-[#2d2926] mb-2 tracking-wide uppercase">
                      Fecha del evento
                    </label>
                    <input
                      type="date" name="eventDate" value={form.eventDate} onChange={handleChange}
                      className="w-full bg-white border border-[#b8964a]/20 rounded-xl px-4 py-3 font-sans text-sm text-[#2d2926] transition-all"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-sans text-xs font-semibold text-[#2d2926] mb-2 tracking-wide uppercase">
                    Número de invitados aproximado
                  </label>
                  <input
                    type="number" name="guests" value={form.guests} onChange={handleChange}
                    placeholder="Ej. 150"
                    className="w-full bg-white border border-[#b8964a]/20 rounded-xl px-4 py-3 font-sans text-sm text-[#2d2926] placeholder-[#b8a89a] transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-sans text-xs font-semibold text-[#2d2926] mb-2 tracking-wide uppercase">
                    Mensaje
                  </label>
                  <textarea
                    name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Cuéntanos más sobre tu evento, decoración, o cualquier duda..."
                    className="w-full bg-white border border-[#b8964a]/20 rounded-xl px-4 py-3 font-sans text-sm text-[#2d2926] placeholder-[#b8a89a] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1da851] text-white font-semibold py-4 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Enviar por WhatsApp
                </button>

                <p className="font-sans text-[#b8a89a] text-xs text-center mt-3">
                  Al enviar, se abrirá WhatsApp con tu mensaje pre-llenado
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
