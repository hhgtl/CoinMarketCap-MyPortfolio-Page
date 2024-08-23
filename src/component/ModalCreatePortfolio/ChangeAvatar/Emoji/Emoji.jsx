import React from 'react';
import style from './Emoji.module.scss';
const Emojis = ({ emoji, toggleTestSelectEmoji, selectEmoji }) => {
  return (
    <div
      className={style.emojis__item}
      onMouseEnter={() => toggleTestSelectEmoji(emoji)}
      onMouseLeave={() => toggleTestSelectEmoji(emoji)}
      onClick={() => selectEmoji(emoji)}
    >
      {emoji}
    </div>
  );
};

export default Emojis;
