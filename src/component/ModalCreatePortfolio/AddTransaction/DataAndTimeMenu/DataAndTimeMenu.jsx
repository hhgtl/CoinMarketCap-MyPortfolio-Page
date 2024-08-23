import React, { useRef } from 'react';
import style from './DataAndTimeMenu.module.scss';
import arrowLeft from '../../../../img/arrow-left-type2.png';
import arrowDown from '../../../../img/arrowDown.png';

const DataAndTimeMenu = ({
  calendarRef,
  date,
  time,
  timeNow,
  changeData,
  changeTime,
  openSelectTimeMenu,
  toggleSelectTimeMenu,
  setDataAndTime,
  toggleAddTransferMenu,
  toggleMenuIsVisible,
}) => {
  const s = openSelectTimeMenu
    ? `${style.selectTimeMenu} + ${style.active}`
    : `${style.selectTimeMenu}`;
  const changeDataBtn = openSelectTimeMenu
    ? `${style.changeDataBtn}`
    : `${style.changeDataBtn} + ${style.active}`;

  const timeArray = [
    '00:00',
    '00:15',
    '00:30',
    '00:45',
    '01:00',
    '01:15',
    '01:30',
    '01:45',
    '02:00',
    '02:15',
    '02:30',
    '02:45',
    '03:00',
    '03:15',
    '03:30',
    '03:45',
    '04:00',
    '04:15',
    '04:30',
    '04:45',
    '05:00',
    '05:15',
    '05:30',
    '05:45',
    '06:00',
    '06:15',
    '06:30',
    '06:45',
    '07:00',
    '07:15',
    '07:30',
    '07:45',
    '08:00',
    '08:15',
    '08:30',
    '08:45',
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15',
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:30',
    '19:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
    '21:00',
    '21:15',
    '21:30',
    '21:45',
    '22:00',
    '22:15',
    '22:30',
    '22:45',
    '23:00',
    '23:15',
    '23:30',
    '23:45',
  ];

  const timeRef = useRef(null);
  const selectedTimeBtn = () => {
    toggleSelectTimeMenu(true);
    if (timeRef.current) {
      timeRef.current.scrollIntoView({ block: 'center' });
    } else {
    }
  };
  const closeSelectTimeMenu = () => {
    if (openSelectTimeMenu) {
      toggleSelectTimeMenu(false);
    }
  };
  const changeDataAndTimeBtn = () => {
    setDataAndTime(date, time);
    toggleMenuIsVisible('addTransaction');
  };
  return (
    <div className={style.dataAndTimeMenu__wrapper} onClick={closeSelectTimeMenu}>
      <div className={style.header}>
        <button onClick={() => toggleMenuIsVisible('addTransaction')}>
          <img src={arrowLeft} alt="arrow left" />
        </button>
        <div className={style.header__title}>Date & Time</div>
      </div>
      <div className={style.line__row}></div>
      <div ref={calendarRef}></div>
      <div className={style.selectTime__wrapper}>
        <div className={style.time__text}>Time</div>
        <button className={style.selectedTime} onClick={selectedTimeBtn}>
          {time.length === 0 ? timeNow : time}
        </button>
      </div>

      <div className={style.selectTimeMenu__wrapper}>
        <div className={style.selectTimeMenu__container}>
          <div className={s}>
            <div>Time</div>
            <ul>
              {timeArray.map((t, i) => (
                <li
                  className={t > timeNow ? style.deactivate : null}
                  style={
                    t === time
                      ? { backgroundColor: '#3861fb', fontWeight: '700', color: '#fff' }
                      : null
                  }
                  key={i}
                  onClick={(e) => changeTime(e.target.innerText)}
                  ref={t === time ? timeRef : null}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {openSelectTimeMenu && <img src={arrowDown} alt="arrow down" />}
        </div>
      </div>
      <button className={changeDataBtn} onClick={changeDataAndTimeBtn}>
        Change Data & Time
      </button>
    </div>
  );
};

export default DataAndTimeMenu;
