import React, { useState } from 'react';
import {Alert, Button, form, TextField} from "@mui/material"
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUsers, updateUserRole } from '../../../Redux/actions/userAction';
import LoadingSpinner from '../../../Component/LoadingSpinner';


const MakeAdmin = () => {
  const [userRole, setUserRole]=useState(null)
  const dispatch = useDispatch()
  const {users, update, loading}= useSelector(state=>state.users)
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState('')
  useEffect(() => {
      dispatch(getUsers())
  }, [ update])
  
   
  const handleRole = (role, email) => {
    console.log(role);
    if (role === "admin") {
     dispatch(updateUserRole(email, "user"))
    } else if(role==="user"){
      dispatch(updateUserRole(email, "admin"));
   }
    }
 
  return (
    <div>
      <div className="container">
        <h1>User Management</h1>
        {loading && <LoadingSpinner/>}
        <Table>
          <thead>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Role</th>
            <th>User Type</th>
          </thead>
          {users?.map((user, index) => (
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="yellow-trans-btn">Admin</span>
                  ) : (
                    <span className="blue-trans-btn">Admin</span>
                  )}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRole(user?.role, user?.email)}
                >
                  {user.role === "admin" ? (
                    <span className="green-btn">Make User</span>
                  ) : (
                    <span className="red-btn">Make Admin</span>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
    // <div style={{marginBottom: '100px'}}>
    //   <h1 style={{ marginBottom: "50px", color: "rgb(134, 80, 25)" , fontWeight: 'bold'}}>
    //     Make An Admin
    //   </h1>
    //   <form onSubmit={handleMakeAdmin}>
    //     <TextField
    //       label="Email"
    //       type="email"
    //       onBlur={handleOnblur}
    //       variant="standard"
    //     ></TextField>
    //     <Button type="submit" variant="contained">
    //       Make
    //     </Button>
    //   </form>
    //   {success && <Alert severity="failed">Admin Made Success fully</Alert>}
    // </div>
  );
};

export default MakeAdmin;