import { useState, useEffect, useRef } from "react";
import "./Faq.css";
import workVideo from "../../assets/work-video.mp4";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide website design, UI/UX design, React & MERN development, e-commerce solutions, SEO, and long-term maintenance support.",
  },
  {
    question: "Do you create mobile-friendly websites?",
    answer:
      "Yes, every website we build is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Project timelines depend on complexity, but most websites are completed within 2–4 weeks.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Absolutely. We follow SEO best practices including performance optimization, clean code, and on-page SEO setup.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, we provide ongoing maintenance including updates, bug fixes, security monitoring, and backups.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Of course. Every project is customized based on your business needs and goals.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="faq-video-bg">
        <video autoPlay loop muted playsInline>
          <source src={workVideo} type="video/mp4" />
        </video>
      </div>

      <div className="faq-container">
        <span className="badge">FAQ’s</span>

        <h2 className="faq-title">
          Frequently Asked <br />
          <span><i>Questions</i></span>
        </h2>

        <p className="faq-subtitle">
          Answers to common questions about our services.
        </p>

        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              } ${visible ? "show" : ""}`}
              onClick={() => toggleFAQ(index)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="faq-question">
                <h4>{item.question}</h4>
                <span className="icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;