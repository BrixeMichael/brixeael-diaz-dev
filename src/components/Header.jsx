import { Mail, MapPin, Phone } from 'lucide-react';
import './Header.css';

const Header = ({ data }) => {
  return (
    <header className="header glass-panel animate-fade-in delay-100">
      <div className="header-content">
        <div className="title-section">
          <h1 className="name text-gradient">{data.name}</h1>
          <h2 className="title">{data.title}</h2>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <MapPin className="icon text-accent" size={18} />
            <span>{data.location}</span>
          </div>
          <div className="contact-item">
            <Phone className="icon text-accent" size={18} />
            <span>{data.phone}</span>
          </div>
          <div className="contact-item">
            <Mail className="icon text-accent" size={18} />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
