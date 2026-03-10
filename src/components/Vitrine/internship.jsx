import { useNavigate } from "react-router-dom";

const DEMO_PUBS = [
  {
    id: 1,
    type: "Stage PFE",
    title: "Développeur Full Stack React / Node.js",
    subtitle: "Rejoins l'équipe Zoomy pour ton projet de fin d'études. Tu travailleras sur des produits réels, avec une stack moderne : React, Node.js, MongoDB. Encadrement personnalisé et environnement agile.",
    image: null,
  },
  {
    id: 2,
    type: "Stage PFE",
    title: "Ingénieur DevOps & Cloud Infrastructure",
    subtitle: "Intègre notre équipe technique pour concevoir et automatiser notre infrastructure cloud. Compétences appréciées : Docker, CI/CD, AWS ou Azure. Projet ambitieux avec impact direct sur nos produits.",
    image: null,
  },
  {
    id: 3,
    type: "Stage d'été",
    title: "Designer UI/UX — Interfaces Digitales",
    subtitle: "Tu as le sens du détail et une passion pour les interfaces épurées ? Rejoins Zoomy pour l'été et contribue à l'identité visuelle de nos plateformes. Figma, prototypage et tests utilisateurs au programme.",
    image: null,
  },
  {
    id: 4,
    type: "Stage d'été",
    title: "Développeur Mobile React Native",
    subtitle: "Participe au développement de nos applications mobiles sur iOS et Android. Stage idéal pour un profil junior souhaitant acquérir une expérience concrète sur des projets en production.",
    image: null,
  },
];

function Internship() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .int-section {
          background: #f7f5f2;
          padding: 120px 10vw 100px;
          font-family: 'Epilogue', sans-serif;
          min-height: 100vh;
        }

        .int-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        .int-label {
          font-size: 0.68rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 20px;
        }
        .int-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -1px;
          color: #111;
        }
        .int-title em {
          font-style: italic;
          font-weight: 400;
          color: #666;
        }
        .int-count {
          font-size: 0.78rem;
          color: #aaa;
          letter-spacing: 1px;
          align-self: flex-end;
          padding-bottom: 6px;
        }

        .int-divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.08);
          margin-bottom: 0;
        }

        .int-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-left: 1px solid rgba(0,0,0,0.08);
        }

        .int-card {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 44px 40px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 0 40px;
          align-items: start;
          position: relative;
          transition: background 0.25s;
          overflow: hidden;
        }
        .int-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 2px; height: 0;
          background: #111;
          transition: height 0.35s ease;
        }
        .int-card:hover::before { height: 100%; }
        .int-card:hover { background: #f0ede8; }

        .int-card-left { grid-column: 1; }
        .int-card-right {
          grid-column: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 20px;
          padding-top: 4px;
        }

        /* Badge — couleur selon type */
        .int-badge {
          display: inline-block;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 12px;
          margin-bottom: 18px;
          border: 1px solid rgba(0,0,0,0.12);
          color: #888;
        }
        .int-badge.pfe {
          color: #6b5b3e;
          border-color: rgba(107,91,62,0.25);
          background: rgba(107,91,62,0.05);
        }
        .int-badge.ete {
          color: #3e6b5b;
          border-color: rgba(62,107,91,0.25);
          background: rgba(62,107,91,0.05);
        }

        .int-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 2vw, 1.7rem);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.5px;
          line-height: 1.2;
          margin-bottom: 14px;
        }

        .int-card-subtitle {
          font-size: 0.88rem;
          font-weight: 300;
          color: #888;
          line-height: 1.8;
          max-width: 580px;
        }

        .int-number {
          font-size: 0.62rem;
          color: #ccc;
          letter-spacing: 1px;
          flex-shrink: 0;
        }

        .int-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #111;
          color: #f7f5f2;
          border: none;
          padding: 13px 28px;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .int-cta:hover { background: #333; }
        .int-cta:hover .int-arrow { transform: translateX(4px); }
        .int-arrow { display: inline-block; transition: transform 0.2s; }

        @media (max-width: 768px) {
          .int-section { padding: 90px 6vw 60px; }
          .int-card { grid-template-columns: 1fr; gap: 24px; }
          .int-card-right { align-items: flex-start; }
        }
      `}</style>

      <section className="int-section">
        <div className="int-header">
          <div>
            <p className="int-label">Carrières · Zoomy</p>
            <h1 className="int-title">
              Nos <em>opportunités</em><br />
              du moment.
            </h1>
          </div>
          <span className="int-count">{DEMO_PUBS.length} offres disponibles</span>
        </div>

        <div className="int-divider" />

        <ul className="int-list">
          {DEMO_PUBS.map((pub, i) => {
            const isPfe = pub.type.toLowerCase().includes("pfe");
            return (
              <li key={pub.id} className="int-card">
                <div className="int-card-left">
                  <span className={`int-badge ${isPfe ? "pfe" : "ete"}`}>{pub.type}</span>
                  <h2 className="int-card-title">{pub.title}</h2>
                  <p className="int-card-subtitle">{pub.subtitle}</p>
                </div>
                <div className="int-card-right">
                  <span className="int-number">0{i + 1}</span>
                  <button className="int-cta" onClick={() => navigate("/form_intern")}>
                    Postuler <span className="int-arrow">→</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Internship;