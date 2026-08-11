import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`back-to-top${visible ? " visible" : ""}`}
      onClick={scrollUp}
      aria-label="Back to top"
    >
      <FiArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
