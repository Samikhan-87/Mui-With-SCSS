'use client'
import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LearnStyles from '../styles/LearnCources.module.scss';
import RecipeReviewCard from '../components/RecipeReviewCard';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';

const LearnCources = () => {
  return (
    <>
      <Header />  
      <div className={LearnStyles.Learn}>
        <Container>
          <div className={LearnStyles.LearnChild}>
            <Typography variant="h2" gutterBottom>
              Learn Free Courses
            </Typography>
            <Typography variant="h2" paragraph>
              Free online courses to achieve your goals
            </Typography>
            <Typography variant="h5" paragraph>
              Looking to add new skills? Is there a hobby you’ve wanted to try? We’re Learnify, a leading destination for learning and teaching online.
            </Typography>
            <Typography variant="h5" paragraph>
              If you’re new to online learning and not sure where to start, you’re not alone. We’ve curated a free collection of courses for professionals. Take one of these courses and learn new skills (on us).
            </Typography>
            <Button className={LearnStyles.LearnChildButton}>
              Take Free Courses
            </Button>
            <Typography variant="body1" paragraph>
              You can search Courses here!
            </Typography>
          </div>
        </Container>
      </div>

      <Container>
        <div className={LearnStyles.main}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3'>
              What makes us stand out in Web Development?
              </Typography>
              <Typography variant='h6'>
              We focus relentlessly on creating outstanding digital experiences and obsess over innovative solutions that deliver results. Partner with us to…
              </Typography>

              <List className={LearnStyles.customList}>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Craft exceptional websites and applications with confidence." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Establish a strong online presence in a competitive and dynamic digital landscape." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Optimize your development process and resources, avoiding costly and time-consuming mistakes." />
                </ListItem>
              </List>
              <Button className={LearnStyles.mainButton}>
                Learn Now!
              </Button>
            </Grid>
            <RecipeReviewCard />
          </Grid>
        </div>
      </Container>

{/* UI UX Designing  */}

      <Container>
        <div className={LearnStyles.main2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3'>
              What Sets Our UI/UX Design Apart?
              </Typography>
              <Typography variant='h6'>
              Our focus is on crafting extraordinary digital experiences through innovative design solutions that drive impact.
              </Typography>

              <List className={LearnStyles.customList}>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Design intuitive interfaces that enhance user engagement and satisfaction." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Build experiences that resonate in a competitive digital environment, ensuring seamless interaction and usability." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Streamline design workflows for efficiency and precision, avoiding common pitfalls and optimizing resource allocation." />
                </ListItem>
              </List>
              <Button className={LearnStyles.mainButton}>
                Learn Now!
              </Button>
            </Grid>
            <Card2 />
          </Grid>
        </div>
      </Container>

{/*Amazon VA  */}

      <Container>
        <div className={LearnStyles.main2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3'>
              What Sets Our Approach Apart at Amazon?
              </Typography>
              <Typography variant='h6'>
              Amazon stands out as a global leader in e-commerce, driven by relentless innovation and customer-centricity.
              </Typography>

              <List className={LearnStyles.customList}>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Amazon's extensive platform offers unparalleled access to a vast array of products and services, empowering millions of sellers worldwide.." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Leveraging advanced algorithms, Amazon ensures listings are optimized for relevant keywords, enhancing visibility and sales performance." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="With a commitment to customer satisfaction, Amazon delivers seamless shopping experiences, supported by robust logistics and reliable customer service." />
                </ListItem>
              </List>
              <Button className={LearnStyles.mainButton}>
                Learn Now!
              </Button>
            </Grid>
            <Card3/>
          </Grid>
        </div>
      </Container>

{/*Shopify  */}

      <Container>
        <div className={LearnStyles.main2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3'>
              What Sets Our Approach Apart at Shopify?
              </Typography>
              <Typography variant='h6'>
              Shopify stands out as a trailblazer in e-commerce solutions, driven by innovation and a commitment to empowering businesses worldwide.


              </Typography>

              <List className={LearnStyles.customList}>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Shopify offers a comprehensive platform that provides businesses of all sizes with access to a diverse range of products and services, empowering entrepreneurs globally." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Leveraging cutting-edge SEO tools and algorithms, Shopify ensures that product listings are optimized for relevant keywords, boosting visibility and enhancing sales performance." />
                </ListItem>
                <ListItem className={LearnStyles.customListItem}>
                  <ListItemText primary="Shopify is dedicated to delivering seamless shopping experiences, supported by robust logistics solutions and dependable customer service, ensuring customer satisfaction at every step." />
                </ListItem>
              </List>
              <Button className={LearnStyles.mainButton}>
                Learn Now!
              </Button>
            </Grid>
            <Card4/>
          </Grid>
        </div>
      </Container>
      
      <Footer />
    </>
  );
};

export default LearnCources;
