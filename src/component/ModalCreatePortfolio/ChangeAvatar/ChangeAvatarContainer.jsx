import React from 'react';
import ChangeAvatar from './ChangeAvatar';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectColor,
  selectEmoji,
  toggleTestSelectEmoji,
  toggleTestSelectedColor,
} from '../../../redux/modalSlice';

const ChangeAvatarContainer = ({ toggleMenuIsVisible }) => {
  const {
    avatarBackgroundColor,
    emojisImg,
    selectedColor,
    testSelectedColor,
    selectedEmoji,
    testSelectEmoji,
  } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <ChangeAvatar
      avatarBackgroundColor={avatarBackgroundColor}
      emojisImg={emojisImg}
      selectedColor={selectedColor}
      testSelectedColor={testSelectedColor}
      selectedEmoji={selectedEmoji}
      toggleTestSelectedColor={(color) => dispatch(toggleTestSelectedColor({ color }))}
      toggleTestSelectEmoji={(emoji) => dispatch(toggleTestSelectEmoji({ emoji }))}
      testSelectEmoji={testSelectEmoji}
      selectColor={(color) => dispatch(selectColor({ color }))}
      selectEmoji={(emoji) => dispatch(selectEmoji({ emoji }))}
      toggleMenuIsVisible={toggleMenuIsVisible}
    />
  );
};

export default ChangeAvatarContainer;
