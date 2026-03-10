import React, { useEffect, useState } from "react";
import { getUsers } from "../../storage/storage";
import "./Dashboard.css";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortBy, setSortBy] = useState("All");
  const [filterBy, setFilterBy] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(7);

  useEffect(() => {
    const storedUsers = getUsers();
    setUsers(storedUsers);
    setFilteredUsers(storedUsers.filter((u) => u.role !== "admin"));
  }, []);

  useEffect(() => {
    let updatedUsers = [...users].filter((u) => u.role !== "admin");

    if (filterBy !== "All") {
      updatedUsers = updatedUsers.filter(
        (u) => u.role?.toLowerCase() === filterBy.toLowerCase()
      );
    }

    if (sortBy === "Date")
      updatedUsers.sort((a, b) => new Date(a.joined) - new Date(b.joined));
    else if (sortBy === "Username")
      updatedUsers.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredUsers(updatedUsers);
  }, [filterBy, sortBy, users]);

  ////// pagination
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const thisPageItems = filteredUsers.slice(firstItemIndex, lastItemIndex);
  const pages = Array.from(
    { length: Math.ceil(filteredUsers.length / itemPerPage) },
    (_, i) => i + 1
  );

  return (
    <div className="main-container">
      <div className="title">Users List :</div>

      <div className="container-blue">
        <div className="title-blue">
          <h2>Users List :</h2>
          <div className="title-blue-right">
            <div className="sort">
              <h4>Sort by :</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Date">Date</option>
                <option value="Username">Username</option>
              </select>
            </div>
            <div className="filter">
              <h4>Filter by :</h4>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="All">All</option>
                <option value="intern">Intern</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="users-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {thisPageItems.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  {user.joined
                    ? new Date(user.joined).toLocaleDateString()
                    : "-"}
                </td>
                <td>{user.phoneNumber || "-"}</td>
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
    </div>
  );
}

export default UsersList;
