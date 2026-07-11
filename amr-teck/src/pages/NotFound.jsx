import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'
import styles from '../styles/NotFound.module.css'

// ═══════════════════════════════════════════
// NotFound Page - صفحة 404
// ═══════════════════════════════════════════

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - الصفحة غير موجودة | AMR-TECK</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className={styles.notFound}>
        <div className={styles.content}>
          <AlertTriangle size={64} className={styles.icon} />
          <h1>404</h1>
          <h2>الصفحة غير موجودة</h2>
          <p>عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها</p>
          <Link to="/" className={styles.homeBtn}>
            <Home size={18} />
            <span>العودة للرئيسية</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
