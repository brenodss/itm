import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { components } from 'react-select';
import './style.css';
import useDynamicSearchWithTimer from './useDynamicSearch';

const CustomSearchBar = ({}) => {
  const [productString, setProductString] = useState('');

  const {filteredResults, isLoading} = useDynamicSearchWithTimer(productString);

  const CustomOption = (props: any) => (
    <button onClick={() => setProductString(props.data.descricao)} >
      <div className='flex flex-row items-center'>
        <div className='w-40 h-40'>
          <img
            className='w-full h-full object-contain'
            src={`http://itm.objectdata.com.br${props.data.imagem_pequena}`}
            alt='produto-image'
          />
        </div>
        <div className='flex flex-col'>
          <span>{props.data.descricao}</span>
          <span>{props.data.preço}</span>
        </div>
      </div>
    </button>
    
  );

  return (
    <div className='search-wraper'>
      <Select
        className='basic-single text-2xl font-bold'
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