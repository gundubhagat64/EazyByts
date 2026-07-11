import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      style={{
        padding: "80px 20px",
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
          fontSize: "clamp(2rem,6vw,50px)",
          color: "#E50914",
          marginBottom: "50px",
        }}
      >
        About Me
      </motion.h1>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          alignItems: "stretch",
        }}
      >
        {/* Left Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "#1a1a1a",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(229,9,20,.2)",
          }}
        >
          <h2
            style={{
              color: "#E50914",
              marginBottom: "20px",
              fontSize: "clamp(22px,5vw,30px)",
            }}
          >
            Gundu Ekanath Bhagat
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#d1d5db",
              fontSize: "clamp(15px,3vw,17px)",
            }}
          >
            I am a passionate Computer Engineering student with a strong
            interest in Full Stack Web Development. I enjoy building modern,
            responsive and user-friendly web applications using the MERN Stack.
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "clamp(15px,3vw,17px)",
            }}
          >
            <p>🎓 Final Year Computer Engineering Student</p>
            <p>💻 MERN Stack Developer</p>
            <p>📍 Vengurla, Sindhudurg</p>
            <p>📧 gundubhagat64@gmail.com</p>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "#1a1a1a",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(229,9,20,.2)",
          }}
        >
          <h2
            style={{
              color: "#E50914",
              marginBottom: "25px",
              fontSize: "clamp(22px,5vw,30px)",
            }}
          >
            Experience & Journey
          </h2>

          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              🚀 Web Development Intern
            </h3>

            <p
              style={{
                color: "#bbb",
                lineHeight: "1.8",
                fontSize: "clamp(15px,3vw,17px)",
              }}
            >
              Completed Web Development Internship and worked on real-world
              projects using React and modern web technologies.
            </p>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              💻 MERN Projects
            </h3>

            <p
              style={{
                color: "#bbb",
                lineHeight: "1.8",
                fontSize: "clamp(15px,3vw,17px)",
              }}
            >
              Developed projects like Campus Zomato, Portfolio CMS and Driver
              Drowsiness Detection.
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: "10px" }}>
              🎯 Career Goal
            </h3>

            <p
              style={{
                color: "#bbb",
                lineHeight: "1.8",
                fontSize: "clamp(15px,3vw,17px)",
              }}
            >
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