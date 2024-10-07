import { IconDots } from '../../../assets/icons';
import { useGetCurrentUserProfileQuery } from '../../../redux/api/user';
import scss from './Profile.module.scss';
const Profile = () => {
  const { data } = useGetCurrentUserProfileQuery();

  return (
    <div className={scss.Profile}>
      <div
        className={scss.user_info}
        style={{
          background:
            'linear-gradient(180deg, rgba(0,47,163,1) -4%, rgba(18,18,18,1) 100%)',
        }}
      >
        <div className={scss.user_avatar}>
          <img src={data?.images[1].url} alt='' />
        </div>
        <div className={scss.user_title}>
          <p>Профиль</p>
          <h1>{data?.display_name}</h1>
          <p>{data?.followers.total}</p>
        </div>
      </div>
      <div
        className={scss.interval_bg}
        style={{
          background:
            'linear-gradient(180deg, #14171a -4%, rgba(18,18,18,1) 100%)',
        }}
      >
        <span>
          <IconDots />
        </span>
      </div>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.container_top_music}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
