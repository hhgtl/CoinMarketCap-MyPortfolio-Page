import React from 'react';
import style from './ColorCircle.module.scss';
const ColorCircle = ({ color, selectedColor, toggleTestSelectedColor, selectColor }) => {
  const selectedStyle =
    selectedColor === color
      ? `${style.colorCircle__wrapper} ${style.active}`
      : `${style.colorCircle__wrapper}`;
  return (
    <div className={selectedStyle}>
      <div
        className={style.colorCircle}
        style={{ backgroundColor: color }}
        onMouseEnter={() => toggleTestSelectedColor(color)}
        onMouseLeave={() => toggleTestSelectedColor(color)}
        onClick={() => selectColor(color)}
      ></div>
    </div>
  );
};

export default ColorCircle;
