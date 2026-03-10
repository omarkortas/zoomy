import React, { useEffect, useState } from "react";
import PublicationForm from "./PublicationForm";
import {
  getPublications,
  addPublication,
  updatePublication,
  deletePublication
} from "../../storage/storage";
import "./publications.css";

function Publications() {
  const [publications, setPublications] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
      setPublications(getPublications());
  }, []);

  const handleAddClick = () => {
    setEditData(null);
    setShowForm(true);
  };

const handleSave = (newData) => {
  if (editData) {
    updatePublication(editData.id, newData);
  } else {
    const newId = Math.max(0, ...publications.map((p) => p.id)) + 1;
    addPublication({ id: newId, ...newData });
  }
  setPublications(getPublications());
  setShowForm(false);
  setEditData(null);
};

const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this publication?")) {
    deletePublication(id);
    setPublications(getPublications());
  }
};

  const handleEdit = (pub) => {
    setEditData(pub);
    setShowForm(true);
  };

  return (
    <div className="main-container pub">
      <div className="title">Publications Management</div>

      <button onClick={handleAddClick}>Add Publication</button>

      <ul className="publication-list">
        {publications.map((pub) => (
          <li key={pub.id} className="publication-item">
            <div className="title_li">{pub.title}</div>
            {pub.image && (
              <img
                src={pub.image}
                alt={pub.title}
                style={{ width: "auto",height:"150px", display: "block", marginTop: "5px" }}
                // className="internship-image"
              />
            )}
            <p>{pub.subtitle}</p>
            <p className="publication-type">Type: {pub.type}</p>
            <div className="buttons">
              <button onClick={() => handleEdit(pub)}>Edit</button>
              <button onClick={() => handleDelete(pub.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      { showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PublicationForm
              editData={editData}
              closeForm={() => {
                setShowForm(false);
                setEditData(null);
              }}
              savePublication={handleSave}
            />  
          </div>   
        </div>  
      ) }  
    </div>
  );
}

export default Publications;
