import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, Layers, Leaf, Microscope, Zap } from 'lucide-react'
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
    title: 'Climate-Smart Agriculture',
    Icon: Cloud,
    items: [
      'Adaptive farming systems',
      'Resource-efficient agriculture',
      'Climate resilience planning',
      'Heat and drought-tolerant systems',
    ],
  },
  {
    title: 'Soil & Carbon Systems',
    Icon: Layers,
    items: [
      'Soil regeneration pathways',
      'Carbon farming systems',
      'Biochar soil systems',
      'Soil carbon enhancement',
    ],
  },
  {
    title: 'Sustainable Inputs',
    Icon: Leaf,
    items: [
      'Biofertilizer systems',
      'Microbial soil solutions',
      'Organic nutrient systems',
      'Biostimulant technologies',
    ],
  },
  {
    title: 'Controlled Environment Agriculture',
    Icon: Microscope,
    items: [
      'Precision agriculture systems',
      'Hydroponics & aquaponics',
      'Vertical farming systems',
      'Smart cultivation environments',
    ],
  },
  {
    title: 'Agri-Energy Integration',
    Icon: Zap,
    items: [
      'Farm-to-energy systems',
      'Agri-waste utilization',
      'On-farm biomass systems',
      'Circular farm ecosystems',
    ],
  },
]

const themes = [
  'Climate-Smart Systems', 'Soil Carbon', 'Biomass Utilization',
  'Precision Agriculture', 'Controlled Environment', 'Circular Farm Systems',
  'Agri-Energy', 'Regenerative Agriculture',
]

export default function Agriculture() {
  return (
    <main style={{ paddingTop: 70 }}>

      {/* ── Inner Hero ── */}
      <section
        className="inner-hero"
        style={{
          background: 'linear-gradient(135deg, #0a1f10 0%, #1e5c3a 55%, #183829 100%)',
        }}
      >
        <div className="grid-overlay" style={{ backgroundImage: 'linear-gradient(rgba(127,176,105,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127,176,105,0.06) 1px, transparent 1px)' }} />
        <div
          className="inner-hero__orb inner-hero__orb--left"
          style={{ background: 'radial-gradient(circle, rgba(127,176,105,0.13) 0%, transparent 70%)' }}
        />

        <div className="container inner-hero__content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-home">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current" style={{ color: '#7FB069' }}>Agriculture</span>
          </div>

          <span className="tag">SEA Domain</span>

          <h1 className="inner-hero__heading">
            Climate-Smart and Regenerative Agriculture Systems
          </h1>

          <p className="inner-hero__sub">
            Integrated sustainability systems for resilient agriculture, soil health,
            agri-energy integration, and circular agricultural ecosystems designed for
            real-world deployment.
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="section capabilities">
        <div className="container">
          <FadeUp>
            <div className="capabilities__header">
              <span className="tag">Capability Areas</span>
              <h2 className="section-heading">What We Do in Agriculture</h2>
              <p className="section-sub">
                Five integrated capability areas across climate-smart and regenerative agriculture.
              </p>
            </div>
          </FadeUp>

          <div className="capabilities__grid">
            {capabilities.map((c, i) => {
              const Icon = c.Icon
              return (
                <FadeUp key={c.title} delay={i * 0.09}>
                  <div className="cap-card" style={{ borderTop: '3px solid #2d6a4f' }}>
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: 'rgba(45,106,79,0.08)',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', marginBottom: 16,
                      }}
                    >
                      <Icon size={22} color="#2d6a4f" />
                    </div>
                    <h3 style={{ color: '#2d6a4f' }}>{c.title}</h3>
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
                    background: 'rgba(45,106,79,0.07)',
                    color:      '#2d6a4f',
                    border:     '1px solid rgba(45,106,79,0.18)',
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
        style={{ background: 'linear-gradient(135deg, #163626, #2d6a4f 60%, #1e5c3a)' }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <h2 className="inner-cta__heading">Collaborate on Agriculture Innovation</h2>
            <p className="inner-cta__sub">
              Explore climate-smart agriculture pilots, soil carbon programs, and
              agri-energy integration partnerships with SEA-Tech.
            </p>
            <Link
              to="/"
              onClick={() =>
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)
              }
              className="inner-cta__btn inner-cta__btn--green"
            >
              Explore Collaboration <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

    </main>
  )
}
