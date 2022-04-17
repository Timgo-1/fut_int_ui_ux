import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Theory of Mind',
    text: 'The concept is based on the psychological premise of understanding that other living things have thoughts and emotions that affect the behavior of one’s self.',
  },
  {
    title: 'Reactive Machines',
    text: 'A reactive machine follows the most basic of AI principles and, as its name implies, is capable of only using its intelligence to perceive and react to the world in front of it.',
  },
  {
    title: 'Self-Awareness',
    text: 'This kind of artificial intelligence possesses human-level consciousness and understands its own existence in the world, as well as the presence and emotional state of others.',
  },
  {
    title: 'Limited Memory',
    text: 'Limited memory artificial intelligence has the ability to store previous data and predictions when gathering information and weighing potential decisions — essentially looking into the past for clues on what may come next.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step Into The Future Today & Make It Happen.</h1>
      <p>Request Early Access to Get Started.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
