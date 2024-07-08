import React from 'react';  // Ensure React is imported
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

const Contact = () => {
  return (
    <>
      <Header />
      <div className={styles.Contact}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our company. We are dedicated to providing the best services.
          Our team is committed to ensuring customer satisfaction and delivering quality products.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to innovate and lead in our industry, setting standards for excellence and professionalism.
        </Typography>
      </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
