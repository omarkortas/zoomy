import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .ft {
          background: #111;
          color: #f0ede8;
          font-family: 'Epilogue', sans-serif;
          padding: 80px 10vw 40px;
        }

        /* Top row */
        .ft-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* Brand col */
        .ft-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #f0ede8;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }
        .ft-brand-name span { color: rgba(240,237,232,0.3); }

        .ft-brand-desc {
          font-size: 0.82rem;
          font-weight: 300;
          color: #555;
          line-height: 1.8;
          max-width: 220px;
          margin-bottom: 28px;
        }

        .ft-socials {
          display: flex;
          gap: 18px;
          list-style: none;
          padding: 0; margin: 0;
        }
        .ft-socials a {
          color: #444;
          font-size: 1rem;
          transition: color 0.2s;
          display: flex;
        }
        .ft-socials a:hover { color: #f0ede8; }

        /* Link cols */
        .ft-col-title {
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 24px;
        }

        .ft-col-links {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ft-col-links a {
          font-size: 0.82rem;
          font-weight: 300;
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
          display: inline-block;
        }
        .ft-col-links a:hover { color: #f0ede8; }

        /* Newsletter */
        .ft-newsletter-text {
          font-size: 0.82rem;
          font-weight: 300;
          color: #555;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .ft-form {
          display: flex;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
          gap: 8px;
        }
        .ft-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: #f0ede8;
          padding: 4px 0;
        }
        .ft-input::placeholder { color: #333; }
        .ft-submit {
          background: none;
          border: none;
          color: #444;
          cursor: pointer;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          transition: color 0.2s;
          padding: 0;
        }
        .ft-submit:hover { color: #f0ede8; }

        /* Bottom row */
        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .ft-copy {
          font-size: 0.7rem;
          font-weight: 300;
          color: #333;
          letter-spacing: 0.5px;
        }
        .ft-bottom-links {
          display: flex;
          gap: 28px;
          list-style: none;
          padding: 0; margin: 0;
        }
        .ft-bottom-links a {
          font-size: 0.7rem;
          color: #333;
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.5px;
        }
        .ft-bottom-links a:hover { color: #666; }

        @media (max-width: 900px) {
          .ft-top { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 540px) {
          .ft { padding: 60px 6vw 32px; }
          .ft-top { grid-template-columns: 1fr; gap: 36px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="ft">
        <div className="ft-top">

          {/* Brand */}
          <div>
            <p className="ft-brand-name">Zoomy<span>.</span></p>
            <p className="ft-brand-desc">
              Business, technologie et IT — la plateforme des entreprises qui avancent.
            </p>
            <ul className="ft-socials">
              <li><a href="https://www.facebook.com/profile.php?id=61567178817805" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a></li>
              <li><a href="" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a></li>
              <li><a href="https://www.linkedin.com/company/zoomy-off/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></li>
              <li><a href="https://discord.gg/NTjjqTWu" target="_blank" rel="noreferrer" aria-label="Discord"><FaDiscord /></a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="ft-col-title">Company</p>
            <ul className="ft-col-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="ft-col-title">Support</p>
            <ul className="ft-col-links">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="ft-col-title">Stay updated</p>
            <p className="ft-newsletter-text">
              Reçois nos dernières actualités tech et offres directement dans ta boîte mail.
            </p>
            <div className="ft-form">
              <input
                type="email"
                className="ft-input"
                placeholder="ton@email.com"
              />
              <button type="button" className="ft-submit" aria-label="S'abonner">
                <FaPaperPlane />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} Zoomy Technology. All rights reserved.
          </p>
          <ul className="ft-bottom-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;