import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/blogs';
import About from './pages/about';
import SingleBlog from './pages/single-blog';
import { Navbar } from './components/navbar';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const api = 'https://mo-strapi-playground.herokuapp.com';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App font-cabin">
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
  const test = ['One', 'Two', 'Three', 'Four', 'Five'];
  return (
    <>
      <h1>react responsive carousel</h1>
      <div className="carouselcontainer">
        <Carousel>
          {test.map(item => (
            <div key={item} className="slide ">
              <div className="inner bg-gray bg-gray-400 grid lg:grid-flow-col w-5/6 m-auto">
                <div className="image">
                  <img
                    src="http://alveoliphotography.com/wp-content/uploads/2021/06/outdoor-portraits-4.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="info p-10 place-self-center">
                  <h3 className=" uppercase tracking-wider ">Editor's pick</h3>
                  <h2 className="text-xl font-bold leading-normal">
                    News Needs to Meet Its Audiences Where They Are
                  </h2>
                  <h2>This is a small text</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore excepturi facilis similique, nulla expedita quos
                    dolorem non officia odio neque deserunt, possimus veniam
                    maiores aliquid. Fugiat ea aspernatur doloribus natus.{' '}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export { api };
