import { Container, Typography, Button, Box, Grid } from '@mui/material';
import styles from '../styles/Home.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              First Work Done Through MUI And SCSS
            </Typography>
            <Typography variant="h5" gutterBottom>
              Build something amazing with Next.js and Material-UI
            </Typography>
            <Button variant="contained">
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.featuresBox} sx={{ textAlign: 'center', margin: '20px 0' }}>
              <img 
                src='/images/education-day-arrangement-table-with-copy-space.jpg' 
                alt="Example Image" 
                style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
