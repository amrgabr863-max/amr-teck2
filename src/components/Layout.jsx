import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'

// ═══════════════════════════════════════════
// Layout Component - التخطيط الرئيسي
// ═══════════════════════════════════════════

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default Layout
