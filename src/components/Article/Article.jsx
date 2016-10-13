import React from 'react';
import Meta from '../Meta/Meta';
import './article.css';

const Article = ({ type, title, ingress, image, posted, sourceName, sourceIcon }) => (
  <div className={`article -${type}`}>
    <div className="body">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="text">
        <h2 className="title">{title}</h2>
        <p className="ingress">{ingress}</p>
      </div>
    </div>
    <Meta sourceName={sourceName} sourceIcon={sourceIcon} posted={posted} />
  </div>
);

export default Article;
