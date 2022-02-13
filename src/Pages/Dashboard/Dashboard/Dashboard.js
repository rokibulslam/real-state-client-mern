import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import Review from '../Review/Review';

const Dashboard = () => {
    return (
        <div>
            <MakeAdmin></MakeAdmin>
            <AddProduct></AddProduct>
            <Review></Review>
            <ManageOrder></ManageOrder>
        </div>
    );
};

export default Dashboard;