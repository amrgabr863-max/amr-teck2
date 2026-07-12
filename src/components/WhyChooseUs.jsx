import { useEffect, useRef, useState } from 'react'
import { Check, Shield, Zap, Users, Clock, Award } from 'lucide-react'
import styles from '../styles/WhyChooseUs.module.css'

// ═══════════════════════════════════════════
// Why Choose Us Section - لماذا تختار AMR-TECK
// ═══════════════════════════════════════════

const reasons = [
  {
    icon: Zap,
    title: 'أداء عالي وسريع',
    description: 'مواقع سريعة التحميل مع تحسين كامل للأداء والسرعة',
  },
  {
    icon: Shield,
    title: 'أمان وحماية',
    description: 'حماية شاملة لبياناتك وموقعك مع شهادات SSL ونظام حماية متقدم',
  },
  {
    icon: Users,
    title: 'فريق متخصص',
    description: 'فريق من المطورين والمصممين ذوي الخبرة في مجال تطوير الويب',
  },
  {
    icon: Clock,
    title: 'التزام بالمواعيد',
    description: 'نلتزم بالجداول الزمنية المتفق عليها مع تحديثات دورية عن سير العمل',
  },
  {
    icon: Award,
    title: 'جودة عالمية',
    description: 'معايير عالمية في التصميم والتطوير مع ضمان الجودة',
  },
  {
    icon: Check,
    title: 'دعم مستمر',
    description: 'دعم فني على مدار الساعة مع صيانة وتحديثات دورية',
  },
]

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.whyChooseUs} ref={sectionRef}>
      <div className="container">
        <div className={styles.content}>
          {/* الجزء الأيسر - الصورة/الرسومات */}
          <div className={`${styles.visual} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>
                <Award size={48} />
              </div>
              <h3 className={styles.visualTitle}>أكثر من 150 مشروع ناجح</h3>
              <p className={styles.visualDesc}>
                نفخر بإنجاز أكثر من 150 مشروعاً ناجحاً لعملائنا في مختلف المجالات
              </p>
              <div className={styles.visualStats}>
                <div className={styles.vStat}>
                  <span className={styles.vStatNum}>98%</span>
                  <span className={styles.vStatLabel}>رضا العملاء</span>
                </div>
                <div className={styles.vStat}>
                  <span className={styles.vStatNum}>50+</span>
                  <span className={styles.vStatLabel}>عميل نشط</span>
                </div>
              </div>
            </div>
            {/* الدوائر الزخرفية */}
            <div className={styles.circle1} />
            <div className={styles.circle2} />
            <div className={styles.circle3} />
          </div>

          {/* الجزء الأيمن - الأسباب */}
          <div className={styles.reasons}>
            <div className={styles.header}>
              <h2 className="section-title" style={{ textAlign: 'right' }}>
                لماذا <span>تختارنا</span>؟
              </h2>
              <div className="gold-line" style={{ margin: '1rem 0 2rem auto' }} />
              <p className={styles.headerDesc}>
                نحن نقدم لك تجربة فريدة في عالم التطوير الرقمي مع التزام تام بالجودة والإبداع
              </p>
            </div>

            <div className={styles.reasonsGrid}>
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div
                    key={index}
                    className={`${styles.reasonCard} ${isVisible ? styles.visible : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.reasonIcon}>
                      <Icon size={22} />
                    </div>
                    <div className={styles.reasonContent}>
                      <h4 className={styles.reasonTitle}>{reason.title}</h4>
                      <p className={styles.reasonDesc}>{reason.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
