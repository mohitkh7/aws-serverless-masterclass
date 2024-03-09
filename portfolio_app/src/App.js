import './App.css';
import Skills from './Skills';
import Social from './social';
import Profile from './Profile';
import Experience from './Experience';
import Projects from './Projects';
import StaticTestimonials from './StaticTestimonials';

function App() {
  return (
    <div className="container">
      <Profile />
      <div className="row">
        <aside className="col-md-4">
          <Social />
          <Skills />
          <Experience />
        </aside>
        <div className="col-md-8">
          <Projects />
          <StaticTestimonials />
        </div>
      </div>

      <footer className="mt-4">
        <p>Developed by <b>mohitkh7</b></p>
      </footer>
    </div>
  );
}

export default App;
