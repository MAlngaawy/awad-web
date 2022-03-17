import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/blogs';
import About from './pages/about';
import SingleBlog from './pages/single-blog';
import { Navbar } from './components/navbar';
import Trends from './components/trends';
import CarouselComponent from './components/carousel';

const api = 'https://mo-strapi-playground.herokuapp.com';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App min-h-screen font-cabin">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="blogs/:id" element={<SingleBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Home = () => {
  return (
    <>
      <CarouselComponent />
      <div className="recent-blogs grid md:grid-flow-col w-5/6 mx-auto mt-28 md:grid-cols-3">
        <div className="recent md:col-span-2">
          <h2 className="text-2xl font-semibold border-b pb-1 w-max">
            Recent Blogs
          </h2>
        </div>
        <div className="side-trends">
          <Trends />
        </div>
      </div>
    </>
  );
};
export { api };
