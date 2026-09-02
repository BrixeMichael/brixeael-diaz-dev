import { Award } from 'lucide-react';
import './Certifications.css';

const Certifications = ({ certifications }) => {
  return (
    <section className="certifications glass-panel animate-fade-in delay-500">
      <div className="section-header">
        <div className="icon-wrapper">
          <Award className="text-accent" size={24} />
        </div>
        <h3>Certifications & Training</h3>
      </div>
      <ul className="cert-list">
        {certifications.map((cert, index) => (
          <li key={index} className="cert-item">
            <div className="cert-icon">
              <div className="inner-dot"></div>
            </div>
            <span className="cert-text">{cert}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
