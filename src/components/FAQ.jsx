import { useState, useEffect, useRef } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import styles from '../styles/FAQ.module.css'

// ═══════════════════════════════════════════
// FAQ Section - الأسئلة الشائعة
// ═══════════════════════════════════════════

const faqs = [
  {
    question: 'كم تستغرق مدة تصميم وتطوير الموقع؟',
    answer: 'مدة التطوير تعتمد على حجم وتعقيد المشروع. الموقع البسيط يستغرق من 2-3 أسابيع، بينما المشاريع الكبيرة قد تستغرق من 1-3 أشهر. نقدم جدول زمني واضح قبل بدء العمل.',
  },
  {
    question: 'هل تقدمون خدمة الصيانة بعد إطلاق الموقع؟',
    answer: 'نعم، نقدم باقات صيانة شهرية وسنوية تشمل التحديثات الأمنية، النسخ الاحتياطي، إصلاح الأخطاء، وإضافة ميزات جديدة. الدعم الفني متاح على مدار الساعة.',
  },
  {
    question: 'ما هي تكلفة تصميم موقع إلكتروني؟',
    answer: 'التكلفة تختلف حسب متطلبات المشروع. نقدم أسعاراً تنافسية تناسب جميع الميزانيات. اتصل بنا للحصول على عرض سعر مخصص لمشروعك.',
  },
  {
    question: 'هل يمكن تحسين موقعي القديم؟',
    answer: 'بالتأكيد! نقوم بإعادة تصميم وتحديث المواقع القديمة مع الحفاظ على بياناتك وتحسين الأداء والتصميم بأحدث التقنيات.',
  },
  {
    question: 'هل تقدمون خدمات SEO؟',
    answer: 'نعم، نقدم خدمات SEO متكاملة تشمل تحليل الكلمات المفتاحية، تحسين On-Page، بناء الروابط الخلفية، وإنشاء محتوى محسن لمحركات البحث.',
  },
  {
    question: 'هل الموقع سيكون متجاوباً مع الجوال؟',
    answer: 'نعم، جميع مواقعنا متجاوبة بالكامل (Responsive) وتعمل بشكل مثالي على جميع الأجهزة: الهواتف، الأجهزة اللوحية، وسطح المكتب.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className={styles.faq} ref={sectionRef}>
      <div className="container">
        <div className={styles.content}>
          {/* الجزء الأيسر - العنوان والصورة */}
          <div className={`${styles.visual} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.visualContent}>
              <div className={styles.iconWrapper}>
                <HelpCircle size={48} />
              </div>
              <h2 className={styles.visualTitle}>
                الأسئلة <span>الشائعة</span>
              </h2>
              <p className={styles.visualDesc}>
                إذا كان لديك سؤال آخر لا تتردد في التواصل معنا مباشرة
              </p>
              <a href="tel:01200524140" className={styles.visualCta}>
                اتصل بنا: 01200524140
              </a>
            </div>
            {/* الدوائر الزخرفية */}
            <div className={styles.decoCircle1} />
            <div className={styles.decoCircle2} />
          </div>

          {/* الجزء الأيمن - قائمة الأسئلة */}
          <div className={`${styles.questions} ${isVisible ? styles.visible : ''}`}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={`${styles.questionIcon} ${openIndex === index ? styles.iconRotated : ''}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div
                  className={styles.answer}
                  style={{
                    maxHeight: openIndex === index ? '300px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
