import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import supabase from "../supabase";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false });

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) return;

  setProjects(data);
};

  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#090909",
        color: "white",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#E50914",
          marginBottom: "60px",
        }}
      >
        My Projects
      </motion.h1>

      {projects.length === 0 && (
        <h2
          style={{
            textAlign: "center",
            color: "#999",
          }}
        >
          No Projects Found
        </h2>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          gap: "35px",
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#111",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 0 25px rgba(229,9,20,.15)",
            }}
          >
            <div
              style={{
                height: "180px",
                background: "linear-gradient(135deg,#E50914,#4b0000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "60px",
              }}
            >
              💻
            </div>

            <div style={{ padding: "25px" }}>
              <h2
                style={{
                  color: "#E50914",
                  marginBottom: "15px",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                }}
              >
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;