import scss from './Login.module.scss';

const CLIENT_ID = '2392a84cd745498b9aea25d4abf874e0';
const REDIRECT_URL = 'http://localhost:5173/';
const RESPONSE_TYPE = 'token';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

const Login = () => {
  
  return (
    <div className={scss.Login}>
      <div className='container'>
        <div className={scss.Content}>
          <h1>Spotify Auth</h1>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
          >
            {/* <a
              href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=user-read-recently-played
`}
            >sss</a> */}
            Get Token
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
