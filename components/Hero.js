import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" id="work">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="badge">Selected work</span>
          <h1>Modern, fast websites <span className="accent">that work.</span></h1>
          <p>A handful of live projects I&rsquo;ve built &mdash; from bakeries to florists to loc-care studios.</p>
          <div className="hero-actions">
            <Link href="#work" className="btn btn-primary">View projects</Link>
            <Link href="#about" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card"></div>
          <div className="floating-card delay-2"></div>
          <div className="floating-card delay-4"></div>
        </div>
      </div>
    </section>
  )
}
