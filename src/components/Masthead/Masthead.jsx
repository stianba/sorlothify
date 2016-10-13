import React from 'react';
import ExpandableList from '../ExpandableList/ExpandableList';
import logo from '../../svg/logo.svg';
import './masthead.css';

const listItems = ["Sport", "NSB", "Innenriks", "Politikk"];

const Masthead = () => (
  <header className="header">
    <div className="content">
      <div className="logo"><img src={logo} alt="Sørlothify" /></div>
      <ExpandableList items={listItems} />
    </div>
  </header>
);

export default Masthead;
