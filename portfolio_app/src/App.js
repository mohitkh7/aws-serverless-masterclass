import './App.css';
import Skills from './Skills';
import Profile from './Profile';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <div className="container">
      <Profile />
      <div className="row">
        <aside className="col-md-4">
          <Skills />
          <Experience />
        </aside>
        <div className="col-md-8">
          <Projects />
        </div>
      </div>

      <footer className="mt-4">
        <p>Developed by <b>mohitkh7</b></p>
      </footer>
    </div>
  );
}

export default App;
