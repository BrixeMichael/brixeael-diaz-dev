import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const Experience = ({ education, projects }) => {
  return (
    <div className="experience-container">
      {projects && projects.length > 0 && (
        <section className="experience glass-panel animate-fade-in delay-400">
          <div className="section-header">
            <div className="icon-wrapper">
              <Briefcase className="text-accent" size={24} />
            </div>
            <h3>Featured Projects</h3>
          </div>
          <div className="timeline">
            {projects.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="item-title">{item.name}</h4>
                  <div className="item-subtitle">
                    <span className="role">{item.role}</span>
                    <span className="tech text-accent">{item.tech}</span>
                  </div>
                  {item.description && <p className="item-desc">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {education && education.length > 0 && (
        <section className="experience glass-panel animate-fade-in delay-500">
          <div className="section-header">
            <div className="icon-wrapper">
              <GraduationCap className="text-accent" size={24} />
            </div>
            <h3>Education</h3>
          </div>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="item-title">{item.degree}</h4>
                  <div className="item-subtitle">
                    <span className="institution">{item.institution}</span>
                    <span className="date">{item.date}</span>
                  </div>
                  {item.details && (
                    <ul className="item-details">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Experience;
