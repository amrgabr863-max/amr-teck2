import { Helmet } from 'react-helmet-async'
import { ExternalLink } from 'lucide-react'
import styles from '../styles/PortfolioPage.module.css'

// ═══════════════════════════════════════════
// Portfolio Page - صفحة أعمالنا
// ═══════════════════════════════════════════

const projects = [
  {
    id: 1,
    title: 'موقع شركة الصناعات المعدنية',
    category: 'مواقع الشركات',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    description: 'موقع احترافي لشركة صناعية كبرى مع نظام إدارة محتوى متكامل',
    tags: ['React', 'Node.js', 'CMS'],
    link: '#',
  },
  {
    id: 2,
    title: 'متجر الأزياء الفاخرة',
    category: 'متاجر إلكترونية',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
    description: 'متجر إلكتروني متكامل مع بوابات دفع وإدارة مخزون',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#',
  },
  {
    id: 3,
    title: 'منصة التعلم الذكي',
    category: 'منصات تعليمية',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
    description: 'منصة تعليمية تفاعلية مع فصول افتراضية واختبارات',
    tags: ['React', 'WebRTC', 'AI'],
    link: '#',
  },
  {
    id: 4,
    title: 'تطبيق إدارة المصانع',
    category: 'تطبيقات ويب',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    description: 'نظام إدارة متكامل للمصانع مع تتبع الإنتاج والجودة',
    tags: ['Vue.js', 'Python', 'IoT'],
    link: '#',
  },
  {
    id: 5,
    title: 'موقع مصنع الأدوية',
    category: 'مواقع الشركات',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop',
    description: 'موقع احترافي لمصنع أدوية مع نظام طلبات B2B',
    tags: ['React', 'GraphQL', 'AWS'],
    link: '#',
  },
  {
    id: 6,
    title: 'متجر الإلكترونيات',
    category: 'متاجر إلكترونية',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69056955?w=800&h=500&fit=crop',
    description: 'متجر إلكتروني للإلكترونيات مع مقارنة المنتجات',
    tags: ['Next.js', 'Redis', 'Docker'],
    link: '#',
  },
]

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>أعمالنا | AMR-TECK</title>
        <meta name="description" content="معرض أعمال AMR-TECK - تصفح مشاريعنا الناجحة" />
      </Helmet>

      <section className={styles.portfolio}>
        <div className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>أعمالنا <span>المتميزة</span></h1>
            <p className={styles.heroDesc}>نفخر بكل مشروع أنجزناه لعملائنا</p>
          </div>
        </div>

        <div className="container">
          <div className={styles.grid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className={styles.overlay}>
                    <a href={project.link} className={styles.viewBtn} aria-label="View project">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
