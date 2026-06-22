import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1024) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 6),
        y: mousePosition.y - (isHovering ? 24 : 6),
        width: isHovering ? 48 : 12,
        height: isHovering ? 48 : 12,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div className={`w-full h-full rounded-full bg-white ${isHovering ? 'border-2 border-primary-400' : ''}`} />
    </motion.div>
  )
}