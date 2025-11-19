import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Invio...')
    setTimeout(() => setStatus('Grazie! Ti ricontatteremo entro 24 ore.'), 900)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Parliamo del tuo progetto</h2>
          <p className="mt-3 text-slate-300">Raccontaci obiettivi, tempi e budget. Ti risponderemo con una proposta su misura.</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
            <p className="font-medium text-white">Contatti</p>
            <p className="mt-2">Email: hello@studiomoderno.design</p>
            <p>Telefono: +39 333 123 4567</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Nome</label>
              <input required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Messaggio</label>
              <textarea required rows="5" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
            </div>
          </div>
          <button className="mt-4 rounded-full bg-white text-slate-900 px-5 py-3 font-medium">Invia richiesta</button>
          {status && <p className="mt-3 text-cyan-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
