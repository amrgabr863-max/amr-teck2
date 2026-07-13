import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Eye } from 'lucide-react'
import styles from '../styles/Portfolio.module.css'

// ═══════════════════════════════════════════
// Portfolio Section - معرض الأعمال
// ═══════════════════════════════════════════

const categories = ['الكل', 'مواقع الشركات', 'متاجر إلكترونية', 'منصات تعليمية', 'تطبيقات ويب']

const projects = [
  {
  id: 1,
  title: 'شركة Alumetals للألومنيوم',
  category: 'مواقع الشركات',
  image: '/images/alumetals.jpg',
  description: 'موقع احترافي لشركة Alumetals متخصص في قطاعات الألومنيوم مع عرض المنتجات والخدمات وصفحات تواصل متكاملة.',
  tags: ['React', 'Vite', 'Responsive'],
  link: 'https://alumetals-7x3x.vercel.app/',
},
  {
    id: 2,
    title: 'متجر الأزياء الفاخرة',
    category: 'متاجر إلكترونية',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    description: 'متجر إلكتروني متكامل مع بوابات دفع وإدارة مخزون',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
  },
  {
    id: 3,
    title: 'منصة التعلم الذكي',
    category: 'منصات تعليمية',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    description: 'منصة تعليمية تفاعلية مع فصول افتراضية واختبارات',
    tags: ['React', 'WebRTC', 'AI'],
  },
  {
    id: 4,
    title: 'تطبيق إدارة المصانع',
    category: 'تطبيقات ويب',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    description: 'نظام إدارة متكامل للمصانع مع تتبع الإنتاج والجودة',
    tags: ['Vue.js', 'Python', 'IoT'],
  },
  {
    id: 5,
    title: 'موقع مصنع الأدوية',
    category: 'مواقع الشركات',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    description: 'موقع احترافي لمصنع أدوية مع نظام طلبات B2B',
    tags: ['React', 'GraphQL', 'AWS'],
  },
  {
    id: 6,
    title: 'متجر الإلكترونيات',
    category: 'متاجر إلكترونية',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69056955?w=600&h=400&fit=crop',
    description: 'متجر إلكتروني للإلكترونيات مع مقارنة المنتجات',
    tags: ['Next.js', 'Redis', 'Docker'],
  },
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  const filteredProjects =
    activeCategory === 'الكل'
      ? projects
      : projects.filter((p) => p.category === activeCategory)
      console.log(filteredProjects)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-index]')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [activeCategory])

  return (
    <section className={styles.portfolio} ref={sectionRef} id="portfolio">
      <div className="container">
        {/* العنوان */}
        <div className={styles.header}>
          <h2 className="section-title">
            أحدث <span>أعمالنا</span>
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            نفخر بمشاريعنا التي تعكس جودة عملنا وإبداعنا
          </p>
        </div>

        {/* فلتر الفئات */}
        <div className={styles.filter}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => {
                setActiveCategory(cat)
                setVisibleItems([])
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`${styles.projectCard} ${visibleItems.includes(index) ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* الصورة */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayActions}>
                    <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.overlayBtn}
  aria-label="View project"
>
  <Eye size={20} />
</a>
  <a
  href="https://alumetals-7x3x.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.overlayBtn}
  aria-label="External link"
>
  <ExternalLink size={20} />
</a>
                  </div>
                </div>
                <span className={styles.categoryBadge}>{project.category}</span>
              </div>

              {/* المحتوى */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
