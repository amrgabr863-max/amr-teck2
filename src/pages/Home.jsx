import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

// ═══════════════════════════════════════════
// Home Page - الصفحة الرئيسية
// ═══════════════════════════════════════════

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AMR-TECK | حلول رقمية متكاملة</title>
        <meta name="description" content="شركة AMR-TECK لتصميم وتطوير المواقع الإلكترونية والمتاجر والمنصات التعليمية" />
      </Helmet>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home
