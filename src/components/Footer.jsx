import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a href="https://github.com/withsarath" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/withsarath" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://instagram.com/withsarath_" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="mailto:withsarath.m@gmail.com" aria-label="Email"><FiMail /></a>
      </div>
      <p className="footer-copy">© {year} Sarath. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
