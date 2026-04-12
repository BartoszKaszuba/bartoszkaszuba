"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (!targetElement) return

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = Math.min(Math.abs(distance) * 0.8, 2500) // Dynamic duration based on distance, max 2.5s
    let startTime: number | null = null

    const easeInOutQuart = (t: number): number => {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
    }

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easeInOutQuart(progress)

      window.scrollTo(0, startPosition + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  return { scrollToSection }
}
