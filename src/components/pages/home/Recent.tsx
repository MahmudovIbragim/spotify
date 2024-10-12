import scss from './Recent.module.scss';
const Recent = () => {


  return (
    <section className={scss.Recent}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.title}>
            <h2>title</h2>
          </div>
          <div className={scss.section_container}>
            <div className={scss.card}>
              <div className={scss.bg_content}>
                <p>{}</p>
              </div>
              <div className={scss.music}>
                <p className={scss.name}>{}</p>
                <p className={scss.executor}>{}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recent;
