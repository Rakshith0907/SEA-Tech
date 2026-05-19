import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BatteryCharging, Recycle, ScanLine, Building } from 'lucide-react'
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
    title: 'Energy Security Systems',
    Icon: BatteryCharging,
    items: [
      'Portable energy systems',
      'Remote energy deployment',
      'Hybrid renewable systems',
      'Sustainable field energy systems',
    ],
  },
  {
    title: 'Resource Optimization',
    Icon: Recycle,
    items: [
      'Water recovery systems',
      'Waste valorization pathways',
      'Circular logistics systems',
      'Resource-efficient operations',
    ],
  },
  {
    title: 'Smart Monitoring Systems',
    Icon: ScanLine,
    items: [
      'AI-enabled monitoring systems',
      'Sensor-based field systems',
      'Smart sustainability analytics',
      'Real-time resource tracking',
    ],
  },
  {
    title: 'Sustainable Infrastructure',
    Icon: Building,
    items: [
      'Climate resilience infrastructure',
      'Adaptive operational systems',
      'Sustainable logistics systems',
      'Low-carbon infrastructure design',
    ],
  },
]

const themes = [
  'Energy Security Systems', 'Remote Sustainability', 'Resource Optimization',
  'Sustainable Infrastructure', 'Smart Monitoring', 'Circular Logistics',
  'Adaptive Systems', 'Field Deployment',
]

export default function StrategicSystems() {
  return (
    <main style={{ paddingTop: 70 }}>

      {/* ── Inner Hero ── */}
      <section
        className="inner-hero"
        style={{
          background: 'linear-gradient(135deg, #0d1520 0%, #1e3a5f 55%, #1a324f 100%)',
        }}
      >
        <div
          className="grid-overlay"
          style={{
            backgroundImage: 'linear-gradient(rgba(122,165,210,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,165,210,0.06) 1px, transparent 1px)',
          }}
        />
        <div
          className="inner-hero__orb inner-hero__orb--right"
          style={{ background: 'radial-gradient(circle, rgba(51,78,104,0.35) 0%, transparent 70%)' }}
        />

        <div className="container inner-hero__content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-home">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Strategic Systems</span>
          </div>

          <span className="inner-hero__tag-strategic">SEA Domain</span>

          <h1 className="inner-hero__heading">
            Sustainability Systems for Strategic Infrastructure and Operations
          </h1>

          <p className="inner-hero__sub">
            Resilient sustainability systems for energy security, remote operations, circular
            logistics, and sustainable infrastructure built for real-world strategic deployment.
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="section capabilities">
        <div className="container">
          <FadeUp>
            <div className="capabilities__header">
              <span className="tag">Capability Areas</span>
              <h2 className="section-heading">What We Do in Strategic Systems</h2>
              <p className="section-sub">
                Four integrated capability areas driving resilient sustainability systems for strategic operations.
              </p>
            </div>
          </FadeUp>

          <div className="capabilities__grid">
            {capabilities.map((c, i) => {
              const Icon = c.Icon
              return (
                <FadeUp key={c.title} delay={i * 0.09}>
                  <div className="cap-card" style={{ borderTop: '3px solid #334E68' }}>
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: 'rgba(51,78,104,0.08)',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', marginBottom: 16,
                      }}
                    >
                      <Icon size={22} color="#334E68" />
                    </div>
                    <h3 style={{ color: '#334E68' }}>{c.title}</h3>
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
                    background: 'rgba(51,78,104,0.07)',
                    color:      '#334E68',
                    border:     '1px solid rgba(51,78,104,0.18)',
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
        style={{ background: 'linear-gradient(135deg, #1a324f, #334E68 65%, #2a4560)' }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <h2 className="inner-cta__heading">Collaborate on Strategic Systems</h2>
            <p className="inner-cta__sub">
              Explore resilient infrastructure pilots, energy security systems, and strategic
              sustainability collaborations with SEA-Tech.
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
