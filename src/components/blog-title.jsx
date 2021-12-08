import React from 'react';

const BlogTitle = ({ title, img, date }) => {
  return (
    <div className="thumbnail">
      <img className="image" src={img} alt="img-title" />
      <h1 className="blog-title">{title}</h1>
      <p className="blog-date">{date}</p>
    </div>
  );
};

export default BlogTitle;
