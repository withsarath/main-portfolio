import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import computer from "../assets/Programming Computer.json";
import resume from "../assets/Sarathm-resume.pdf";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiBookOpen,
  FiGitCommit,
} from "react-icons/fi";

const LINES = [
  { text: "$ whoami", delay: 0, color: "#a78bfa" },
  { text: "→ sarath — full-stack developer", delay: 1200, color: "#e6edf3" },
  { text: "$ interests.txt", delay: 2400, color: "#a78bfa" },
  {
    text: "→ MongoDB · Express.js · React · Node.js",
    delay: 3000,
    color: "#60a5fa",
  },
  { text: "→ Open Source · Clean Code", delay: 3500, color: "#60a5fa" },
  { text: "$ git status", delay: 4400, color: "#a78bfa" },
  { text: "→ always building something new", delay: 5000, color: "#34d399" },
  { text: "$ _", delay: 6000, color: "#a78bfa", blink: true },
];

const Terminal = () => {
  const [visible, setVisible] = useState([]);
  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => setVisible((v) => [...v, i]), line.delay);
    });
  }, []);
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="t-dot red" />
        <span className="t-dot yellow" />
        <span className="t-dot green" />
        <span className="t-title">withsarath ~ </span>
      </div>
      <div className="terminal-body">
        {LINES.map((line, i) =>
          visible.includes(i) ? (
            <div
              key={i}
              className={`t-line${line.blink ? " t-blink" : ""}`}
              style={{ color: line.color }}
            >
              {line.text}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};


const GITHUB_USER = "withsarath";

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
          ),
        ]);
        if (!userRes.ok) throw new Error();
        const user = await userRes.json();
        const repoList = await reposRes.json();
        setStats(user);
        setRepos(Array.isArray(repoList) ? repoList.slice(0, 3) : []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  if (error)
    return (
      <div className="github-error">
        Couldn't load GitHub stats — check back later.
      </div>
    );

  return (
    <div className="github-stats">
      {/* Stat cards: repos + contributions */}
      <div className="stats-grid">
        <div className="stat-card">
          <FiBookOpen size={18} className="stat-icon" />
          <div className="stat-info">
            <span className="stat-value">
              {loading ? (
                <span className="stat-skeleton" />
              ) : (
                stats?.public_repos
              )}
            </span>
            <span className="stat-label">Public Repos</span>
          </div>
        </div>
        <div className="stat-card">
          <FiGitCommit size={18} className="stat-icon" />
          <div className="stat-info">
            <span className="stat-value">
              {loading ? <span className="stat-skeleton" /> : "—"}
            </span>
            <span className="stat-label">Contributions</span>
          </div>
        </div>
      </div>

      
      <div className="contrib-wrap">
        <p className="top-repos-label">Contribution Activity</p>
        <div className="contrib-img-wrap">
          {loading ? (
            <div className="contrib-skeleton" />
          ) : (
            <img
              src={`https://ghchart.rshah.org/a78bfa/${GITHUB_USER}`}
              alt="GitHub contribution chart"
              className="contrib-img"
            />
          )}
        </div>
      </div>

      {/* Recent repos */}
      <div className="top-repos">
        <p className="top-repos-label">Recent Repos</p>
        {loading
          ? [1, 2, 3].map((n) => (
              <div key={n} className="repo-card skeleton-repo" />
            ))
          : repos.map((r) => (
              <a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
              >
                <div className="repo-left">
                  <FiGithub size={13} className="repo-icon" />
                  <span className="repo-name">{r.name}</span>
                  {r.description && (
                    <span className="repo-desc">{r.description}</span>
                  )}
                </div>
                <div className="repo-right">
                  {r.language && (
                    <span className="repo-lang">{r.language}</span>
                  )}
                </div>
              </a>
            ))}
      </div>

      <a
        href={`https://github.com/${GITHUB_USER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="github-cta"
      >
        <FiGithub size={14} /> View GitHub Profile <FiArrowRight size={13} />
      </a>
    </div>
  );
};

/* ── Page ── */
const Home = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }
  }, []);

  return (
    <div className="page home-page">
      <section className="hero-section" ref={heroRef}>
        <div className="hero-text">
          <p className="hero-greeting">Hello Stranger👋🏻,</p>
          <h1 className="hero-name">{'<Sarath here/>'}</h1>
          <p className="hero-sub">
            your average coffee enjoyer from Kerala trying to document the
            struggles of becoming a software engineer.
          </p>
          <div className="hero-actions">
            <a href={resume} download className="btn btn-primary">
              <FiDownload size={15} /> Download Resume
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Get in touch <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="hero-lottie">
          <Lottie animationData={computer} loop={true} />
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2 className="section-title">Terminal</h2>
        </div>
        <Terminal />
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2 className="section-title">GitHub</h2>
        </div>
        <GitHubStats />
      </section>
    </div>
  );
};

export default Home;
