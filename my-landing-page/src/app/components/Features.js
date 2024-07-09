import { Container, Grid, Paper, Typography } from '@mui/material';
import styles from '../styles/Home.module.scss';

  const features = [
    { 
      title: 'Web Development', 
      description: ' Web development is an exciting and dynamic field that offers endless possibilities for creativity and innovation',
      imageUrl: '/images/1687.jpg' 
    },
    { 
      title: 'UI UX Designing', 
      description: 'UI/UX designing is an exhilarating realm where creativity and innovation converge to redefine digital interactions and elevate user experiences.',
      imageUrl: '/images/21.jpg'
    },
    { 
      title: 'Amazon', 
      description: 'Amazon VA thrives at the intersection of creativity and innovation, where we redefine digital interactions and elevate user experiences.',
      imageUrl: '/images/6505894.jpg'
    },
    { 
      title: 'Shopify', 
      description: 'At Shopify, we lead the charge in e-commerce innovation, blending creativity and strategic expertise to enhance online shopping experiences',
      imageUrl: '/images/10645318.jpg'
    },
    { 
      title: 'Graphic Design', 
      description: 'Enhance your learning environment with a meticulously designed table, perfect for both studying and teaching.',
      imageUrl: '/images/5817157.jpg'
    },
    { 
      title: 'Artificial Intelligent', 
      description: 'Transform your educational space with an AI-powered, perfectly arranged table, ideal for studying and teaching.',
      imageUrl: '/images/211221.jpg' 
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


