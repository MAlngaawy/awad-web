import React from 'react';

const BlogTitle = ({ title, img, date }) => {
  return (
    <div className="flex content-center align-middle flex-col">
      <div className="image">
        <img className="mb-2 max-w-xs" src={img} alt="img-title" />
      </div>
      <h1 className="blog-title mt-2 mb-2">{title}</h1>
      <p className="blog-date">{Date.parse(date)}</p>
    </div>
  );
};

export default BlogTitle;
