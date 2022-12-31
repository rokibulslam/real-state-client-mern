import { Grid, Paper, Typography, Rating, Container } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "./Reviews.css";
import StarIcon from "@mui/icons-material/Star";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://pink-combative-kangaroo.cyclic.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // react-slick animation
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="review-bg">
      <h1 className="">Customer Reviews</h1>
      <Box
        sx={{
          py: 5,
          width: "90%",
        }}
      >
        <Slider {...settings}>
          {reviews?.map((review) => (
            <Box className="">
              <Paper
                className="paper"
                key={review._id}
                elevation={5}
                sx={{ p: 2, m: 2 }}
              >
                <Typography
                  sx={{ color: "white", fontWeight: 400 }}
                  variant="h5"
                  gutterBottom
                  component="div"
                >
                  {review.customerName}
                </Typography>
                <Typography
                  variant="h7"
                  gutterBottom
                  component="div"
                  sx={{ textAlign: "center", color: "white" }}
                >
                  {review.comment}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Rating
                      readOnly
                      emptyIcon={
                        <StarIcon
                          sx={{ color: "whitesmoke" }}
                          style={{ opacity: 1 }}
                          fontSize="inherit"
                        />
                      }
                      name="simple-controlled"
                      value={review.star}
                    />
                  </Box>
                  <Typography
                    sx={{ color: "white"}}
                    variant="p"
                    gutterBottom
                    component="div"
                  >
                    {moment(review?.date).format("dddd MMM Y")}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
        <Typography sx={{ mt: 5 }} variant="h6" gutterBottom component="div">
          <NavLink to="/dashboard/review">Give A Review</NavLink>
        </Typography>
      </Box>
    </div>
  );
};

export default Reviews;
