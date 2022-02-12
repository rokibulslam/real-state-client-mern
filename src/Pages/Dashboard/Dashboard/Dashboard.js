import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Dashboard = () => {
    return (
        <div>
            <MakeAdmin></MakeAdmin>
            <AddProduct></AddProduct>
        </div>
    );
};

export default Dashboard;