import { useEffect, useRef, useState } from 'react'
import { 
  Globe, 
  ShoppingCart, 
  GraduationCap, 
  Smartphone, 
  Search, 
  Wrench, 
  Brain, 
  Code2 
} from 'lucide-react'
import styles from '../styles/Services.module.css'

// ═══════════════════════════════════════════
// Services Section - قسم الخدمات
// ═══════════════════════════════════════════

const servicesData = [
  {
    icon: Globe,
    title: 'تصميم وتطوير المواقع',
    description: 'نصمم مواقع إلكترونية احترافية للشركات والمصانع مع تجربة مستخدم ممتازة وأداء عالي',
    features: ['تصميم مخصص', 'Responsive', 'SEO جاهز'],
  },
  {
    icon: ShoppingCart,
    title: 'المتاجر الإلكترونية',
    description: 'إنشاء متاجر إلكترونية متكاملة مع بوابات الدفع وإدارة المخزون والطلبات',
    features: ['بوابات دفع', 'إدارة مخزون', 'تقارير ذكية'],
  },
  {
    icon: GraduationCap,
    title: 'المنصات التعليمية',
    description: 'بناء منصات تعليمية تفاعلية مع إدارة الدورات والطلاب والاختبارات الإلكترونية',
    features: ['فصول افتراضية', 'اختبارات', 'شهادات'],
  },
  {
    icon: Smartphone,
    title: 'تطبيقات الويب',
    description: 'تطوير تطبيقات ويب تقدمية (PWA) تعمل على جميع الأجهزة بكفاءة عالية',
    features: ['PWA', 'Real-time', 'Offline'],
  },
  {
    icon: Search,
    title: 'تحسين محركات البحث',
    description: 'خدمات SEO متكاملة لرفع ترتيب موقعك في نتائج البحث وزيادة الزيارات',
    features: ['تحليل الكلمات', 'تحسين On-Page', 'باك لينكس'],
  },
  {
    icon: Wrench,
    title: 'الصيانة والدعم الفني',
    description: 'خدمات صيانة ودعم فني مستمر لضمان عمل موقعك بأفضل أداء على مدار الساعة',
    features: ['دعم 24/7', 'نسخ احتياطي', 'تحديثات'],
  },
  {
    icon: Brain,
    title: 'حلول الذكاء الاصطناعي',
    description: 'تطوير حلول ذكاء اصطناعي مخصصة للشركات بما في ذلك chatbots وتحليل البيانات',
    features: ['Chatbots', 'تحليل البيانات', 'Automation'],
  },
  {
    icon: Code2,
    title: 'تطوير API مخصص',
    description: 'بناء واجهات برمجة تطبيقات قوية وآمنة لربط أنظمتك مع التطبيقات الخارجية',
    features: ['REST/GraphQL', 'أمان عالي', 'توثيق كامل'],
  },
]

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.services} ref={sectionRef} id="services">
      <div className="container">
        {/* العنوان */}
        <div className={styles.header}>
          <h2 className="section-title">
            خدماتنا <span>المتميزة</span>
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            نقدم حلولاً رقمية شاملة تلبي جميع احتياجات عملك
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className={styles.grid}>
          {servicesData.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* الأيقونة */}
                <div className={styles.iconWrapper}>
                  <Icon size={32} />
                </div>

                {/* المحتوى */}
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>

                {/* المميزات */}
                <div className={styles.features}>
                  {service.features.map((feature, i) => (
                    <span key={i} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* التأثير الزخرفي */}
                <div className={styles.cardGlow} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
