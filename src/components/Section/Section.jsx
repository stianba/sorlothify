import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Article from '../Article/Article';
import './section.css';

const Section = ({ title, Icon, articles }) => (
  <div className="section">
    <h1 className="title"><Icon className="icon" color="rgba(0, 0, 0, .54)"/> {title}</h1>
    <ArticleList>
      {renderGroups(articles)}
    </ArticleList>
  </div>
);

const renderGroups = (groups) => {
  return groups.map((group, k) => {
    const classes = group.edition === 'featured' ? 'group -featured' : 'group';

    return (
      <div key={k} className={classes}>
        {renderArticles(group.articles)}
      </div>
    );
  });
};

const renderArticles = (articles) => {
  return articles.map((article, k) => {
    let types = article.size;

    if (article.edition === 'featured') {
      types += ' -featured';
    }

    return (
      <Article
        key={k}
        type={types}
        title={article.title}
        ingress={article.ingress}
        image={article.image}
        posted={article.posted}
        sourceName={article.source.name}
        sourceIcon={article.source.icon}
      />
    );
  });
};

export default Section;
