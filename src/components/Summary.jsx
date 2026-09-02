import { User } from 'lucide-react';
import './Summary.css';

const Summary = ({ text }) => {
  return (
    <section className="summary glass-panel animate-fade-in delay-200">
      <div className="section-header">
        <div className="icon-wrapper">
          <User className="text-accent" size={24} />
        </div>
        <h3>Professional Summary</h3>
      </div>
      <p className="summary-text">{text}</p>
    </section>
  );
};

export default Summary;
