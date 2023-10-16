import React from "react";
import "../assets/css/header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        Pradeep.<span style={{ color: "#b7f" }}>_</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <span className="count">01</span>// home
            </a>
          </li>
          <li>
            <a href="#expertise">
              <span className="count">02</span>// expertise
            </a>
          </li>
          <li>
            <a href="#work">
              <span className="count">03</span>// work
            </a>
          </li>
          <li>
            <a href="#experience">
              <span className="count">04</span>// experience
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="count">05</span>// contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
