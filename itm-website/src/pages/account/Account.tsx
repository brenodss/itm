import './style.css'
import { Formik, Form, Field } from 'formik';
import user from '../../assets/user.svg'
import wave from '../../assets/wave.svg'

function Account() {

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Campo obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Formato de email inválido';
    }
    return error;
  }

  const validatePassword = (value: string) => {
    let error;
    if (!value) {
      error = 'Campo obrigatório';
    } else if (!/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)) {
      error = 'A senha deve conter pelo menos 8 caracteres, um caractere especial, uma letra maiúscula e uma letra minúscula';
    }
    return error;
  }

  return (
    <div className='account-wrapper'>
      <div className='account-card'>
        <div className='title-wrapper'>
          <h1 className='login-title'>LOGIN</h1>
          <div>
          <p className='client-p'>sou cliente</p>
        <img className='user-svg' src={user}></img>

          </div>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <div className='input-wrapper'>
                <Field type='email' name='email' placeholder='Email' />
                {errors.email && touched.email && (
                  <div className='error-message'>{errors.email}</div>
                )}
              </div>
              <div className='input-wrapper'>
                <Field type='password' name='password' placeholder='Senha' />
                {errors.password && touched.password && (
                  <div className='error-message'>{errors.password}</div>
                )}
              </div>
              <button className='sign-in' type='submit'>Entrar</button>
              <button className='sign-up' type='submit'>Crie sua conta</button>
            </Form>
          )}
        </Formik>
      </div>
      <img className='wave-background' src={wave}></img>
    </div>
  )
}

export default Account
