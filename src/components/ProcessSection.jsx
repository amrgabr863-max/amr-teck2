// ============================================================
// ProcessSection.jsx - قسم خطوات تنفيذ المشروع
// ============================================================
import React from 'react'
import { 
  FaLightbulb, FaPencilRuler, FaCode, 
  FaBug, FaRocket, FaHeadset 
} from 'react-icons/fa'
import './ProcessSection.css'

const steps = [
  {
    icon: <FaLightbulb />,
    number: '01',
    title: 'الاستشارة والتخطيط',
    desc: 'نبدأ بفهم رؤيتك وأهدافك بعمق، ثم نضع خطة عمل واضحة مع جدول زمني دقيق.',
    color: '#D4AF37'
  },
  {
    icon: <FaPencilRuler />,
    number: '02',
    title: 'التصميم UI/UX',
    desc: 'نصمم واجهات مستخدم جذابة وسهلة الاستخدام مع نماذج أولية تفاعلية للموافقة.',
    color: '#E8C84A'
  },
  {
    icon: <FaCode />,
    number: '03',
    title: 'التطوير البرمجي',
    desc: 'نبني المشروع بأحدث التقنيات مع كود نظيف وقابل للتوسع والصيانة.',
    color: '#F0D878'
  },
  {
    icon: <FaBug />,
    number: '04',
    title: 'الاختبار والجودة',
    desc: 'نختبر كل جانب من جوانب المشروع لضمان الأداء الأمثل وخلوه من الأخطاء.',
    color: '#D4AF37'
  },
  {
    icon: <FaRocket />,
    number: '05',
    title: 'الإطلاق والنشر',
    desc: 'ننشر مشروعك على خوادم آمنة مع تحسين الأداء وضمان التشغيل السلس.',
    color: '#E8C84A'
  },
  {
    icon: <FaHeadset />,
    number: '06',
    title: 'الدعم المستمر',
    desc: 'نقدم دعماً فنياً مستمراً مع تحديثات دورية وصيانة لضمان استمرارية النجاح.',
    color: '#F0D878'
  },
]

const ProcessSection = () => {
  return (
    <section className="process-section section-padding">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>خطوات <span>تنفيذ المشروع</span></h2>
          <p>نعتمد على منهجية عمل واضحة ومنظمة لضمان تسليم مشاريعنا بأعلى جودة وفي الوقت المحدد</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div 
              className="process-step" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="step-connector"></div>
              <div className="step-content">
                <div className="step-number">{step.number}</div>
                <div className="step-icon" style={{ color: step.color }}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
