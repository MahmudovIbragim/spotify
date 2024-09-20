import { IconReview, IconSearch } from '../../assets/icons';
import scss from './Input.module.scss';

const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className={scss.input_container}>
      <div className={scss.input_icon}>
        <IconSearch />
      </div>
      <input
        type='text'
        placeholder={placeholder}
        className={scss.input_field}
      />
      <div className={scss.button_container}>
        <button className={scss.input_button}>
          <IconReview />
        </button>
      </div>
    </div>
  );
};

export default Input;
