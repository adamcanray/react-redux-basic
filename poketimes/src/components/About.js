import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus qui possimus modi laudantium reprehenderit illo ea dolorum, libero dignissimos unde voluptatibus? Aliquam voluptate odio ratione dolore nam porro tenetur consectetur!</p>
    </div>
  )
}

export default Rainbow(About);