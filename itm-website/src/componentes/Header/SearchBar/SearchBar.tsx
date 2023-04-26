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
            height: '3.3rem',
            width: '45vw',
            backgroundColor: '#fff',
            color: '#333',

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
              width: '100%',
            }
          },
        }}
      />
    </div>
  );
}
