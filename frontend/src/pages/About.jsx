import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 10%",
        background: "#111",
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
          marginBottom: "50px",
        }}
      >
        About Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 40px rgba(229,9,20,.2)",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "2",
            color: "#d1d5db",
          }}
        >
          Hello! I'm <span style={{ color: "#E50914", fontWeight: "bold" }}>
            Gundu Ekanath Bhagat
          </span>, a Computer Engineering student passionate about building
          modern web applications using the MERN Stack. I enjoy creating clean,
          responsive, and user-friendly interfaces while continuously improving
          my skills in full-stack development.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              padding: "20px",
              background: "#181818",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#E50914" }}>🎓 Education</h2>
            <p>BE Computer Engineering</p>
            <p> Last Year Student</p>
          </div>

          <div
            style={{
              padding: "20px",
              background: "#181818",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#E50914" }}>💻 Experience</h2>
            <p>Web Development Internship at inamgious Foundation</p>
          </div>

          
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;