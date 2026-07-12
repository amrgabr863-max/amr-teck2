import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import styles from '../styles/Footer.module.css'

// ═══════════════════════════════════════════
// Footer Component - تذييل الموقع
// ═══════════════════════════════════════════

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/services', label: 'خدماتنا' },
    { path: '/portfolio', label: 'أعمالنا' },
    { path: '/blog', label: 'المدونة' },
    { path: '/contact', label: 'تواصل معنا' },
  ]

  const services = [
    'تصميم المواقع',
    'المتاجر الإلكترونية',
    'المنصات التعليمية',
    'تطبيقات الويب',
    'SEO',
    'الذكاء الاصطناعي',
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* معلومات الشركة */}
            <div className={styles.column}>
              <Link to="/" className={styles.logo}>
                <span>AMR</span>
                <span className={styles.logoAccent}>-TECK</span>
              </Link>
              <p className={styles.about}>
                شركة رائدة في تصميم وتطوير المواقع الإلكترونية والحلول الرقمية المتكاملة
              </p>
              <div className={styles.social}>
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              </div>
            </div>

            {/* روابط سريعة */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>روابط سريعة</h4>
              <ul className={styles.links}>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* الخدمات */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>خدماتنا</h4>
              <ul className={styles.links}>
                {services.map((service, i) => (
                  <li key={i}>
                    <Link to="/services">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* تواصل معنا */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>تواصل معنا</h4>
              <ul className={styles.contactInfo}>
                <li>
                  <MapPin size={18} />
                  <span>العاشر من رمضان، مج 21</span>
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:01200524140">01200524140</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:info@amr-teck.com">info@amr-teck.com</a>
                </li>
                <li>
                  <Clock size={18} />
                  <span>الأحد - الخميس: 9 ص - 5 م</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className={styles.bottom}>
        <div className="container">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} AMR-TECK</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
