import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const HomePageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('')
            .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default HomePageProduct;