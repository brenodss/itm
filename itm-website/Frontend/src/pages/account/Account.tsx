import './style.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import user from '../../assets/user.svg';
import wave from '../../assets/wave.svg';
import Login from './Login';
import Register from './Register';
import RegisterCheckout from './RegisterCheckout';

function Account() {

  return (
    <div className='account-wrapper'>
      <Login />
      <img className='wave-background' src={wave} alt='Wave' />
    </div>
  );
}

export default Account
