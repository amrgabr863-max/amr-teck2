import { Helmet } from 'react-helmet-async'
import {
  Globe, ShoppingCart, GraduationCap, Smartphone,
  Search, Wrench, Brain, Code2, ArrowLeft
} from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from '../styles/ServicesPage.module.css'

// ═══════════════════════════════════════════
// Services Page - صفحة الخدمات
// ═══════════════════════════════════════════

const services = [
  {
    icon: Globe,
    title: 'تصميم وتطوير المواقع',
    desc: 'مواقع احترافية للشركات والمصانع مع تصميم مخصص وأداء عالي',
    features: ['تصميم UI/UX فريد', 'Responsive Design', 'CMS مخصص', 'تحسين الأداء'],
    price: 'يبدأ من 8,000 ج.م',
  },
  {
    icon: ShoppingCart,
    title: 'المتاجر الإلكترونية',
    desc: 'متاجر متكاملة مع بوابات دفع وإدارة مخزون وطلبات',
    features: ['بوابات دفع متعددة', 'إدارة المخزون', 'تتبع الطلبات', 'تقارير مبيعات'],
    price: 'يبدأ من 12,000 ج.م',
  },
  {
    icon: GraduationCap,
    title: 'المنصات التعليمية',
    desc: 'منصات تعليمية تفاعلية مع فصول افتراضية واختبارات',
    features: ['فصول افتراضية', 'اختبارات إلكترونية', 'شهادات', 'تتبع التقدم'],
    price: 'يبدأ من 15,000 ج.م',
  },
  {
    icon: Smartphone,
    title: 'تطبيقات الويب',
    desc: 'تطبيقات ويب تقدمية تعمل على جميع الأجهزة',
    features: ['PWA', 'Real-time', 'Offline Mode', 'Push Notifications'],
    price: 'يبدأ من 10,000 ج.م',
  },
  {
    icon: Search,
    title: 'تحسين محركات البحث',
    desc: 'خدمات SEO متكاملة لرفع ترتيب موقعك',
    features: ['تحليل الكلمات', 'On-Page SEO', 'Off-Page SEO', 'تقارير شهرية'],
    price: 'يبدأ من 3,000 ج.م/شهر',
  },
  {
    icon: Wrench,
    title: 'الصيانة والدعم الفني',
    desc: 'دعم مستمر وصيانة دورية لموقعك',
    features: ['دعم 24/7', 'نسخ احتياطي يومي', 'تحديثات أمنية', 'مراقبة الأداء'],
    price: 'يبدأ من 1,500 ج.م/شهر',
  },
  {
    icon: Brain,
    title: 'حلول الذكاء الاصطناعي',
    desc: 'تطبيقات AI مخصصة لتحسين أعمالك',
    features: ['Chatbots ذكية', 'تحليل البيانات', 'Automation', 'Machine Learning'],
    price: 'حسب المتطلبات',
  },
  {
    icon: Code2,
    title: 'تطوير API مخصص',
    desc: 'واجهات برمجة قوية وآمنة لربط أنظمتك',
    features: ['REST/GraphQL', 'توثيق كامل', 'أمان عالي', 'Rate Limiting'],
    price: 'حسب المتطلبات',
  },
]

const Services = () => {
  return (
    <>
      <Helmet>
        <title>خدماتنا | AMR-TECK</title>
        <meta name="description" content="اكتشف خدمات AMR-TECK المتكاملة في تصميم المواقع والمتاجر والتطبيقات" />
      </Helmet>

      <section className={styles.services}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>خدماتنا <span>المتميزة</span></h1>
            <p className={styles.heroDesc}>حلول رقمية شاملة تناسب جميع احتياجات عملك</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <Icon size={32} />
                    </div>
                    <span className={styles.price}>{service.price}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <ul className={styles.features}>
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={styles.cardCta}>
                    <span>اطلب الخدمة</span>
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
