import React from 'react';

const RecentBlog = () => {
  return (
    <div className="recent md:col-span-2">
      <h2 className="text-2xl font-semibold border-b pb-1 w-max">
        Recent Blogs
      </h2>
      <div className="recent-blog-list">
        <SingleBlog
          readingTime="5 min"
          author="Test Author"
          date="12/12/12"
          title="This is a Test Title for the recent blog section items"
          image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      <div className="recent-blog-list">
        <SingleBlog
          readingTime="5 min"
          author="Test Author"
          date="12/12/12"
          title="This is a Test Title for the recent blog section items"
          image="https://images.unsplash.com/photo-1647686909367-e2f58c82ff95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
        />
      </div>
      <div className="recent-blog-list">
        <SingleBlog
          readingTime="5 min"
          author="Test Author"
          date="12/12/12"
          title="This is a Test Title for the recent blog section items"
          image="https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
  );
};

export default RecentBlog;

const SingleBlog = ({ readingTime, author, date, image, title }) => {
  return (
    <div className="main grid md:grid-flow-col md:grid-cols-2 my-4 gap-4 bg-gray">
      <img className="w-full h-full max-h-60 object-cover" src={image} />
      <div className="content-info p-5 md:p-0">
        <h1 className="title md:mt-5 font-bold text-xl">
          <a href="#"> {title} </a>
        </h1>
        <div className="my-4 info grid grid-flow-col text-sm md:text-l text-black opacity-60 font-semibold">
          <h3 className="author">{author}</h3>
          <h3 className="date">{date}</h3>
        </div>
        <p className="reading-time text-sm md:text-l text-black opacity-70">
          {readingTime} reading
        </p>
      </div>
    </div>
  );
};
