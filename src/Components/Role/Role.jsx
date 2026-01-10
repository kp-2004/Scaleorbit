import "./Role.css";

const roles = [
  {
    title: "UI / UX Designer",
    desc: "We design intuitive, visually appealing interfaces that enhance user experience across devices.",
  },
  {
    title: "Graphic Designer",
    desc: "Creative brand visuals and marketing assets that communicate clearly and effectively.",
  },
  {
    title: "Web Developer",
    desc: "High-performance, scalable websites built with modern technologies.",
  },
  {
    title: "Digital Marketing Executive",
    desc: "Data-driven strategies that boost visibility, traffic, and conversions.",
  },
  {
    title: "Maintenance & Optimization",
    desc: "Continuous performance optimization, security updates, and monitoring.",
  },
  {
    title: "Business Automation",
    desc: "Automated workflows that save time and increase operational efficiency.",
  },
];

export default function Role() {
  return (
    <section className="roles-section">
      <div className="work-header">
        <span className="badge">Our Role</span>

        <h2>
          Lorem ipsum dolor sit. <br />
          <span><i>Momentum.</i></span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi suscipit id eveniet?
        </p>
      </div>

      <div className="roles-container">

  {/* CONNECTOR LINES */}
  <svg className="connectors" viewBox="0 0 1400 600" preserveAspectRatio="none">
    {/* LEFT */}
    <line x1="250" y1="120" x2="700" y2="300" />
    <line x1="250" y1="260" x2="700" y2="300" />
    <line x1="250" y1="400" x2="700" y2="300" />

    {/* RIGHT */}
    <line x1="1150" y1="120" x2="700" y2="300" />
    <line x1="1150" y1="260" x2="700" y2="300" />
    <line x1="1150" y1="400" x2="700" y2="300" />
  </svg>

  {/* LEFT COLUMN */}
  <div className="roles-column">
    {roles.slice(0, 3).map((role, i) => (
      <div className="role-card glass" key={i}>
        <h4>{role.title}</h4>
        <p>{role.desc}</p>
      </div>
    ))}
  </div>

  {/* CENTER GLOBE */}
  <div className="roles-center">
    <div className="globe">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="roles-column">
    {roles.slice(3, 6).map((role, i) => (
      <div className="role-card glass" key={i}>
        <h4>{role.title}</h4>
        <p>{role.desc}</p>
      </div>
    ))}
  </div>

</div>

    </section>
  );
}
