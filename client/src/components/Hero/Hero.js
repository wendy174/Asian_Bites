import * as React from 'react';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ChinatownImage from './ChinatownImage.jpeg'

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${ChinatownImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        height: '100vh'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={ChinatownImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        <br></br>
        <br></br>
        Asian Bites 
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Looking for a comprehensive guide to Asian food that puts the power of choice in your hands? Look no further than our app - a one-of-a-kind platform that curates the very best restaurants serving up authentic Asian cuisine. With a focus on user engagement and feedback, our app is the ultimate resource for exploring new flavors and discovering hidden gems, as recommended by a diverse community of food enthusiasts. Whether you're in the mood for soup dumplings or Korean fried chicken, our app is your go-to source for delicious Asian eats, with real-time reviews and ratings from fellow foodies. Join us today and start exploring the vibrant and mouth-watering world of Asian cuisine!
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
      <br></br>
      <br></br>
        <Link to={`/signup`}>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/premium-themes/onepirate/sign-up/"
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>
        </Link>
    </ProductHeroLayout>
  );
}
