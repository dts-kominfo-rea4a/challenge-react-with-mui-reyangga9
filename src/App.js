import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import { useState } from 'react';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state

const [contacts, setNewContact] = useState(contactsJSON 

)

  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const addContacts = (newContact) =>{
    const objContacts = {
      name : newContact.name,
      phone : newContact.phone,
      email : newContact.email,
      photo : newContact.photo
    }

    const newContacts = [...contacts,objContacts];
  setNewContact(newContacts);
  }

  

  return (
    <div className="App">
      <Header />
          <div style={{display:"flex",gap:"20px",     justifyContent:"space-evenly" }}>
          <ContactForm fnAddContact={addContacts}/>
          <div style={{width:"35%",backgroundColor:"rgb(219,246,240)"}}>
          {contacts.map((contact) => (
            <Contact data={contact}/>
          ))}
          </div>
        </div>
     </div>
  );
   // akhir function
};

export default App;
