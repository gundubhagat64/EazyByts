import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        color: "white",
        textAlign: "center",
        padding: "50px 20px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        style={{
          color: "#E50914",
          marginBottom: "15px",
          letterSpacing: "2px",
          fontSize: "clamp(28px,6vw,40px)",
        }}
      >
        GUNDU.
      </h2>

      <p
        style={{
          color: "#aaa",
          marginBottom: "25px",
          fontSize: "clamp(14px,3vw,18px)",
          lineHeight: "1.7",
          padding: "0 10px",
        }}
      >
        Full Stack Developer | MERN Stack | Computer Engineering Student
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "25px",
          fontSize: "clamp(24px,6vw,34px)",
          marginBottom: "25px",
        }}
      >
        <a
          href="https://github.com/gundubhagat64"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            transition: "0.3s",
          }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/gundubhagat2004/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#0A66C2",
            transition: "0.3s",
          }}
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:gundubhagat64@gmail.com"
          style={{
            color: "#E50914",
            transition: "0.3s",
          }}
        >
          <FaEnvelope />
        </a>
      </div>

      <p
        style={{
          color: "#666",
          fontSize: "clamp(12px,3vw,15px)",
        }}
      >
        © 2026 Gundu Ekanath Bhagat. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;