import './style.css';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <div className='search-wraper'>
      <TextField
        className="search-input !important"
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
            height: '3rem',
            width: '55vw',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '16px',
            spellCheck: 'false',

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
              height: '3rem',
              left: '0px',
              '& .MuiInputAdornment-root .MuiSvgIcon-root': {
                color: 'white',
                marginRight: '1rem',
                fontSize: '20px'
              },
            }
          },
        }}
      />
    </div>
  );
}
