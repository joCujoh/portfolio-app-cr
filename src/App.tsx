import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
            </>
          } />
          <Route path="*" element={
            <>
              <Hero />
              <Projects />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
