import "./WhoWeServe.css";

const audiences = [
  {
    title: "Hospitals",
    text: "Hospitals must ensure that staff remain updated with healthcare practices, safety protocols, and operational procedures across every department.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    href: "#modern-hospitals",
  },
  {
    title: "Aged Care",
    text: "Aged care providers require specialized training programs so caregivers deliver safe, compassionate, and compliant support every day.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    href: "#what-we-offer",
  },
  {
    title: "Healthcare Professionals",
    text: "Healthcare professionals benefit from continuous learning that strengthens knowledge, sharpens skills, and supports career growth.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    href: "#cta",
  },
];

function WhoWeServe() {
  return (
    <section className="section who-we-serve" id="who-we-serve">
      <div className="container">
        <div className="who-we-serve__header">
          <p className="section-label">Who We Serve</p>
          <h2 className="section-title">Training built for every care setting</h2>
        </div>

        <div className="who-we-serve__grid">
          {audiences.map((item) => (
            <a key={item.title} href={item.href} className="serve-card">
              <div className="serve-card__media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="serve-card__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="serve-card__link">Learn more</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeServe;
