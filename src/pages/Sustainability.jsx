import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, RefreshCw, BarChart3, Droplets, Cpu } from 'lucide-react'
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
    title: 'Circular Systems',
    Icon: RefreshCw,
    items: [
      'Waste-to-value pathways',
      'Resource recovery systems',
      'Industrial symbiosis models',
      'Circular operations design',
    ],
  },
  {
    title: 'ESG & Sustainability Systems',
    Icon: BarChart3,
    items: [
      'ESG strategy & frameworks',
      'Sustainability assessment systems',
      'Net-zero pathways',
      'Life cycle analysis systems',
    ],
  },
  {
    title: 'Environmental Technologies',
    Icon: Droplets,
    items: [
      'Water sustainability systems',
      'Air quality management',
      'Soil restoration pathways',
      'Pollution mitigation technologies',
    ],
  },
  {
    title: 'Smart Sustainability Systems',
    Icon: Cpu,
    items: [
      'AI-enabled sustainability tools',
      'Digital sustainability monitoring',
      'Real-time resource optimization',
      'Intelligent systems design',
    ],
  },
]

const themes = [
  'Circular Economy', 'Decarbonization', 'ESG Systems',
  'Climate Resilience', 'Sustainable Materials', 'Smart Sustainability Systems',
]

export default function Sustainability() {
  return (
    <main style={{ paddingTop: 70 }}>

      {/* ── Inner Hero ── */}
      <section
        className="inner-hero"
        style={{
          background: 'linear-gradient(135deg, #0a1a12 0%, #0B3D2E 58%, #15503c 100%)',
        }}
      >
        <div className="grid-overlay" />
        <div
          className="inner-hero__orb inner-hero__orb--right"
          style={{ background: 'radial-gradient(circle, rgba(127,176,105,0.09) 0%, transparent 70%)' }}
        />

        <div className="container inner-hero__content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-home">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current" style={{ color: '#7FB069' }}>Sustainability</span>
          </div>

          <span className="tag">SEA Domain</span>

          <h1 className="inner-hero__heading">
            Sustainability Systems for Industrial and Strategic Ecosystems
          </h1>

          <p className="inner-hero__sub">
            A systems-based approach to sustainability integrating circular economy, climate
            resilience, ESG systems, and environmental technologies for real-world deployment.
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="section capabilities">
        <div className="container">
          <FadeUp>
            <div className="capabilities__header">
              <span className="tag">Capability Areas</span>
              <h2 className="section-heading">What We Do in Sustainability</h2>
              <p className="section-sub">
                Four interconnected capability areas driving our sustainability systems work.
              </p>
            </div>
          </FadeUp>

          <div className="capabilities__grid">
            {capabilities.map((c, i) => {
              const Icon = c.Icon
              return (
                <FadeUp key={c.title} delay={i * 0.09}>
                  <div className="cap-card">
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: 'rgba(11,61,46,0.08)',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', marginBottom: 16,
                      }}
                    >
                      <Icon size={22} color="#0B3D2E" />
                    </div>
                    <h3>{c.title}</h3>
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
                    background: 'rgba(11,61,46,0.07)',
                    color:      '#0B3D2E',
                    border:     '1px solid rgba(11,61,46,0.18)',
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
        style={{ background: 'linear-gradient(135deg, #0B3D2E, #0E5C5A 65%, #0d4a48)' }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <h2 className="inner-cta__heading">Interested in Collaboration?</h2>
            <p className="inner-cta__sub">
              Connect with SEA-Tech to explore sustainability system projects, pilot programs,
              and research partnerships.
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
