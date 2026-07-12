// ============================================================
// ServicesSection.jsx - قسم الخدمات
// ============================================================
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaGlobe, FaShoppingCart, FaGraduationCap, 
  FaMobileAlt, FaSearch, FaTools, FaRobot, FaArrowLeft 
} from 'react-icons/fa'
import './ServicesSection.css'

const services = [
  {
    icon: <FaGlobe />,
    title: 'تصميم وتطوير المواقع',
    desc: 'مواقع احترافية للشركات والمصانع بتصميم عصري وأداء فائق السرعة مع تجربة مستخدم ممتازة.',
    features: ['تصميم متجاوب', 'تحسين السرعة', 'واجهة عربية/إنجليزية']
  },
  {
    icon: <FaShoppingCart />,
    title: 'المتاجر الإلكترونية',
    desc: 'بناء متاجر إلكترونية متكاملة مع بوابات دفع متعددة ونظام إدارة منتجات ذكي.',
    features: ['بوابات دفع متعددة', 'إدارة المخزون', 'تقارير مبيعات']
  },
  {
    icon: <FaGraduationCap />,
    title: 'المنصات التعليمية',
    desc: 'منصات تعليمية متكاملة مع نظام إدارة محتوى، اختبارات إلكترونية، وتتبع التقدم.',
    features: ['نظام LMS', 'فيديو تفاعلي', 'شهادات إلكترونية']
  },
  {
    icon: <FaMobileAlt />,
    title: 'تطبيقات الويب',
    desc: 'تطبيقات ويب تفاعلية باستخدام أحدث التقنيات مثل React وVue مع أداء عالي.',
    features: ['PWA', 'واجهة سلسة', 'تكامل API']
  },
  {
    icon: <FaSearch />,
    title: 'تحسين محركات البحث',
    desc: 'استراتيجيات SEO متكاملة لتحسين ترتيب موقعك في نتائج البحث وزيادة الزوار.',
    features: ['تحليل الكلمات', 'تحسين المحتوى', 'بناء الروابط']
  },
  {
    icon: <FaTools />,
    title: 'الصيانة والدعم الفني',
    desc: 'دعم فني على مدار الساعة مع صيانة دورية وتحديثات مستمرة لضمان استمرارية عملك.',
    features: ['دعم 24/7', 'نسخ احتياطي', 'تحديثات أمنية']
  },
  {
    icon: <FaRobot />,
    title: 'حلول الذكاء الاصطناعي',
    desc: 'تطبيقات ذكاء اصطناعي مخصصة للشركات تشمل chatbots وتحليل البيانات والأتمتة.',
    features: ['Chatbots ذكية', 'تحليل البيانات', 'أتمتة العمليات']
  },
]

const ServicesSection = () => {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>خدماتنا <span>المتخصصة</span></h2>
          <p>نقدم مجموعة شاملة من الحلول التقنية المصممة خصيصاً لتلبية احتياجات عملك وتسريع نموك الرقمي</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="service-icon-glow"></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-features">
                {service.features.map((feat, i) => (
                  <li key={i}>
                    <span className="feature-dot"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up">
          <Link to="/services" className="btn-outline">
            <FaArrowLeft />
            اكتشف جميع خدماتنا
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
