import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
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
          marginBottom: "60px",
        }}
      >
        About Me
      </motion.h1>

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "#1a1a1a",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(229,9,20,.2)",
          }}
        >
          <h2 style={{ color: "#E50914", marginBottom: "20px" }}>
            Gundu Ekanath Bhagat
          </h2>

          <p style={{ lineHeight: "1.9", color: "#d1d5db" }}>
            I am a passionate Computer Engineering student with a strong
            interest in Full Stack Web Development. I enjoy building modern,
            responsive and user-friendly web applications using the MERN Stack.
          </p>

          <br />

          <p>🎓 Final Year Computer Engineering Student</p>
          <p>💻 MERN Stack Developer</p>
          <p>📍 Vengurla, Sindhudurg</p>
          <p>📧 gundubhagat64@gmail.com</p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "#1a1a1a",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(229,9,20,.2)",
          }}
        >
          <h2
            style={{
              color: "#E50914",
              marginBottom: "30px",
            }}
          >
            Experience & Journey
          </h2>

          <div style={{ marginBottom: "25px" }}>
            <h3>🚀 Web Development Intern</h3>
            <p style={{ color: "#bbb" }}>
              Completed Web Development Internship and worked on real-world
              projects using React and modern web technologies.
            
            </p>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <h3>💻 MERN Projects</h3>
            <p style={{ color: "#bbb" }}>
              Developed projects like Campus Zomato, Portfolio CMS and Driver
              Drowsiness Detection.
            </p>
          </div>

          <div>
            <h3>🎯 Career Goal</h3>
            <p style={{ color: "#bbb" }}>
              Looking for Full Stack Developer opportunities where I can improve
              my skills and contribute to real-world applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;