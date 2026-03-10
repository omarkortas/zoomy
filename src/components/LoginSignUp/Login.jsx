import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../../state/AuthContext";
import zoomy_blanccc from "../../assets/zoomy_blanccc.png";

const Login = () => {
  const { Login, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  useEffect(() => {
    if (user) {
      if (user.role === "admin") navigate("/dashboard", { replace: true });
      else navigate("/vitrine", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) { setError("Veuillez remplir tous les champs."); return; }
    setError("");
    setLoading(true);
    const result = await Login(email, password);
    setLoading(false);
    if (result.success) {
      const role = result.user?.role?.toLowerCase?.();
      if (role === "admin") navigate("/dashboard", { replace: true });
      else navigate("/vitrine", { replace: true });
    } else {
      setError(result.message || "Identifiants invalides.");
    }
  };

  if (authLoading) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Epilogue:wght@300;400;500&display=swap');

        .lg-wrapper {
          min-height: 100vh;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-family: 'Epilogue', sans-serif;
          box-sizing: border-box;
        }

        /* ── LEFT PANEL ── */
        .lg-left {
          background: #0e0e10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 52px 64px;
          position: relative;
          overflow: hidden;
        }
        .lg-left::before {
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
        .lg-left-logo {
          height: 44px;
          object-fit: contain;
          cursor: pointer;
        }
        .lg-left-quote {
          position: relative;
          z-index: 1;
        }
        .lg-left-quote h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 2.8vw, 2.8rem);
          font-weight: 700;
          color: #f0ede8;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0 0 16px 0;
        }
        .lg-left-quote h2 em {
          font-style: italic;
          font-weight: 400;
          color: #444;
        }
        .lg-left-quote p {
          font-size: 0.78rem;
          font-weight: 300;
          color: #444;
          letter-spacing: 1px;
        }
        .lg-left-bottom {
          font-size: 0.62rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #2a2a2a;
        }

        /* ── RIGHT PANEL ── */
        .lg-right {
          background: #f7f5f2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 10%;
        }

        .lg-right-label {
          font-size: 0.62rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 18px;
        }
        .lg-right-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          font-weight: 700;
          color: #111;
          letter-spacing: -1px;
          line-height: 1.1;
          margin: 0 0 52px 0;
        }
        .lg-right-title em {
          font-style: italic;
          font-weight: 400;
          color: #999;
        }

        /* Fields */
        .lg-field {
          display: flex;
          flex-direction: column;
          padding: 18px 0 14px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          margin-bottom: 4px;
          position: relative;
        }
        .lg-field::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 1px;
          background: #111;
          transition: width 0.3s ease;
        }
        .lg-field:focus-within::after { width: 100%; }

        .lg-field-label {
          font-size: 0.58rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 8px;
        }
        .lg-field-inner {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .lg-field-icon {
          font-size: 0.82rem;
          color: #ccc;
          flex-shrink: 0;
          transition: color 0.2s;
        }
        .lg-field:focus-within .lg-field-icon { color: #777; }

        .lg-field-inner input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #111;
          padding: 0;
        }
        .lg-field-inner input::placeholder { color: #ccc; }
        .lg-field-inner input:disabled { opacity: 0.4; }

        /* Forgot */
        .lg-forgot {
          font-size: 0.72rem;
          color: #bbb;
          text-align: right;
          margin-top: 14px;
          margin-bottom: 36px;
          cursor: pointer;
          transition: color 0.2s;
        }
        .lg-forgot:hover { color: #111; }

        /* Error */
        .lg-error {
          font-size: 0.76rem;
          color: #c0392b;
          padding: 10px 14px;
          border-left: 2px solid #c0392b;
          background: rgba(192,57,43,0.05);
          margin-bottom: 24px;
          letter-spacing: 0.3px;
        }

        /* Buttons */
        .lg-btns {
          display: flex;
          gap: 10px;
        }
        .lg-btn {
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
        .lg-btn-ghost {
          background: transparent;
          border: 1px solid rgba(0,0,0,0.12);
          color: #888;
        }
        .lg-btn-ghost:hover {
          border-color: #111;
          color: #111;
        }
        .lg-btn-dark {
          background: #111;
          color: #f7f5f2;
        }
        .lg-btn-dark:hover { background: #2a2a2a; }
        .lg-btn-dark:disabled { opacity: 0.45; cursor: not-allowed; }

        /* Mobile */
        @media (max-width: 768px) {
          .lg-wrapper { grid-template-columns: 1fr; }
          .lg-left { display: none; }
          .lg-right {
            padding: 60px 8vw;
            background: #111;
          }
          .lg-right-label { color: #555; }
          .lg-right-title { color: #f0ede8; }
          .lg-right-title em { color: #444; }
          .lg-field { border-bottom-color: rgba(255,255,255,0.1); }
          .lg-field::after { background: #f0ede8; }
          .lg-field-inner input { color: #f0ede8; }
          .lg-field-inner input::placeholder { color: #444; }
          .lg-forgot { color: #555; }
          .lg-forgot:hover { color: #f0ede8; }
          .lg-btn-ghost { border-color: rgba(255,255,255,0.12); color: #555; }
          .lg-btn-ghost:hover { border-color: #f0ede8; color: #f0ede8; }
          .lg-btn-dark { background: #f0ede8; color: #111; }
          .lg-btn-dark:hover { background: #fff; }
        }
      `}</style>

      <div className="lg-wrapper">

        {/* ── LEFT ── */}
        <div className="lg-left">
          <img
            className="lg-left-logo"
            src={zoomy_blanccc}
            alt="Zoomy"
            onClick={() => navigate("/")}
          />
          <div className="lg-left-quote">
            <h2>
              Bienvenue<br />
              dans votre<br />
              <em>espace digital.</em>
            </h2>
            <p>Business · Technologie · IT</p>
          </div>
          <span className="lg-left-bottom">© {new Date().getFullYear()} Zoomy</span>
        </div>

        {/* ── RIGHT ── */}
        <div className="lg-right">
          <p className="lg-right-label">Accès sécurisé</p>
          <h1 className="lg-right-title">
            Connexion à<br />
            votre <em>compte.</em>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="lg-field">
              <span className="lg-field-label">Email</span>
              <div className="lg-field-inner">
                <FaEnvelope className="lg-field-icon" />
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="lg-field">
              <span className="lg-field-label">Mot de passe</span>
              <div className="lg-field-inner">
                <FaLock className="lg-field-icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <p className="lg-forgot" onClick={() => navigate("/reset_code")}>
              Mot de passe oublié ?
            </p>

            {error && <div className="lg-error">{error}</div>}

            <div className="lg-btns">
              <button
                type="button"
                className="lg-btn lg-btn-ghost"
                onClick={() => navigate("/signup")}
              >
                S'inscrire
              </button>
              <button
                type="submit"
                className="lg-btn lg-btn-dark"
                disabled={loading}
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
};

export default Login;