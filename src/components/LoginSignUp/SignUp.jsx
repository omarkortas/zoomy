import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../../state/AuthContext";
import zoomy_blanccc from "../../assets/zoomy_blanccc.png";

function SignUp() {
  const navigate = useNavigate();
  const { SignUp, user, loading: authLoading } = useAuth();

  const [name, setName]                   = useState("");
  const [email, setEmail]                 = useState("");
  const [phoneNumber, setPhoneNumber]     = useState("");
  const [password, setPassword]           = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError]                 = useState("");
  const [loading, setLoading]             = useState(false);

  useEffect(() => {
    if (user) {
      if (user.role === "admin") navigate("/dashboard", { replace: true });
      else navigate("/vitrine", { replace: true });
    }
  }, [user, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs."); return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas."); return;
    }
    setError("");
    setLoading(true);
    const result = await SignUp(name, email, password, phoneNumber);
    setLoading(false);
    if (result.success) {
      if (!result.user) { navigate("/login", { replace: true }); return; }
      const role = result.user?.role?.toLowerCase?.();
      if (role === "admin") navigate("/dashboard", { replace: true });
      else navigate("/vitrine", { replace: true });
    } else {
      setError(result.message || "Échec de l'inscription.");
    }
  };

  if (authLoading) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .su-wrapper {
          min-height: 100vh;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-family: 'Epilogue', sans-serif;
          box-sizing: border-box;
        }

        /* ── LEFT PANEL ── */
        .su-left {
          background: #0e0e10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 52px 64px;
          position: relative;
          overflow: hidden;
        }
        .su-left::before {
          content: 'Z';
          position: absolute;
          right: -30px;
          bottom: -80px;
          font-family: 'Playfair Display', serif;
          font-size: 30vw;
          font-weight: 700;
          color: rgba(255,255,255,0.025);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .su-left-logo {
          height: 44px;
          object-fit: contain;
          cursor: pointer;
        }
        .su-left-quote {
          position: relative;
          z-index: 1;
        }
        .su-left-quote h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 2.8vw, 2.8rem);
          font-weight: 700;
          color: #f0ede8;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0 0 16px 0;
        }
        .su-left-quote h2 em {
          font-style: italic;
          font-weight: 400;
          color: #444;
        }
        .su-left-quote p {
          font-size: 0.78rem;
          font-weight: 300;
          color: #444;
          letter-spacing: 1px;
        }
        .su-left-bottom {
          font-size: 0.62rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #2a2a2a;
        }

        /* ── RIGHT PANEL ── */
        .su-right {
          background: #f7f5f2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px 10%;
        }

        .su-right-label {
          font-size: 0.62rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 16px;
        }
        .su-right-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 700;
          color: #111;
          letter-spacing: -1px;
          line-height: 1.1;
          margin: 0 0 44px 0;
        }
        .su-right-title em {
          font-style: italic;
          font-weight: 400;
          color: #999;
        }

        /* Fields */
        .su-field {
          display: flex;
          flex-direction: column;
          padding: 14px 0 12px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          margin-bottom: 2px;
          position: relative;
        }
        .su-field::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 1px;
          background: #111;
          transition: width 0.3s ease;
        }
        .su-field:focus-within::after { width: 100%; }

        .su-field-label {
          font-size: 0.56rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 7px;
        }
        .su-field-inner {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .su-field-icon {
          font-size: 0.8rem;
          color: #ccc;
          flex-shrink: 0;
          transition: color 0.2s;
        }
        .su-field:focus-within .su-field-icon { color: #777; }

        .su-field-inner input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.92rem;
          font-weight: 400;
          color: #111;
          padding: 0;
        }
        .su-field-inner input::placeholder { color: #ccc; }
        .su-field-inner input:disabled { opacity: 0.4; }

        /* Error */
        .su-error {
          font-size: 0.76rem;
          color: #c0392b;
          padding: 10px 14px;
          border-left: 2px solid #c0392b;
          background: rgba(192,57,43,0.05);
          margin: 16px 0;
          letter-spacing: 0.3px;
        }

        /* Buttons */
        .su-btns {
          display: flex;
          gap: 10px;
          margin-top: 36px;
        }
        .su-btn {
          flex: 1;
          padding: 15px 16px;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .su-btn-ghost {
          background: transparent;
          border: 1px solid rgba(0,0,0,0.12);
          color: #888;
        }
        .su-btn-ghost:hover { border-color: #111; color: #111; }
        .su-btn-dark {
          background: #111;
          color: #f7f5f2;
        }
        .su-btn-dark:hover { background: #2a2a2a; }
        .su-btn-dark:disabled { opacity: 0.45; cursor: not-allowed; }

        /* Mobile */
        @media (max-width: 768px) {
          .su-wrapper { grid-template-columns: 1fr; }
          .su-left { display: none; }
          .su-right {
            padding: 60px 8vw;
            background: #111;
            min-height: 100vh;
          }
          .su-right-label { color: #555; }
          .su-right-title { color: #f0ede8; }
          .su-right-title em { color: #444; }
          .su-field { border-bottom-color: rgba(255,255,255,0.08); }
          .su-field::after { background: #f0ede8; }
          .su-field-inner input { color: #f0ede8; }
          .su-field-inner input::placeholder { color: #444; }
          .su-btn-ghost { border-color: rgba(255,255,255,0.12); color: #555; }
          .su-btn-ghost:hover { border-color: #f0ede8; color: #f0ede8; }
          .su-btn-dark { background: #f0ede8; color: #111; }
          .su-btn-dark:hover { background: #fff; }
        }
      `}</style>

      <div className="su-wrapper">

        {/* ── LEFT ── */}
        <div className="su-left">
          <img
            className="su-left-logo"
            src={zoomy_blanccc}
            alt="Zoomy"
            onClick={() => navigate("/")}
          />
          <div className="su-left-quote">
            <h2>
              Rejoignez<br />
              l'aventure<br />
              <em>Zoomy.</em>
            </h2>
            <p>Business · Technologie · IT</p>
          </div>
          <span className="su-left-bottom">© {new Date().getFullYear()} Zoomy</span>
        </div>

        {/* ── RIGHT ── */}
        <div className="su-right">
          <p className="su-right-label">Créer un compte</p>
          <h1 className="su-right-title">
            Inscription<br />
            <em>gratuite.</em>
          </h1>

          <form onSubmit={handleSignUp}>
            <div className="su-field">
              <span className="su-field-label">Nom d'utilisateur</span>
              <div className="su-field-inner">
                <FaUser className="su-field-icon" />
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="su-field">
              <span className="su-field-label">Email</span>
              <div className="su-field-inner">
                <FaEnvelope className="su-field-icon" />
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="su-field">
              <span className="su-field-label">Mot de passe</span>
              <div className="su-field-inner">
                <FaLock className="su-field-icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="su-field">
              <span className="su-field-label">Confirmer le mot de passe</span>
              <div className="su-field-inner">
                <FaLock className="su-field-icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            {error && <div className="su-error">{error}</div>}

            <div className="su-btns">
              <button
                type="button"
                className="su-btn su-btn-ghost"
                onClick={() => navigate("/login")}
              >
                Connexion
              </button>
              <button
                type="submit"
                className="su-btn su-btn-dark"
                disabled={loading}
              >
                {loading ? "Inscription..." : "S'inscrire"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default SignUp;