import { useParams } from 'react-router-dom';
import scss from './Genre.module.scss';
import { useUseGetItemBrowseCategoryQuery } from '../../../redux/api/browserCategory';
import { useColorContext } from '../../../providers/BgColorContext';

const Genre = () => {
  const params = useParams();
  const color = `#${params.color}`;
  const { contentColor, darkColor } = useColorContext();
  console.log(contentColor, darkColor);

  const category_id: string = params.id!;
  const { data: itemCategory } = useUseGetItemBrowseCategoryQuery({
    category_id: category_id,
  });

  return (
    <div className={scss.Genre}>
      <div
        style={{
          backgroundColor: `${color}`,
        }}
        className={scss.header_category}
      >
        <h2>{itemCategory?.name}</h2>
      </div>
      <div
        className={scss.bg_style}
        style={
          {
            background: `linear-gradient(180deg, ${color} -5%,  ${darkColor} 40% )`,
          }
        }
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
