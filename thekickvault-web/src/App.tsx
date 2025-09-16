import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from 'clsx'
import './index.css'

type Cleat = {
  id: string
  name: string
  brand: string
  price: number
  tags: string[]
  colorway: string
  hero: string
  sketches: string[]
  specs: { label: string; value: string }[]
}

const sampleCleats: Cleat[] = [
  {
    id: 'alpha-phantom-x',
    name: 'Alpha Phantom X',
    brand: 'Mythic',
    price: 259,
    tags: ['speed', 'carbon-plate', 'laceless'],
    colorway: 'Iridescent Night / Plasma',
    hero: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop',
    sketches: [
      'https://images.unsplash.com/photo-1582582621959-48d6a314ec56?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975624746-0908f3ad7d03?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: [
      { label: 'Upper', value: 'Monofilament knit + PU skin' },
      { label: 'Plate', value: '3K Carbon with split forefoot' },
      { label: 'Studs', value: 'Tri-lug asymmetric' },
      { label: 'Weight', value: '180g (US 9)' }
    ]
  },
  {
    id: 'aero-volt-pro',
    name: 'Aero Volt Pro',
    brand: 'Volt',
    price: 229,
    tags: ['control', 'textile', 'knit-collar'],
    colorway: 'Glacier / Neon Lime',
    hero: 'https://images.unsplash.com/photo-1550955149-1a1b0f74693c?q=80&w=1600&auto=format&fit=crop',
    sketches: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517343447517-6819e43b3153?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: [
      { label: 'Upper', value: 'Engineered mesh + control print' },
      { label: 'Plate', value: 'Nylon composite with stability spine' },
      { label: 'Studs', value: 'Hybrid conical/bladed' },
      { label: 'Weight', value: '195g (US 9)' }
    ]
  }
  ,
  {
    id: 'terra-blaze-gtx',
    name: 'Terra Blaze GTX',
    brand: 'Aether',
    price: 245,
    tags: ['traction', 'gtx', 'weatherproof'],
    colorway: 'Storm Grey / Ember',
    hero: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    sketches: [
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8ae?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: [
      { label: 'Upper', value: 'Waterproof knit + fused overlays' },
      { label: 'Plate', value: 'Pebax with torsion channel' },
      { label: 'Studs', value: 'Multi-terrain chevron' },
      { label: 'Weight', value: '205g (US 9)' }
    ]
  },
  {
    id: 'neo-touch-elite',
    name: 'Neo Touch Elite',
    brand: 'Kinetic',
    price: 199,
    tags: ['touch', 'leather-hybrid', 'classic'],
    colorway: 'Pearl / Obsidian',
    hero: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop',
    sketches: [
      'https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975292511-383b7b46a23b?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: [
      { label: 'Upper', value: 'K-leather hybrid + microsuede liner' },
      { label: 'Plate', value: 'Nylon with forefoot flex grooves' },
      { label: 'Studs', value: 'Conical for pivot control' },
      { label: 'Weight', value: '210g (US 9)' }
    ]
  }
]

function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('tkv-theme') as 'dark' | 'light' | null
    if (stored) return stored
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('tkv-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.setProperty('--color-bg', theme === 'dark' ? 'oklch(17% 0.02 260)' : 'oklch(98% 0.01 260)')
    document.documentElement.style.setProperty('--color-fg', theme === 'dark' ? 'oklch(98% 0.01 260)' : 'oklch(20% 0.02 260)')
  }, [theme])

  return { theme, setTheme }
}

function useHash() {
  const [hash, setHash] = useState<string>(window.location.hash || '#home')
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return hash
}

function Navbar({ theme, onToggle }: { theme: 'dark' | 'light'; onToggle: () => void }) {
  const active = useHash()
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 glass rounded-2xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)]" />
            <span className="font-semibold tracking-wide">The Kick Vault</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '#home', label: 'Home' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#about', label: 'About' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? 'page' : undefined}
                className={clsx(
                  'px-3 py-2 rounded-full text-sm transition',
                  active === link.href ? 'bg-white/10' : 'hover:bg-white/5'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="btn-primary" onClick={onToggle} aria-label="Toggle theme">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero({ onLoaded }: { onLoaded: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onLoaded, 1800)
    return () => clearTimeout(timer)
  }, [onLoaded])

  return (
    <div id="home" className="relative pt-28">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-32 left-1/2 h-96 w-[80rem] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-[var(--color-accent)]/50 to-[var(--color-accent-2)]/50" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Futuristic Soccer Cleats
            </h1>
            <p className="mt-4 text-white/70 max-w-prose">
              Explore concept sketches and detailed specs of high-performance boots.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="#gallery">Browse Gallery</a>
              <a className="glass px-5 py-2 rounded-full" href="#about">About</a>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-4"
            >
              <motion.img
                src={sampleCleats[0].hero}
                alt={sampleCleats[0].name}
                className="aspect-[16/10] w-full object-cover rounded-2xl"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase opacity-70">Concept</div>
                  <div className="font-semibold">{sampleCleats[0].name}</div>
                </div>
                <div className="text-sm">{sampleCleats[0].colorway}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Gallery({ cleats, onOpen }: { cleats: Cleat[]; onOpen: (c: Cleat) => void }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return cleats.filter(c => [c.name, c.brand, c.tags.join(' '), c.colorway].join(' ').toLowerCase().includes(q))
  }, [query, cleats])
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cleats..."
          className="glass rounded-xl px-4 py-2 w-64"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(c => (
          <motion.button
            key={c.id}
            onClick={() => onOpen(c)}
            className="text-left"
            whileHover={{ y: -4 }}
          >
            <div className="glass rounded-3xl overflow-hidden">
              <img src={c.hero} alt={c.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase opacity-70">{c.brand}</div>
                  <div className="font-semibold">{c.name}</div>
                </div>
                <div className="font-semibold">${'{'}c.price{'}'}</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}

function DetailModal({ cleat, onClose }: { cleat: Cleat | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {cleat && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            className="relative glass rounded-3xl max-w-4xl w-full overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-4">
                <img src={cleat.hero} alt={cleat.name} className="rounded-2xl object-cover aspect-[4/3] w-full" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {cleat.sketches.map((s, i) => (
                    <img key={i} src={s} alt="sketch" className="rounded-xl aspect-square object-cover" />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm uppercase opacity-70">{cleat.brand}</div>
                <h3 className="text-2xl font-bold">{cleat.name}</h3>
                <p className="mt-1 text-sm opacity-80">{cleat.colorway}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {cleat.specs.map(s => (
                    <div key={s.label} className="glass rounded-xl p-3">
                      <div className="text-xs uppercase opacity-60">{s.label}</div>
                      <div className="text-sm">{s.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xl font-semibold">${'{'}cleat.price{'}'}</div>
                  <button className="btn-primary" onClick={onClose}>Close</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const { theme, setTheme } = useTheme()
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState<Cleat | null>(null)

  return (
    <div>
      <Navbar theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      {!loaded && (
        <div className="fixed inset-0 z-40 grid place-items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mx-auto size-20 rounded-2xl glass grid place-items-center">
              <motion.div
                className="size-10 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              />
            </div>
            <div className="mt-4 text-sm opacity-80">Rendering cleats...</div>
          </motion.div>
        </div>
      )}

      <Hero onLoaded={() => setLoaded(true)} />
      <Gallery cleats={sampleCleats} onOpen={setActive} />

      <section id="about" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-bold">About The Kick Vault</h3>
          <p className="mt-2 text-white/80">
            A concept gallery for designers, makers, and players to explore futuristic
            soccer cleat ideas. Browse sketches, materials, and plate engineering notes.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 pb-10">
        <div className="glass rounded-2xl p-4 flex items-center justify-between">
          <div className="text-sm opacity-70">© {new Date().getFullYear()} The Kick Vault</div>
          <a href="#about" className="text-sm">About</a>
        </div>
      </footer>

      <DetailModal cleat={active} onClose={() => setActive(null)} />
    </div>
  )
}
