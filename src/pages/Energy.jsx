import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Fuel, Flame, Trash2, Atom, Waves } from 'lucide-react'
import '../styles/Pages.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function FadeUp({ children, delay = 0 }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.72s ease ${delay}s, transform 0.72s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

const capabilities = [
  {
    title: 'Sustainable Fuels',
    Icon: Fuel,
    items: [
      'Sustainable aviation fuel (SAF)',
      'Biodiesel systems',
      'Renewable diesel pathways',
      'Bioethanol systems',
    ],
  },
  {
    title: 'Bioenergy Systems',
    Icon: Flame,
    items: [
      'Biomass conversion pathways',
      'Gasification systems',
      'Pyrolysis systems',
      'Biochar production pathways',
    ],
  },
  {
    title: 'Waste-to-Energy',
    Icon: Trash2,
    items: [
      'Agricultural waste utilization',
      'Organic waste conversion systems',
      'Industrial waste valorization',
      'Circular energy pathways',
    ],
  },
  {
    title: 'Future Energy Systems',
    Icon: Atom,
    items: [
      'Green hydrogen systems',
      'Syngas production systems',
      'Hybrid energy integration',
      'Carbon-energy integration',
    ],
  },
  {
    title: 'Algae & Biomanufacturing',
    Icon: Waves,
    items: [
      'Algae biofuel systems',
      'CO₂ utilization systems',
      'Algae bioproducts',
      'Microalgae cultivation systems',
    ],
  },
]

const themes = [
  'Sustainable Aviation Fuel', 'Bioenergy Systems', 'Waste-to-Energy',
  'Green Hydrogen', 'Renewable Fuels', 'Carbon Integration',
  'Algae Biofuels', 'Pyrolysis Systems',
]

export default function Energy() {
  return (
    <main style={{ paddingTop: 70 }}>

      {/* ── Inner Hero ── */}
      <section
        className="inner-hero"
        style={{
          background: 'linear-gradient(135deg, #051a18 0%, #0c4a48 60%, #0d3e34 100%)',
        }}
      >
        <div className="grid-overlay" />
        <div
          className="inner-hero__orb inner-hero__orb--right"
          style={{ background: 'radial-gradient(circle, rgba(14,92,90,0.22) 0%, transparent 70%)' }}
        />

        <div className="container inner-hero__content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-home">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Energy</span>
          </div>

          <span className="inner-hero__tag-energy">SEA Domain</span>

          <h1 className="inner-hero__heading">
            Advanced Sustainable Energy Systems
          </h1>

          <p className="inner-hero__sub">
            Research-driven pathways for sustainable fuels, bioenergy systems, waste-to-energy
            integration, and future-ready energy ecosystems built for real-world deployment.
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="section capabilities">
        <div className="container">
          <FadeUp>
            <div className="capabilities__header">
              <span className="tag">Capability Areas</span>
              <h2 className="section-heading">What We Do in Energy</h2>
              <p className="section-sub">
                Five integrated capability areas driving our sustainable energy systems work.
              </p>
            </div>
          </FadeUp>

          <div className="capabilities__grid">
            {capabilities.map((c, i) => {
              const Icon = c.Icon
              return (
                <FadeUp key={c.title} delay={i * 0.09}>
                  <div className="cap-card" style={{ borderTop: '3px solid #0E5C5A' }}>
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: 'rgba(14,92,90,0.08)',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', marginBottom: 16,
                      }}
                    >
                      <Icon size={22} color="#0E5C5A" />
                    </div>
                    <h3 style={{ color: '#0E5C5A' }}>{c.title}</h3>
                    <ul>
                      {c.items.map(it => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Themes strip ── */}
      <section className="section-sm themes-strip">
        <div className="container">
          <FadeUp>
            <div className="themes-strip__inner">
              {themes.map(v => (
                <span
                  key={v}
                  className="themes-strip__pill"
                  style={{
                    background: 'rgba(14,92,90,0.07)',
                    color:      '#0E5C5A',
                    border:     '1px solid rgba(14,92,90,0.18)',
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section-sm inner-cta"
        style={{ background: 'linear-gradient(135deg, #0c3a38, #0E5C5A 60%, #1a6e6c)' }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <h2 className="inner-cta__heading">Interested in Energy Collaboration?</h2>
            <p className="inner-cta__sub">
              Explore bioenergy pilot programs, sustainable fuel research partnerships,
              and energy system collaborations with SEA-Tech.
            </p>
            <Link
              to="/"
              onClick={() =>
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)
              }
              className="inner-cta__btn inner-cta__btn--cyan"
            >
              Explore Collaboration <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

    </main>
  )
}
