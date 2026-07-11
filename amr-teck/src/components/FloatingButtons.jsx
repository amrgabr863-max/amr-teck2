import { useState, useEffect } from 'react'
import { ArrowUp, Phone, MessageCircle } from 'lucide-react'
import styles from '../styles/FloatingButtons.module.css'

// ═══════════════════════════════════════════
// Floating Buttons - الأزرار العائمة
// ═══════════════════════════════════════════

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.floating}>
      {/* زر الواتساب */}
      <a
        href="https://wa.me/201200524140"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.whatsapp}`}
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* زر الاتصال */}
      <a
        href="tel:01200524140"
        className={`${styles.btn} ${styles.phone}`}
        aria-label="Call"
      >
        <Phone size={24} />
      </a>

      {/* زر العودة لأعلى */}
      <button
        className={`${styles.btn} ${styles.scrollTop} ${showScroll ? styles.show : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  )
}

export default FloatingButtons
