import React from 'react';
import './index.css';
import { Link } from 'gatsby';
import Avatar from '../../components/Avatar';
import Description from '../../components/Description';
import data from '../../data/people';

function MainPage({ onButtonClick }) {
  const authorDay = Math.floor(Math.random() * data.length);
  const profile = data[authorDay];
  return (
    <div className="main-page">
      <h2 className="title-mainpage">Автор дня</h2>
      <Avatar data={profile} />
      <Description data={profile} />
      <Link
        to="/personalpage"
        className="read-more-button"
        id={authorDay}
        onClick={onButtonClick}
      >
        Узнать больше
      </Link>
      <p className="description-mainpage">
        <span>Добро пожаловать на портал,</span>
        <span>посвященный архитекторам Беларуси.</span>
      </p>
    </div>
  );
}

export default MainPage;
