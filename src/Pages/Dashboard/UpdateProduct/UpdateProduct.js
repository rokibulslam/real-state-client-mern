import { Button, Container, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../../../Redux/actions/productAction';
const categories = [
  {
    value: "Featured",
    label: "Featured",
  },
  {
    value: "Regular",
    label: "Regular",
  },
  {
    value: "Top-Rated",
    label: "Top-Rated",
  },
];

const UpdateProduct = (params) => {
    const { id } = useParams()
   const [category, setCategory] = useState("");
   
    const { products, loading } = useSelector(state => state.productList)
    const dispatch =useDispatch()
    const product = products.find((item) => id === item._id)
    const [productDetails, setProductDetails] = useState();
   console.log(product)
    console.log(productDetails)
   // Handle form input fields
    const handleOnChange = (e) => {
         setCategory(e.target.value);
     const field = e.target.name;
     const value = e.target.value;
     const newProductDetails = { ...productDetails };
     newProductDetails[field] = value;
     setProductDetails(newProductDetails);
     
   };
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct(id, productDetails))
    }
  return (
    <Container sx={{ display: "flex" }}>
      <Container className="">
        <h1 className="register-header-text ">{id}</h1>

        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Product Name"
            name="Name"
            onBlur={handleOnChange}
            variant="standard"
          />

          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Price"
            type="number"
            name="Price"
            onBlur={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Image URL"
            type="text"
            name="Image"
            onBlur={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Description"
            name="Description"
            onBlur={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Rating"
                      name="Rating"
                      type="number"
            onBlur={handleOnChange}
            variant="standard"
          />

          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            select
            variant="standard"
            name="Category"
            label="Category"
            value={category}
            onChange={handleOnChange}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
            Add Apartment
          </Button>
        </form>
      </Container>
    </Container>
  );
}

export default UpdateProduct