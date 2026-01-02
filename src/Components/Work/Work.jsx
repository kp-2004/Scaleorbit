import React from 'react'
import './Work.css'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.webp'
import work4 from '../../assets/work4.jpg'
import work5 from '../../assets/work5.png'

const works = [
  { img: work2, title: "Automation System" },
  { img: work3, title: "Instagram Growth" },
  { img: work4, title: "Video Funnel" },
  { img: work5, title: "SaaS Platform" },
];

function Work() {
  return (
    <section className="work-section" id="works">
      <div className="work-header">
        <span className="badge">Our Work</span>

        <h2>
          Work That Drives Views, Revenue & <br />
          <span><i>Momentum.</i></span>
        </h2>

        <p>
          Explore systems, campaigns, and digital products built to scale —
          engineered for performance and growth.
        </p>
      </div>

        <div className="work-planet"></div>
      <div className="work-slider">
        <div className="work-track">
          {[...works, ...works].map((item, i) => (
            <div className="work-card" key={i}>
              <img src={item.img} alt={item.title} />
              <div className="work-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work