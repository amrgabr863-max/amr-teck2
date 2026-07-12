import { useState, useEffect, useRef } from 'react'
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react'
import styles from '../styles/Testimonials.module.css'

// ═══════════════════════════════════════════
// Testimonials Section - آراء العملاء
// ═══════════════════════════════════════════

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    role: 'مدير مصنع الصناعات المعدنية',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'تعاملت مع AMR-TECK لتصميم موقع مصنعنا وكانت النتيجة مذهلة. الموقع احترافي وسريع ويعكس صورة شركتنا بشكل ممتاز. فريق العمل متعاون ويلتزم بالمواعيد.',
  },
  {
    id: 2,
    name: 'سارة عبدالله',
    role: 'صاحبة متجر الأزياء الفاخرة',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'المتجر الإلكتروني الذي صمموه لي زاد مبيعاتي بنسبة 200%! التصميم أنيق والتجربة سلسة للعملاء. أنصح الجميع بالتعامل معهم.',
  },
  {
    id: 3,
    name: 'د. خالد إبراهيم',
    role: 'مدير أكاديمية التعلم الذكي',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'بنوا لنا منصة تعليمية متكاملة مع فصول افترافية واختبارات إلكترونية. الجودة عالمية والدعم الفني ممتاز. شكراً لفريق AMR-TECK.',
  },
  {
    id: 4,
    name: 'محمد علي',
    role: 'مدير شركة التقنية المتقدمة',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'حلول الذكاء الاصطناعي التي طبقوها في شركتنا غيرت طريقة عملنا بالكامل. كفاءة عالية ونتائج ملموسة في وقت قصير.',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className={styles.testimonials} ref={sectionRef}>
      <div className="container">
        {/* العنوان */}
        <div className={styles.header}>
          <h2 className="section-title">
            آراء <span>عملائنا</span>
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا
          </p>
        </div>

        {/* عرض التقييمات */}
        <div className={`${styles.carousel} ${isVisible ? styles.visible : ''}`}>
          {/* السهم السابق */}
          <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous">
            <ChevronRight size={24} />
          </button>

          {/* البطاقات */}
          <div className={styles.cardsContainer}>
            {testimonials.map((testimonial, index) => {
              const offset = index - currentIndex
              const isActive = index === currentIndex

              return (
                <div
                  key={testimonial.id}
                  className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                  style={{
                    transform: `translateX(${offset * 110}%) scale(${isActive ? 1 : 0.85})`,
                    opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.5,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  }}
                >
                  {/* أيقونة الاقتباس */}
                  <div className={styles.quoteIcon}>
                    <Quote size={32} />
                  </div>

                  {/* النص */}
                  <p className={styles.cardText}>{testimonial.text}</p>

                  {/* التقييم */}
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className={styles.star} fill="currentColor" />
                    ))}
                  </div>

                  {/* معلومات العميل */}
                  <div className={styles.clientInfo}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={styles.clientImage}
                      loading="lazy"
                    />
                    <div className={styles.clientDetails}>
                      <h4 className={styles.clientName}>{testimonial.name}</h4>
                      <span className={styles.clientRole}>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* السهم التالي */}
          <button className={styles.navBtn} onClick={nextSlide} aria-label="Next">
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* نقاط التنقل */}
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
