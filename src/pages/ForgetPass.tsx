// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, GGprovider } from '../services/firebase';
// import { signInWithEmailAndPassword, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import {Link} from "react-router-dom";
import logo from "../assets/logo/unimate_logo.png";

const ForgetPass = () => {
//   const navigate = useNavigate();

//   const handlePassReset = async (event: React.FormEvent<HTMLFormElement>) => {

//   };

  return (
    <Container component="main" maxWidth={false} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: 'white', paddingLeft: '0 !important' }}>
      <Container  maxWidth={false} sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'left', 
        height: '100vh', 
        width: '100vw', 
        borderRadius: '0px 70px 0px 0px',

        // backgroundImage: `url(${loginBackground})`, 
        // backgroundSize: 'cover', 
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
      }}>
        <div>
          <Link to='/'><img src={logo} height= '100'/></Link>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10%'}}>
            <Typography variant="h5" component="h1" gutterBottom sx={{textAlign: 'left', color: '#00B1D2', fontSize: '32px', fontWeight: '700'}}>
                Forgot password?
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{textAlign: 'left', color: '#525252', fontSize: '16px', fontWeight: '400'}}>
            Don't worry, we'll help you reset your password
            </Typography>

            <form>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                placeholder='Email'
                autoFocus
                InputProps={{
                style: {
                    borderRadius: '50px',
                    border: '1px solid #00B1D2',
                    background: '#F2FDFF'
                },
                startAdornment: (
                    <EmailOutlined sx={{ marginRight: '8px' }} />
                ),
                }}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                mt: 3, 
                mb: 2 , 
                background: 'linear-gradient(100deg, #00B1D2 -5.85%, #5038ED 109.55%)',
                borderRadius: '20px',
                boxShadow: '0px 8px 21px 0px rgba(0, 0, 0, 0.16)'
                }}
            >
                Reset Password
            </Button>

            <Grid container justifyContent="center">
                <Grid item>
                <Button size="small" sx={{color: '#00B1D2'}}>
                    <Link to="/login">Back to log in</Link>
                </Button>
                </Grid>
            </Grid>
            </form>
        </div>

      </Container>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '70vw', justifyContent: 'center'}}>

      <Container sx={{ padding: 4 }}>
        

      </Container>
      </div>
    </Container>
  );
};

export default ForgetPass;