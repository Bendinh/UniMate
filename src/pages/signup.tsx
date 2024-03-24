import React, { useState } from 'react';
import "../pages/signup.css";
import WhiteLogo from "../assets/WhiteUniMate.png"
import {auth, GGprovider, FBprovider} from "../services/firebase"
import { createUserWithEmailAndPassword,GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { Container, Paper, Typography, TextField, Button, Grid, Divider } from '@mui/material';
import { EmailOutlined, LockOutlined, Google, Facebook } from '@mui/icons-material';
import {Link} from "react-router-dom";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const CreateAcc = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword (auth, email, password) 
        .then ((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error)
        });
    };

    const GoogleSignIn = () => {
        signInWithPopup(auth, GGprovider)
        .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        });
    }

    const FacebookSignIn = () => {
        signInWithPopup(auth, FBprovider)
        .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
    // IdP data available using getAdditionalUserInfo(result)
        })
        .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        });
    }

    return (
        <Container component="main" maxWidth={false} sx={{padding: 0,display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100vh', width: '100vw', background: 'white' }}>
        <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'left', height: '100vh', width: '50vw', background: 'linear-gradient(100deg, #00B1D2 5.85%, #5038ED 109.55%)', borderRadius: '0px 70px 0px 0px'}}>
          <div>
            <Link to='/'><img src={WhiteLogo} height= '100'/></Link>
          </div>
          <div style={{color: 'white', fontSize: '36px', fontWeight: '600'}}>
            Welcome to UniMate 
          </div>
        </Container>
  
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '70vw', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
          <Typography variant="h5" component="h1" gutterBottom sx={{textAlign: 'left', color: '#00B1D2', fontSize: '32px', fontWeight: '700'}}>
            Join UniMate Today!
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{textAlign: 'left', color: '#525252', fontSize: '16px', fontWeight: '400'}}>
            Navigating your path to the international education
          </Typography>
          <form onSubmit={CreateAcc} >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            placeholder='Enter your email address (ex: 123@gmail.com)'
            onChange={(e) => setEmail(e.currentTarget.value)}
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              style: {
                borderRadius: '40px'
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
            label="Create a Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder='Enter your password'
            autoComplete="current-password"
            InputProps={{
              style: {
                borderRadius: '40px'
              },
              startAdornment: (
                <LockOutlined sx={{ marginRight: '8px' }} />
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
            Continue
          </Button>
          </form>
          <Grid container justifyContent="center">
            <Grid item>
              <Button size="small" sx={{color: '#00B1D2'}}>
                Already have an account? Log in
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item sx={{fontSize: '10px', width: "70%"}}>
                By continuing, you agree to the <b>Terms of Services</b>, <b>Privacy Policy</b>, and <b>Community Standard of UniMate</b>.
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }}>Continue with Others</Divider>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button onClick={GoogleSignIn} variant="outlined" startIcon={<Google />} fullWidth 
                sx={{borderRadius: '50px', border: '1px solid #D9D9D9', fontSize: '14px', fontWeight: '400', color: '#777'}}
            >
                Continue with Google
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={FacebookSignIn} variant="outlined" startIcon={<Facebook />} fullWidth 
                sx={{borderRadius: '50px', border: '1px solid #D9D9D9', fontSize: '14px', fontWeight: '400', color: '#777'}}
              >
                Continue with Facebook
              </Button>
            </Grid>
          </Grid>
        </Paper>
        </div>
      </Container>
    );
};

export default SignUp;
