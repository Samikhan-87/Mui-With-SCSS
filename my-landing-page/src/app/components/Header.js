import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import NextLink from 'next/link';
import styles from '../styles/Home.module.scss';

const Header = () => {
  return (
    <AppBar className={styles.header} position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Landing Page
        </Typography>
        <NextLink href="/" passHref>
          <Button color="inherit">Home</Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button color="inherit">About Us</Button>
        </NextLink>
        <NextLink href="/LearnCources" passHref>
          <Button color="inherit">Learn Courses</Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button color="inherit">Contact Us</Button>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
