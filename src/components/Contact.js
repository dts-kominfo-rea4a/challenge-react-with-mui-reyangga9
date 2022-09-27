// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {Card,Divider,Typography,ListItem,ListItemAvatar,Avatar } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<div  style={{width:"35%"}}>
    <Card>
    {data.map(data=>(<>
      <ListItem>
      <ListItemAvatar>
        <Avatar src={data.photo}>
          
        </Avatar>
      </ListItemAvatar>
      <div style={{display:"flex",flexDirection:"column"}}>
      <Typography>
          {data.name}
          </Typography>
          <Typography>
           {data.phone}
          </Typography>
          <Typography>
           {data.email}
          </Typography>
      </div>
      
    </ListItem>
    <Divider variant="inset"  />
    </>
    ))}
      
      
      </ Card>
    
    </div>);
};

export default Contact;
