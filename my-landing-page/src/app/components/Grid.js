'use client'
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styles from '../styles/Grid.module.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CustomGrid = () => {
  return (
    <Box className={styles.container}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
          <Item className={styles.item}></Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
          <Item className={styles.item1}></Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
          <Item className={styles.item2}></Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
          <Item className={styles.item3}></Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomGrid;
