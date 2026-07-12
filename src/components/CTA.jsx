import { Link } from 'react-router-dom'
import { ArrowLeft, Phone } from 'lucide-react'
import styles from '../styles/CTA.module.css'

// ═══════════════════════════════════════════
// CTA Section - قسم الدعوة للعمل
// ═══════════════════════════════════════════

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>
            هل أنت مستعد لتحويل فكرتك إلى <span>واقع رقمي</span>؟
          </h2>
          <p className={styles.desc}>
            دعنا نبدأ مشروعك القادم معاً. تواصل معنا الآن واحصل على استشارة مجانية
          </p>
          <div className={styles.buttons}>
            <Link to="/contact" className="btn btn-primary">
              <span>ابدأ مشروعك الآن</span>
              <ArrowLeft size={18} />
            </Link>
            <a href="tel:01200524140" className={styles.phoneBtn}>
              <Phone size={18} />
              <span>01200524140</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
