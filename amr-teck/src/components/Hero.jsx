import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play, Sparkles } from 'lucide-react'
import styles from '../styles/Hero.module.css'

// ═══════════════════════════════════════════
// Hero Section - القسم الرئيسي (Hero)
// ═══════════════════════════════════════════

const Hero = () => {
  const canvasRef = useRef(null)

  // تأثير الجزيئات المتحركة في الخلفية
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 168, 76, ${this.opacity})`
        ctx.fill()
      }
    }

    // إنشاء الجزيئات
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle())
    }

    // رسم الخطوط بين الجزيئات القريبة
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className={styles.hero}>
      {/* خلفية الجزيئات */}
      <canvas ref={canvasRef} className={styles.particlesCanvas} />

      {/* طبقة التدرج */}
      <div className={styles.overlay} />

      {/* المحتوى */}
      <div className="container">
        <div className={styles.heroContent}>
          {/* الشارة */}
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>حلول رقمية متكاملة</span>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className={styles.heroTitle}>
            نحول أفكارك إلى
            <br />
            <span className={styles.highlight}>واقع رقمي مذهل</span>
          </h1>

          {/* الوصف */}
          <p className={styles.heroDesc}>
            نحن في AMR-TECK نصمم ونطور مواقع إلكترونية احترافية للشركات والمصانع،
            ونبني منصات تعليمية وتطبيقات ويب متقدمة مع حلول الذكاء الاصطناعي
          </p>

          {/* الأزرار */}
          <div className={styles.heroButtons}>
            <Link to="/contact" className="btn btn-primary">
              <span>ابدأ مشروعك</span>
              <ArrowLeft size={18} />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              <Play size={18} />
              <span>شاهد أعمالنا</span>
            </Link>
          </div>

          {/* الإحصائيات */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>مشروع منجز</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>عميل سعيد</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>سنوات خبرة</span>
            </div>
          </div>
        </div>
      </div>

      {/* الشكل الزخرفي السفلي */}
      <div className={styles.heroShape}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
