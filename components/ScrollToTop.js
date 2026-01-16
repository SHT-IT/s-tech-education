'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // 200vh = 2 * window.innerHeight
      if (window.scrollY > window.innerHeight * 2) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        h-12 w-12 rounded-full
        flex items-center justify-center
        text-white
        shadow-lg
        bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
        transition-all duration-500
        hover:scale-110 hover:shadow-2xl
        animate-bounce
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
      `}
    >
      <FaArrowUp className="text-xl" />
    </button>
  )
}
