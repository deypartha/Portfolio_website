import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import dhaba from'../public/images/DhabaPoint.png'
import ecommerce from '../public/images/ecom.png'
import ezywork from '../public/images/ezywork.png'


const projects = [
  {
    title: 'Ezywork - Smart Worker Finding Platform',
    description: 'EzyWork is a full-stack worker-finding platform that helps users discover, connect, and manage skilled service providers through a web-based system.',
    image: ezywork,
    tags: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/deypartha/Myproject-EzyWork',
    live: 'https://myproject-ezy-work.vercel.app/',
    featured: true,
  },
  {
    title: 'Luxe Wear - E-Commerce Dashboard',
    description: 'Full-featured admin dashboard with real-time analytics, inventory management, order tracking, and responsive data visualization using D3.js.',
    image: ecommerce,
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ecommerce-dashboard',
    live: 'https://ecommerce-dashboard.vercel.app',
    featured: true,
  },
  {
    title: 'Saarthi - A cab booking application',
    description: 'A frontend application featuring cab booking capabilities, real-time tracking, and seamless user experience.',
    image: DhabaPoint,
    tags: ['React', 'JSON Server', 'CSS', 'Vite'],
    github: 'https://github.com/yourusername/collab-platform',
    live: 'https://collab-platform.vercel.app',
    featured: false,
  },
  // {
  //   title: 'Social Media Analytics',
  //   description: 'Comprehensive analytics platform for social media managers with automated reporting, sentiment analysis, and competitor tracking.',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  //   tags: ['Next.js', 'Python', 'FastAPI', 'Redis', 'Chart.js'],
  //   github: 'https://github.com/yourusername/social-analytics',
  //   live: 'https://social-analytics.vercel.app',
  //   featured: false,
  // },
  // {
  //   title: 'Weather Forecast App',
  //   description: 'Beautiful weather application with location-based forecasts, interactive maps, severe weather alerts, and 7-day predictions.',
  //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
  //   tags: ['React Native', 'Weather API', 'Maps', 'Expo'],
  //   github: 'https://github.com/yourusername/weather-app',
  //   live: 'https://weather-app.vercel.app',
  //   featured: false,
  // },
  // {
  //   title: 'Portfolio CMS',
  //   description: 'Headless CMS for developers to manage portfolio content with markdown support, image optimization, and automatic SEO generation.',
  //   image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
  //   tags: ['Next.js', 'Sanity CMS', 'Vercel', 'TypeScript'],
  //   github: 'https://github.com/yourusername/portfolio-cms',
  //   live: 'https://portfolio-cms.vercel.app',
  //   featured: false,
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="My Work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative glass rounded-2xl overflow-hidden card-hover ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60" />

                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-500/90 text-white text-xs font-semibold">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 text-xs font-medium border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors text-sm font-medium"
                  >
                    Live Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}