import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Mar 26, 2022" text="Manufacturers are leveraging 3D AI technologies along with Virtual Reality headsets for design/build." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Apr 12, 2022" text="MIT’s FutureMakers programs help kids get their minds around — and hands on — AI." />
        <Article imgUrl={blog03} date="Apr 08, 2022" text="Vanderbilt researchers using artificial intelligence to help basketball players improve their shots." />
        <Article imgUrl={blog04} date="Apr 05, 2022" text="AI Fuses With Quantum Computing in Promising New Memristor." />
        <Article imgUrl={blog05} date="Apr 02, 2022" text="Study finds artificial intelligence may improve diabetes diagnosis." />
      </div>
    </div>
  </div>
);

export default Blog;
