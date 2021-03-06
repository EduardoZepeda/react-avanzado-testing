import { useRef, useState, useEffect } from 'react'

export function useNearScreen () {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer'))
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])
  return [show, ref]
}
