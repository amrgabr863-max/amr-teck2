// ============================================================
// PortfolioSection.jsx - قسم معرض الأعمال
// ============================================================
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import './PortfolioSection.css'

const categories = ['الكل', 'مواقع', 'متاجر', 'تطبيقات', 'تعليم']

const projects = [
  {
    id: 1,
    title: 'موقع شركة صناعية',
    category: 'مواقع',
    desc: 'موقع احترافي لشركة صناعية كبرى مع نظام إدارة محتوى متكامل',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'CMS']
  },
  {
    id: 2,
    title: 'متجر إلكتروني للأزياء',
    category: 'متاجر',
    desc: 'متجر إلكتروني كامل مع بوابات دفع ونظام إدارة مخزون ذكي',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    tags: ['E-commerce', 'Payment', 'Inventory']
  },
  {
    id: 3,
    title: 'منصة تعليمية',
    category: 'تعليم',
    desc: 'منصة تعليمية متكاملة مع فيديوهات تفاعلية واختبارات إلكترونية',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    tags: ['LMS', 'Video', 'Quiz']
  },
  {
    id: 4,
    title: 'تطبيق إدارة المشاريع',
    category: 'تطبيقات',
    desc: 'تطبيق ويب لتتبع وإدارة المشاريع مع لوحات تحكم تفاعلية',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Dashboard', 'Analytics', 'PWA']
  },
  {
    id: 5,
    title: 'موقع مصنع',
    category: 'مواقع',
    desc: 'موقع عصري لمصنع مع كتالوج منتجات ونظام طلبات',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    tags: ['Catalog', 'Orders', 'SEO']
  },
  {
    id: 6,
    title: 'متجر إلكتروني للإلكترونيات',
    category: 'متاجر',
    desc: 'متجر إلكتروني للإلكترونيات مع مقارنة منتجات وتقييمات',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&h=400&fit=crop',
    tags: ['Compare', 'Reviews', 'Mobile']
  },
]

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('الكل')

  const filteredProjects = activeCategory === 'الكل' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>أحدث <span>أعمالنا</span></h2>
          <p>نفخر بمشاريعنا الناجحة التي تعكس جودة عملنا وإبداع فريقنا</p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filter" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="portfolio-card" 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                    <div className="portfolio-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                    <button className="portfolio-view-btn">
                      <FaExternalLinkAlt />
                      عرض المشروع
                    </button>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta" data-aos="fade-up">
          <Link to="/portfolio" className="btn-outline">
            <FaArrowLeft />
            شاهد جميع المشاريع
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
