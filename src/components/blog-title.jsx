import React from 'react';
import Moment from 'react-moment';

const BlogTitle = ({ title, img, date }) => {
  return (
    <div className="my-10 shadow p-4 overflow-auto">
      <div className="w-40 h-40 image float-left mr-4">
        <img className="w-full object-fill" src={img} alt="img-title" />
      </div>
      <div className="info">
        <h1 className="blog-title mt-2 mb-2">{title}</h1>
        <Moment format="MMMM Do YYYY">{date}</Moment>
        {/* <p className="blog-date">{date}</p> */}
      </div>
    </div>
  );
};

export default BlogTitle;
