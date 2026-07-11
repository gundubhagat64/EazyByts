import { useState } from "react";
import supabase from "../supabase";

function Dashboard() {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const addProject = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("projects") // जर table नाव "projects" असेल तर इथे "projects" लिही
      .insert([
        {
          title: project.title,
          description: project.description,
        },
      ]);

   if (error) {
  console.log(error);
  alert(error.message);
  return;
}

    alert("✅ Project Added Successfully");

    setProject({
      title: "",
      description: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#2563eb",
          }}
        >
          Admin Dashboard
        </h1>

        <form onSubmit={addProject}>
          <input
            type="text"
            placeholder="Project Title"
            name="title"
            value={project.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          <textarea
            placeholder="Project Description"
            name="description"
            value={project.description}
            onChange={handleChange}
            rows="5"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;