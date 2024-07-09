import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Grid, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutStyles from '../styles/About.module.scss';
import CustomGrid from '../components/Grid';

const About = () => {
  return (
    <>
      <Header />  
      <div className={aboutStyles.about}>
        <Container>
          <div className={aboutStyles.aboutChild}>
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h2" paragraph>
              Meet the agency that makes growth an exact science
            </Typography>
            <Typography variant="h5" paragraph>
              We’ve spent decades reverse engineering B2B marketing in order to help companies like yours reach the enterprise.
            </Typography>
            <Button variant="contained" color="primary">
              Search Teachers
            </Button>
            <Typography variant="body1" paragraph>
              You can search teachers here!
            </Typography>
          </div>
        </Container>
      </div>

      <Container>
        <div className={aboutStyles.main}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3'>
                What makes us Fluidic?
              </Typography>
              <Typography variant='h6'>
                We focus relentlessly on the outcome and obsess over growth strategies that deliver. Partner with us to…
              </Typography>

              <List className={aboutStyles.customList}>
                <ListItem className={aboutStyles.customListItem}>
                  <ListItemText primary="Nail your approach to marketing and scale with confidence." />
                </ListItem>
                <ListItem className={aboutStyles.customListItem}>
                  <ListItemText primary="Establish yourself as the unequivocal choice in a competitive and noisy landscape." />
                </ListItem>
                <ListItem className={aboutStyles.customListItem}>
                  <ListItemText primary="Stop crippling your business budget and people's time with bad decisions." />
                </ListItem>
              </List>
               <Button variant="contained" color="primary">
              What's New 
            </Button>
            </Grid>

            <Grid container item xs={12} md={6} spacing={3} className={aboutStyles.boxContainer}>
              <Grid item xs={12} sm={6} className={aboutStyles.boxItems1}>
                <Box></Box>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>



<div className={aboutStyles.about1}>
        <Container>
          <div className={aboutStyles.aboutChild}>
            <Typography variant="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="h2" paragraph>
From a bold idea to a transformative reality
            </Typography>
            <Typography variant="h5" paragraph>
            Like many companies, we began with lofty goals and a team of 1, hustling hard to keep the lights on. Over the years, as we grew, our services matured to reflect the increasing expertise of our team and domain knowledge.
            </Typography>
            <Typography variant="h5" paragraph>
We learned that it’s not about tactics, but strategy — and that’s what makes all the difference.
</Typography>
<Typography variant="h5" paragraph>
Our own journey means that we have literally walked in your shoes. We know what it takes to succeed and scale — and we know how hard it is to get right. Along the way, we have developed the frameworks that make growth a structured, predictable process. Not a fragmented mess of whimsical hopes and dreams.
</Typography>
<Typography variant="h5" paragraph>
Nowadays we help business owners, executives and marketing leaders take leverage our years of experience creating highly refined growth solutions. So, if you need a team of experts to develop a winning customer acquisition and growth strategy and carry out your vision, you are in the right place!
            </Typography>
            <Button variant="contained" color="primary">
              Explore Now!
            </Button>
            <Typography variant="body1" paragraph>
              Explore Our Story here!
            </Typography>
          </div>
        </Container>
      </div>

      <div className={aboutStyles.about2}>
        <Container>
          <div className={aboutStyles.aboutChild}>
            <Typography variant="h2" gutterBottom>
              Our Partners
            </Typography>
            <Typography variant="h2" paragraph>
            Benefit from an injection of efficiency & intelligence
            </Typography>
            <Typography variant="h5" paragraph>
            We work where you work and invest heavily in premium technology that allows us to be more productive in helping you to achieve growth success. If you find it at the top right of the G2 Grid®, we probably know it inside and out!
            </Typography>
            <Button variant="contained" color="primary">
              Details
            </Button>
            <Typography variant="body1" paragraph>
              You can Get Details of Partners Here!
            </Typography>
          </div>
          <CustomGrid />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
