import "./CommonSection.css";

export default function CommonSection({ title, list, image }) {
  return (
    <section className="cs-section">
      <div className="cs-container">

        {/* LEFT SIDE */}
        <div className="cs-left">
          <h2>{title}</h2>
          <div className="cs-line"></div>

          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="cs-right">
          <img src={image} alt={title} />
        </div>

      </div>
    </section>
  );
}