import React, { useState, useEffect } from "react";
import "./publicationsForm.css";

function PublicationForm({ editData, closeForm, savePublication }) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    type: "internship",
    image: null,
    imagePreview: "",
  });

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title || "",
        subtitle: editData.subtitle || "",
        type: editData.type || "internship",
        image: null,
        imagePreview: editData.image || "",
      });
    }
  }, [editData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.title.trim() || !formData.subtitle.trim() || !formData.type.trim()) {
    alert("Please fill all required fields.");
    return;
  }

  let imageBase64 = formData.imagePreview; 

  if (formData.image) {
    imageBase64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(formData.image);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  savePublication({
    title: formData.title,
    subtitle: formData.subtitle,
    type: formData.type,
    image: imageBase64, 
  });

  closeForm();
};



  return (
    <form
      onSubmit={handleSubmit}
      className="publication-form"
      encType="multipart/form-data"
    >
      <h3>{editData ? "Edit Publication" : "Add New Publication"}</h3>

      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter the publication title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          placeholder="Enter the publication description"
          value={formData.subtitle}
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
          required
        />
      </div>

      <div className="form-group">
        <label>Type:</label>
        <select
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value.toLowerCase() })
          }
          required
        >
          <option value="job">Job</option>
          <option value="internship">Internship</option>
        </select>
      </div>

    <div className="form-group">
  <label>Image File:</label>

  <label htmlFor="file-upload" className="custom-file-upload">
    Upload an image
  </label>

  <input
    id="file-upload"
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    style={{ display: "none" }} 
  />

  {formData.imagePreview && (
    <img
      src={formData.imagePreview}
      alt="Preview"
      style={{
        marginTop: "10px",
        maxWidth: "100%",
        maxHeight: "150px",
        borderRadius: "6px",
      }}
    />
  )}
</div>


      <div className="form-buttons">
        <button type="submit" className="btn btn-save">
          Save
        </button>
        <button
          type="button"
          onClick={closeForm}
          style={{ background: "gray" }}
          className="btn btn-cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default PublicationForm;
