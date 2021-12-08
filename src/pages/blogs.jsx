import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogTitle from '../components/blog-title';
import { api } from '../App';

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api + '/blogs')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <BlogTitle
                title={blog.title}
                date={blog.published_at}
                img={blog.cover.formats.thumbnail.url}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
