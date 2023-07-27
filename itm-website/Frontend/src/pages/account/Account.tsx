import './style.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import user from '../../assets/user.svg';
import wave from '../../assets/wave.svg';
import Login from './Login';
import Register from './Register';

function Account() {

  return (
    <div className='account-wrapper'>
      <Login />
      <Register />
      <img className='wave-background' src={wave} alt='Wave' />
    </div>
  );
}

export default Account
