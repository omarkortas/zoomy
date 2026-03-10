import React, { useEffect, useState } from "react";
import "./dashboard.css";
import {
  getRoadmaps,
  addRoadmap,
  updateRoadmap,
  deleteRoadmap,
} from "../../storage/storage"; 

function Roadmaps({ readOnly = false }) {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
      const data =  getRoadmaps();
      setRoadmaps(data);
      setLoading(false);
    
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSave() {
    if (!form.title.trim() || !form.description.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updated = updateRoadmap(editId, form);
      setRoadmaps(updated);
    } else {
      const updated = addRoadmap(form);
      setRoadmaps(updated);
    }

    setShowModal(false);
    setForm({ title: "", description: "" });
    setEditId(null);
  }

  function handleEdit(r) {
    setForm({ title: r.title, description: r.description });
    setEditId(r.id);
    setShowModal(true);
  }

  function handleDelete(id) {
    const updated =  deleteRoadmap(id);
    setRoadmaps(updated);
  }

  if (loading){
    return (
      <div className="main-container">
        <p style={{ fontSize: "50px",fontFamily:'Arial' }}>Loading roadmaps...</p>
      </div>
    );
  } 

  return (
    <div className="main-container pub">
      <div className="title">Roadmaps :</div>

      {!readOnly && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => setShowModal(true)}
        >
          Add Roadmap
        </button>
      )}

      <div className="publication-list">
        {roadmaps.map((r) => (
          <div key={r.id} className="publication-item">
            <h3 className="title_li">{r.title}</h3>
            <p>{r.description}</p>
            {!readOnly && (
              <div className="buttons">
                <button
                  style={{ background: "green" }}
                  className="text-white px-3 py-1 rounded"
                  onClick={() => handleEdit(r)}
                >
                  Edit
                </button>
                <button
                  style={{ background: "red" }}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(r.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {!readOnly && showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-4">
              {editId ? "Edit Roadmap" : "Add Roadmap"}
            </h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="border border-gray-200 p-2 w-full mb-3"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="border border-gray-200 p-2 w-full mb-3"
            />
            <div className="flex justify-end gap-2">
              <button
                style={{ background: "gray" }}
                className="px-3 py-1 rounded"
                onClick={() => {
                  setShowModal(false);
                  setForm({ title: "", description: "" });
                  setEditId(null);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={handleSave}
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Roadmaps;
