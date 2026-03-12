import logoooo from "../../assets/logoooo.png";
import sney3i_blanc from "../../assets/sney3i_blanc.png";
import sney3i_noir from "../../assets/sney3i_noir.png";
import qoffa from "../../assets/qoffa.png";

const projects = [
  {
    id: "01",
    name: "9OFFA",
    tag: "E-commerce",
    logo: qoffa,
    logoDark: null,
    desc: "Lorem ipsum dolor sit amet velit. Dignissimos laudantium numquam aperiam doloribus, nobis illum eaque sint temporibus.",
    href: "#",
  },
  {
    id: "02",
    name: "SNEY3I",
    tag: "Marketplace",
    logo: sney3i_noir,
    logoDark: sney3i_blanc,
    desc: "Quo libero nemo laudantium nobis recusandae facere et voluptatum nisi ipsa, culpa ea accusantium ad molestiae hic.",
    href: "#",
  },
  {
    id: "03",
    name: "ZoomEXPRESS",
    tag: "Logistics",
    logo: logoooo,
    logoDark: null,
    desc: "Lorem ipsum dolor sit amet, neque et illum aut rerum, hic quidem mollitia officia. Labore architecto fugiat.",
    href: "#",
  },
];

function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .pj-section {
          background: #111;
          padding: 120px 10vw 100px;
          font-family: 'Epilogue', sans-serif;
        }

        /* ─── Header ─── */
        .pj-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        .pj-label {
          font-size: 0.68rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 20px;
        }
        .pj-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -1px;
          color: #f0ede8;
        }
        .pj-title em {
          font-style: italic;
          font-weight: 400;
          color: #555;
        }
        .pj-header-desc {
          max-width: 320px;
          font-size: 0.88rem;
          font-weight: 300;
          color: #555;
          line-height: 1.8;
        }

        /* ─── Divider ─── */
        .pj-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 0;
        }

        /* ─── Grid — desktop: 3 cols ─── */
        .pj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(255,255,255,0.07);
        }

        /* ─── Card ─── */
        .pj-card {
          border-right: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 48px 36px 40px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
          text-decoration: none;
          cursor: pointer;
        }
        .pj-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #f0ede8;
          transition: width 0.4s ease;
        }
        .pj-card:hover::after { width: 100%; }
        .pj-card:hover { background: rgba(255,255,255,0.03); }

        /* Number */
        .pj-num {
          font-size: 0.6rem;
          color: #333;
          letter-spacing: 1px;
          margin-bottom: 36px;
        }

        /* Logo */
        .pj-logo-wrap {
          height: 52px;
          display: flex;
          align-items: center;
          margin-bottom: 32px;
        }
        .pj-logo {
          max-height: 44px;
          max-width: 120px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .pj-logo-dark { display: none; }
        [data-theme="dark"] .pj-logo-light { display: none; }
        [data-theme="dark"] .pj-logo-dark  { display: block; }
        .pj-card:hover .pj-logo { opacity: 1; }

        /* Tag */
        .pj-tag {
          display: inline-block;
          font-size: 0.6rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #444;
          border: 1px solid #222;
          padding: 4px 10px;
          margin-bottom: 20px;
          align-self: flex-start;
        }

        .pj-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #f0ede8;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }

        .pj-desc {
          font-size: 0.85rem;
          font-weight: 300;
          color: #555;
          line-height: 1.8;
          flex: 1;
          margin-bottom: 36px;
        }

        /* Arrow link */
        .pj-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #444;
          transition: color 0.2s;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: 'Epilogue', sans-serif;
        }
        .pj-card:hover .pj-link { color: #f0ede8; }
        .pj-link-arrow {
          display: inline-block;
          transition: transform 0.2s;
        }
        .pj-card:hover .pj-link-arrow { transform: translateX(5px); }

        /* ─── Tablet: 2 cols ─── */
        @media (max-width: 900px) {
          .pj-section {
            padding: 80px 6vw 60px;
          }
          .pj-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pj-header {
            margin-bottom: 56px;
            gap: 24px;
          }
        }

        /* ─── Mobile: 1 col horizontal scroll cards ─── */
        @media (max-width: 600px) {
          .pj-section {
            padding: 72px 0 60px;
          }

          /* Header with side padding */
          .pj-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 40px;
            padding: 0 6vw;
          }
          .pj-header-desc {
            max-width: 100%;
            font-size: 0.84rem;
          }
          .pj-title {
            font-size: clamp(2rem, 9vw, 2.8rem);
          }

          .pj-divider {
            margin: 0 6vw;
            width: calc(100% - 12vw);
          }

          /* Horizontal scroll strip */
          .pj-grid {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            overflow-y: visible;
            border-left: none;
            gap: 0;
            padding: 32px 6vw 40px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .pj-grid::-webkit-scrollbar { display: none; }

          /* Each card as a snapping slide */
          .pj-card {
            flex: 0 0 80vw;
            min-width: 80vw;
            scroll-snap-align: start;
            border: 1px solid rgba(255,255,255,0.07);
            padding: 36px 28px 32px;
            margin-right: 16px;
          }
          .pj-card:last-child { margin-right: 0; }

          /* Scroll indicator dots */
          .pj-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding-bottom: 8px;
          }
          .pj-dot {
            width: 20px;
            height: 1px;
            background: rgba(255,255,255,0.15);
            transition: background 0.3s, width 0.3s;
          }
          .pj-dot.active {
            background: #f0ede8;
            width: 32px;
          }
        }
      `}</style>

      <section className="pj-section" id="projects">
        {/* Header */}
        <div className="pj-header">
          <div>
            <p className="pj-label">Projets · Zoomy</p>
            <h2 className="pj-title">
              Ce que nous<br />
              avons <em>construit.</em>
            </h2>
          </div>
          <p className="pj-header-desc">
            Trois produits nés d'une même conviction : la technologie doit simplifier, connecter, accélérer.
          </p>
        </div>

        <div className="pj-divider" />

        {/* Grid */}
        <div className="pj-grid" id="pj-grid">
          {projects.map((p) => (
            <div className="pj-card" key={p.id}>
              <span className="pj-num">{p.id}</span>

              <div className="pj-logo-wrap">
                {p.logoDark ? (
                  <>
                    <img src={p.logo}     alt={p.name} className="pj-logo pj-logo-light" />
                    <img src={p.logoDark} alt={p.name} className="pj-logo pj-logo-dark" />
                  </>
                ) : (
                  <img src={p.logo} alt={p.name} className="pj-logo" />
                )}
              </div>

              <span className="pj-tag">{p.tag}</span>
              <h3 className="pj-name">{p.name}</h3>
              <p className="pj-desc">{p.desc}</p>

              <span className="pj-link">
                Découvrir <span className="pj-link-arrow">→</span>
              </span>
            </div>
          ))}
        </div>

        {/* Scroll dots — mobile only */}
        <ScrollDots count={projects.length} gridId="pj-grid" />
      </section>
    </>
  );
}

/* ── Dots indicator (visible mobile only) ── */
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
    <div className="pj-dots">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`pj-dot ${i === active ? "active" : ""}`} />
      ))}
    </div>
  );
}

export default Projects;