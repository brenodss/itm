import './style.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import user from '../../assets/user.svg';
import wave from '../../assets/wave.svg';
import ILogin from './ILogin';

function Account() {

  const handleSubmit = (values: ILogin, { setSubmitting }: FormikHelpers<ILogin>) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='account-wrapper'>
      <div className='account-card'>
        <div className='title-wrapper ml-[4rem]'>
          <div className='flex flex-row items-center'>
            <div>
              <h1 className='login-title text-6xl'>LOGIN</h1>
              <p className='client-p text-4xl mt-1'>sou cliente</p>
            </div>
            <img className='w-24 ml-4' src={user} alt='User' />
          </div>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <div className='input-wrapper mb-10 w-full'>

                <div className='w-full'>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    spellCheck='false'
                    className='ml-[4rem] bg-transparent border-b-[1px] border-white w-[90%] h-[3.5rem] text-[2rem] text-slate-100 pl-4'
                  />
                </div>
                {errors.email && touched.email && (
                  <div className='error-message'>{errors.email}</div>
                )}
              </div>

              <div className='input-wrapper'>
                <Field
                  type='password'
                  name='password'
                  placeholder='Senha'
                  spellCheck='false'
                  className='ml-[4rem] bg-transparent border-b-[1px] border-white w-[90%] h-[3.5rem] text-[2rem] text-slate-100 pl-4'
                />
                {errors.password && touched.password && (
                  <div className='error-message'>{errors.password}</div>
                )}
              </div>

              <div className=''>
                <button
                  className='bg-[#00a000] text-white pl-[13px] w-[80px] h-14 text-[2rem] ml-[4rem] rounded-md mt-14 mb-6'
                  type='submit'
                >
                  Entrar
                </button>

                <button 
                className='text-[#ff5510] w-50 h-14 text-[2rem] ml-[4rem]' 
                type='submit'>
                  Crie sua conta
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <img className='wave-background' src={wave} alt='Wave' />
    </div>
  );
}

export default Account
