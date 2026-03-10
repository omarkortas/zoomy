import React, { useState, useEffect } from "react";
import { getInterns } from "../../storage/storage"; 
import "./dashboard.css";

function Tasks({ readOnly = false, filterByUser = null }) {
  const [interns, setInterns] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    status: "en cours",
    description: "",
    assignedTo: ""
  });

  useEffect(() => {
    setInterns(getInterns());
  }, []);

  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (filterByUser) {
      setTasks(allTasks.filter(t => t.assignedTo === filterByUser));
    } else {
      setTasks(allTasks);
    }
  }, [filterByUser]);

  const handleOpenForm = (task = null) => {
    if (task) {
      setFormData(task);
      setEditTaskId(task.id);
    } else {
      setFormData({
        title: "",
        deadline: "",
        status: "en cours",
        description: "",
        assignedTo: ""
      });
      setEditTaskId(null);
    }
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditTaskId(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveTask = () => {
    const allTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    if (!formData.assignedTo) {
      alert("Please assign the task to an intern!");
      return;
    }

    if (editTaskId) {
      const updatedTasks = allTasks.map(t =>
        t.id === editTaskId ? { ...formData, id: editTaskId } : t
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(filterByUser ? updatedTasks.filter(t => t.assignedTo === filterByUser) : updatedTasks);
    } else {
      const newTask = { ...formData, id: Date.now() };
      const updatedTasks = [...allTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(filterByUser ? updatedTasks.filter(t => t.assignedTo === filterByUser) : updatedTasks);
    }

    handleCloseForm();
  };

  const handleDeleteTask = (id) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = allTasks.filter(t => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(filterByUser ? updatedTasks.filter(t => t.assignedTo === filterByUser) : updatedTasks);
  };

  return (
    <div className="main-container pub">
      <div className="title">Tasks :</div>

      {!readOnly && <button onClick={() => handleOpenForm()}>Add Task</button>}

      <div className="publication-list">
        {tasks.map((task) => (
          <div key={task.id} className="publication-item">
            <h3 className="title_li">{task.title}</h3>
            <p><b>Deadline:</b> {task.deadline}</p>
            <p><b>Status:</b> {task.status}</p>
            <p><b>Assigned To:</b> {task.assignedTo}</p>
            <p>{task.description}</p>

            {!readOnly && (
              <div className="buttons">
                <button style={{ background: "green" }} onClick={() => handleOpenForm(task)}>Edit</button>
                <button style={{ background: "red" }} onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {!readOnly && showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{editTaskId ? "Edit Task" : "Add Task"}</h3>

            <label>
              Task Title:
              <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>

            <label>
              Deadline:
              <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
            </label>

            <label>
              Status:
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="en cours">En Cours</option>
                <option value="terminée">Terminée</option>
              </select>
            </label>

            <label>
              Description:
              <textarea name="description" value={formData.description} onChange={handleChange} rows={4} />
            </label>

            <label>
              Assign To:
              <select name="assignedTo" value={formData.assignedTo} onChange={handleChange}>
                <option value="">Select Intern</option>
                {interns.map((intern) => (
                  <option key={intern.id} value={intern.name}>{intern.name}</option>
                ))}
              </select>
            </label>

            <div className="modal-actions">
              <button className="btn-primary" onClick={handleSaveTask}>
                {editTaskId ? "Update" : "Add"}
              </button>
              <button className="btn-secondary" style={{ background: "gray" }} onClick={handleCloseForm}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
