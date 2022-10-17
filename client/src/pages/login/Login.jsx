import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  return (
    <div className="login">
      <form action="" className="loginForm">
        <span className='loginTitle'>Login</span>
        <label htmlFor="">Email</label>
        <input className='loginInput' type="text" placeholder="Enter your email..." />
        <label htmlFor="">Password</label>
        <input className='loginInput' type="text" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
          <Link className='link' to='/signup'>Register</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
