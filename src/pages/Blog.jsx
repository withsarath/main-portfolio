import React, { useState } from "react";
import { FiClock, FiCalendar, FiChevronRight } from "react-icons/fi";

const articles = [
  {
    id: 1,
    title: "How I Built a Full-Stack Product Store with React & PostgreSQL",
    excerpt:
      "A deep dive into building BuyNext — from designing the database schema with Drizzle ORM to implementing secure authentication and product management.",
    date: "2025-06-15",
    readTime: "8 min read",
    tags: ["React", "PostgreSQL", "TypeScript"],
    status: "published",
  },
  {
    id: 2,
    title: "Redis Rate Limiting: Protecting Your APIs the Right Way",
    excerpt:
      "Learn how I added Redis-based API rate limiting to BrainBin to prevent abuse and ensure fair usage across all users.",
    date: "2025-05-20",
    readTime: "6 min read",
    tags: ["Node.js", "Redis", "Backend"],
    status: "published",
  },
  {
    id: 3,
    title: "Building Real-Time Video Calls with Stream.io in React",
    excerpt:
      "Implementing live coding interviews with real-time video, chat, and screen sharing using the Stream.io SDK in Talent-IQ.",
    date: "2025-04-10",
    readTime: "10 min read",
    tags: ["React", "Stream.io", "WebRTC"],
    status: "published",
  },
  {
    id: 4,
    title: "From Zero to MERN: My Journey as a Self-Taught Developer",
    excerpt:
      "The honest story of how I went from Commerce student to full-stack developer — the struggles, resources, and projects that shaped my career.",
    date: "",
    readTime: "12 min read",
    tags: ["Career", "Learning"],
    status: "coming-soon",
  },
];

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const Blog = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="page blog-page">
      <h1 className="page-title">Blog</h1>
      <p className="page-sub">Thoughts, learnings & project breakdowns.</p>

      <div className="blog-list">
        {articles.map((article) => (
          <article
            key={article.id}
            className={`blog-card ${article.status === "coming-soon" ? "blog-coming-soon" : ""}`}
            onClick={() =>
              article.status !== "coming-soon" &&
              setExpanded(expanded === article.id ? null : article.id)
            }
          >
            <div className="blog-card-header">
              <h2 className="blog-title">{article.title}</h2>
              {article.status === "coming-soon" ? (
                <span className="blog-badge">Coming Soon</span>
              ) : (
                <FiChevronRight
                  size={16}
                  className={`blog-chevron ${expanded === article.id ? "blog-chevron-open" : ""}`}
                />
              )}
            </div>

            <div className="blog-meta">
              {article.date && (
                <span className="blog-meta-item">
                  <FiCalendar size={12} />
                  {formatDate(article.date)}
                </span>
              )}
              <span className="blog-meta-item">
                <FiClock size={12} />
                {article.readTime}
              </span>
            </div>

            <div className="blog-tags">
              {article.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>

            {(expanded === article.id || article.status === "coming-soon") && (
              <p className="blog-excerpt">{article.excerpt}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
