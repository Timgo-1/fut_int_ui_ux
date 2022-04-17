import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Fut-Int?" text="Fut-Int is an acronym for Future-Intelligence. It is a vivid replica of Artificial Intelligence(A.I) with just an edge by being Futuristic. It entails four different approaches that have historically defined the field of A.I which includes; Thinking Humanly, Thinking Rationally, Acting Humanly and Acting Rationally." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The Possibilities are Beyond Your Imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person." />
      <Feature title="Knowledgebase" text="Thinking Humanly and Thinking Rationally concerns thought processes and reasoning, while Acting Humanly and Acting Rationally deals with behavior." />
      <Feature title="Education" text="Fut-Int can be defined literally as, algorithms enabled by constraints, exposed by representations that support models targeted at loops that tie thinking, perception and action together." />
    </div>
  </div>
);

export default WhatGPT3;
