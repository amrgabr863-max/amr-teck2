// ============================================================
// TestimonialsSection.jsx - قسم آراء العملاء
// ============================================================
import React, { useState } from 'react'
import { FaQuoteRight, FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import './TestimonialsSection.css'

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمود',
    role: 'مدير شركة صناعية',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'تعاملت مع AMR-TECK لتصميم موقع شركتنا الصناعية، وكانت التجربة رائعة. الفريق محترف جداً والتسليم كان قبل الموعد المحدد. الموقع أصبح وجهتنا الرقمية الأولى.'
  },
  {
    id: 2,
    name: 'سارة عبدالله',
    role: 'صاحبة متجر إلكتروني',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'متجري الإلكتروني من AMR-TECK غيّر مجرى عملي تماماً. التصميم أنيق، والدفع سهل، والدعم الفني رائع. زادت مبيعاتي بنسبة 200% بعد الإطلاق.'
  },
  {
    id: 3,
    name: 'د. خالد إبراهيم',
    role: 'مدير منصة تعليمية',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'المنصة التعليمية التي بنتها AMR-TECK لمعهدنا تفوقت على كل توقعاتنا. الطلاب يحبون التصميم والتفاعل، والفريق كان متعاوناً طوال فترة التطوير.'
  },
  {
    id: 4,
    name: 'محمد علي',
    role: 'رجل أعمال',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'خدمة SEO من AMR-TECK رفعت موقعي من الصفحة الخامسة إلى الأولى في جوجل خلال 3 أشهر. استثمار مربح بكل المقاييس، أنصح الجميع بالتعامل معهم.'
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>آراء <span>عملائنا</span></h2>
          <p>نفخر بثقة عملائنا ونسعى دائماً لتجاوز توقعاتهم</p>
        </div>

        <div className="testimonials-wrapper" data-aos="fade-up">
          {/* Main Testimonial */}
          <div className="testimonial-main">
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <div className="testimonial-author">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="author-avatar"
              />
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <span>{testimonials[currentIndex].role}</span>
              </div>
              <div className="author-rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonial-nav">
            <button onClick={prevSlide} className="nav-btn">
              <FaChevronRight />
            </button>
            <div className="nav-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={index === currentIndex ? 'active' : ''}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="nav-btn">
              <FaChevronLeft />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="testimonial-thumbnails">
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                className={`thumb ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={t.avatar} alt={t.name} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
