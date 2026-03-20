import React from "react";
import { FiMail, FiChevronRight } from "react-icons/fi";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section className="contact-container" id="contact">
      <div className="contact-title">Contact Me</div>
      <p className="contact-blurb">
        {/* Drop a note for collaborations, freelance work, or speaking invites.
        Happy to chat about products, code, and design. */}
        Open to internships, junior developer roles, and freelance work.
      </p>

      {/* centered CTA */}
      <div className="contact-cta-wrap">
        <a
          href="mailto:withsarath.m@gmail.com"
          className="contact-cta"
          aria-label="Send me an email"
        >
          <FiMail className="cta-icon-left" />
          <span>Send me an email</span>
          <FiChevronRight className="cta-icon-right" />
        </a>
      </div>

      {/* footer inside contact */}
      <div className="contact-footer">
        © {year} made with ❤️ Sarath. All Rights Reserved.
      </div>
    </section>
  );
};

export default Contact;
