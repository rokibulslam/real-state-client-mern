import {
  Button,
  CircularProgress,
  Container,
  MenuItem,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import Swal from "sweetalert2";

// Food Category
const currencies = [
  {
    value: "Pizza",
    label: "Pizza",
  },
  {
    value: "Burger",
    label: "Burger",
  },
  {
    value: "Chicken",
    label: "Chicken",
  },
  {
    value: "Rice",
    label: "Rice",
  },
];

const AddProduct = () => {
  
  const [category, setCategory] = useState("");
  const [productDetails, setProductDetails] = useState({});
  const handleOnChange = (e) => {
    setCategory(e.target.value);
    const field = e.target.name;
    const value = e.target.value;
    const newProductDetails = { ...productDetails };
    newProductDetails[field] = value;
    setProductDetails(newProductDetails);
  };

  const handleSubmit = (e) => {
    //   Send Product to Database
    
    e.preventDefault();
  };
  return (
    <Container sx={{ display: "flex" }}>
      

      <Container>
        <h1 className="register-header-text">Add A Food Item</h1>

        {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}

        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Product Name"
            name="Name"
            onChange={handleOnChange}
            variant="standard"
          />

          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Price"
            type="number"
            name="Price"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Image URL"
            type="text"
            name="Image"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Description"
            type="text"
            name="Description"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Rating"
            type="text"
            name="Rating"
            onChange={handleOnChange}
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
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
            Add Food
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default AddProduct;
