import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 100, color: "#ef4444" },
  { name: "CSS / Tailwind", level: 95, color: "#06b6d4" },
 
  { name: "JavaScript", level: 90, color: "#f59e0b" },
  { name: "React.js", level: 90, color: "#22d3ee" },
 
];

export default function SkillsSection() {
  return (
    <>
    <h2>Skills</h2>

    <section className="skills-section">

      <div className="skills-container">

        <div className="skills-grid">
          {skills.map((item, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-circle">
                <CircularProgressbar
                  value={item.level}
                  
                  text={`${item.level}%`}
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor: item.color,
                    trailColor: "#e5e7eb",
                    textColor: "#111827",
                    textSize: "24px",
                  })}
                />
              </div>
              <p className="skill-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
