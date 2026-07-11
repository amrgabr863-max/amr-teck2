import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import styles from '../styles/Navbar.module.css'

// ═══════════════════════════════════════════
// Navbar Component - شريط التنقل العلوي
// ═══════════════════════════════════════════

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // تتبع التمرير لتغيير شكل الـ Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/services', label: 'خدماتنا' },
    { path: '/portfolio', label: 'أعمالنا' },
    { path: '/blog', label: 'المدونة' },
    { path: '/contact', label: 'تواصل معنا' },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          {/* الشعار */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>AMR</span>
            <span className={styles.logoAccent}>-TECK</span>
          </Link>

          {/* روابط سطح المكتب */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`${styles.navLink} ${
                    location.pathname === link.path ? styles.active : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* زر الاتصال */}
          <Link to="/contact" className={styles.navCta}>
  <Phone size={16} />
  <span>اتصل بنا</span>
</Link>

          {/* زر القائمة للجوال */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* قائمة الجوال */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ''}`}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`${styles.mobileLink} ${
                    location.pathname === link.path ? styles.mobileActive : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:01200524140" className={styles.mobileCta}>
            <Phone size={18} />
            <span>01200524140</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
