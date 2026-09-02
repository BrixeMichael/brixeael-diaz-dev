import { resumeData } from './data';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header data={resumeData.header} />
      
      <main>
        <Summary text={resumeData.summary} />
        
        <Skills skills={resumeData.skills} />
        
        <Experience 
          projects={resumeData.projects} 
          education={resumeData.education} 
        />
        
        <Certifications certifications={resumeData.certifications} />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '2rem 0',
        color: 'var(--text-muted)',
        fontSize: '0.875rem'
      }}>
        <p>© {new Date().getFullYear()} {resumeData.header.name}. Designed & Built as a Premium Portfolio.</p>
      </footer>
    </div>
  );
}

export default App;
