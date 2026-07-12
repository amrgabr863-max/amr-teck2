import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from '../styles/Blog.module.css'

// ═══════════════════════════════════════════
// Blog Page - صفحة المدونة
// ═══════════════════════════════════════════

const posts = [
  {
    id: 1,
    title: 'أهمية SEO لموقعك الإلكتروني في 2024',
    excerpt: 'تعرف على أحدث استراتيجيات تحسين محركات البحث وزيادة الزيارات العضوية',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=350&fit=crop',
    author: 'فريق AMR-TECK',
    date: '15 يناير 2024',
    category: 'SEO',
  },
  {
    id: 2,
    title: 'كيف تختار منصة التجارة الإلكترونية المناسبة',
    excerpt: 'دليل شامل لاختيار أفضل منصة لمتجرك الإلكتروني بناءً على احتياجاتك',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=350&fit=crop',
    author: 'فريق AMR-TECK',
    date: '10 يناير 2024',
    category: 'تجارة إلكترونية',
  },
  {
    id: 3,
    title: 'تطبيقات الذكاء الاصطناعي في الأعمال',
    excerpt: 'اكتشف كيف يمكن للذكاء الاصطناعي تحويل عملك وزيادة الإنتاجية',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=350&fit=crop',
    author: 'فريق AMR-TECK',
    date: '5 يناير 2024',
    category: 'ذكاء اصطناعي',
  },
]

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>المدونة | AMR-TECK</title>
        <meta name="description" content="آخر المقالات والأخبار في عالم التطوير والتقنية" />
      </Helmet>

      <section className={styles.blog}>
        <div className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>المدونة</h1>
            <p className={styles.heroDesc}>آخر المقالات والرؤى في عالم التقنية</p>
          </div>
        </div>

        <div className="container">
          <div className={styles.grid}>
            {posts.map((post) => (
              <article key={post.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className={styles.category}>{post.category}</span>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span><User size={14} /> {post.author}</span>
                    <span><Calendar size={14} /> {post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className={styles.readMore}>
                    <span>اقرأ المزيد</span>
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
