import { FaServer, FaShieldAlt, FaCloud, FaCode, FaChartBar, FaHeadset } from "react-icons/fa";
import React from "react";

const services = [
  {
    id: "01",
    icon: <FaServer />,
    title: "Infrastructure IT",
    desc: "Conception et gestion d'infrastructures réseau robustes et évolutives.",
  },
  {
    id: "02",
    icon: <FaShieldAlt />,
    title: "Cybersécurité",
    desc: "Protection de vos données et systèmes contre les menaces numériques.",
  },
  {
    id: "03",
    icon: <FaCloud />,
    title: "Cloud & Migration",
    desc: "Migration et gestion de vos ressources vers le cloud en toute sérénité.",
  },
  {
    id: "04",
    icon: <FaCode />,
    title: "Développement Web",
    desc: "Applications web et mobiles sur mesure pour digitaliser vos processus.",
  },
  {
    id: "05",
    icon: <FaChartBar />,
    title: "Data & Analytics",
    desc: "Exploitez vos données pour prendre des décisions éclairées.",
  },
  {
    id: "06",
    icon: <FaHeadset />,
    title: "Support & Maintenance",
    desc: "Assistance technique réactive pour assurer la continuité de vos activités.",
  },
];

function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .sv-section {
          background: #111;
          padding: 120px 10vw 100px;
          font-family: 'Epilogue', sans-serif;
        }

        /* ─── Header ─── */
        .sv-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        .sv-label {
          font-size: 0.68rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 20px;
        }
        .sv-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -1px;
          color: #f0ede8;
        }
        .sv-title em {
          font-style: italic;
          font-weight: 400;
          color: #444;
        }
        .sv-header-desc {
          max-width: 320px;
          font-size: 0.88rem;
          font-weight: 400;
          color: #aaa;
          line-height: 1.8;
        }

        /* ─── Divider ─── */
        .sv-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 0;
        }

        /* ─── Grid 3×2 desktop ─── */
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(255,255,255,0.07);
        }

        /* ─── Card ─── */
        .sv-card {
          border-right: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 48px 36px 42px;
          position: relative;
          transition: background 0.3s;
          overflow: hidden;
        }
        .sv-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #f0ede8;
          transition: width 0.4s ease;
        }
        .sv-card:hover::after { width: 100%; }
        .sv-card:hover { background: rgba(255,255,255,0.03); }

        /* Number */
        .sv-num {
          position: absolute;
          top: 20px; right: 24px;
          font-size: 0.6rem;
          color: #555;
          letter-spacing: 1px;
        }

        .sv-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-size: 1.1rem;
          margin-bottom: 28px;
          border: 1px solid #333;
          transition: color 0.3s, border-color 0.3s;
        }
        .sv-card:hover .sv-icon {
          color: #f0ede8;
          border-color: #666;
        }

        .sv-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #f0ede8;
          letter-spacing: -0.3px;
          margin-bottom: 14px;
          line-height: 1.3;
        }

        .sv-card-desc {
          font-size: 0.85rem;
          font-weight: 400;
          color: #999;
          line-height: 1.8;
        }
        .sv-card:hover .sv-card-desc { color: #bbb; }

        /* ─── Tablet: 2 cols ─── */
        @media (max-width: 900px) {
          .sv-section {
            padding: 80px 6vw 60px;
          }
          .sv-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sv-header {
            margin-bottom: 56px;
            gap: 24px;
          }
        }

        /* ─── Mobile: horizontal scroll carousel ─── */
        @media (max-width: 600px) {
          .sv-section {
            padding: 72px 0 60px;
          }

          .sv-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 40px;
            padding: 0 6vw;
          }
          .sv-header-desc {
            max-width: 100%;
            font-size: 0.84rem;
          }
          .sv-title {
            font-size: clamp(2rem, 9vw, 2.8rem);
          }

          .sv-divider {
            margin: 0 6vw;
            width: calc(100% - 12vw);
          }

          /* Horizontal scroll strip */
          .sv-grid {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            border-left: none;
            gap: 0;
            padding: 32px 6vw 40px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .sv-grid::-webkit-scrollbar { display: none; }

          /* Each card as snapping slide */
          .sv-card {
            flex: 0 0 72vw;
            min-width: 72vw;
            scroll-snap-align: start;
            border: 1px solid rgba(255,255,255,0.07);
            padding: 32px 24px 28px;
            margin-right: 14px;
          }
          .sv-card:last-child { margin-right: 0; }

          /* Scroll indicator dots */
          .sv-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding-bottom: 8px;
          }
          .sv-dot {
            width: 20px;
            height: 1px;
            background: rgba(255,255,255,0.15);
            transition: background 0.3s, width 0.3s;
          }
          .sv-dot.active {
            background: #f0ede8;
            width: 32px;
          }
        }
      `}</style>

      <section className="sv-section" id="services">
        {/* Header */}
        <div className="sv-header">
          <div>
            <p className="sv-label">Services · Zoomy</p>
            <h2 className="sv-title">
              Ce que nous<br />
              <em>faisons.</em>
            </h2>
          </div>
          <p className="sv-header-desc">
            Six domaines d'expertise pour accompagner votre transformation digitale de bout en bout.
          </p>
        </div>

        <div className="sv-divider" />

        {/* Grid */}
        <div className="sv-grid" id="sv-grid">
          {services.map((s) => (
            <div className="sv-card" key={s.id}>
              <span className="sv-num">{s.id}</span>
              <div className="sv-icon">{s.icon}</div>
              <h3 className="sv-card-title">{s.title}</h3>
              <p className="sv-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll dots — mobile only */}
        <ScrollDots count={services.length} gridId="sv-grid" />
      </section>
    </>
  );
}

/* ── Dots indicator (visible mobile only via CSS) ── */
function ScrollDots({ count, gridId }) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const el = document.getElementById(gridId);
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / count;
      setActive(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [count, gridId]);

  return (
    <div className="sv-dots">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`sv-dot ${i === active ? "active" : ""}`} />
      ))}
    </div>
  );
}

export default Services;