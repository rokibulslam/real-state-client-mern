import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../Review/Review';

const Dashboard = () => {
    return (
        <div>
            <MakeAdmin></MakeAdmin>
            <AddProduct></AddProduct>
            <Review></Review>
        </div>
    );
};

export default Dashboard;