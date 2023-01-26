import React from 'react';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUsers, updateUserRole } from '../../../Redux/actions/userAction';
import LoadingSpinner from '../../../Component/LoadingSpinner';
import { Button } from 'bootstrap';


const MakeAdmin = () => {
  const dispatch = useDispatch()
  const {users, update, loading}= useSelector(state=>state.users)

  
  useEffect(() => {
      dispatch(getUsers())
  }, [update])
  
  const handleRole = (role, email) => {
    console.log(role);
    if (role === 'superAdmin') {
      
      return
    }
    else if (role === "admin") {
     dispatch(updateUserRole(email, "user"))
    } else{
      dispatch(updateUserRole(email, "admin"));
   }
    }
 
  return (
    <div>
      <div className="container">
        <h1>User Management</h1>
        {loading && <LoadingSpinner />}
        <Table bordered responsive>
          <thead>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Role</th>
            <th>User Type</th>
          </thead>
          {users?.map((user, index) => (
            <tbody key={index}>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "superAdmin" && (
                    <span className="yellow-trans-btn ">Super Admin</span>
                  )}
                  {user.role === "admin" && (
                    <span className="yellow-trans-btn">Admin</span>
                  )}
                  {user.role !== "admin" && user.role !== "superAdmin" && (
                    <span className="blue-trans-btn">User</span>
                  )}
                </td>
                <td onClick={() => handleRole(user?.role, user?.email)}>
                  {user.role === "superAdmin" && (
                    <span className="yellow-trans-btn vanish">Super Admin</span>
                  )}
                  {user.role === "admin" && (
                    <span style={{ cursor: "pointer" }} className="green-btn">
                      Make User
                    </span>
                  )}
                  {user.role !== "admin" && user.role !== "superAdmin" && (
                    <span style={{ cursor: "pointer" }} className="red-btn">
                      Make Admin
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MakeAdmin;