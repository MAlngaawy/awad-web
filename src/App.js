import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/blog';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">
            <h1>Awad Blog</h1>
          </div>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

const Home = () => <h1>HomePage</h1>;
