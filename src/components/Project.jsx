import brainbin from "../assets/brainbin.png";
import moviedex from "../assets/moviedex.png";
import talentIQ from "../assets/talent-iq.png";

const projects = [
  {
    img: moviedex,
    title: "MovieDex",
    desc: "Developed a Movie Platform, React-based movie search app using Vite, Tailwind, and Appwrite.",
    live: "https://movie-dex-pied.vercel.app/",
    github: "https://github.com/withsarath/MovieDex",
  },
  {
    img: brainbin,
    title: "BrainBin",
    desc: "BrainBin is a full-stack web application designed for creating, viewing and managing personal notes efficiently.",
    live: "https://brainbin.onrender.com/",
    github: "https://github.com/withsarath/BrainBin",
  },
  {
    img: talentIQ,
    title: "Talent-IQ",
    desc: "Developed a full-stack interview platform that enables users to conduct live coding interviews with real-time video calls, chat, and problem-solving features.",
    live: "https://talent-iq-knz5.onrender.com/",
    github: "https://github.com/withsarath/talent-IQ",
  },
];

const Project = () => {
  return (
    <div className="project-container" id="projects">
      <div className="bio-links-title">Projects</div>
      <div className="bio-showcase">
        {projects.map((p) => (
          <div key={p.title} className="bio-card">
            <img src={p.img} alt={p.title} className="bio-img" />
            <div className="bio-card-caption">
              {p.title}
              <p className="project-para">{p.desc}</p>
              <div className="project-buttons">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
