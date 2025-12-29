import { useState } from "react";
import './Faq.css'

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="faq-section">
      <div className="faq-container">

        <span className="badge">FAQ’s</span>

        <h2 className="faq-title">
          Frequently Asked <br />
          <span><i>Questions</i></span>
        </h2>

        <div className="faq-planet"></div>
        <p className="faq-subtitle">
          Answers to common questions about our services, process, and support.
        </p>

        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
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
  )
}

export default Faq