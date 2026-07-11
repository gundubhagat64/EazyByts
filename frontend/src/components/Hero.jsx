import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/gundu.jpg";


function Hero() {
  return (
    <section
      style={{
        paddingTop: "150px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top,#1b0000,#090909,#000)",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <motion.img
        src={profile}
        alt="Profile"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.08 }}
        style={{
          width: "210px",
          height: "210px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "5px solid #150830",
          boxShadow: "0 0 50px rgba(242, 9, 20, 0.8)",
          marginBottom: "25px",
        }}
      />

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "65px",
          color: "#E50914",
          textShadow:
            "0 0 20px #E50914,0 0 40px #E50914",
          letterSpacing: "5px",
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
          fontSize: "28px",
          color: "#ddd",
          marginTop: "10px",
        }}
      />

      <p
        style={{
          maxWidth: "700px",
          marginTop: "25px",
          color: "#bdbdbd",
          lineHeight: "1.8",
          fontSize: "17px",
        }}
      >
        Passionate Computer Engineering student with
        hands-on experience in React, Node.js,
        Express.js and MongoDB. I love building modern,
        responsive and scalable web applications with
        clean UI and smooth user experience.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "35px",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 30px #E50914",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "15px 35px",
            borderRadius: "40px",
            background: "#E50914",
            color: "white",
            border: "none",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
        
        </motion.button>

     <a
  href="/Gundu_Bhagat_Resume%20(2).pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    whileHover={{ scale: 1.08 }}
    style={{
      padding: "15px 35px",
      borderRadius: "40px",
      border: "2px solid #E50914",
      background: "transparent",
      color: "white",
      cursor: "pointer",
    }}
  >
    Download CV
  </motion.button>
</a>
      </div>

      <div
        style={{
          display: "flex",
          gap: "35px",
          marginTop: "45px",
          fontSize: "35px",
        }}
      >
        <motion.a
          whileHover={{
            scale: 1.3,
            color: "#E50914",
          }}
          href="https://github.com/gundubhagat64"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.3,
          }}
          href="https://www.linkedin.com/in/gundubhagat2004/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0A66C2" }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.3,
            color: "#E50914",
          }}
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