import { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "The team understood our vision perfectly. The website looks modern, loads fast, and converts better than we expected.",
  },
  {
    name: "Priya Verma",
    review:
      "Clean design, smooth communication, and great attention to detail. Highly recommended for startups and brands.",
  },
  {
    name: "Rahul Mehta",
    review:
      "From UI/UX to performance and SEO, everything was handled professionally. We saw results within weeks.",
  },
  {
    name: "Neha Kapoor",
    review:
      "Reliable, creative, and transparent. They truly work with you, not just for you.",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section" id="testimonial">
      <div className="light-sweep"></div>

      <div className="testimonial-container">

        {/* Badge */}
        <span className="badge">Testimonials</span>

        {/* Decorative Planet */}
        <div className="testimonial-planet"></div>

        {/* Heading */}
        <h2 className="testimonial-title">
          Trusted by Clients <br />
          <span>
            <i>Who Value Quality</i>
          </span>
        </h2>

        {/* Slider */}
        <div className="testimonial-slider">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`testimonial-card ${
                i === index ? "active" : ""
              }`}
            >
              {/* Stars */}
              <div className="stars">★★★★★</div>

              {/* Review */}
              <p className="review">“{item.review}”</p>

              {/* Name */}
              <h4 className="name">— {item.name}</h4>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonial;