import React, { useState, useEffect } from 'react';
import { api } from '../App';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const testMarkdown = `hello **world**`;

  useEffect(() => {
    const blogId = window.location.href.split('/')[4];
    fetch(`${api}/blogs/${blogId}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
      })
      .catch(err => console.log(err));
  }, []);

  return <ReactMarkdown children={blog.content} rehypePlugins={[remarkGfm]} />;
};

export default SingleBlog;
