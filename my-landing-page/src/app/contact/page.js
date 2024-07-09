import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.scss';
import Contact from '../components/Contact';

const About = () => {
  return (
    <>
      <Header />  
      <div className={styles.about}>
        <Container>
          <div className={styles.aboutChild}>
            <Typography variant="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h2" paragraph>
            Ready to Talk Growth?
            </Typography>
            <Typography variant="h5" paragraph>
            Get strategic • Market better • Scale predictably
            </Typography>
          </div>
        </Container>
      </div>
      <Contact/>
      
      <Container>
    <Typography variant='h6'>We partner with B2B tech companies tired of committing random acts of marketing and looking for a better way.

Want to drive revenue using a strategic growth framework instead? Complete the form and we’ll route you to the best person to discuss your needs.

Or, cut to the chase and book a call or phone us instead.</Typography>
</Container>
      <Footer />
    </>
  );
};

export default About;
