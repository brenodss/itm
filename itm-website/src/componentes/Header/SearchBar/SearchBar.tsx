import './style.css';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <div className='search-wraper'>
      <TextField
        spellCheck="false"
        className="search-input !important font-[Poppins]"
        placeholder='O que esta procurando ?'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: '3.8rem',
            width: '55vw',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '1.8rem',
            spellCheck: 'false',
            fonteFamily: 'Poppins',

            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: '#999',
            },
            '&.Mui-focused fieldset': {
              outline: 'none',
              border: '1px solid #ff5510',
            },
            '@media (max-width: 1049px)': {
              width: '100vw',
              backgroundColor: '#333333',
              color: 'white',
              height: '3.8rem',
              left: '0px',
              fonteFamily: 'Poppins',
              
              '& .MuiInputAdornment-root .MuiSvgIcon-root': {
                color: 'white',
                marginRight: '1rem',
                fontSize: '2rem',
              },
            },
            '@media (min-width: 1050px)': {

              '& .MuiInputAdornment-root .MuiSvgIcon-root': {
                color: '#333',
                marginRight: '0.5rem',
                fontSize: '2.2rem',
              },
            }
          },
        }}
      />
    </div>
  );
}
