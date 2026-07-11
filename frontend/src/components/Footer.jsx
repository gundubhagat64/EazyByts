import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        style={{
          color: "#E50914",
          marginBottom: "15px",
          letterSpacing: "2px",
        }}
      >
        GUNDU.
      </h2>

      <p style={{ color: "#aaa", marginBottom: "20px" }}>
        Full Stack Developer | MERN Stack | Computer Engineering Student
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          fontSize: "28px",
          marginBottom: "25px",
        }}
      >
        <a
          href="https://github.com/gundubhagat64"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/gundubhagat2004/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0A66C2" }}
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:gundubhagat64@gmail.com"
          style={{ color: "#E50914" }}
        >
          <FaEnvelope />
        </a>
      </div>

      <p style={{ color: "#666", fontSize: "14px" }}>
        © 2026 Gundu Ekanath Bhagat. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;