// const Bio = () => {
//   return (
//     <section className="bio-section">
//       <h2 className="bio-title">Bio</h2>
//       <div className="bio-timeline">
//         <div>
//           <span className="bio-year">2004</span> Born in [Kerala], [India].
//         </div>
//         <div>
//           <span className="bio-year">2024</span> Graduated Diploma in Computer
//           Application at [Rutronix]
//         </div>
//         <div>
//           <span className="bio-year">2024</span> Joined Internship at[One Team
//           Solutions]
//         </div>
//         <div>
//           <span className="bio-year">2024 - present</span> Personal Projects &
//           Learning
//         </div>
//       </div>
//       <div className="bio-love">
//         <h2 className="bio-heart">I ♥</h2>
//         <span className="bio-list">
//           Tech, <span style={{ color: "#ff63c3" }}>Coding</span>, Music,
//           <span style={{ color: "#ff63c3" }}> Movies, </span>
//           Reading
//         </span>
//       </div>
//       <div className="bio-links-title">On the web</div>
//       <ul className="bio-social-list">
//         <li>
//           <a
//             href="https://www.instagram.com/withsarath_/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             @instagram
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.linkedin.com/in/withsarath/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             @linkedin
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/withsarath"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             @github
//           </a>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Bio;

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Bio = () => {
  return (
    <section className="bio-section">
      <h2 className="bio-title">Bio</h2>
      <div className="bio-timeline">
        <div>
          <span className="bio-year">2004</span> Born in [Kerala], [India].
        </div>
        <div>
          <span className="bio-year">2024</span> Graduated Diploma in Computer
          Application at [Rutronix]
        </div>
        <div>
          <span className="bio-year">2024</span> Joined Internship at [One Team
          Solutions]
        </div>
        <div>
          <span className="bio-year">2024 - present</span> Personal Projects &
          Learning
        </div>
      </div>
      <div className="bio-love">
        <h2 className="bio-heart">I ♥</h2>
        <span className="bio-list">
          Tech, <span style={{ color: "#ff63c3" }}>Coding</span>, Music,
          <span style={{ color: "#ff63c3" }}> Movies, </span>
          Reading
        </span>
      </div>
      <div className="bio-links-title">On the web</div>
      <ul className="bio-social-list">
        <li>
          <a
            href="https://www.instagram.com/withsarath_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              style={{
                display: "inline",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            />{" "}
            @instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/withsarath/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              style={{
                display: "inline",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            />{" "}
            @linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/withsarath"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              style={{
                display: "inline",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            />{" "}
            @github
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Bio;
