import React from "react";
import profile from "../assets/Sarath-3.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiVite } from "react-icons/si";

const timeline = [
  {
    org: "Higher Secondary, Boys HSS Punalur",
    role: "Commerce",
    period: "2021 - 2023",
    bullet: "Completed High School to make my parents proud",
    color: "#60a5fa",
  },
  {
    org: "Kerala State Rutronix",
    role: "Diploma in Computer Applications",
    period: "2023 - 2024",
    bullet:
      "Completed hands-on training in computer applications, focusing on practical software usage, basic programming, and system operations. Strengthened understanding of how software tools are applied in real-world environments.",
    color: "#60a5fa",
  },
  {
    org: "One Team Solutions",
    role: "MERN Intern",
    period: "2024 - 2025",
    bullet:
      "Worked as a MERN stack intern, contributing to real client projects. Built responsive user interfaces, integrated APIs, and collaborated with developers to deliver production-ready features under deadlines.",
    color: "#a78bfa",
  },
  {
    org: "Self-taught / Personal Projects",
    role: "Full-Stack Developer",
    period: "2024 – Present",
    bullet:
      "Actively building full-stack applications using React, Node.js, and MongoDB. Focused on developing scalable backend systems, REST APIs, and modern UI/UX. Continuously experimenting with new technologies and deploying real-world projects.",
    color: "#34d399",
  },
];

const projects = [
  {
    title: "MovieDex",
    desc: "React-based movie search app using Vite, Tailwind, and Appwrite.",
    tags: [
       { label: "React", bg: "rgb(6 182 212)", color: "rgb(255 255 255)" },
      { label: "Vite", bg: "rgb(59 130 246)", color: "rgb(255 255 255)"  },
      { label: "Appwrite", bg: "rgb(115 115 115 )", color:  "rgb(255 255 255)" },
      { label: "Tailwind CSS", bg: "rgb(59 130 246)", color: "rgb(255 255 255)" },
    ],
    live: "https://movie-dex-pied.vercel.app/",
    github: "https://github.com/withsarath/MovieDex",
  },
  {
    title: "BrainBin",
    desc: "Full-stack notes management app built for efficiency.",
    tags: [
      { label: "React", bg: "rgb(6 182 212)", color: "rgb(255 255 255)" },
      { label: "Node.js", bg: "rgb(34 197 94)", color: "rgb(255 255 255)" },
      { label: "MongoDB", bg: "rgb(16 185 129)", color: "rgb(255 255 255)" },
      { label: "Express", bg: "rgb(245 158 11)", color: "rgb(255 255 255)" },
      { label: "Tailwind CSS", bg: "rgb(59 130 246)", color: "rgb(255 255 255)"},
    ],
    live: "https://brainbin.onrender.com/",
    github: "https://github.com/withsarath/BrainBin",
  },
  {
    title: "Talent-IQ",
    desc: "Live coding interview platform with real-time video & chat.",
    tags: [
      { label: "React", bg: "rgb(6 182 212)", color: "rgb(255 255 255)" },
      { label: "JavaScript", bg: "rgb(234 179 8)", color: "rgb(255 255 255)" },
      { label: "Node.js", bg: "rgb(34 197 94)", color: "rgb(255 255 255)" },
      { label: "Socket.io", bg:"rgb(249 115 22)", color: "rgb(255 255 255)" },
    ],
    live: "https://talent-iq-knz5.onrender.com/",
    github: "https://github.com/withsarath/talent-IQ",
  },
];

const skills = [
  { name: "HTML5", icon: FaHtml5, bg: "#3d1500", color: "#fb923c" },
  { name: "CSS3", icon: FaCss3Alt, bg: "#0a2a5e", color: "#60a5fa" },
  { name: "JavaScript", icon: FaJs, bg: "#3d3200", color: "#facc15" },
  { name: "TypeScript", icon: SiTypescript, bg: "#0a2050", color: "#93c5fd" },
  { name: "React", icon: FaReact, bg: "#0e3a47", color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, bg: "#0a3018", color: "#4ade80" },
  { name: "MongoDB", icon: SiMongodb, bg: "#073520", color: "#34d399" },
  { name: "Express", icon: SiExpress, bg: "#2a2a2a", color: "#e5e5e5" },
  { name: "Git", icon: FaGitAlt, bg: "#3d1000", color: "#f97316" },
  { name: "Figma", icon: FaFigma, bg: "#3d0a00", color: "#f87171" },
  { name: "Vite", icon: SiVite, bg: "#1e0f50", color: "#c4b5fd" },
];

const hobbies = [
  {
    title: "🛠️ Open Source",
    desc: "Contributing to projects and building in public",
  },
   {
    title: "🎨 UI/UX Exploration",
    desc: "Exploring modern UI/UX trends and improving design skills through real-world project interfaces.",
  },
  {
    title: "☕ Coffee Ritual  ",
    desc: "Fun but will be the reason why I'm homeless",
  },
 
  { title: "🎬 Anime & Story Analysis", desc: "Playing monopoly but with real money" },
];

const About = () => (
  <div className="page about-page">
    {/* HEADER + BIO */}
    <div className="about-intro">
      <div className="about-intro-text">
        <h1 className="page-title">About</h1>
        <p className="page-sub">Who I am.</p>
        <p className="about-bio">
          Sarath is a <strong>Full-stack developer</strong> and tech enthusiast
          with a passion for crafting clean, functional, and creative digital
          experiences. He enjoys turning ideas into real applications, whether
          it's coding the <strong>backend logic</strong> or designing
          user-friendly interfaces. Curious by nature, he's constantly learning
          and experimenting with new technologies to grow his skill set. When
          he's not coding, Sarath loves exploring design trends, watching
          Movies, reading about tech, and building personal projects that
          challenge his creativity.
        </p>
      </div>
      <img src={profile} alt="Sarath" className="about-avatar" />
    </div>

    {/* TIMELINE */}
    <div className="about-two-col">
      <div className="col-label">Timeline</div>
      <div className="timeline-list">
        {timeline.map((t, i) => (
          <div className="timeline-item" key={i}>
            {/* dot + vertical line */}
            <div className="timeline-track">
              <span className="timeline-dot" style={{ background: t.color }} />
              {i < timeline.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-body">
              <div className="timeline-top">
                <span className="timeline-org" style={{ color: t.color }}>
                  {t.org}
                </span>
                <span className="timeline-period">{t.period}</span>
              </div>
              <div className="timeline-role">{t.role}</div>
              <div className="timeline-bullet">• {t.bullet}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* PROJECTS */}
    <div className="about-two-col" id="projects">
      <div className="col-label">Projects</div>
      <div className="about-projects-list">
        {projects.map((p) => (
          <div className="about-project-row" key={p.title}>
            <div className="apr-info">
              <h3 className="apr-title">{p.title}</h3>
              <p className="apr-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span
                    key={t.label}
                    className="tag-colored"
                    style={{ background: t.bg, color: t.color }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="apr-links">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <FiExternalLink size={13} /> Live
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <FiGithub size={13} /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* SKILLS */}
    <div className="about-two-col">
      <div className="col-label">Skills</div>
      <div className="skills-wrap">
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <span
              key={s.name}
              className="skill-pill-colored"
              style={{
                background: s.bg,
                color: s.color,
                borderColor: s.color + "40",
              }}
            >
              <Icon size={14} style={{ color: s.color }} />
              {s.name}
            </span>
          );
        })}
      </div>
    </div>

    {/* HOBBIES — flat layout like Phillip's */}
    <div className="about-two-col">
      <div className="col-label">Hobbies</div>
      <div className="hobbies-flat">
        {hobbies.map((h) => (
          <div className="hobby-flat" key={h.title}>
            <div className="hobby-title">{h.title}</div>
            <div className="hobby-desc">{h.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
