import { Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";
import Slider from "react-slick";

const ReviewSlider = ({reviews}) => {
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
                sx={{ color: "white" }}
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
  );
}

export default ReviewSlider;