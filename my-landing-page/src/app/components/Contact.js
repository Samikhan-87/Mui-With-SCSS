'use client'
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import contactStyles from '../styles/ContactForm.module.scss'; 

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // Example: console.log(formData);
  };

  return (
    <Container className={contactStyles.container}>
      <div className={contactStyles.formContainer}>
        <Typography variant="h4" className={contactStyles.formTitle}>
          Contact Us
        </Typography>
        <form className={contactStyles.form} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            className={contactStyles.inputField}
            fullWidth
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            className={contactStyles.inputField}
            fullWidth
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            className={contactStyles.inputField}
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={contactStyles.submitButton}
            fullWidth
          >
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
