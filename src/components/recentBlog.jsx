import React from 'react';

const RecentBlog = () => {
  return (
    <div className="recent md:col-span-2">
      <h2 className="text-2xl font-semibold border-b pb-1 w-max">
        Recent Blogs
      </h2>
      <div className="recent-blog-list">
        <SingleBlog readingTime="5 min" author="Test Author" date="12/12/12" />
      </div>
    </div>
  );
};

export default RecentBlog;

const SingleBlog = ({ readingTime, author, date }) => {
  return (
    <div className="main grid grid-flow-col my-4 gap-4 bg-gray">
      <div className="blog-img">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div className="content-info">
        <h1 className="title">
          <a href="#">Test Title</a>
        </h1>
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
