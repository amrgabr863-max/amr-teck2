import { Helmet } from 'react-helmet-async'
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react'
import styles from '../styles/About.module.css'

// ═══════════════════════════════════════════
// About Page - صفحة من نحن
// ═══════════════════════════════════════════

const values = [
  { icon: Target, title: 'التركيز على العميل', desc: 'نجاح عملائنا هو نجاحنا' },
  { icon: Eye, title: 'الإبداع والابتكار', desc: 'نبتكر حلولاً فريدة لكل تحدي' },
  { icon: Heart, title: 'الشغف بالجودة', desc: 'نطمح للتميز في كل تفصيلة' },
  { icon: Users, title: 'العمل الجماعي', desc: 'نؤمن بقوة الفريق المتكامل' },
  { icon: Award, title: 'النزاهة', desc: 'الشفافية في كل تعامل' },
  { icon: TrendingUp, title: 'التطوير المستمر', desc: 'نتحسن يوماً بعد يوم' },
]

const About = () => {
  return (
    <>
      <Helmet>
        <title>من نحن | AMR-TECK</title>
        <meta name="description" content="تعرف على شركة AMR-TECK وقصة نجاحنا في عالم التطوير الرقمي" />
      </Helmet>

      <section className={styles.about}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>من نحن</h1>
            <p className={styles.heroDesc}>
              نحن فريق من المطورين والمصممين المتحمسين لبناء تجارب رقمية استثنائية
            </p>
          </div>
        </div>

        {/* القصة */}
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyContent}>
              <h2>قصتنا</h2>
              <p>
                تأسست AMR-TECK بهدف تقديم حلول رقمية مبتكرة للشركات والمصانع.
                بدأنا رحلتنا منذ أكثر من 5 سنوات ونمونا لنصبح واحدة من الشركات
                الرائدة في مجال تطوير الويب في مصر.
              </p>
              <p>
                نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع، ولذلك نسعى
                لتقديم حلول عالية الجودة بأسعار تنافسية تناسب جميع الأعمال.
              </p>
            </div>
            <div className={styles.storyStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>150+</span>
                <span className={styles.statLabel}>مشروع منجز</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>50+</span>
                <span className={styles.statLabel}>عميل سعيد</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>5+</span>
                <span className={styles.statLabel}>سنوات خبرة</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>12</span>
                <span className={styles.statLabel}>خبير تقني</span>
              </div>
            </div>
          </div>

          {/* القيم */}
          <div className={styles.values}>
            <h2 className="section-title">قيمنا <span>الأساسية</span></h2>
            <div className="gold-line" />
            <div className={styles.valuesGrid}>
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <Icon size={28} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
