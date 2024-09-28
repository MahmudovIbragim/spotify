import { useLocation, useNavigate } from 'react-router-dom';
import { IconBgReview, IconReview, IconSearch } from '../../assets/icons';
import scss from './Input.module.scss';
import { useEffect, useRef, useState } from 'react';

const Input = ({ placeholder }: { placeholder: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isIcon, setIsIcon] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      location.pathname === '/search' ||
      location.pathname.startsWith('/search/')
    ) {
      setIsIcon(true);
    } else {
      setIsIcon(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (value.length > 0) {
      navigate(`/search/${value}`);
    } else {
      if (location.pathname.startsWith('/search/')) {
        navigate('/search');
      }
    }
  }, [value]);

  return (
    <div
      className={scss.input_container}
      onClick={() => {
        if (location.pathname.startsWith('/search/')) {
          inputRef.current?.focus();
        } else {
          inputRef.current?.focus();

          navigate('/search');
        }
      }}
    >
      <div className={scss.input_icon}>
        <IconSearch />
      </div>
      <input
        type='text'
        placeholder={placeholder}
        className={scss.input_field}
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={inputRef}
      />
      <div className={scss.button_container}>
        <button className={scss.input_button}>
          {isIcon ? <IconBgReview /> : <IconReview />}
        </button>
      </div>
    </div>
  );
};

export default Input;
