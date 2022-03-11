import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/blogs';
import About from './pages/about';
import SingleBlog from './pages/single-blog';
import { Navbar } from './components/navbar';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
// import required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

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
    <Swiper
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={1}
    >
      {/* 
      
        // Test Here

         grid grid-flow-col justify-evenly
      
      */}
      {test.map(item => (
        <SwiperSlide key={item} className="p-10">
          <div className="slide bg-gray bg-gray-400 mx-10 grid grid-flow-col">
            <div className="image">
              <img src="https://picsum.photos/id/10/200/300" alt="" />
            </div>
            <div className="info p-10  place-self-center">
              <h3 className=" uppercase tracking-wider ">Editor's pick</h3>
              <h2 className="text-xl font-bold leading-normal">
                News Needs to Meet Its Audiences Where They Are
              </h2>
              <h2>This is a small text</h2>
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore excepturi facilis similique, nulla expedita quos
                dolorem non officia odio neque deserunt, possimus veniam maiores
                aliquid. Fugiat ea aspernatur doloribus natus.{' '}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export { api };
