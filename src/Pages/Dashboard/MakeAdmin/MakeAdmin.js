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
        fetch("https://real-state-server-mern.onrender.com/users/admin", {
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
      <div style={{marginBottom: '100px'}}>
        <h1 style={{ marginBottom: "50px", color: "rgb(134, 80, 25)" , fontWeight: 'bold'}}>
          Make An Admin
        </h1>
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
        {success && <Alert severity="failed">Admin Made Success fully</Alert>}
      </div>
    );
};

export default MakeAdmin;