import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <section
      id="contact"
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
        Contact Me
      </motion.h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "40px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#fff" }}>
          Let's Connect 🚀
        </h2>

        <p style={{ marginBottom: "20px", color: "#bbb" }}>
          <FaEnvelope color="#E50914" />{" "}
          <strong>Email:</strong> gundubhagat64@gmail.com
        </p>

        <p style={{ marginBottom: "20px", color: "#bbb" }}>
          <FaPhone color="#E50914" />{" "}
          <strong>Phone:</strong> +91 9307493598
        </p>

        <p style={{ color: "#bbb" }}>
          <FaMapMarkerAlt color="#E50914" />{" "}
          <strong>Location:</strong> Vengurla, Sindhudurg, Maharashtra
        </p>
      </div>
    </section>
  );
}

export default ContactSection;