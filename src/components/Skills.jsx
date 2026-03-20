import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiVite, SiTypescript } from "react-icons/si";

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-skill");

            // Find the progress bar within this skill card
            const progressBar = entry.target.querySelector(".skill-progress");
            if (progressBar) {
              const level = progressBar.getAttribute("data-level");
              progressBar.style.setProperty("--progress-width", `${level}%`);
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // const skills = [
  //   { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  //   { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  //   { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  //   { name: "React", icon: FaReact, color: "#61DAFB" },
  //   { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  //   { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  //   { name: "Express.js", icon: SiExpress, color: "ffffff" },
  //   { name: "Git", icon: FaGitAlt, color: "#F05032" },
  //   { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  //   { name: "Vite", icon: SiVite, color: "#646CFF" },
  //   { name: "Typescript", icon: SiTypescript, color: "#646CFF" },
  // ];
  const skills = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "#E34F26",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "#1572B6",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      url: "https://react.dev",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933",
      url: "https://nodejs.org",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      url: "https://www.mongodb.com",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#ffffff",
      url: "https://expressjs.com",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "#F05032",
      url: "https://git-scm.com",
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "#F24E1E",
      url: "https://figma.com",
    },
    { name: "Vite", icon: SiVite, color: "#646CFF", url: "https://vitejs.dev" },
    {
      name: "Typescript",
      icon: SiTypescript,
      color: "#3178C6",
      url: "https://www.typescriptlang.org",
    },
  ];
  const animateNeighbors = (index) => {
    skillRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const dist = Math.abs(i - index);
      if (dist === 0) return; // handled by CSS :hover
      if (dist === 1) ref.style.transform = "translateY(-4px) scale(1.07)";
      else if (dist === 2) ref.style.transform = "translateY(-2px) scale(1.03)";
      else ref.style.transform = "";
    });
  };

  const resetNeighbors = () => {
    skillRefs.current.forEach((ref) => {
      if (ref) ref.style.transform = "";
    });
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Technologies</h2>
      <p className="skills-subtitle">
        Here are the technologies I work with and my proficiency levels
      </p>

      {/* <div className="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card"
              ref={(el) => (skillRefs.current[index] = el)}
            >
              <div className="skill-header">
                <IconComponent
                  className="skill-icon"
                  style={{ color: skill.color }}
                />
                <span className="skill-name">{skill.name}</span>
              </div>

              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: "0%",
                      backgroundColor: skill.color,
                    }}
                    data-level={skill.level}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}</span>
              </div>
            </a>
          );
        })}
      </div> */}
      <div className="skills-grid" id="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card"
              ref={(el) => (skillRefs.current[index] = el)}
              onMouseEnter={() => animateNeighbors(index)}
              onMouseLeave={() => resetNeighbors()}
            >
              <div className="skill-header">
                <IconComponent
                  className="skill-icon"
                  style={{ color: skill.color }}
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
