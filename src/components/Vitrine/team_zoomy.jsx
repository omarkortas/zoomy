import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

// Remplace les `photo` par les vrais imports d'images
// import mohamed_photo from "../../assets/mohamed.jpg";
// etc.

const members = [
  {
    name: "Mohamed",
    surname: "Ben Hmida",
    role: "Co-founder & Lead Dev",
    github: "#",
    linkedin: "#",
    photo: "/mohamed.png",
    bio: "Passionné de technologie et d'entrepreneuriat, Mohamed pilote la vision technique de Zoomy depuis sa création. Expert React & Node.js.",
  },
  {
    name: "Omar Farouk",
    surname: "Kortas",
    role: "Full Stack Engineer",
    github: "#",
    linkedin: "#",
    photo: "/omar.jpeg",
    bio: "Omar conçoit et développe les architectures full stack de nos produits. Il aime les systèmes robustes et le code propre.",
  },
  {
    name: "Bilel",
    surname: "Hmem",
    role: "UI/UX Designer",
    github: "#",
    linkedin: "#",
    photo: "/bilel.png",
    bio: "Bilel transforme les idées en interfaces intuitives et mémorables. Il est l'œil créatif derrière l'identité visuelle de Zoomy.",
  },
  {
    name: "Youssef",
    surname: "Frikha",
    role: "DevOps Engineer",
    github: "#",
    linkedin: "#",
    photo: "/youssef.png",
    bio: "Youssef assure la stabilité, la scalabilité et la sécurité de toute l'infrastructure Zoomy. Le gardien des pipelines.",
  },
];

function TeamZoomy() {
  const [flipped, setFlipped] = useState(null);

  const toggle = (i) => setFlipped(flipped === i ? null : i);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .tz-section {
          background: #f7f5f2;
          padding: 120px 10vw 100px;
          font-family: 'Epilogue', sans-serif;
        }

        .tz-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        .tz-label {
          font-size: 0.68rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 20px;
        }
        .tz-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -1px;
          color: #111;
        }
        .tz-title em {
          font-style: italic;
          font-weight: 400;
          color: #666;
        }
        .tz-desc {
          max-width: 380px;
          font-size: 0.92rem;
          font-weight: 300;
          color: #888;
          line-height: 1.85;
        }

        .tz-divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.08);
          margin-bottom: 0;
        }

        /* Grid */
        .tz-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
        }

        /* Flip container */
        .tz-flip-wrap {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
          perspective: 1000px;
          cursor: pointer;
          min-height: 300px;
        }

        .tz-flipper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 300px;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tz-flip-wrap.flipped .tz-flipper {
          transform: rotateY(180deg);
        }

        /* Front & Back shared */
        .tz-front, .tz-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          padding: 40px 28px 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* FRONT */
        .tz-front {
          background: transparent;
          transition: background 0.25s;
        }
        .tz-flip-wrap:not(.flipped):hover .tz-front {
          background: #f0ede8;
        }
        .tz-front::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #111;
          transition: width 0.35s ease;
        }
        .tz-flip-wrap:not(.flipped):hover .tz-front::after {
          width: 100%;
        }

        .tz-number {
          position: absolute;
          top: 16px; right: 20px;
          font-size: 0.62rem;
          color: #ccc;
          letter-spacing: 1px;
        }

        .tz-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #e8e5e0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .tz-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .tz-avatar-initials {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #555;
        }

        .tz-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #111;
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .tz-role {
          font-size: 0.7rem;
          color: #aaa;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .tz-social {
          display: flex;
          gap: 14px;
          list-style: none;
          padding: 0; margin: 0;
          margin-top: auto;
        }
        .tz-social a {
          color: #bbb;
          font-size: 0.95rem;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .tz-social a:hover { color: #111; }

        /* Hint */
        .tz-hint {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.58rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #ccc;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .tz-flip-wrap:not(.flipped):hover .tz-hint { opacity: 1; }

        /* BACK */
        .tz-back {
          background: #111;
          transform: rotateY(180deg);
          justify-content: center;
          gap: 0;
        }

        .tz-back-photo {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 2px solid rgba(255,255,255,0.1);
        }
        .tz-back-placeholder {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 2px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .tz-back-placeholder span {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #444;
        }

        .tz-back-name {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #f0ede8;
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .tz-back-role {
          font-size: 0.65rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 20px;
        }
        .tz-back-bio {
          font-size: 0.8rem;
          font-weight: 300;
          color: #888;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .tz-back-links {
          display: flex;
          gap: 14px;
          list-style: none;
          padding: 0; margin: 0;
        }
        .tz-back-links a {
          color: #444;
          font-size: 1rem;
          transition: color 0.2s;
          display: flex;
        }
        .tz-back-links a:hover { color: #f0ede8; }

        .tz-close-hint {
          position: absolute;
          top: 14px; right: 16px;
          font-size: 0.58rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #333;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .tz-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .tz-section { padding: 80px 6vw 60px; }
          .tz-grid { grid-template-columns: 1fr; }
          .tz-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="tz-section">
        <div className="tz-header">
          <div>
            <p className="tz-label">L'équipe · Zoomy</p>
            <h2 className="tz-title">
              Les esprits<br />
              derrière <em>Zoomy.</em>
            </h2>
          </div>
          <p className="tz-desc">
            Créativité, technologie et collaboration — quatre profils complémentaires unis pour bâtir quelque chose qui dure.
          </p>
        </div>

        <div className="tz-divider" />

        <div className="tz-grid">
          {members.map((m, i) => {
            const initials = m.name.charAt(0) + m.surname.charAt(0);
            const isFlipped = flipped === i;
            return (
              <div
                className={`tz-flip-wrap ${isFlipped ? "flipped" : ""}`}
                key={i}
                onClick={() => toggle(i)}
              >
                <div className="tz-flipper">

                  {/* FRONT */}
                  <div className="tz-front">
                    <span className="tz-number">0{i + 1}</span>
                    <div className="tz-avatar">
                      {m.photo
                        ? <img src={m.photo} alt={m.name} />
                        : <span className="tz-avatar-initials">{initials}</span>
                      }
                    </div>
                    <p className="tz-name">{m.name}<br />{m.surname}</p>
                    <p className="tz-role">{m.role}</p>
                    <ul className="tz-social" onClick={e => e.stopPropagation()}>
                      <li><a href={m.github} aria-label="GitHub"><FaGithub /></a></li>
                      <li><a href={m.linkedin} aria-label="LinkedIn"><FaLinkedin /></a></li>
                    </ul>
                    <span className="tz-hint">cliquer pour découvrir →</span>
                  </div>

                  {/* BACK */}
                  <div className="tz-back">
                    <span className="tz-close-hint">✕ fermer</span>
                    {m.photo
                      ? <img src={m.photo} alt={m.name} className="tz-back-photo" />
                      : (
                        <div className="tz-back-placeholder">
                          <span>{initials}</span>
                        </div>
                      )
                    }
                    <p className="tz-back-name">{m.name} {m.surname}</p>
                    <p className="tz-back-role">{m.role}</p>
                    <p className="tz-back-bio">{m.bio}</p>
                    <ul className="tz-back-links" onClick={e => e.stopPropagation()}>

                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default TeamZoomy;