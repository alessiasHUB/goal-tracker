import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="footer-container">
    <p className="footer-txt">
      If you have any questions about anything, or just want to say hi, feel
      free to contact me. You'll find my social pages and email here →
    </p>
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/alessiaborys/">
        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
      </a>
      <a href="https://github.com/alessiasHUB/">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </a>
      <a href="mailto:borys.alessia@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
      </a>
    </div>
  </div>
);

export default Footer;
