import React from 'react';
import style from './ChangeAvatar.module.scss';
import arrowLeft from '../../../img/arrow-left.svg';
import ColorCircle from './ColorCircle/ColorCircle';
import Emoji from './Emoji/Emoji';
const ChangeAvatar = ({
  avatarBackgroundColor,
  emojisImg,
  selectedColor,
  testSelectedColor,
  selectedEmoji,
  toggleTestSelectedColor,
  toggleTestSelectEmoji,
  testSelectEmoji,
  selectColor,
  selectEmoji,
  toggleMenuIsVisible,
}) => {
  const bgColor = testSelectedColor.length === 0 ? selectedColor : testSelectedColor;
  const emoji = testSelectEmoji.length === 0 ? selectedEmoji : testSelectEmoji;
  return (
    <div className={style.changeAvatar__wrapper}>
      <div className={style.title}>
        <img
          src={arrowLeft}
          alt="arrow left"
          onClick={() => toggleMenuIsVisible('createPortfolio')}
        />
        <div>Change Avatar</div>
      </div>
      <div className={style.body}>
        <div className={style.avatar__wrapper} style={{ backgroundColor: bgColor }}>
          <span>{emoji}</span>
        </div>
        <div className={style.changeColor__wrapper}>
          {avatarBackgroundColor.map((color, i) => (
            <ColorCircle
              key={i}
              color={color}
              selectedColor={selectedColor}
              toggleTestSelectedColor={toggleTestSelectedColor}
              selectColor={selectColor}
            />
          ))}
        </div>
        <div className={style.subTitle}>How are you feeling about this portfolio?</div>
        <div className={style.emojis__wrapper}>
          {emojisImg.map((emoji, i) => (
            <Emoji
              key={i}
              emoji={emoji}
              toggleTestSelectEmoji={toggleTestSelectEmoji}
              selectEmoji={selectEmoji}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangeAvatar;
