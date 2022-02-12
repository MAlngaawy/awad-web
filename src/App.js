import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/blogs';
import About from './pages/about';
import SingleBlog from './pages/single-blog';
import { Navbar } from './components/navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const api = 'https://mo-strapi-playground.herokuapp.com';

function App() {
  return (
    <div className="App font-roboto">
      <Router>
        {/* <div className="App">
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
      </div> */}
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Slider {...settings}>
      <div className="">
        <h3 className=" p-8 text-center text-4xl bg-black m-4 text-white">1</h3>
      </div>
      <div className="">
        <h3 className=" p-8 text-center text-4xl bg-black m-4 text-white">1</h3>
      </div>{' '}
      <div className="">
        <h3 className=" p-8 text-center text-4xl bg-black m-4 text-white">1</h3>
      </div>
      <div className="">
        <h3 className=" p-8 text-center text-4xl bg-black m-4 text-white">1</h3>
      </div>{' '}
    </Slider>
  );
};
export { api };
