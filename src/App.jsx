import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Sections />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Assaggiatori di Formaggi — Tutti i diritti riservati</p>
          <div className="text-slate-400 text-sm">CF: 00000000000 • Italia</div>
        </div>
      </footer>
    </div>
  )
}

export default App
