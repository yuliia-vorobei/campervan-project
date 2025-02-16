// import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const StyledCalendar = styled.div`
  .react-calendar {
    border: 1px solid #475467;
    border-radius: 12px;
    width: 276px;
  }

  .react-calendar__tile {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    color: #101828;
    height: 32px;
    width: 36px;
  }

  .react-calendar__tile--active {
    background: #475467;
    border-radius: 32px;
    width: 36px;
    height: 32px;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #475467;
  }

  .react-calendar__tile--focus {
    background: #475467;
  }

  .react-calendar__tile--now {
    background: #475467;
    border: 1px solid #475467 !important;
  }

  .react-calendar__month-view__days {
    margin-bottom: 12px;
  }

  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid #475467;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    color: #475467;
    padding: 0;
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__month-view__days {
  }

  .react-calendar__navigation__label {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    color: #101828;
    width: 115px;
    height: 19px;
  }

  .react-calendar__navigation__arrow {
    color: #475467;
    width: 24px;
    height: 24px;
  }

  .react-calendar__navigation {
    display: flex;
    font-weight: 600;
    font-size: 16px;
    margin: 0 auto;
    color: #101828;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 252px;
    height: 24px;
    padding: 0;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .react-calendar__navigation button {
    min-width: 0;
    min-height: 19px;
  }

  .previous-date {
    // background-color: #f0f0f0;
    color: #475467;
    pointer-events: none;
  }
`;

export const CalendarModal = ({ closeModal, onDateSelect }) => {
  const handleDateChange = (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0]; // format date as yyyy-mm-dd
    onDateSelect(formattedDate);
    closeModal();
  };

  const tileClassName = ({ date: tileDate }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (tileDate < today) {
      return "previous-date";
    }
    return null;
  };

  return (
    <StyledCalendar>
      <Calendar onChange={handleDateChange} tileClassName={tileClassName} />
    </StyledCalendar>
  );
};
