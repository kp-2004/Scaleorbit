import React, { useEffect, useRef } from 'react'
import './Results.css'
import growthImage from '../../assets/result.png'

function Results() {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)

  /* =====================
     MOUSE 3D TILT
  ===================== */
  useEffect(() => {
    const el = imageRef.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const rotateX = ((y / rect.height) - 0.5) * -14
      const rotateY = ((x / rect.width) - 0.5) * 14

      el.style.transform = `
        translate(-50%, -50%)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `
    }

    const reset = () => {
      el.style.transform = 'translate(-50%, -50%) rotateX(0) rotateY(0)'
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
    }
  }, [])

  /* =====================
     SCROLL PARALLAX
  ===================== */
  useEffect(() => {
    const el = imageRef.current
    const section = sectionRef.current
    if (!el || !section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const offset = rect.top * 0.15
      el.style.marginTop = `${offset}px`
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="results-section" ref={sectionRef}>
      <div className="results-container">

        {/* TEXT (UNCHANGED) */}
        <div className="results-header">
          <span className="badge">Our Results →</span>
          <h2>
            Proven Results <br />
            <span><i>Built Through Collaboration</i></span>
          </h2>
        </div>

        {/* Content */} <div className="results-content"> 
          {/* Left Text */} <div className="results-text">
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. </p> <p> We focus on real growth,
                
               scalable systems, and strategies that deliver measurable impact over time. </p> </div>
               </div>

        {/* IMAGE */}
        <div className="results-center-image" ref={imageRef}>
          <img src={growthImage} alt="Growth Illustration" />

          {/* PARTICLES */}
          <span className="particle p1">$</span>
          <span className="particle p2">€</span>
          <span className="particle p3">¥</span>
          <span className="particle p4">$</span>
        </div>

        {/* SLIDER */}
        <div className="results-slider">
          <div className="slider-track">
            <div className="result-card">+320% Growth</div>
            <div className="result-card">1M+ Views</div>
            <div className="result-card">5x ROI</div>
            <div className="result-card">120K Leads</div>
            <div className="result-card">+320% Growth</div>
            <div className="result-card">1M+ Views</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Results
