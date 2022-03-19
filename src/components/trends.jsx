import React from 'react';

const Trends = props => {
  const test = ['One', 'Two', 'Three', 'Four', 'Five'];
  return (
    <div className="trends-component">
      <h2 className="text-2xl font-semibold border-b pb-1 w-max">Trends</h2>
      <div className="single-trend-component grid ">
        {test.map((item, index) => (
          <SingleTrendComponent
            number="01"
            title={'Test Title For The Blog Here'}
            author={'Test Author'}
            date={'12/12/12'}
            readingTime={'5 min read'}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const SingleTrendComponent = ({
  number,
  title,
  author,
  date,
  readingTime,
  item,
  index
}) => {
  return (
    <div key={index} className="main grid grid-flow-col my-4 gap-4">
      <div className="blog-num col-span-1 flex justify-end items-top">
        <span className="text-xl md:text-2xl font-bold text-black opacity-40">
          {`0${index + 1}`}
        </span>
      </div>
      <div className="content col-start-2 col-end-4" key={item}>
        <h1 className="text-l lg:text-xl font-semibold mb-1">{title}</h1>
        <div className="info grid grid-flow-col text-sm md:text-l text-black opacity-60 font-semibold">
          <h3 className="author">{author}</h3>
          <h3 className="date">{date}</h3>
        </div>
        <p className="reading-time text-sm md:text-l text-black opacity-70">
          {readingTime}
        </p>
      </div>
    </div>
  );
};

export default Trends;
