import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X, Leaf, Zap, Sprout, Shield } from 'lucide-react'
import '../styles/Navbar.css'

// const seaItems = [
//   { label: 'Sustainability',    path: '/sustainability',    icon: Leaf,   desc: 'Circular systems & ESG' },
//   { label: 'Energy',            path: '/energy',            icon: Zap,    desc: 'Bioenergy & sustainable fuels' },
//   { label: 'Agriculture',       path: '/agriculture',       icon: Sprout, desc: 'Climate-smart farming' },
//   { label: 'Strategic Systems', path: '/strategic-systems', icon: Shield, desc: 'Resilient infrastructure' },
// ]
 
export default function Navbar() {
  // const [scrolled,      setScrolled]      = useState(false)
  // const [seaOpen,       setSeaOpen]       = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  // const [mobileSeaOpen, setMobileSeaOpen] = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()
  const dropRef   = useRef(null)
  const isHome    = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const fn = () => {
      const currentY = window.scrollY

      // visible when scrolling up or at top
      if (currentY < lastScrollY.current || currentY < 50) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      // scrolled state for background treatment
      setScrolled(currentY > 50)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* scroll detection */
  // useEffect(() => {
  //   const fn = () => setScrolled(window.scrollY > 50)
  //   window.addEventListener('scroll', fn, { passive: true })
  //   return () => window.removeEventListener('scroll', fn)
  // }, [])

  /* close on route change */
  useEffect(() => {
    setMobileOpen(false)
    // setSeaOpen(false)
  }, [location])

  /* click outside dropdown */
  // useEffect(() => {
  //   const fn = (e) => {
  //     if (dropRef.current && !dropRef.current.contains(e.target)) setSeaOpen(false)
  //   }
  //   document.addEventListener('mousedown', fn)
  //   return () => document.removeEventListener('mousedown', fn)
  // }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 320)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const transparent = isHome && !scrolled
  const triggerClass = transparent
    ? 'nav-dropdown__trigger nav-dropdown__trigger--light'
    : 'nav-dropdown__trigger nav-dropdown__trigger--dark'

  return (
    <>
      <nav className={`navbar ${transparent ? 'navbar--transparent' : 'navbar--scrolled'} ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
        <div className="container">
          <div className="navbar__inner">

            {/* Logo */}
            <Link to="/" className="navbar__logo">
              <img src="./assets/SEA-Tech-logo.png" alt="SEA-Tech Innovations LLP" />
            </Link>

            {/* Desktop Nav */}
            <div className="navbar__desktop">
              <NavBtn
                label="Home"
                onClick={() => scrollTo('hero')}
                light={transparent}
              />

              {/* SEA Dropdown */}
              {/* <div className="nav-dropdown" ref={dropRef}>
                <button
                  className={triggerClass}
                  onClick={() => setSeaOpen(v => !v)}
                >
                  SEA
                  <ChevronDown
                    size={13}
                    className={`nav-dropdown__chevron ${seaOpen ? 'nav-dropdown__chevron--open' : ''}`}
                  />
                </button>

                <div className={`nav-dropdown__panel ${seaOpen ? 'nav-dropdown__panel--open' : ''}`}>
                  <div className="nav-dropdown__header">
                    <span className="nav-dropdown__label">
                      SEA — Sustainability · Energy · Agriculture
                    </span>
                  </div>
                  {seaItems.map(item => {
                    const Icon = item.icon
                    return (
                      <Link key={item.path} to={item.path} className="nav-dropdown__item">
                        <div className="nav-dropdown__item-icon">
                          <Icon size={15} color="#7FB069" />
                        </div>
                        <div>
                          <div className="nav-dropdown__item-name">{item.label}</div>
                          <div className="nav-dropdown__item-desc">{item.desc}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div> */}
              <NavBtn label="Domains"           onClick={()=> scrollTo('domains')}   light={transparent} />
              <NavBtn label="Research & Pilots" onClick={() => scrollTo('resesrch')} light={transparent} />
              <NavBtn label="Advisors"          onClick={() => scrollTo('advisors')} light={transparent} />
              <NavBtn label="Insights"          onClick={() => scrollTo('insights')} light={transparent} />
              <NavBtn label="Contact"           onClick={() => scrollTo('contact')}  light={transparent} />
            </div>

            {/* Right actions */}
            <div className="navbar__actions">
              <button onClick={() => scrollTo('contact')} className="btn btn-primary">
                Explore Collaboration
              </button>
              <button
                className="hamburger"
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
          <div className="mobile-menu__items">
            <button className="mobile-nav-btn" onClick={() => scrollTo('hero')}>Home</button>

            {/* <div>
              <button
                className="mobile-sea-trigger"
                onClick={() => setMobileSeaOpen(v => !v)}
              >
                SEA
                <ChevronDown
                  size={15}
                  className={`mobile-sea-chevron ${mobileSeaOpen ? 'mobile-sea-chevron--open' : ''}`}
                />
              </button>
              {mobileSeaOpen && (
                <div className="mobile-sea-submenu">
                  {seaItems.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="mobile-sea-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="mobile-sea-dot" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}
            <button className="mobile-nav-btn" onClick={()=> scrollTo('domains')}>Domains</button>
            <button className="mobile-nav-btn" onClick={()=> scrollTo('research')}>Research &amp; Pilots</button>
            <button className="mobile-nav-btn" onClick={()=> scrollTo('advisors')}>Advisors</button>
            <button className="mobile-nav-btn" onClick={() => scrollTo('insights')}>Insights</button>
            <button className="mobile-nav-btn" onClick={() => scrollTo('contact')}>Contact</button>
            

            <div className="mobile-menu__cta">
              <button
                onClick={() => { scrollTo('contact'); setMobileOpen(false) }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Explore Collaboration
              </button>
            </div>

            <div className="mobile-menu__footer">
              <p>SEA = Sustainability · Energy · Agriculture</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

function NavBtn({ label, onClick, light }) {
  return (
    <button
      onClick={onClick}
      className={`nav-link ${light ? 'nav-link--light' : 'nav-link--dark'}`}
    >
      {label}
    </button>
  )
}
