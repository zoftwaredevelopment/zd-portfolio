import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Tarizika',
    url: 'https://tarizika.vercel.app',
    category: 'Food · Bakery',
    tag: 'Live site',
    description: 'Cakes, small chops and snacks worth gathering around &mdash; a sweet storefront for celebrations and everyday treats.',
  },
  {
    name: 'MooluxBeuti',
    url: 'https://mooluxbeuti.vercel.app',
    category: 'Beauty · Wellness',
    tag: 'Live site',
    description: 'Loc care and styling studio in the GTA, Canada. Thoughtful loc maintenance, expert styling and scalp care from a specialist with over a decade of experience.',
  },
  {
    name: 'Larisalefleur Florals',
    url: 'https://llf-beta.vercel.app',
    category: 'Florals · Gifting',
    tag: 'Live site',
    description: 'Preserved Ecuadorian roses and luxury flower boxes in Abuja. Real blooms that hold their beauty for up to a year, arranged by hand.',
  },
  {
    name: "Winnie's Chinchin & More",
    url: 'https://winnieschinchin.vercel.app',
    category: 'Food · Bakery',
    tag: 'Live site',
    description: 'Homemade Nigerian snacks baked fresh in small batches &mdash; golden chin chin, moist banana bread and party-ready boxes.',
  },
]

export default function ProjectsSection() {
  return (
    <section className="projects" id="work">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Our projects</h2>
          <p className="section-sub">Each link opens the live site in a new tab.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
