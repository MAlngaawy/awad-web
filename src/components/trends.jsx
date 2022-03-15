import React from 'react';

const Trends = props => {
  return (
    <div className="trends-component">
      <h1 className="text-2xl">Trends</h1>
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
  return (
    <div className="single-trend-component grid grid-flow-col">
      <div className="blog-num">
        <span className="text-2xl text-black">{number}</span>
      </div>
      <div className="content">
        <h1>{title}</h1>
        <div className="info">
          <h3 className="author">{author}</h3>
          <h3 className="date">{date}</h3>
        </div>
        <p className="reading-time">{readingTime}</p>
      </div>
    </div>
  );
};

export default Trends;
