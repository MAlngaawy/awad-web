import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/blogs';
import About from './pages/about';
import SingleBlog from './pages/single-blog';

const api = 'https://mo-strapi-playground.herokuapp.com';

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
        <Route path="blogs/:id" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
}

export default App;

const Home = () => <h1 className="">HomePage</h1>;
export { api };
