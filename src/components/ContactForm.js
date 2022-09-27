// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {Card,TextField,Button} from '@mui/material';
import { useState } from 'react';
const ContactForm = ({fnAddContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const initialState = {
        name:"",
        phone:"",
        email:"",
        photo:""
    }
    const [newContact,setNewContact] = useState(initialState);

    const inputOnChangeHandler = (event) => {
        const target = event.target;
    const value = target.value;
    const name = target.name;
    setNewContact((values) => ({ ...values, [name]: value }));
      };
      const formOnSubmitHandler = (event) => {
        event.preventDefault();
        fnAddContact(newContact);
        
        setNewContact(initialState);
      };


    return (
        <Card sx={{ padding:"0.5em", width:"35%"  }}> 
            <form style={{display:"flex",flexDirection:"column",gap:"10px"}} onSubmit={formOnSubmitHandler}>
            
            <TextField sx={{maxWidth:"600px"}}id="filled-basic" value={newContact.name} size="small" label="Name*" variant="filled" name="name" onChange={inputOnChangeHandler}/>
            
            <TextField id="filled-basic" size="small" label="Phone*" value={newContact.phone} variant="filled"name="phone" onChange={inputOnChangeHandler}/>
            
            <TextField id="filled-basic" size="small" label="Email*"value={newContact.email} variant="filled"name="email" onChange={inputOnChangeHandler}/>
            
            <TextField id="filled-basic" size="small" label="Photo URL*"value={newContact.photo} variant="filled" name="photo" onChange={inputOnChangeHandler}/>
            

            <Button type="submit"variant="text" color="success">Add new</Button>

            </form>

        </Card> 
    );
}

export default ContactForm;