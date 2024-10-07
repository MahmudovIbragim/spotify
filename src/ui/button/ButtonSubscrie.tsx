import { FC } from 'react';
import scss from './Buttons.module.scss';

interface TypeProps {
  hadnleClickFunction: () => void;
}

const ButtonSubscrie: FC<TypeProps> = ({ hadnleClickFunction }) => {
  return (
    <>
      <button onClick={hadnleClickFunction} className={scss.subscribe_btn}>
        следовать
      </button>
    </>
  );
};

export default ButtonSubscrie;
