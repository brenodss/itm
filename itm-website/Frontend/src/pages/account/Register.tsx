import './style.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import discount from '../../assets/discount.svg';

const schema = Yup.object().shape({
    email: Yup.string().required('Preencha com seu email').email('E-mail inválido'),
  });
  
function Register() {
    const handleSubmit = async (values: {email: string}, { setSubmitting }: FormikHelpers<{email: string}>) => {
        try {          
          const validated = await schema.validate(values);

        } catch (error: any) {

          if (error instanceof Yup.ValidationError) {
            console.error('Validation error:', error.errors);
          }

        } finally {
          setSubmitting(false);
        }
      };
      
  return (
    <div className='flex justify-center'>
      <div className='bg-[#1A1A1A] h-[35rem] w-[45rem] rounded-[8px] flex flex-col justify-around items-start p-8'>
        <div className='title-wrapper ml-[4rem]'>
          
          <div className='flex items-center'>
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <h1 className='login-title text-4xl'>CADASTRE-SE</h1>
                <p className='client-p text-4xl mt-1'>E aproveite as melhores ofertas</p>
              </div>
              <img className='-mt-2' src={discount} alt="" />
            </div>
          </div>
        </div>

        <Formik
          initialValues={{ email: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='input-wrapper mb-5 w-full'>

                <div className='w-full'>
                  <Field
                    type='text'
                    name='email'
                    placeholder='Email'
                    spellCheck='false'
                    className='ml-[4rem] focus:bg-zinc-950 bg-transparent border-b-[1px] border-white w-[90%] h-[3rem] text-[2rem] text-slate-100 pl-4'
                  />
                </div>
                {errors.email && touched.email && (
                  <div className='text-[red] ml-20 text-2xl'>{errors.email}</div>
                )}
              </div>


                <button
                  className='bg-[#00a000] text-white pl-[13px] w-[11rem] h-14 text-[2rem] ml-[4rem] rounded-md mt-14 mb-6'
                  type='submit'
                >
                  Cadastrar
                </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
