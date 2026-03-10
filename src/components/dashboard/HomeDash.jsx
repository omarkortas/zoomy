import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  FaCheck,
  FaTrashAlt,
  FaUser,
  FaUserClock,
  FaUserShield,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import {
  acceptInternSubmission,
  removeInternSubmission,
  getUsers,
  getInternSubmissions,
} from "../../storage/storage";

function HomeDash() {
  const [submissions, setSubmissions] = useState([]);
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [adminsCount, setAdminsCount] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(7);

  useEffect(() => {
    const storedSubs = getInternSubmissions();
    setSubmissions(storedSubs);

    const storedUsers = getUsers();
    setUsers(storedUsers);

    const admins = storedUsers.filter((u) => u.role?.toLowerCase() === "admin");
    setAdminsCount(admins.length);

    const handleStorageChange = (e) => {
      if (e.key === "users") {
        const updatedUsers = getUsers();
        setUsers(updatedUsers);
        setAdminsCount(updatedUsers.filter((u) => u.role?.toLowerCase() === "admin").length);
      }
      if (e.key === "intern_submissions")
        setSubmissions(getInternSubmissions());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleAccept = (id) => {
    const updated = acceptInternSubmission(id);
    setSubmissions(updated);
    const updatedUsers = getUsers();
    setUsers(updatedUsers);
    setAdminsCount(updatedUsers.filter((u) => u.role?.toLowerCase() === "admin").length); 
  };

  const handleReject = (id) => {
    const updated = removeInternSubmission(id);
    setSubmissions(updated);
  };

  /////// Pagination
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const thisPageItems = submissions.slice(firstItemIndex, lastItemIndex);
  const pages = Array.from(
    { length: Math.ceil(submissions.length / itemPerPage) },
    (_, i) => i + 1
  );
  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="title">Dashboard :</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3 style={{ fontSize: "27px" }}>Total Users</h3>
            <div className="icon-box">
              <FaUserGroup className="icon-users" />
            </div>
          </div>
          <h1 className="number">
            {users.filter((u) => u.role?.toLowerCase() !== "admin" ).length }
          </h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3 style={{ fontSize: "27px" }}>Total Interns</h3>
            <div className="icon-box">
              <FaUser className="icon-intern" />
            </div>
          </div>
          <h1 className="number">
            {users.filter((u) => u.role?.toLowerCase() === "intern").length}
          </h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3 style={{ fontSize: "27px" }}>Total Admins</h3>
            <div className="icon-box">
              <FaUserShield className="icon-users" />
            </div>
          </div>
          <h1 className="number">
            {/* {adminsCount}  */}
            {users.filter((u) => u.role?.toLowerCase() === "admin").length}

          </h1>
        </div>
      </div>

      <div className="requests">
        <div className="header-requests">
          <FaUserClock className="icon-home-gray" />
          <div className="req-number">{submissions.length}</div>
          <div style={{ color: "gray", fontSize: "20px", paddingLeft: "15px" }}>
            Interns Submissions:
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ width: "12%" }}>Full Name</th>
              <th style={{ width: "8%" }}>Gender</th>
              <th style={{ width: "8%" }}>Phone</th>
              <th style={{ width: "20%" }}>Email</th>
              <th style={{ width: "10%" }}>GitHub</th>
              <th style={{ width: "14%" }}>CV</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {thisPageItems.map((app) => (
              <tr key={app.id}>
                <td style={{ width: "12%" }}>{app.fullName}</td>
                <td style={{ width: "8%" }}>{app.gender}</td>
                <td style={{ width: "8%" }}>{app.phone}</td>
                <td style={{ width: "20%" }}>{app.email}</td>
                <td style={{ width: "10%" }}>
                  <a href={app.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </td>
                <td style={{ width: "14%" }}>
                  {app.cv && (
                    <a href={app.cv.fileData} download={app.cv.fileName}>
                      {app.cv.fileName}
                    </a>
                  )}
                </td>
                <td style={{ width: "20%" }}>
                  <button onClick={() => handleAccept(app.id)}>
                    <FaCheck style={{ color: "green", margin: "10px 20px" }} />
                  </button>
                  <button onClick={() => handleReject(app.id)}>
                    <FaTrashAlt style={{ color: "red", margin: "10px 20px" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav style={{ position: "fixed", bottom: "30px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, pages.length))
          }
          disabled={currentPage === pages.length}
        >
          &gt;
        </button>
      </nav>
    </main>
  );
}

export default HomeDash;
