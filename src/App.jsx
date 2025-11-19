import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Studio Moderno — Tutti i diritti riservati</p>
          <div className="text-slate-400 text-sm">P.IVA 0000000000 • Milano</div>
        </div>
      </footer>
    </div>
  )
}

export default App
