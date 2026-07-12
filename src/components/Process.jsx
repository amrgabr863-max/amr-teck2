import { useEffect, useRef, useState } from 'react'
import { MessageSquare, Pencil, Code, Rocket, CheckCircle } from 'lucide-react'
import styles from '../styles/Process.module.css'

// ═══════════════════════════════════════════
// Process Section - خطوات تنفيذ المشروع
// ═══════════════════════════════════════════

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'الاستشارة والتحليل',
    description: 'نبدأ بفهم احتياجاتك وأهدافك بشكل دقيق من خلال جلسات استشارية مكثفة',
    details: ['تحليل المتطلبات', 'دراسة المنافسين', 'تحديد الجمهور المستهدف'],
  },
  {
    icon: Pencil,
    number: '02',
    title: 'التصميم والتخطيط',
    description: 'نصمم واجهة مستخدم جذابة وخارطة موقع واضحة تضمن أفضل تجربة',
    details: ['Wireframes', 'UI/UX Design', 'Prototype'],
  },
  {
    icon: Code,
    number: '03',
    title: 'التطوير والبرمجة',
    description: 'نطور الموقع بأحدث التقنيات مع كود نظيف وقابل للتوسع',
    details: ['Frontend', 'Backend', 'Database', 'API'],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'الإطلاق والنشر',
    description: 'نختبر الموقع بشكل شامل ثم نطلقه على استضافة آمنة وعالية الأداء',
    details: ['Testing', 'SEO Setup', 'Deployment', 'SSL'],
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'الدعم والمتابعة',
    description: 'نقدم دعماً فنياً مستمراً وتحديثات دورية لضمان أفضل أداء',
    details: ['24/7 Support', 'Updates', 'Analytics', 'Maintenance'],
  },
]

const Process = () => {
  const [activeStep, setActiveStep] = useState(0)
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
    <section className={styles.process} ref={sectionRef}>
      <div className="container">
        {/* العنوان */}
        <div className={styles.header}>
          <h2 className="section-title">
            خطوات <span>تنفيذ المشروع</span>
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            نتبع منهجية احترافية واضحة لضمان نجاح كل مشروع
          </p>
        </div>

        {/* الخط الزمني */}
        <div className={styles.timeline}>
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeStep
            const isPast = index < activeStep

            return (
              <div
                key={index}
                className={`${styles.step} ${isVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onClick={() => setActiveStep(index)}
              >
                {/* الخط الرابط */}
                {index < steps.length - 1 && (
                  <div className={`${styles.connector} ${isPast ? styles.connectorActive : ''}`} />
                )}

                {/* الدائرة */}
                <div
                  className={`${styles.stepCircle} ${isActive ? styles.stepActive : ''} ${isPast ? styles.stepPast : ''}`}
                >
                  <Icon size={24} />
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>

                {/* المحتوى */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>

                  {/* التفاصيل */}
                  <div className={`${styles.stepDetails} ${isActive ? styles.detailsActive : ''}`}>
                    <div className={styles.detailsGrid}>
                      {step.details.map((detail, i) => (
                        <span key={i} className={styles.detailItem}>
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
