import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import zoomy_noir from "../../assets/zoomy_noir.png";
import zoomy_blanccc from "../../assets/zoomy_blanccc.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../state/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, Logout } = useAuth();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500&display=swap');

        /* Reset any browser default margin/padding on html and body */
        html, body {
          margin: 0 !important;
          padding: 0 !important;
        }

        :root {
          --nav-bg: rgba(247, 245, 242, 0.92);
          --nav-border: rgba(0,0,0,0.07);
          --nav-text: #444;
          --nav-text-hover: #111;
          --nav-bg-scrolled: rgba(247, 245, 242, 0.98);
        }
        [data-theme="dark"] {
          --nav-bg: rgba(14, 14, 16, 0.92);
          --nav-border: rgba(255,255,255,0.07);
          --nav-text: #888;
          --nav-text-hover: #f0ede8;
          --nav-bg-scrolled: rgba(14, 14, 16, 0.98);
        }

        .nb {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          margin: 0;
          z-index: 1000;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
          font-family: 'Epilogue', sans-serif;
          background: var(--nav-bg);
          border-bottom: 1px solid ${scrolled ? "var(--nav-border)" : "transparent"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: border-color 0.3s, background 0.3s;
        }

        /* Logo */
        .nb-logo { height: 48px; cursor: pointer; display: block; }
        .nb-logo-light { display: none; }
        [data-theme="dark"] .nb-logo-dark  { display: none; }
        [data-theme="dark"] .nb-logo-light { display: block; }

        /* Links */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nb-links a {
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--nav-text);
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
          padding-bottom: 2px;
        }
        .nb-links a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--nav-text-hover);
          transition: width 0.25s;
        }
        .nb-links a:hover { color: var(--nav-text-hover); }
        .nb-links a:hover::after { width: 100%; }

        /* Right */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nb-icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--nav-text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          transition: color 0.2s;
        }
        .nb-icon-btn:hover { color: var(--nav-text-hover); }

        .nb-divider {
          width: 1px;
          height: 18px;
          background: var(--nav-border);
        }

        .nb-register {
          background: none;
          border: 1px solid var(--nav-border);
          color: var(--nav-text);
          font-family: 'Epilogue', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 9px 20px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .nb-register:hover {
          background: var(--nav-text-hover);
          color: var(--nav-bg);
          border-color: var(--nav-text-hover);
        }

        .nb-user {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--nav-text);
          font-family: 'Epilogue', sans-serif;
          font-size: 0.78rem;
          padding: 0;
          transition: color 0.2s;
        }
        .nb-user:hover { color: var(--nav-text-hover); }
        .nb-user-email {
          max-width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nb-logout {
          background: none;
          border: none;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--nav-text);
          cursor: pointer;
          padding: 0;
          transition: color 0.2s;
        }
        .nb-logout:hover { color: #c0392b; }

        .nb-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nb-hamburger span {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--nav-text);
          transition: transform 0.3s, opacity 0.3s, width 0.3s;
        }
        .nb-hamburger.active span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nb-hamburger.active span:nth-child(2) { opacity: 0; width: 0; }
        .nb-hamburger.active span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        .nb-mobile {
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: var(--nav-bg-scrolled);
          border-bottom: 1px solid var(--nav-border);
          backdrop-filter: blur(14px);
          padding: 0 5vw;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, padding 0.35s ease;
          z-index: 999;
        }
        .nb-mobile.open {
          max-height: 320px;
          padding: 24px 5vw 28px;
        }
        .nb-mobile a {
          display: block;
          font-family: 'Epilogue', sans-serif;
          font-size: 0.82rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--nav-text);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid var(--nav-border);
          transition: color 0.2s;
        }
        .nb-mobile a:hover { color: var(--nav-text-hover); }
        .nb-mobile a:last-of-type { border-bottom: none; }

        @media (max-width: 768px) {
          .nb-links { display: none; }
          .nb-hamburger { display: flex; }
          .nb-register { display: none; }
          .nb-user-email { display: none; }
        }
      `}</style>

      <nav className="nb">
        <img className="nb-logo nb-logo-dark" src={zoomy_noir} alt="Zoomy" onClick={() => navigate("/")} />
        <img className="nb-logo nb-logo-light" src={zoomy_blanccc} alt="Zoomy" onClick={() => navigate("/")} />

        <ul className="nb-links">
          <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>

          <li><a href="#projects">Projects</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#internship">Internships</a></li>
                    <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="nb-right">
          {!user ? (
            <button className="nb-register" onClick={() => navigate("/signup")}>Register</button>
          ) : (
            <>
              <button className="nb-user" onClick={() => navigate("/profile")}>
                <FaUserCircle size={16} />
                <span className="nb-user-email">{user.email}</span>
              </button>
              <div className="nb-divider" />
              <button className="nb-logout" onClick={Logout}>Logout</button>
            </>
          )}
          <div className="nb-divider" />
          <button className="nb-icon-btn" onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <button className={`nb-hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nb-mobile ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
        <a href="#internship" onClick={() => setMenuOpen(false)}>Internships</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        {!user
          ? <a href="/signup" onClick={() => setMenuOpen(false)}>Register</a>
          : <a href="#" onClick={() => { Logout(); setMenuOpen(false); }}>Logout</a>
        }
      </div>
    </>
  );
}

export default Navbar;