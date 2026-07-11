// ============================================================
// HeroSection.jsx - القسم الرئيسي البطولي
// ============================================================
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaRocket, FaCode, FaLaptop } from 'react-icons/fa'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* خلفية متحركة */}
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className={`particle p${i + 1}`}></span>
          ))}
        </div>
      </div>

      <div className="container hero-content">
        {/* النص الرئيسي */}
        <div className="hero-text" data-aos="fade-up">
          <div className="hero-badge">
            <FaCode />
            <span>نبني المستقبل الرقمي</span>
          </div>

          <h1>
            <span className="hero-line">حلول تقنية</span>
            <span className="hero-line gold">متكاملة</span>
            <span className="hero-line">لعملك</span>
          </h1>

          <p className="hero-desc">
            نحن في <strong>AMR-TECK</strong> نقدم حلولاً تقنية مبتكرة تشمل تصميم المواقع، 
            المتاجر الإلكترونية، المنصات التعليمية، تطبيقات الويب، وخدمات الذكاء الاصطناعي. 
            دعنا نحول رؤيتك إلى واقع رقمي مذهل.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-gold">
              <FaRocket />
              ابدأ مشروعك
            </Link>
            <Link to="/contact" className="btn-outline">
              <FaArrowLeft />
              تواصل معنا
            </Link>
          </div>

          {/* إحصائيات */}
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-item">
              <span className="stat-number">+150</span>
              <span className="stat-label">مشروع ناجح</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">+50</span>
              <span className="stat-label">عميل سعيد</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">+5</span>
              <span className="stat-label">سنوات خبرة</span>
            </div>
          </div>
        </div>

        {/* الصورة/الرسوم التوضيحية */}
        <div className="hero-visual" data-aos="fade-left" data-aos-delay="200">
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <FaLaptop className="hero-main-icon" />
              <div className="floating-card card-1">
                <FaCode />
                <span>تطوير احترافي</span>
              </div>
              <div className="floating-card card-2">
                <FaRocket />
                <span>سرعة عالية</span>
              </div>
              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>
              <div className="orbit orbit-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* موجة سفلية */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0A0A0A"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
