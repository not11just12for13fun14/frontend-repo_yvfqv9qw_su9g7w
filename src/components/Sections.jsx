import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Users, Newspaper, Info, Phone, UserPlus, ChevronRight } from 'lucide-react'

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 md:py-24 bg-slate-950/60">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
)

const courses = [
  { level: 'Base', title: 'Introduzione alla degustazione', date: '12 Gen 2026', day: 'Lunedì', where: 'Milano', spots: 18 },
  { level: 'Intermedio', title: 'Tecniche di analisi sensoriale', date: '25 Gen 2026', day: 'Domenica', where: 'Torino', spots: 12 },
  { level: 'Avanzato', title: 'Master in formaggi italiani DOP', date: '10 Feb 2026', day: 'Martedì', where: 'Bologna', spots: 9 },
  { level: 'Workshop', title: 'Abbinamenti birra e formaggi', date: '22 Feb 2026', day: 'Sabato', where: 'Roma', spots: 20 },
]

export default function Sections() {
  return (
    <div>
      {/* Chi siamo */}
      <Section id="about" title="Chi siamo" subtitle="Promuoviamo la cultura del formaggio con corsi, eventi e degustazioni in tutta Italia.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
            Siamo una community di appassionati e professionisti. Organizziamo corsi dal livello base all’avanzato, concorsi per valorizzare i produttori e delegazioni locali per creare rete sul territorio.
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/10 to-yellow-300/10 p-6">
            <ul className="space-y-3 text-slate-200">
              <li className="flex items-center gap-2"><Users className="w-5 h-5 text-amber-300" /> Oltre 2.000 associati</li>
              <li className="flex items-center gap-2"><Award className="w-5 h-5 text-amber-300" /> Premi e riconoscimenti nazionali</li>
              <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-amber-300" /> Delegazioni in 20 città</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Corsi */}
      <Section id="courses" title="Corsi" subtitle="Scegli il tuo livello e iscriviti: date, città e posti disponibili in tempo reale.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wide text-amber-300/90">{c.level}</span>
                  <span className="inline-flex items-center gap-2 text-sm text-slate-300"><Calendar className="w-4 h-4" /> {c.date} • {c.day}</span>
                </div>
                <h3 className="mt-2 text-white font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-300 inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {c.where}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-300">Posti: {c.spots}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:shadow">
                    Iscriviti <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Concorsi */}
      <Section id="competitions" title="Concorsi" subtitle="Valorizziamo i migliori produttori e stagionatori con premi e degustazioni aperte.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          Scopri regolamenti, categorie, iscrizioni e risultati delle edizioni passate.
        </div>
      </Section>

      {/* Delegazioni */}
      <Section id="delegations" title="Delegazioni" subtitle="Trova la delegazione più vicina a te e partecipa agli incontri locali.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Milano","Torino","Roma","Bologna","Firenze","Napoli"].map((city)=> (
            <div key={city} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{city}</h3>
              <p className="mt-1 text-slate-300 text-sm">Eventi mensili e corsi dedicati</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Formaggi */}
      <Section id="cheeses" title="Formaggi" subtitle="Schede, famiglie e abbinamenti: esplora il mondo dei formaggi.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Parmigiano Reggiano","Gorgonzola","Pecorino Romano","Taleggio"].map((n)=> (
            <div key={n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{n}</h3>
              <p className="mt-1 text-slate-300 text-sm">Profilo sensoriale, stagionatura, abbinamenti</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Punti di interesse */}
      <Section id="poi" title="Punti di interesse" subtitle="Caseifici, botteghe e luoghi da visitare.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Luogo #{i}</h3>
              <p className="mt-1 text-slate-300 text-sm">Descrizione breve e contatti utili</p>
            </div>
          ))}
        </div>
      </Section>

      {/* News ed eventi */}
      <Section id="news" title="News ed eventi" subtitle="Aggiornamenti dal mondo del formaggio, fiere e degustazioni.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Titolo notizia #{i}</h3>
              <p className="mt-1 text-slate-300 text-sm">Anteprima dell’articolo/evento</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Informa */}
      <Section id="inform" title="Informa" subtitle="Risorse, guide e FAQ per orientarti nel percorso da assaggiatore.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          Leggi le nostre guide sull’analisi sensoriale e scarica le schede di degustazione.
        </div>
      </Section>

      {/* Contatti */}
      <Section id="contact" title="Contatti">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          Scrivici per informazioni su corsi e iscrizioni: info@assaggiatoriformaggi.it
        </div>
      </Section>

      {/* Come associarsi */}
      <Section id="join" title="Come associarsi" subtitle="Unisciti alla community: vantaggi, eventi esclusivi e sconti sui corsi.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          Quote annuali, modalità di iscrizione e tessera associativa digitale.
        </div>
      </Section>

      {/* Login placeholder */}
      <Section id="login" title="Accedi">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          Area riservata in arrivo.
        </div>
      </Section>
    </div>
  )
}
