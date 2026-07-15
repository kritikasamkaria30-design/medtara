import "./Stats.css";

const stats = [
  { value: "120+", label: "Hospitals" },
  { value: "25K+", label: "Professionals" },
  { value: "80+", label: "Courses" },
  { value: "96%", label: "Completion Rate" },
  { value: "2", label: "Regions" },
];

function Stats() {
  return (
    <section className="stats" aria-label="Platform statistics">
      <div className="container stats__grid">
        {stats.map((item) => (
          <article key={item.label} className="stats__item">
            <p className="stats__value">{item.value}</p>
            <p className="stats__label">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;
