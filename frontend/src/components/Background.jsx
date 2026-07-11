import { motion } from "framer-motion";

function Background() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "#e50914",
          filter: "blur(150px)",
          position: "fixed",
          top: -100,
          left: -100,
          zIndex: -1,
          opacity: 0.6,
        }}
      />

      <motion.div
        animate={{
          x: [0, -200, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "#ff2d55",
          filter: "blur(150px)",
          position: "fixed",
          bottom: -100,
          right: -100,
          zIndex: -1,
          opacity: 0.5,
        }}
      />
    </>
  );
}

export default Background;