import React, { useState, useEffect } from 'react';
import { api } from '../App';

const SingleBlog = () => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const blogId = window.location.href.split('/')[4];
    fetch(`${api}/blogs/${blogId}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
      })
      .catch(err => console.log(err));
  }, []);

  return <div>{blog.content}</div>;
};

export default SingleBlog;
