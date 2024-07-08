import { Typography, Container } from '@mui/material';
import styles from '../styles/Home.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Typography variant="body1">© 2024 Landing Page By Sami Khan</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
