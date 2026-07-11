import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(229,9,20,.35), transparent 70%)",
        pointerEvents: "none",
        filter: "blur(40px)",
        zIndex: -1,
        transition: "left .05s linear, top .05s linear",
      }}
    />
  );
}

export default MouseGlow;