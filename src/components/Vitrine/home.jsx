import { useNavigate } from "react-router-dom";

const BG_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="700" viewBox="0 0 800 700">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#c8c2b8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f7f5f2" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="700" fill="url(#glow)"/>

  <!-- Outer hexagon -->
  <polygon points="400,60 620,190 620,450 400,580 180,450 180,190"
    fill="none" stroke="#999" stroke-width="1" opacity="0.2"/>

  <!-- Middle hexagon -->
  <polygon points="400,130 560,225 560,415 400,510 240,415 240,225"
    fill="none" stroke="#aaa" stroke-width="0.8" opacity="0.15"/>

  <!-- Inner hexagon -->
  <polygon points="400,200 500,257 500,375 400,432 300,375 300,257"
    fill="none" stroke="#bbb" stroke-width="0.6" opacity="0.12"/>

  <!-- Vertical & diagonal structural lines -->
  <line x1="400" y1="60" x2="400" y2="580" stroke="#888" stroke-width="0.7" opacity="0.12"/>
  <line x1="180" y1="190" x2="620" y2="450" stroke="#888" stroke-width="0.7" opacity="0.1"/>
  <line x1="620" y1="190" x2="180" y2="450" stroke="#888" stroke-width="0.7" opacity="0.1"/>

  <!-- Perspective grid lines from center -->
  <line x1="400" y1="320" x2="0"   y2="0"   stroke="#777" stroke-width="0.5" opacity="0.07"/>
  <line x1="400" y1="320" x2="800" y2="0"   stroke="#777" stroke-width="0.5" opacity="0.07"/>
  <line x1="400" y1="320" x2="800" y2="700" stroke="#777" stroke-width="0.5" opacity="0.07"/>
  <line x1="400" y1="320" x2="0"   y2="700" stroke="#777" stroke-width="0.5" opacity="0.07"/>

  <!-- Concentric circles -->
  <circle cx="400" cy="320" r="100" fill="none" stroke="#999" stroke-width="0.6" opacity="0.1"/>
  <circle cx="400" cy="320" r="170" fill="none" stroke="#999" stroke-width="0.6" opacity="0.08"/>
  <circle cx="400" cy="320" r="240" fill="none" stroke="#999" stroke-width="0.5" opacity="0.06"/>
  <circle cx="400" cy="320" r="320" fill="none" stroke="#999" stroke-width="0.5" opacity="0.04"/>

  <!-- Corner accent dots -->
  <circle cx="400" cy="60"  r="4" fill="#aaa" opacity="0.2"/>
  <circle cx="620" cy="190" r="4" fill="#aaa" opacity="0.2"/>
  <circle cx="620" cy="450" r="4" fill="#aaa" opacity="0.2"/>
  <circle cx="400" cy="580" r="4" fill="#aaa" opacity="0.2"/>
  <circle cx="180" cy="450" r="4" fill="#aaa" opacity="0.2"/>
  <circle cx="180" cy="190" r="4" fill="#aaa" opacity="0.2"/>
  <circle cx="400" cy="320" r="6" fill="#999" opacity="0.25"/>

  <!-- Small floating squares (3D illusion) -->
  <rect x="370" y="290" width="60" height="60"
    fill="none" stroke="#888" stroke-width="0.8" opacity="0.12"
    transform="rotate(15 400 320)"/>
  <rect x="355" y="275" width="90" height="90"
    fill="none" stroke="#888" stroke-width="0.6" opacity="0.08"
    transform="rotate(30 400 320)"/>
</svg>
`;

const svgDataUri = `data:image/svg+xml,${encodeURIComponent(BG_SVG)}`;

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; height: 100%; }

        .hero {
          min-height: 100vh;
          background: #f7f5f2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px 10vw 60px;
          position: relative;
          overflow: hidden;
        }

        /* SVG geometric background */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: var(--hero-bg-svg);
          background-size: 62%;
          background-position: 92% 52%;
          background-repeat: no-repeat;
        }

        /* Gradient mask — texte lisible à gauche, image visible à droite */
        .hero-mask {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to right,
            #f7f5f2 0%,
            #f7f5f2 38%,
            rgba(247,245,242,0.88) 55%,
            rgba(247,245,242,0.2) 100%
          );
        }

        /* Left accent line */
        .hero::after {
          content: '';
          position: absolute;
          left: 5vw;
          top: 28%;
          height: 44%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.1), transparent);
          z-index: 2;
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
        }

        .hero-label {
          font-family: 'Epilogue', sans-serif;
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 36px;
          animation: fadeUp 0.5s ease both;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.2rem, 7vw, 6.8rem);
          font-weight: 700;
          line-height: 1.06;
          letter-spacing: -1.5px;
          color: #111;
          margin-bottom: 36px;
          animation: fadeUp 0.5s 0.1s ease both;
        }
        .hero-title em {
          font-style: italic;
          font-weight: 400;
          color: #777;
        }

        .hero-line {
          width: 40px;
          height: 1px;
          background: #ccc;
          margin-bottom: 28px;
          animation: expandLine 0.7s 0.2s ease both;
        }

        .hero-desc {
          font-family: 'Epilogue', sans-serif;
          font-size: clamp(0.88rem, 1.1vw, 1rem);
          font-weight: 300;
          color: #888;
          max-width: 400px;
          line-height: 1.85;
          margin-bottom: 52px;
          animation: fadeUp 0.5s 0.3s ease both;
        }

        .hero-cta {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;
          gap: 16px;
          background: #111;
          color: #f7f5f2;
          border: none;
          padding: 15px 32px;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
          animation: fadeUp 0.5s 0.4s ease both;
          white-space: nowrap;
        }
        .hero-cta:hover { background: #2a2a2a; }
        .hero-cta:hover .cta-arrow { transform: translateX(5px); }
        .cta-arrow { display: inline-block; transition: transform 0.2s; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { width: 0; opacity: 0; }
          to   { width: 40px; opacity: 1; }
        }

        @media (max-width: 768px) {
          .hero { padding: 90px 8vw 60px; }
          .hero-bg { background-size: 100%; background-position: 50% 110%; opacity: 0.5; }
          .hero::after { display: none; }
        }
      `}</style>

      <section
        className="hero"
        style={{ "--hero-bg-svg": `url("${svgDataUri}")` }}
      >
        <div className="hero-bg" />
        <div className="hero-mask" />

        <div className="hero-content">
          <p className="hero-label">Business · Technologie · IT</p>

          <h1 className="hero-title">
            Propulsez<br />
            votre <em>vision</em><br />
            digitale.
          </h1>

          <div className="hero-line" />

          <p className="hero-desc">
            Zoomy accompagne entreprises et experts tech avec des outils,
            insights et solutions IT pour avancer dans un monde en mouvement constant.
          </p>

          <button className="hero-cta" onClick={() => navigate("/signup")}>
            Commencer <span className="cta-arrow">→</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;