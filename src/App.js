import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  fetch('https://mo-strapi-playground.herokuapp.com/blogs')
    .then(res => res.json())
    .then(data => setData(data));

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <ul>
        {data.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
