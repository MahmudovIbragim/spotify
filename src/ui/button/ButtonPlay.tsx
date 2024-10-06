import { FC } from 'react';
import { IconPlay } from '../../assets/icons';
import scss from './Buttons.module.scss';
interface TypeProps {
  iconColor: string;
  buttonHeight: string;
  handleClickFunction: () => void;
}

const ButtonPlay: FC<TypeProps> = ({
  iconColor,
  buttonHeight,
  handleClickFunction,
}) => {
  return (
    <button
      onClick={handleClickFunction}
      className={scss.button_play}
      style={{ color: `${iconColor}`, height: buttonHeight }}
    >
      <IconPlay />
    </button>
  );
};

export default ButtonPlay;
