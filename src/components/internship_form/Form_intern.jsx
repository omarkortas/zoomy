import "./Form_intern.css";
import zoomy_blanccc from "../../assets/zoomy_blanccc.png";
import { FaUser, FaEnvelope, FaUsers, FaPhone, FaFolder } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addInternSubmission } from "../../storage/storage";

function Form_intern() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    github: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cv") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            cv: {
              fileName: file.name,
              fileData: reader.result,
            },
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newSubmission = {
    id: Date.now(),
    fullName: formData.fullName,
    gender: formData.gender,
    phone: formData.phone,
    email: formData.email,
    github: formData.github,
    cv: formData.cv,
    role: "user",
    joined: new Date().toISOString().split("T")[0],
  };

  addInternSubmission(newSubmission);
  navigate("/");
};


  return (
    <div className="container_form">
      <div className="header_form">
        <img className="logo" src={zoomy_blanccc} alt="zoomy logo" />
        <div className="text">Registration Form</div>
        <div className="underline_form"></div>
      </div>
      <form onSubmit={handleSubmit} className="form_internship">
        <div className="input_form">
          <FaUser className="icon" />
          <input
            type="text"
            required
            placeholder="FULL NAME"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="input_form">
          <FaUsers className="icon" />
          <label style={{ display: "flex", alignItems: "center" }}>GENDER</label>
          <select
            style={{ color: "white", background: "transparent", margin: "0px 20px" }}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option style={{ background: "gray" }} value="">Select</option>
            <option style={{ background: "gray" }} value="Female">Female</option>
            <option style={{ background: "gray" }} value="Male">Male</option>
          </select>
        </div>
        <div className="input_form">
          <FaPhone className="icon" />
          <input
            type="tel"
            required
            placeholder="PHONE NUMBER"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input_form">
          <FaEnvelope className="icon" />
          <input
            type="email"
            required
            placeholder="EMAIL"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input_form">
          <FaSquareGithub className="icon" />
          <input
            type="url"
            required
            placeholder="GITHUB"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>
        <div className="input_form">
          <FaFolder className="icon" />
          <label style={{ display: "flex", alignItems: "center" }} htmlFor="file-upload">
            CV
          </label>
          <input
            id="file-upload"
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="input_form submit_button">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form_intern;
