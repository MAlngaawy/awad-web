import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  const test = ['One', 'Two', 'Three', 'Four', 'Five'];

  return (
    <div className="carouselcontainer mt-20">
      <Carousel infiniteLoop showStatus={false} autoPlay>
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
              <div className="info p-4 md:p-10 place-self-center text-left">
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
  );
};

export default CarouselComponent;
