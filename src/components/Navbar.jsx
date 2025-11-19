import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Servizi' },
  { href: '#contact', label: 'Contatti' },
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
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight">Studio Moderno</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
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
            href="#contact"
            onClick={(e)=>handleClick(e,'#contact')}
            className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 border border-white/20 hover:bg-white/20 transition"
          >
            Richiedi un preventivo
          </a>
        </div>

        <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Apri menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={(e)=>handleClick(e,l.href)} className="text-slate-200 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={(e)=>handleClick(e,'#contact')} className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-4 py-2 border border-white/20">Richiedi un preventivo</a>
          </div>
        </div>
      )}
    </header>
  )
}
