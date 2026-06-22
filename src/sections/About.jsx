import { motion } from 'framer-motion'
import { Code2, Database, Globe, Zap, Users, Coffee } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const features = [
  {
    icon: Globe,
    title: 'Frontend Excellence',
    description: 'Building responsive, interactive UIs with React, Vue, and modern CSS frameworks.',
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    description: 'Designing scalable APIs and database solutions with Node.js, Express, and MongoDB.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing applications for speed, SEO, and Core Web Vitals.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-3xl transform -rotate-3" />
              <div className="relative glass rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-purple-400 flex items-center justify-center mb-6">
                  <Code2 className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
                <p className="text-gray-400">Passionate about creating impactful digital solutions</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              I create <span className="gradient-text">user-centric</span> digital experiences that drive business growth
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              With expertise in the MERN stack and modern frontend technologies, I transform complex problems 
              into elegant, efficient solutions. My approach combines technical excellence with creative 
              design thinking to deliver products that users love and businesses rely on.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-primary-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}