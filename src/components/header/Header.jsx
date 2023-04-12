import React from 'react';
import './header.scss';


const Header = ({
  onTodayDateButton,
  nextWeekButton,
  prevWeekButton,
  createEvent,
}) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={createEvent}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={onTodayDateButton}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={prevWeekButton}
        >
          <i className="fas fa-chevron-left  "style={{color: '#fff', }}></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={nextWeekButton}
        >
          <i className="fas fa-chevron-right" style={{color: '#fff', }}></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
    </header>
  );
};

export default Header;
