import { Container, Grid, Paper, Typography } from '@mui/material';
import styles from '../styles/Home.module.scss';

  const features = [
    { 
      title: 'Feature One', 
      description: 'Experience the ultimate educational setup with a perfectly arranged table, ideal for studying or teaching.',
      imageUrl: '/images/education-day-arrangement-table-with-copy-space.jpg' 
    },
    { 
      title: 'Feature Two', 
      description: 'Experience the ultimate educational setup with a perfectly arranged table, ideal for studying or teaching.',
      imageUrl: '/images/education-day-arrangement-table-with-copy-space.jpg'
    },
    { 
      title: 'Feature Three', 
      description: 'Experience the ultimate educational setup with a perfectly arranged table, ideal for studying or teaching.',
      imageUrl: '/images/education-day-arrangement-table-with-copy-space.jpg'
    },
    { 
      title: 'Feature Four', 
      description: 'Experience the ultimate educational setup with a perfectly arranged table, ideal for studying or teaching.',
      imageUrl: '/images/education-day-arrangement-table-with-copy-space.jpg'
    },
    { 
      title: 'Feature Five', 
      description: 'Experience the ultimate educational setup with a perfectly arranged table, ideal for studying or teaching.',
      imageUrl: '/images/education-day-arrangement-table-with-copy-space.jpg'
    },
    { 
      title: 'Feature Six', 
      description: 'Experience the ultimate educational setup with a perfectly arranged table, ideal for studying or teaching.',
      imageUrl: '/images/education-day-arrangement-table-with-copy-space.jpg' 
    },
  ];

  const Features = () => {
    return (
      <Container className={styles.features}>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className={styles.feature}>
                <img 
                  src={feature.imageUrl} 
                  className={styles.featureImage} 
                />
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };

export default Features;


