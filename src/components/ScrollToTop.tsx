import { useEffect, type RefObject } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ containerRef }: { containerRef: RefObject<HTMLElement> }) {
  const { pathname } = useLocation()

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    })
  }, [pathname])

  return null
}
