import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, GGprovider } from '../services/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { Container, Typography, TextField, Button, Grid, Divider } from '@mui/material';
import { EmailOutlined, LockOutlined, Google } from '@mui/icons-material';
import {Link} from "react-router-dom";
import logo from "../assets/logo/logoWhite.png";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User is signed in, you can get the user info from userCredential.user
      console.log(userCredential.user); // For debugging, remove in production
      navigate('/'); // Redirect to the main page
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('User not found. Please try again.'); // Customize based on error.code for specific messages
    }
  };

  const GoogleSignIn = () => {
    signInWithPopup(auth, GGprovider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
      // Check if the user is new or existing
    const additionalUserInfo = getAdditionalUserInfo(result);
    if (additionalUserInfo?.isNewUser) {
      console.log('New user signed up via Google.');
      navigate('/signup'); // Redirect to sign up process
    } else {
      console.log('Existing user signed in via Google.');
      navigate('/'); // Redirect to the main page
    }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Google sign-in error (${errorCode}): ${errorMessage}`);
      // Optionally, update UI to show error message
      setErrorMessage('An error occurred during Google sign-in. Please try again.');
    });
}

  return (
    <Container component="main" maxWidth={false} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: 'white', paddingLeft: '0 !important' }}>
      <Container  maxWidth={false} sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'left', 
        height: '100vh', 
        width: '50vw', 
        background: 'linear-gradient(100deg, #00B1D2 -5.85%, #5038ED 109.55%)', 
        borderRadius: '0px 70px 0px 0px',
        // backgroundImage: `url(${loginBackground})`, 
        // backgroundSize: 'cover', 
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
      }}>
        <div>
          <Link to='/'><img src={logo} height= '100'/></Link>
        </div>
        <div style={{color: 'white', fontSize: '36px', fontWeight: '600'}}>
          Welcome to UniMate 
        </div>
      </Container>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '70vw', justifyContent: 'center'}}>

      <Container sx={{ padding: 4, maxWidth: 200, width: '50%' }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{textAlign: 'left', color: '#00B1D2', fontSize: '32px', fontWeight: '700'}}>
          Login
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{textAlign: 'left', color: '#525252', fontSize: '16px', fontWeight: '400'}}>
          Login to access your UniMate account
        </Typography>

        <form onSubmit={handleLogin}>
            
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

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder='Password'
            InputProps={{
              style: {
                borderRadius: '50px',
                border: '1px solid #00B1D2',
                background: '#F2FDFF'
              },
              startAdornment: (
                <LockOutlined sx={{ marginRight: '8px' }} />
              ),
            }}
          />

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button size="small" sx={{color: '#00B1D2'}}>
                Forgot Password?
              </Button>
            </Grid>
          </Grid>

          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

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
            Login
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Button size="small" sx={{color: '#00B1D2'}}>
                Don't have an account? Sign up
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, color: '#777' }}>Continue with Others</Divider>
          <Grid justifyContent="center" container spacing={2}>
            <Grid item xs={6}>
              <Button onClick={GoogleSignIn} variant="outlined" startIcon={<Google />} fullWidth 
                sx={{borderRadius: '50px', border: '1px solid #D9D9D9', fontSize: '14px', fontWeight: '400', color: '#777'}}
              >
                Continue with Google
              </Button>
            </Grid>
            {/* <Grid item xs={6}>
              <Button variant="outlined" startIcon={<Facebook />} fullWidth 
                sx={{borderRadius: '50px', border: '1px solid #D9D9D9', fontSize: '14px', fontWeight: '400', color: '#777'}}
              >
                Continue with Facebook
              </Button>
            </Grid> */}
          </Grid>
        </form>

      </Container>
      </div>
    </Container>
  );
};

export default Login;