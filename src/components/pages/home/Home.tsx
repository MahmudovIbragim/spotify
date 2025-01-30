import { useGetReccomendationsQuery } from '../../../redux/api/getRecomen';
import scss from './Home.module.scss';

const Home = () => {
  const { data, isSuccess } = useGetReccomendationsQuery({
    limit: 20,
    offset: 10,
  });
  console.log(data);

  if (!isSuccess) {
    return (
      <>
        <div className={scss.Section}>
          <div className='container'>
            <div className={scss.title}>
              <h2>Error Token, click profle</h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className={scss.Section}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.title}>
            <h2>Recomendation</h2>
          </div>
          <div className={scss.section_container}>
            {data.albums.items.map(item => (
              <>
                <div className={scss.card}>
                  <div
                    className={scss.bg_content}
                    style={{
                      backgroundImage: `url(${item.images[0].url})`,
                    }}
                  >
                    {/* <div className={scss.playIcon}>
                      <button>
                        <IconPlay />
                      </button>
                    </div> */}
                  </div>
                  <div className={scss.music}>
                    <p className={scss.name}>{item.name}</p>
                    <p className={scss.executor}>{item.name}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
