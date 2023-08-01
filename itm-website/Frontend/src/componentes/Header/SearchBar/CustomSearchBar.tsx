import { useState } from 'react';
import Select from 'react-select';
import './style.css';
import useDynamicSearchWithTimer from './useDynamicSearch';

const CustomSearchBar = ({}) => {
  const [productString, setProductString] = useState('');

  const {filteredResults, isLoading} = useDynamicSearchWithTimer(productString);

  const CustomOption = (props: any) => (
    <div className='mt-5 mb-5'>

    <button onClick={() => setProductString(props.data.descricao)} >
      <div className='flex flex-row items-center flex-start text-start'>
          <img
            className='w-40 h-40 object-contain'
            src={`http://itm.objectdata.com.br${props.data.imagem_pequena}`}
            alt='produto-image'
          />
        <div className='flex flex-col ml-10'>
          <span>{props.data.descricao}</span>
          <span className='text-[#ff5510]'>{`${props.data.preco}R$`}</span>
        </div>
      </div>
    </button>
    <hr className='border border-[#ddd] w-full'></hr>

    </div>
    
  );

  return (
    <div className='search-wraper'>
      <Select
        className='basic-single text-2xl font-bold border-none'
        classNamePrefix='color-[#ddd]'
        placeholder='O que está procurando?'
        styles={{
          input: (base, _props) => ({...base,
             '@media (min-width: 1049px)': {
              color: '#222'
             },
             '@media (max-width: 1050px)': {
              color: '#ddd'
             }
            }),

          control: (baseStyles, _state) => ({
            ...baseStyles,
            borderStyle: '1px solid white',
            '@media (min-width: 1049px)': {
              backgroundColor: '#ddd'
             },
             '@media (max-width: 1050px)': {
              backgroundColor: '#222'
             }
          })
        }}

        isLoading={isLoading}
        isSearchable
        
        blurInputOnSelect={true}
        inputValue={productString}
        onInputChange={(inputValue: string) => setProductString(inputValue)}
        
        options={filteredResults}
        getOptionValue={(option: any) => option.descricao}
        formatOptionLabel={() => null}
        components={{ Option: CustomOption }}
      />

    </div>
  );
};

export default CustomSearchBar;