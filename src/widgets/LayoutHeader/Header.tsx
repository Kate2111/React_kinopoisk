import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ButtonAppBar() {
    const [checked, setChecked] = React.useState(true);

    
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit">MOVIE</Button>
            <Button color="inherit">Login</Button>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
