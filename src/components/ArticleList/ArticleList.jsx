import React from 'react';
import './article-list.css';

const ArticleList = ({ children }) => (
  <div className="article-list">
    {children}
  </div>
);

export default ArticleList;
