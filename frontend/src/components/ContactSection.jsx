import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#111",
        color: "white",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "clamp(2rem,6vw,50px)",
          color: "#E50914",
          marginBottom: "20px",
        }}
      >
        Contact Me
      </motion.h1>

      <p
        style={{
          color: "#bbb",
          fontSize: "clamp(15px,3vw,18px)",
          marginBottom: "40px",
          padding: "0 10px",
        }}
      >
        Feel free to contact me for internships, jobs or collaborations.
      </p>

      <div
        style={{
          maxWidth: "750px",
          width: "100%",
          margin: "auto",
          background: "#1a1a1a",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 0 25px rgba(229,9,20,.2)",
          boxSizing: "border-box",
        }}
      >
        <div style={itemStyle}>
          <FaEnvelope color="#E50914" size={22} />
          <span style={textStyle}>gundubhagat64@gmail.com</span>
        </div>

        <div style={itemStyle}>
          <FaPhone color="#E50914" size={22} />
          <span style={textStyle}>+91 9307493598</span>
        </div>

        <div style={itemStyle}>
          <FaMapMarkerAlt color="#E50914" size={22} />
          <span style={textStyle}>
            Vengurla, Sindhudurg, Maharashtra
          </span>
        </div>

        <div style={itemStyle}>
          <FaLinkedin color="#0A66C2" size={22} />
          <a
            href="https://www.linkedin.com/in/gundubhagat2004/"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            linkedin.com/in/gundubhagat2004
          </a>
        </div>

        <div style={itemStyle}>
          <FaGithub color="white" size={22} />
          <a
            href="https://github.com/gundubhagat64"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            github.com/gundubhagat64
          </a>
        </div>
      </div>
    </section>
  );
}

const itemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  margin: "20px 0",
};

const textStyle = {
  fontSize: "clamp(15px,3vw,18px)",
  wordBreak: "break-word",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "clamp(15px,3vw,18px)",
  wordBreak: "break-word",
};

export default ContactSection;