import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import styles from '../styles/Contact.module.css'

// ═══════════════════════════════════════════
// Contact Page - صفحة التواصل
// ═══════════════════════════════════════════

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Helmet>
        <title>تواصل معنا | AMR-TECK</title>
        <meta name="description" content="تواصل مع AMR-TECK لبدء مشروعك القادم" />
      </Helmet>

      <section className={styles.contact}>
        <div className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>تواصل <span>معنا</span></h1>
            <p className={styles.heroDesc}>نحن هنا لمساعدتك في تحقيق أهدافك الرقمية</p>
          </div>
        </div>

        <div className="container">
          <div className={styles.content}>
            {/* معلومات التواصل */}
            <div className={styles.info}>
              <h2>معلومات التواصل</h2>
              <p>لا تتردد في التواصل معنا لأي استفسار أو لبدء مشروعك</p>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <MapPin size={22} />
                  <div>
                    <h4>العنوان</h4>
                    <span>العاشر من رمضان، مج 21</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Phone size={22} />
                  <div>
                    <h4>الهاتف</h4>
                    <a href="tel:01200524140">01200524140</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Mail size={22} />
                  <div>
                    <h4>البريد الإلكتروني</h4>
                    <a href="mailto:info@amr-teck.com">info@amr-teck.com</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Clock size={22} />
                  <div>
                    <h4>ساعات العمل</h4>
                    <span>الأحد - الخميس: 9 ص - 5 م</span>
                  </div>
                </div>
              </div>
            </div>

            {/* نموذج التواصل */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3>أرسل رسالتك</h3>

              {submitted ? (
                <div className={styles.success}>
                  <CheckCircle size={48} />
                  <p>تم إرسال رسالتك بنجاح! سنتواصل معك قريباً</p>
                </div>
              ) : (
                <>
                  <div className={styles.formRow}>
                    <input
                      type="text"
                      name="name"
                      placeholder="الاسم الكامل"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="رقم الهاتف"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <select name="service" value={formData.service} onChange={handleChange}>
                      <option value="">اختر الخدمة</option>
                      <option value="website">تصميم موقع</option>
                      <option value="store">متجر إلكتروني</option>
                      <option value="education">منصة تعليمية</option>
                      <option value="app">تطبيق ويب</option>
                      <option value="seo">SEO</option>
                      <option value="ai">ذكاء اصطناعي</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <textarea
                    name="message"
                    placeholder="تفاصيل مشروعك..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className={styles.submitBtn}>
                    <span>إرسال الرسالة</span>
                    <Send size={18} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
