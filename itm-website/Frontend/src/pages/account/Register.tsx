import './style.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import {IRegister} from './interfaces';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório').min(3, 'Precisa ter no mínimo 3 dígitos'),
    email: Yup.string().email('E-mail inválido'),
    cpf: Yup.string().min(10, 'CPF inválido'),
    phone: Yup.string().min(10, 'Telefone inválido')
  });
  

function Register() {
    const handleSubmit = async (values: IRegister, { setSubmitting }: FormikHelpers<IRegister>) => {
        try {

          await schema.validate(values, { abortEarly: false });
          console.log('Form submitted:', values);

        } catch (error: any) {

          if (error instanceof Yup.ValidationError) {
            console.error('Validation error:', error.errors);
          }

        } finally {
          setSubmitting(false);
        }
      };
      
  return (
    <div className=''>
      <div className='register-card'>
        <div className='title-wrapper ml-[4rem]'>
          <div className='flex flex-row items-center'>
            <div>
              <h1 className='login-title text-6xl'>CADASTRE-SE</h1>
              <p className='client-p text-4xl mt-1'>E aproveite as melhores ofertas</p>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{ email: '', password: '', name: '', cpf: '', phone: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='input-wrapper mb-10 w-full'>

                <div className='w-full'>
                  <Field
                    type='text'
                    name='name'
                    placeholder='Nome'
                    spellCheck='false'
                    className='ml-[4rem] bg-transparent border-b-[1px] border-white w-[90%] h-[3.5rem] text-[2rem] text-slate-100 pl-4'
                  />
                {errors.name && touched.name && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.name}</div>
                )}
                </div>
              </div>

              <div className='input-wrapper mb-10 w-full'>
                <div className='w-full'>
                  <Field
                    type='text'
                    name='email'
                    placeholder='Email'
                    spellCheck='false'
                    className='ml-[4rem] bg-transparent border-b-[1px] border-white w-[90%] h-[3.5rem] text-[2rem] text-slate-100 pl-4'
                  />
                </div>
                {errors.email && touched.email && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.email}</div>
                )}
              </div>

              <div className='input-wrapper mb-10 w-full'>
                <div className='w-full'>
                  <Field
                    type='string'
                    name='cpf'
                    placeholder='CPF'
                    spellCheck='false'
                    className='ml-[4rem] bg-transparent border-b-[1px] border-white w-[90%] h-[3.5rem] text-[2rem] text-slate-100 pl-4'
                  />
                 {errors.cpf && touched.cpf && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.cpf}</div>
                )}
                </div>
              </div>

              <div className='input-wrapper mb-10 w-full'>
                <div className='w-full'>
                  <Field
                    type='text'
                    name='phone'
                    placeholder='Telefone'
                    spellCheck='false'
                    className='ml-[4rem] bg-transparent border-b-[1px] border-white w-[90%] h-[3.5rem] text-[2rem] text-slate-100 pl-4'
                  />
                </div>
                {errors.phone && touched.phone && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.phone}</div>
                )}
              </div>

              <div className=''>
                <button
                  className='bg-[#00a000] text-white pl-[13px] w-[40%] h-14 text-[2rem] ml-[4rem] rounded-md mt-14 mb-6'
                  type='submit'
                >
                  Cadastrar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
