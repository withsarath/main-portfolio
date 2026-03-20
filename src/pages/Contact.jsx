import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail, FiChevronRight, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const platforms = [
  { label: "Email",     sub: "withsarath.m@gmail.com", icon: FiMail,     href: "mailto:withsarath.m@gmail.com" },
  { label: "Instagram", sub: "@withsarath_",            icon: FaInstagram,href: "https://instagram.com/withsarath_" },
  { label: "LinkedIn",  sub: "in/withsarath",           icon: FaLinkedin, href: "https://linkedin.com/in/withsarath" },
  { label: "GitHub",    sub: "@withsarath",             icon: FaGithub,   href: "https://github.com/withsarath" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Simulate send — replace with your EmailJS / Formspree endpoint
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="page contact-page">
      <h1 className="page-title">Contact</h1>
      <p className="page-sub">Let's connect.</p>

      <p className="contact-blurb">Connect with me through any of these platforms.</p>

      <div className="contact-grid">
        {platforms.map((p) => {
          const Icon = p.icon;
          return (
            <a key={p.label} href={p.href}
               target={p.href.startsWith("mailto") ? undefined : "_blank"}
               rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-left">
                <Icon size={18} className="contact-icon" />
                <div>
                  <div className="contact-label">{p.label}</div>
                  <div className="contact-sub">{p.sub}</div>
                </div>
              </div>
              <FiChevronRight size={16} className="contact-arrow" />
            </a>
          );
        })}
      </div>

      {/* MESSAGE FORM */}
      <div className="msg-section">
        <h2 className="book-title">Send a Message</h2>
        <p className="book-sub">Drop me a note — I usually reply within a day.</p>

        {sent ? (
          <div className="form-success">
            <span>✓</span> Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label"><FiUser size={13} /> Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label"><FiMail size={13} /> Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label"><FiMessageSquare size={13} /> Message</label>
              <textarea
                className="form-input form-textarea"
                name="message"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
              {sending
                ? <><span className="spinner" /> Sending…</>
                : <><FiSend size={14} /> Send Message</>
              }
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
