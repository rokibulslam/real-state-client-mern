import React, { useState } from 'react';
import {Alert, Button, form, TextField} from "@mui/material"
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState('')
    
    
    const handleOnblur = (e) => {
            setEmail(e.target.value)
    };
    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const userEmail = { email };
        console.log(email);
        fetch("https://immense-wildwood-96183.herokuapp.com/users/admin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setSuccess("1");
            }
          })
          .catch((error) => console.log(error.message));
    }
    return (
      <div>
        <form onSubmit={handleMakeAdmin}>
          <TextField
            label="Email"
            type="email"
            onBlur={handleOnblur}
            variant="standard"
          ></TextField>
          <Button type="submit" variant="contained">
            Make
          </Button>
        </form>
        {success && (
          <Alert severity="failed">Admin Made Success fully</Alert>
        )}
        
      </div>
    );
};

export default MakeAdmin;