import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import moment from 'moment';


const App = () => {
  const [weekStartDate, setWeekStart] = useState(new Date());
  // const [currentMonth, setCurrentMonth] = useState(getMonth())
  const [createEvent, setCreateEvent] = useState(false);

  const handleCreateEvent = () => {
    setCreateEvent(!createEvent);
  };

  const handleTodayDate = () => {
    setWeekStart(new Date());
  };

  const handleNextWeek = () => {
    setWeekStart(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const handlePrevWeek = () => {
    setWeekStart(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        onTodayDateButton={handleTodayDate}
        nextWeekButton={handleNextWeek}
        prevWeekButton={handlePrevWeek}
        createEvent={handleCreateEvent}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
