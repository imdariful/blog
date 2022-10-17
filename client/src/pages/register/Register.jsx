import { Link } from 'react-router-dom';
import './register.css';
const Register = () => {
  return (
    <div className="register">
      <form action="" className="registerForm">
        <span className="registerTitle">Register</span>
        <label htmlFor="">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label htmlFor="">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
        <Link className='link' to='/login'>Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
