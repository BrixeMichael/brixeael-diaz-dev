import { Code2 } from 'lucide-react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section className="skills glass-panel animate-fade-in delay-300">
      <div className="section-header">
        <div className="icon-wrapper">
          <Code2 className="text-accent" size={24} />
        </div>
        <h3>Technical Skills</h3>
      </div>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h4>{skillGroup.category}</h4>
            <div className="skill-tags">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
