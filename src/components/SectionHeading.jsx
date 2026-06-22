import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4 border border-primary-500/20"
      >
        {subtitle}
      </motion.span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? 'gradient-text' : ''}>
            {word}{' '}
          </span>
        ))}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}