import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/gundu.jpg";

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top,#1b0000,#090909,#000)",
        color: "white",
        textAlign: "center",
        padding: "120px 20px 40px",
      }}
    >
      <motion.img
        src={profile}
        alt="Profile"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        style={{
          width: "clamp(150px,35vw,220px)",
          height: "clamp(150px,35vw,220px)",
          objectFit: "cover",
          borderRadius: "50%",
          border: "5px solid #E50914",
          boxShadow: "0 0 35px rgba(229,9,20,.7)",
          marginBottom: "25px",
        }}
      />

      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "clamp(2.2rem,8vw,4.5rem)",
          color: "#E50914",
          textShadow: "0 0 20px #E50914",
          margin: 0,
          lineHeight: "1.2",
          padding: "0 10px",
        }}
      >
        GUNDU BHAGAT
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "MERN Stack Developer",
          2000,
          "React Developer",
          2000,
          "Data Analyst",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{
          fontSize: "clamp(18px,4vw,30px)",
          color: "#ddd",
          marginTop: "15px",
          textAlign: "center",
          padding: "0 10px",
        }}
      />

      <p
        style={{
          maxWidth: "750px",
          width: "100%",
          marginTop: "25px",
          color: "#cfcfcf",
          lineHeight: "1.8",
          fontSize: "clamp(14px,3.5vw,18px)",
          padding: "0 15px",
        }}
      >
        Passionate Computer Engineering student with hands-on experience in
        React, Node.js, Express.js and Supabase. I enjoy building modern,
        responsive and scalable web applications with clean UI and smooth user
        experience.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "35px",
        }}
      >
        <a
          href="/Gundu_Bhagat_Resume%20(2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              background: "#E50914",
              color: "white",
            }}
            style={{
              padding: "15px 30px",
              width: "220px",
              maxWidth: "90vw",
              borderRadius: "40px",
              border: "2px solid #E50914",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Download Resume
          </motion.button>
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "45px",
          fontSize: "clamp(28px,7vw,38px)",
        }}
      >
        <motion.a
          whileHover={{ scale: 1.25, color: "#E50914" }}
          href="https://github.com/gundubhagat64"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.25 }}
          href="https://www.linkedin.com/in/gundubhagat2004/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0A66C2" }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.25, color: "#E50914" }}
          href="mailto:gundubhagat64@gmail.com"
          style={{ color: "white" }}
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;