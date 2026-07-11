import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function ContactSection() {
  return (
    <section
      style={{
        padding: "100px 10%",
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
          fontSize: "50px",
          color: "#E50914",
          marginBottom: "20px",
        }}
      >
        Contact Me
      </motion.h1>

      <p
        style={{
          color: "#bbb",
          fontSize: "18px",
          marginBottom: "50px",
        }}
      >
        Feel free to contact me for internships, jobs or collaborations.
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "#1a1a1a",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 25px rgba(229,9,20,.2)",
        }}
      >
        <p style={itemStyle}>
          <FaEnvelope color="#E50914" size={22} />
          <span>gundubhagat64@gmail.com</span>
        </p>

        <p style={itemStyle}>
          <FaPhone color="#E50914" size={22} />
          <span>+91 9307493598</span>
        </p>

        <p style={itemStyle}>
          <FaMapMarkerAlt color="#E50914" size={22} />
          <span>Vengurla, Sindhudurg, Maharashtra</span>
        </p>

        <p style={itemStyle}>
          <FaLinkedin color="#0A66C2" size={22} />
          <a
            href="https://www.linkedin.com/in/gundubhagat2004/"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            linkedin.com/in/gundubhagat2004
          </a>
        </p>

        <p style={itemStyle}>
          <FaGithub color="white" size={22} />
          <a
            href="https://github.com/gundubhagat64"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            github.com/gundubhagat64
          </a>
        </p>
      </div>
    </section>
  );
}

const itemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  margin: "25px 0",
  fontSize: "18px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default ContactSection;