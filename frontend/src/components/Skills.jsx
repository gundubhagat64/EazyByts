import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "90%" },
  { name: "React JS", level: "88%" },
  { name: "Node JS", level: "85%" },
  { name: "Express JS", level: "85%" },
  { name: "MongoDB", level: "82%" },
  { name: "Python", level: "80%" },
];

function Skills() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#0d0d0d",
        color: "white",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          color: "#E50914",
          fontSize: "clamp(2rem,6vw,50px)",
          marginBottom: "50px",
        }}
      >
        My Skills
      </motion.h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            style={{
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(16px,4vw,22px)",
                }}
              >
                {skill.name}
              </h3>

              <span
                style={{
                  color: "#ddd",
                  fontSize: "clamp(14px,3vw,18px)",
                }}
              >
                {skill.level}
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "12px",
                background: "#333",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5 }}
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg,#E50914,#ff4d4d)",
                  borderRadius: "20px",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;