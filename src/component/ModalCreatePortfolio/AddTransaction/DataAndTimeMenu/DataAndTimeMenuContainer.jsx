import React, { useEffect, useRef } from 'react';
import DataAndTimeMenu from './DataAndTimeMenu';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './Calendar.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeData,
  changeTime,
  changeTimeNow,
  toggleSelectTimeMenu,
} from '../../../../redux/dateAndTimeModalSlice';
import { setDataAndTime, toggleAddTransferMenu } from '../../../../redux/modalAddTransactionSlice';
import { toggleMenuIsVisible } from '../../../../redux/modalSlice';

const DataAndTimeMenuContainer = () => {
  const { date, time, timeNow, openSelectTimeMenu } = useSelector((state) => state.dateAndTime);
  const dispatch = useDispatch();
  const calendarRef = useRef(null);
  useEffect(() => {
    const todayDate = new Date(); // Аби за замочуванням була вибрана сьогоднішня дата
    let day = todayDate.getDate();
    if (String(day).length === 1) {
      day = `0${day}`;
    }
    let mounth = todayDate.getMonth() + 1;
    if (String(mounth).length === 1) {
      mounth = `0${mounth}`;
    }
    const year = todayDate.getFullYear();
    const today = `${mounth}/${day}/${year}`;
    if (date === '') {
      dispatch(changeData({ date: today }));
    }
    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    if (String(hours).length === 1) {
      hours = `0${hours}`;
    }
    if (String(minutes).length === 1) {
      minutes = `0${minutes}`;
    }
    const time = `${hours}:${minutes}`;

    if (timeNow === '') {
      dispatch(changeTimeNow({ time: time }));
      dispatch(changeTime({ time: time }));
    }
    const calendar = new AirDatepicker(calendarRef.current, {
      selectedDates: date,
      locale: {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        monthsShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: 'hh:mm aa',
        firstDay: 0,
      },
      maxDate: today,
      onSelect(date) {
        dispatch(changeData({ date: date.formattedDate }));
      },
    });
    return () => {
      calendar.destroy();
    };
  });
  return (
    <DataAndTimeMenu
      calendarRef={calendarRef}
      date={date}
      time={time}
      timeNow={timeNow}
      changeTime={(time) => dispatch(changeTime({ time: time }))}
      openSelectTimeMenu={openSelectTimeMenu}
      toggleSelectTimeMenu={(boolean) => dispatch(toggleSelectTimeMenu({ boolean: boolean }))}
      setDataAndTime={(date, time) => dispatch(setDataAndTime({ date: date, time: time }))}
      toggleAddTransferMenu={(type) => dispatch(toggleAddTransferMenu({ type: type }))}
      toggleMenuIsVisible={(modalType) => dispatch(toggleMenuIsVisible({ modalType }))}
    />
  );
};

export default DataAndTimeMenuContainer;
