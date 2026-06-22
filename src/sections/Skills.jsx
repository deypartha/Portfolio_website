import { motion } from 'framer-motion'
import { 
  Zap, 
  Code, 
  Server, 
  Database, 
  Palette, 
  GitBranch, 
  Cloud, 
  Terminal,
  Smartphone,
  Figma,
  Layers
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React.js', level: 95, icon: Zap },
      { name: 'JavaScript', level: 90, icon: Terminal },
      { name: 'Tailwind CSS', level: 95, icon: Palette },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 92, icon: Server },
      { name: 'Express.js', level: 90, icon: Code },
      { name: 'MongoDB', level: 80, icon: Database },
      { name: 'REST APIs', level: 95, icon: Layers },
      { name : 'SQL', level: 90, icon: Database }
    ],
  },
  {
    title: 'Tools & Design',
    icon: Figma,
    skills: [
      { name: 'Git & GitHub', level: 92, icon: GitBranch },
      { name: 'Docker', level: 60, icon: Cloud },
      { name: 'AWS', level: 70, icon: Cloud },
      { name: 'CI/CD', level: 60, icon: Terminal },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="My Expertise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary-500/10">
                  <category.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}