

import profile from "../assets/Sarath-3.png";

const About = () => {
  return (
    <div id="about" className="about-container">
      {/* Left Side (Text) */}
      <div className="about-text">
        <h1 className="about-name">Sarath</h1>
        <p className="about-title">
          Digital Craftsman ( Tech Enthusiast / Frontend, Backend & Everything In Between)
          
        </p>
      </div>

      {/* Right Side (Image) */}
      <div className="about-image-container">
        <img
          src={profile}
          alt="Sarath"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default About;
