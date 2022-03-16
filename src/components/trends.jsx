import React from 'react';

const Trends = props => {
  return (
    <div className="trends-component">
      <h2 className="text-2xl font-semibold border-b pb-1 w-max">Trends</h2>
      <SingleTrendComponent
        number="01"
        title={'Test Title For The Blog Here'}
        author={'Test Author'}
        date={'12/12/12'}
        readingTime={'5 min read'}
      />
    </div>
  );
};

const SingleTrendComponent = ({ number, title, author, date, readingTime }) => {
  const test = ['One', 'Two', 'Three', 'Four', 'Five'];
  return (
    <div className="single-trend-component grid ">
      {test.map((item, index) => (
        <div className="main grid grid-flow-col my-4 gap-4">
          <div className="blog-num col-span-1 flex justify-center items-center">
            <span className="text-5xl font-bold text-black opacity-50">
              {`0${index + 1}`}
            </span>
          </div>
          <div className="content" key={item}>
            <h1 className="text-xl lg:text-2xl font-semibold my-1">{title}</h1>
            <div className="info grid grid-flow-col text-2xl text-black opacity-60 font-semibold">
              <h3 className="author">{author}</h3>
              <h3 className="date">{date}</h3>
            </div>
            <p className="reading-time text-black opacity-70">{readingTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trends;
