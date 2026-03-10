import "./Pwd_reset.css";
import { useNavigate } from "react-router-dom";
import zoomy_blanccc from "../../assets/zoomy_blanccc.png";
import { FaShieldHalved } from "react-icons/fa6";
function ResetCode() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="container_code">
        <div className="header_code">
          <img className="logo" src={zoomy_blanccc} alt="zoomy logo" />
        </div>
        <div className="inputs_code">
          <div className="input_code">
            <FaShieldHalved className="icon"></FaShieldHalved>
            <input type="text" required placeholder="EMAIL CODE" />
          </div>
          <div className="submit_button" onClick={() => navigate("/pwd_reset")}>
            CONFIRM
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetCode;
