import { motion } from 'framer-motion'
import { Heart, ArrowUp, Code2 } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop() }}
              className="flex items-center gap-2 text-white font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-6 h-6 text-primary-400" />
              <span>Partha<span className="text-primary-400">Dey</span></span>
            </motion.a>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ y: -2 }}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React, Vite & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}