import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sustainability from './pages/Sustainability'
import Energy from './pages/Energy'
import Agriculture from './pages/Agriculture'
import StrategicSystems from './pages/StrategicSystems'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                  element={<Home />} />
        {/* <Route path="/sustainability"    element={<Sustainability />} /> */}
        {/* <Route path="/energy"            element={<Energy />} /> */}
        {/* <Route path="/agriculture"       element={<Agriculture />} /> */}
        {/* <Route path="/strategic-systems" element={<StrategicSystems />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
