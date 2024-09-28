import { useParams } from 'react-router-dom';
import scss from './Genre.module.scss';
import { useUseGetItemBrowseCategoryQuery } from '../../../redux/api/browserCategory';
import { useEffect, useState } from 'react';

const Genre = () => {
  const params = useParams();
  console.log(params);
  const color = `#${params.color}`;
  const [darkColor, setDarkColor] = useState('');
  const [contentColor, setContentColor] = useState('');

  const category_id: string = params.id!;
  const { data: itemCategory } = useUseGetItemBrowseCategoryQuery({
    category_id: category_id,
  });
  

  useEffect(() => {
    const hex = color;
    const percent = 0.7;
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.max(0, Math.min(255, r * (1 - percent)));
    g = Math.max(0, Math.min(255, g * (1 - percent)));
    b = Math.max(0, Math.min(255, b * (1 - percent)));

    const newDarkColor = `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
    setDarkColor(newDarkColor);
  }, [color]);

  useEffect(() => {
    const hex = darkColor;
    const percent = 0.2;
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.max(0, Math.min(255, r * (1 - percent)));
    g = Math.max(0, Math.min(255, g * (1 - percent)));
    b = Math.max(0, Math.min(255, b * (1 - percent)));

    const newContentColor = `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
    setContentColor(newContentColor);
  }, [darkColor]);

  return (
    <div className={scss.Genre}>
      <div
        style={{
          background: `linear-gradient(180deg, ${color} 0%,  ${darkColor} 70% )`,
        }}
        className={scss.header_category}
      >
        <h2>{itemCategory?.name}</h2>
      </div>
      <div
        className={scss.bg_style}
        style={{
          background: `linear-gradient(180deg, ${contentColor} 00%,  #121212 65% )`,
        }}
      >
        <div className='container'>
          <div className={scss.Content}>
            <div className={scss.content_category}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
