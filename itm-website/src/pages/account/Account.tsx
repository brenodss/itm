import './style.css'
import { Formik, Form, Field } from 'formik';
import user from '../../assets/user.svg'
import wave from '../../assets/wave.svg'
import { Input } from '@mui/material';


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
          <h1 className='login-title text-4xl mt-5'>LOGIN</h1>
          <p className='client-p'>sou cliente</p>
          <img className='user-svg' src={user}></img>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched }) => (
            <Form className='w-full'>
              <div>
                <Field 
                className='ml-[28px] bg-transparent border-b-[1px] border-b-zinc-200 w-[80%] text-[14px] p-6 mb-6 text-slate-50 font-[Roboto]'
                type='email'
                spellCheck={false}
                name='email' 
                placeholder='EMAIL' />
                {errors.email && touched.email && (
                  <div className='error-message'>{errors.email}</div>
                )}
              </div>
              <div className='w-full'>
                <Field 
                className='ml-[28px] bg-transparent border-b-[1px] border-b-zinc-200 w-[80%] text-2xl p-6 text-slate-50'
                type='password' 
                name='password' 
                placeholder='SENHA' />
                {errors.password && touched.password && (
                  <div className='error-message'>{errors.password}</div>
                )}
              </div>
              <button className='sign-in text-2xl ml-[10px]' type='submit'>Entrar</button>
              <button className='sign-up ml-[10px]' type='submit'>Crie sua conta</button>
            </Form>
          )}
        </Formik>
      </div>
      <img className='wave-background' src={wave}></img>
    </div>
  )
}

export default Account
