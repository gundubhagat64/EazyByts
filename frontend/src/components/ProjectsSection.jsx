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

    if (error) {
      console.log(error);
      return;
    }

    setProjects(data);
  };

  return (
    <section
      style={{
        padding: "80px 20px",
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
          fontSize: "clamp(2rem,6vw,50px)",
          color: "#E50914",
          marginBottom: "50px",
        }}
      >
        My Projects
      </motion.h1>

      {projects.length === 0 && (
        <h2
          style={{
            textAlign: "center",
            color: "#888",
            marginBottom: "40px",
          }}
        >
          No Projects Found
        </h2>
      )}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#111",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(229,9,20,.18)",
            }}
          >
            <div
              style={{
                height: "180px",
                background:
                  "linear-gradient(135deg,#E50914,#4b0000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "clamp(40px,10vw,60px)",
              }}
            >
              💻
            </div>

            <div
              style={{
                padding: "22px",
              }}
            >
              <h2
                style={{
                  color: "#E50914",
                  marginBottom: "15px",
                  fontSize: "clamp(20px,4vw,28px)",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                  fontSize: "clamp(14px,3vw,17px)",
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