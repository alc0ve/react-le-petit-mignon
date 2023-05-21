import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-sky-500 via-cyan-400 to-neutral-300 flex space-x-8 text-white">
      <footer className="flex justify-between">
        <div className="order-last">

          <ul>
            <a href="mailto:cmcclai26@gmail.com" title="Email"
              target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="m-3" size={42} />
            </a>

            <a href="https://github.com/alc0ve" title="GitHub Profile"
              target="_blank" rel="noopener noreferrer">
              <FaGithub className="m-3" size={42} />
            </a>

            <a href="https://www.linkedin.com/in/christina-h-05361b25b/" title="LinkedIn Profile"
              target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="m-3" size={42} />
            </a>

            <a href="https://leetcode.com/cmcclai26/" title="LeetCode Profile"
              target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="m-3" size={42} />
            </a>

          </ul>
        </div>
      </footer>
    </div >
  );
}