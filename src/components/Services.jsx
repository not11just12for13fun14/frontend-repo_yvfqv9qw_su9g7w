import { CheckCircle2, Palette, Rocket, Workflow } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand & Identità',
    desc: 'Logo, palette, tipografia e linee guida per un brand coerente e memorabile.'
  },
  {
    icon: Workflow,
    title: 'UX Strategy',
    desc: 'Ricerca utenti, wireframe, flow e prototipi per esperienze fluide e intuitive.'
  },
  {
    icon: Rocket,
    title: 'UI & Web Design',
    desc: 'Interfacce moderne, design system e siti ad alte prestazioni.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Servizi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <s.icon className="w-10 h-10 text-cyan-300" />
              <h3 className="mt-4 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Qualità premium</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Processo trasparente</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Tempi rapidi</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
