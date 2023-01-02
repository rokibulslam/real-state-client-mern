import { Typography, Rating } from "@mui/material";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Reviews.css";

import { Spinner } from "react-bootstrap";
import Message from "../../../Component/Message";
import ReviewSlider from "../../../Component/ReviewSlider";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading]=useState(true)
  const [error, setError] = useState("")
  
  useEffect(() => {
    setIsLoading(true)
    fetch("https://pink-combative-kangaroo.cyclic.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((er) => setError(er))
    .finally(()=>setIsLoading(false))
  }, []);
  
  let data;
  if (isLoading) {
    data = (
      <div>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  } else if (error) {
    data = (
      <Message
        message="There was an server side Error!! Please Reload"
        color="danger"
      ></Message>
    )
  } else {
    data = (<ReviewSlider reviews={reviews}></ReviewSlider>)
  }
  return (
    <div className="review-bg">
      <h1 className="">Customer Reviews</h1>
      <Box
        sx={{
          py: 5,
          width: "90%",
        }}
      >
        {data}
        <Typography sx={{ mt: 5 }} variant="h6" gutterBottom component="div">
          <NavLink to="/dashboard/review">Give A Review</NavLink>
        </Typography>
      </Box>
    </div>
  );
};

export default Reviews;
