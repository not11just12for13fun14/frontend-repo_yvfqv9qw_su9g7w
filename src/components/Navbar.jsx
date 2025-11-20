import { useEffect, useState } from 'react'
import { Menu, X, UserRound } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Chi siamo' },
  { href: '#courses', label: 'Corsi' },
  { href: '#competitions', label: 'Concorsi' },
  { href: '#delegations', label: 'Delegazioni' },
  { href: '#cheeses', label: 'Formaggi' },
  { href: '#poi', label: 'Punti di interesse' },
  { href: '#news', label: 'News ed eventi' },
  { href: '#inform', label: 'Informa' },
  { href: '#contact', label: 'Contatti' },
  { href: '#join', label: 'Come associarsi' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2" onClick={(e)=>handleClick(e,'#home')}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg shadow-amber-500/30" />
          <span className="text-white font-semibold tracking-tight">Assaggiatori di Formaggi</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e)=>handleClick(e,l.href)}
              className="text-slate-200 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#login"
            onClick={(e)=>handleClick(e,'#login')}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 border border-white/20 hover:bg-white/20 transition"
            aria-label="Accedi"
          >
            <UserRound className="w-4 h-4" /> Accedi
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Apri menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={(e)=>handleClick(e,l.href)} className="text-slate-200 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#login" onClick={(e)=>handleClick(e,'#login')} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 border border-white/20"><UserRound className="w-4 h-4" /> Accedi</a>
          </div>
        </div>
      )}
    </header>
  )
}
