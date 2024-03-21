import { Container, Paper, Typography, TextField, Button, Grid, Divider } from '@mui/material';
import { EmailOutlined, LockOutlined, Google, Facebook } from '@mui/icons-material';
import {Link} from "react-router-dom";
import logo from "../assets/logo/unimate_logo.png";

const Login = () => {
  return (
    <Container component="main" maxWidth={false} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: 'white' }}>
      <Container style={{display: 'flex', flexDirection: 'column', textAlign: 'left', height: '100vh', width: '50vw', backgroundColor: '#00B1D2', borderRadius: '0px 70px 0px 0px'}}>
        <div>
          <Link to='/'><img src={logo} height= '100'/></Link>
        </div>
        <div style={{color: 'white', fontSize: '36px', fontWeight: '600'}}>
          Welcome to UniMate 
        </div>
      </Container>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '70vw', justifyContent: 'center'}}>
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{textAlign: 'left', color: '#00B1D2', fontSize: '32px', fontWeight: '700'}}>
          Login
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{textAlign: 'left', color: '#525252', fontSize: '16px', fontWeight: '400'}}>
          Login to access your UniMate account
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email or Phone"
          name="email"
          autoComplete="email"
          autoFocus
          InputProps={{
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
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{
            borderRadius: '50px',
            /*??????????????????????????????/*/ 
          }}
          InputProps={{
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
        <Divider sx={{ my: 3 }}>Login with Others</Divider>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="outlined" startIcon={<Google />} fullWidth 
              sx={{borderRadius: '50px', border: '1px solid #D9D9D9', fontSize: '14px', fontWeight: '400', color: '#777'}}
            >
              Continue with Google
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" startIcon={<Facebook />} fullWidth 
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

export default Login;