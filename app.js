import { animals } from './animals';

import React from 'react';
import ReactDOM from 'react-dom';

function displayFact(e) {
  const name = e.target.alt;
  const animalInfo = animals[name];
  const random_no = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[random_no];
  document.getElementById('fact').innerHTML = funFact;

}

const title = "";

const background = <img src="/images/ocean.jpg" className="background" alt='ocean'/>

const showBackground = true;

const images =[];

for (const animal in animals) {
  images.push(
    <img 
      key={animal} 
      className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" onClick={displayFact}/>)
};

const animalFacts = (
  <div>
    {showBackground && background}
    <div className="animals">
      {images}
    </div>
    <h1>{title || "Click on an animal for a fun fact"}</h1>
    <p id="fact"></p>
  </div>
)

ReactDOM.render(animalFacts, document.getElementById('root'))

