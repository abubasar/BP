import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link, useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history=useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color='secondary'>
        <Toolbar>
            <Typography onClick={()=>history.push('/')} className={classes.title} variant="h6">BP Logo</Typography>
        <Button  style={{ textTransform: "none" }} aria-controls="simple-menu" aria-haspopup="true" color='primary' > Solutions<ArrowDropDownIcon/> </Button>
        <Button  style={{ textTransform: "none" }} aria-controls="simple-menu" aria-haspopup="true" color='primary'> Services<ArrowDropDownIcon/></Button>
        <Button  style={{ textTransform: "none" }} aria-controls="simple-menu" aria-haspopup="true" color='primary'> Technology<ArrowDropDownIcon/></Button>
        <Button  style={{ textTransform: "none" }} aria-controls="simple-menu" aria-haspopup="true" color='primary'> Consulting<ArrowDropDownIcon/></Button>
        <Button  style={{ textTransform: "none" }} aria-controls="simple-menu" aria-haspopup="true" color='primary'> Training<ArrowDropDownIcon/></Button>
        
          
          <Button  style={{ textTransform: "none", marginRight:'15px' }}  variant="contained" color="primary">Schedule a Consult</Button>
          <Button style={{ textTransform: "none" ,marginRight:'15px'}}  variant="outlined" color="primary" onClick={()=>history.push('/login')} >Log in</Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
