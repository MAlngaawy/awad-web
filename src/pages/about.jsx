import React, { useState, useEffect } from 'react';
import { api } from '../App';

const About = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch(`${api}/about`)
      .then(res => res.json())
      .then(data => setData(data))
      .then(console.log(data));
  }, []);

  return <div>{data.small_text}</div>;
};

export default About;
