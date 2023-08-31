import './style.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import {IRegister} from './interfaces';
import * as Yup from 'yup';
import fetchRegistration from './fetchRegistration';

const schema = Yup.object().shape({
    name: Yup.string().required('Preencha com seu nome').min(3, 'Precisa ter no mínimo 3 dígitos'),
    email: Yup.string().required('Preencha com seu email').email('E-mail inválido'),
    cpf: Yup.string().required('Preencha com seu cpf').length(11, 'CPF inválido'),
    phone: Yup.string().required('Preencha com seu telefone').min(10, 'Telefone inválido'),
    password: Yup.string().required('Preencha com sua senha').min(6, 'Senha precisa ter no mínimo 6 dígitos'),
    address: Yup.string().required('Preencha com seu endereço')
  });
  
function RegisterCheckout() {
    const handleSubmit = async (values: IRegister, { setSubmitting }: FormikHelpers<IRegister>) => {
        try {          
          const validated = await schema.validate(values);
          await fetchRegistration(validated)

        } catch (error: any) {

          if (error instanceof Yup.ValidationError) {
            console.error('Validation error:', error.errors);
          }

        } finally {
          setSubmitting(false);
        }
      };
      
  return (
    <div className='flex justify-center items-center bg-[#] mt-24 w-[full]'>
      <div className='flex flex-col justify-evenly w-full h-[100vh]'>
        <div className='title-wrapper ml-[4rem]'>
          
          <div className='flex items-center'>
            <div>
              <h1 className='login-title text-6xl'>CADASTRE-SE</h1>
              <p className='client-p text-4xl mt-1'>E aproveite as melhores ofertas</p>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{ email: '', password: '', name: '', cpf: '', phone: '', address: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='input-wrapper w-full'>

                <div className='w-full mb-5'>

                  <Field
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Nome'
                    spellCheck='false'
                    className='ml-[4rem] focus:bg-slate-400 bg-[#ddddddbf] border-b-[1px] border-white w-[90%] h-[3rem] text-[2rem] text-black pl-4'
                  />
                {errors.name && touched.name && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.name}</div>
                )}
                </div>
              </div>

              <div className='input-wrapper mb-5 w-full'>
                <div className='w-full'>
                  <Field
                    type='text'
                    name='email'
                    placeholder='Email'
                    spellCheck='false'
                    className='ml-[4rem] focus:bg-slate-200 bg-transparent border-b-[1px] border-white w-[90%] h-[3rem] text-[2rem] text-black pl-4'
                  />
                </div>
                {errors.email && touched.email && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.email}</div>
                )}
              </div>

              <div className='input-wrapper mb-5 w-full'>
                <div className='w-full'>
                  <Field
                    type='string'
                    name='cpf'
                    placeholder='CPF'
                    spellCheck='false'
                    className='ml-[4rem] focus:bg-slate-200 bg-transparent border-b-[1px] border-white w-[90%] h-[3rem] text-[2rem] text-black pl-4'
                  />
                 {errors.cpf && touched.cpf && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.cpf}</div>
                )}
                </div>
              </div>

              <div className='input-wrapper mb-5 w-full'>
                <div className='w-full'>
                  <Field
                    type='password'
                    name='password'
                    placeholder="Senha"
                    spellCheck='false'
                    className='ml-[4rem] focus:bg-slate-200 bg-transparent border-b-[1px] border-white w-[90%] h-[3rem] text-[2rem] text-black pl-4'
                  />
                 {errors.password && touched.password && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.password}</div>
                )}
                </div>
              </div>

              <div className='input-wrapper mb-5 w-full'>
                <div className='w-full'>
                  <Field
                    type='text'
                    name='phone'
                    placeholder='Telefone'
                    spellCheck='false'
                    className='ml-[4rem] focus:bg-slate-200 bg-transparent border-b-[1px] border-white w-[90%] h-[3rem] text-[2rem] text-black pl-4'
                  />
                </div>
                {errors.phone && touched.phone && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.phone}</div>
                )}
              </div>

              <div className='input-wrapper mb-5 w-full'>
                <div className='w-full'>
                  <Field
                    type='text'
                    name='address'
                    placeholder='Endereço'
                    spellCheck='false'
                    className='ml-[4rem] focus:bg-slate-200 bg-transparent border-b-[1px] border-white w-[90%] h-[3rem] text-[2rem] text-black pl-4'
                  />
                </div>
                {errors.address && touched.address && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.address}</div>
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

export default RegisterCheckout;
