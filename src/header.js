import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Avatar from "@mui/material/Avatar";
//import AppBarMenu from "./menu.js"
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Indivisable Colorado
          </Typography>
          <Button color='secondary' variant="contained" size="large">Donate</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}