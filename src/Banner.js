import React from 'react';
import './Banner.css';

function Banner() {
  return (
  	<div className="container">
		<h1 className="title" > Life in Pastel </h1>
		<h2 className="sub-title" > Lisbon, Portugal </h2>
		<img src={ require('./cityview.jpg') } />

		<h2 className="title underlined"> Day 1 </h2>
		<h3 className="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Quisque eget eros sed tellus convallis pharetra. Ut interdum faucibus ullamcorper. 
		Ut porta, quam iaculis mollis fringilla, ex ipsum congue sapien, eu luctus massa sem et augue. 
		Maecenas malesuada tortor nulla, posuere ultricies sem cursus in. 
		Pellentesque laoreet sapien ut sem sodales facilisis. 
		Proin tincidunt massa sit amet nisi maximus, et pulvinar nisi imperdiet. 
		Ut sem libero, sodales eget mauris id, viverra dapibus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Vivamus quis mi pretium, ornare tortor vel, dignissim magna. </h3>
		

    </div>
  );
}

export default Banner;