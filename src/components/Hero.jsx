import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-amber-400/10 via-transparent to-transparent" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="py-16 lg:py-24">
          <p className="inline-flex items-center rounded-full bg-white/10 text-white/90 px-3 py-1 text-sm border border-white/20 mb-4">Assaggi • Cultura • Territorio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Impara ad assaggiare i formaggi con corsi moderni e divertenti
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Dalle basi ai master: scopri aromi, tecniche e abbinamenti con un percorso guidato da esperti.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#courses" className="rounded-full bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">Vedi i corsi</a>
            <a href="#about" className="rounded-full bg-white/10 text-white px-5 py-3 font-medium border border-white/20 hover:bg-white/20 transition">Chi siamo</a>
          </div>
        </div>
        <div className="h-[40vh] lg:h-[70vh]" />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 text-sm">Scroll</div>
    </section>
  )
}
