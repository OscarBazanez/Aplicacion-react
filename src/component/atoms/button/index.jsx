import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red, purple } from '@material-ui/core/colors';
const RedButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const BlueButton = withStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
}))(Button);


export default RedButton