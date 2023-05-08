import React from 'react';
import { Chip } from '@mui/joy';
function LinkedCard(props) {

    
  return <Chip
  color = '#f2f0f0'
  sz = "lg"
  sx={{
    backgroundColor: '#f2f0f0',
    textAlign: 'center',
    width: '100%',
    height: '55px',
    margin: '10px'
  }}
  startDecorator={props.icon}
  onClick = {()=> {window.location.href = props.url}}
  endDecorator = {props.endIcon}
  >{props.name}</Chip>
}

export default LinkedCard;