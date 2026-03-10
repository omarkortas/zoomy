import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Remplace par ta logique d'envoi (API, EmailJS, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .ct-section {
          background: #f7f5f2;
          padding: 120px 10vw 100px;
          font-family: 'Epilogue', sans-serif;
        }

        /* Header */
        .ct-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        .ct-label {
          font-size: 0.68rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 20px;
        }
        .ct-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -1px;
          color: #111;
        }
        .ct-title em {
          font-style: italic;
          font-weight: 400;
          color: #666;
        }
        .ct-header-desc {
          max-width: 320px;
          font-size: 0.88rem;
          font-weight: 400;
          color: #444;
          line-height: 1.8;
        }

        .ct-divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.08);
          margin-bottom: 0;
        }

        /* Body — 2 cols */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          border-left: 1px solid rgba(0,0,0,0.08);
        }

        /* Left — infos */
        .ct-info {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
          padding: 52px 44px;
          display: flex;
          flex-direction: column;
          gap: 44px;
        }

        .ct-info-block {}
        .ct-info-icon {
          font-size: 0.85rem;
          color: #888;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ct-info-icon-label {
          font-size: 0.62rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888;
        }
        .ct-info-value {
          font-size: 0.88rem;
          font-weight: 400;
          color: #222;
          line-height: 1.7;
        }
        .ct-info-value a {
          color: #222;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ct-info-value a:hover { color: #111; }

        /* Right — form */
        .ct-form-wrap {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
          padding: 52px 52px;
        }

        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Input row */
        .ct-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .ct-field {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 20px 0;
          position: relative;
        }
        .ct-field:not(:last-child) {
          border-right: none;
        }
        .ct-row .ct-field:first-child {
          border-right: 1px solid rgba(0,0,0,0.08);
          padding-right: 28px;
        }
        .ct-row .ct-field:last-child {
          padding-left: 28px;
        }

        .ct-field label {
          font-size: 0.62rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 10px;
        }

        .ct-field input,
        .ct-field textarea {
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.92rem;
          font-weight: 400;
          color: #111;
          resize: none;
          padding: 0;
        }
        .ct-field input::placeholder,
        .ct-field textarea::placeholder { color: #999; }

        .ct-field textarea { min-height: 100px; }

        /* Focus underline */
        .ct-field::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 1px;
          background: #111;
          transition: width 0.3s ease;
        }
        .ct-field:focus-within::after { width: 100%; }

        /* Submit */
        .ct-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 36px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .ct-submit {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #111;
          color: #f7f5f2;
          border: none;
          padding: 15px 36px;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .ct-submit:hover { background: #2a2a2a; }
        .ct-submit:hover .ct-arrow { transform: translateX(4px); }
        .ct-arrow { display: inline-block; transition: transform 0.2s; }

        /* Success */
        .ct-success {
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #3e6b5b;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ct-success.visible { opacity: 1; }

        @media (max-width: 900px) {
          .ct-body { grid-template-columns: 1fr; }
          .ct-section { padding: 90px 6vw 60px; }
          .ct-header { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 540px) {
          .ct-row { grid-template-columns: 1fr; }
          .ct-row .ct-field:first-child { border-right: none; padding-right: 0; }
          .ct-row .ct-field:last-child { padding-left: 0; }
          .ct-form-wrap { padding: 36px 28px; }
          .ct-info { padding: 36px 28px; }
        }
      `}</style>

      <section className="ct-section" id="contact">
        {/* Header */}
        <div className="ct-header">
          <div>
            <p className="ct-label">Contact · Zoomy</p>
            <h2 className="ct-title">
              Parlons de<br />
              votre <em>projet.</em>
            </h2>
          </div>
          <p className="ct-header-desc">
            Une idée, une question, une opportunité ? Notre équipe vous répond dans les 24h.
          </p>
        </div>

        <div className="ct-divider" />

        <div className="ct-body">
          {/* Left — contact info */}
          <div className="ct-info">
            <div className="ct-info-block">
              <div className="ct-info-icon">
                <FaEnvelope />
                <span className="ct-info-icon-label">Email</span>
              </div>
              <p className="ct-info-value">
                <a href="mailto:contact@zoomy.tn">contact@zoomy.tn</a>
              </p>
            </div>

            <div className="ct-info-block">
              <div className="ct-info-icon">
                <FaPhone />
                <span className="ct-info-icon-label">Téléphone</span>
              </div>
              <p className="ct-info-value">
                <a href="tel:+21612345678">+216 12 345 678</a>
              </p>
            </div>

            <div className="ct-info-block">
              <div className="ct-info-icon">
                <FaMapMarkerAlt />
                <span className="ct-info-icon-label">Adresse</span>
              </div>
              <p className="ct-info-value">
                Tunis, Tunisie
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="ct-form-wrap">
            <form className="ct-form" onSubmit={submit}>
              <div className="ct-row">
                <div className="ct-field">
                  <label htmlFor="ct-name">Nom complet</label>
                  <input
                    id="ct-name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-email">Email</label>
                  <input
                    id="ct-email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handle}
                    required
                  />
                </div>
              </div>

              <div className="ct-field">
                <label htmlFor="ct-subject">Sujet</label>
                <input
                  id="ct-subject"
                  name="subject"
                  type="text"
                  placeholder="De quoi s'agit-il ?"
                  value={form.subject}
                  onChange={handle}
                  required
                />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-message">Message</label>
                <textarea
                  id="ct-message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={form.message}
                  onChange={handle}
                  required
                />
              </div>

              <div className="ct-submit-row">
                <button type="submit" className="ct-submit">
                  Envoyer <span className="ct-arrow">→</span>
                </button>
                <span className={`ct-success ${sent ? "visible" : ""}`}>
                  ✓ Message envoyé
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;