import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mo-strapi-playground.herokuapp.com/blogs')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
