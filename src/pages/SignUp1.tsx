import React from 'react';
import { Container, TextField, Button, Typography, Avatar, CssBaseline } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';

const SignUp1 = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{backgroundColor: "white",}}>
      <CssBaseline />
      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ margin: '8px', backgroundColor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Let's get you started!
        </Typography>
        <Typography variant="subtitle1">
          Set up your profile first.
        </Typography>
        <form style={{ width: '100%', marginTop: '24px' }} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dateOfBirth"
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="gender"
            label="Gender"
            name="gender"
            select
            SelectProps={{
              native: true,
            }}
          >
            <option aria-label="None" value="" />
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="school"
            label="School"
            name="school"
            autoComplete="school"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0 16px' }}
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp1;