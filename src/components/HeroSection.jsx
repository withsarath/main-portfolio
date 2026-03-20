import computer from "../assets/Programming Computer.json";
import resume from "../assets/Sarathm-resume.pdf"
import Lottie from "lottie-react";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container" id="home">
        <div className="hero-text-group">
          <p className="hero-para">
            {/* Hi, I'm <span style={{ color: "#ff63c3" }}>Sarath</span> — a
            Full-Stack Developer focused on building clean and scalable web
            applications. */}
            {/* Hi, I'm <span style={{ color: "#ff63c3" }}>Sarath</span> — a Full-Stack Developer based in India. */}
            Hi, I'm <span style={{ color: "#ff63c3" }}>Sarath</span> — your average coffee enjoyer from socal trying to document the struggles of becoming a software engineer.
          </p>
          <a
            href={resume}
            download
            className="contact-cta"
            style={{ alignSelf: "flex-start", marginTop: "18px" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="hero-animation">
          <Lottie animationData={computer} loop={true} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
