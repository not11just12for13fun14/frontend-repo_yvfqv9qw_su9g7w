import { motion } from 'framer-motion'

const works = [
  { title: 'App mobile fintech', tags: ['UX', 'UI', 'Design System'], img: 'https://images.unsplash.com/photo-1553484771-047a44eee27f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Branding studio creativo', tags: ['Logo', 'Brand', 'Guidelines'], img: 'https://images.unsplash.com/photo-1604881987926-786c2de347d2?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Dashboard SaaS', tags: ['UX', 'UI', 'Web App'], img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
  { title: 'E-commerce fashion', tags: ['UX', 'UI', 'Marketing'], img: 'https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Portfolio</h2>
          <a href="#contact" className="text-cyan-300 hover:text-white">Contattaci</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={w.img} alt={w.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{w.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{w.tags.join(' • ')}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
