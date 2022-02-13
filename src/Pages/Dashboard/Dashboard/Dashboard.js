import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';

const Dashboard = () => {
    return (
        <div>
            <MakeAdmin></MakeAdmin>
            <AddProduct></AddProduct>
            <Review></Review>
            <ManageOrder></ManageOrder>
            <MyOrder></MyOrder>
        </div>
    );
};

export default Dashboard;