import "./Pwd_reset.css";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import zoomy_blanccc from "../../assets/zoomy_blanccc.png";
import { useNavigate } from "react-router-dom";
function Pwd_reset() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePwdReset = () => {
    if (!password || !confirmPassword) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }


    navigate("/vitrine");
  };
  return (
    <div className="auth-wrapper">
    <div className="container_code">
      <div className="header_code">
        <img className="logo" src={zoomy_blanccc} alt="zoomy logo" />
      </div>
      <div className="inputs_code">
        <div className="input_code">
          <FaLock className="icon"></FaLock> 
          <input
            type="password"
            required
            placeholder="NEW PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input_code">
          <FaLock className="icon"></FaLock>
          <input
            type="password"
            required
            placeholder="CONFIRM PASSWORD"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="submit_button" onClick={handlePwdReset}>
          CONFIRM
        </div>
      </div>
    </div>
    </div>
  );
}
export default Pwd_reset;
