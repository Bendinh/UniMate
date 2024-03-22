import React from 'react';
import { Container, TextField, Button, Typography, Avatar, CssBaseline, IconButton } from '@mui/material';

const SignUp1 = () => {
// Function to handle file selection
  const handleFileSelect = () => {
    // Process the file here (e.g., setting state or uploading)
  };
  return (
    <Container component="main" maxWidth={false} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: 'white', paddingLeft: '0 !important' }}>
        <Container maxWidth="xs" sx={{backgroundColor: "white"}}>
        <CssBaseline />
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h1" variant="h5" sx={{
                textAlign: "left",
                color: "#00B1D2",
                fontFamily: 'Arial',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
            }}>
            Let's get you started!
            </Typography>
            <Typography component="h1" variant="h5" sx={{
                color: "#00B1D2",
                fontFamily: 'Arial',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal'
            }}>
            Set up your profile first.
            </Typography>
            <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" onChange={handleFileSelect} />
            <Avatar style={{ margin: '8px', backgroundColor: 'secondary.main' }}>
            </Avatar>
            <Typography sx={{
                color: '#00B1D2',
                fontFamily: 'Arial',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                textAlign: 'left'
            }} display = "inline">
                Upload a profile photo
                <Typography sx={{
                    color: '#525252',
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    textAlign: 'left'
                }}>
                Accepts all image types(Optional but recommended). You can always edit later.
                </Typography>
            </Typography>
            </IconButton>
            <form style={{ width: '100%', marginTop: '24px' }} noValidate>
            <Typography variant="subtitle1" sx={{
                textAlign: "left",
                color: '#000',
                fontFamily: 'Arial',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
            }}>
            Full Name
                <Typography sx={{
                    color: '#F44336',
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }} display = "inline">
                    *
                </Typography>
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="fullName"
                name="fullName"
                autoComplete="name"
                placeholder='Enter your first and last name'
                InputProps={{
                    style: {
                      borderRadius: "40px",
                      border: "1px solid #D0D0D0"
                    }
                }}
                autoFocus
            />
            <Typography variant="subtitle1" sx={{
                textAlign: "left",
                color: '#000',
                fontFamily: 'Arial',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
            }}>
            Date of Birth
                <Typography sx={{
                    color: '#F44336',
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }} display = "inline">
                    *
                </Typography>
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="dateOfBirth"
                placeholder="Enter in [DD/MM/YYYY] format"
                name="dateOfBirth"
                type="date"
                InputLabelProps={{ 
                    shrink: true 
                }}
                InputProps={{
                    style: {
                      borderRadius: "40px",
                      border: "1px solid #D0D0D0"
                    }
                }}
            />
            <Typography variant="subtitle1" sx={{
                textAlign: "left",
                color: '#000',
                fontFamily: 'Arial',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
            }}>
            Gender
                <Typography sx={{
                    color: '#F44336',
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }} display = "inline">
                    *
                </Typography>
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="gender"
                label="Select your gender"
                name="gender"
                select
                SelectProps={{
                native: true,
                }}
                InputProps={{
                    style: {
                      borderRadius: "40px",
                      border: "1px solid #D0D0D0"
                    }
                }}
            >
                <option aria-label="None" value="" />
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </TextField>
            <Typography variant="subtitle1" sx={{
                textAlign: "left",
                color: '#000',
                fontFamily: 'Arial',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
            }}>
            School
                <Typography sx={{
                    color: '#F44336',
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }} display = "inline">
                    *
                </Typography>
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="school"
                placeholder="Enter your current school"
                name="school"
                autoComplete="school"
                InputProps={{
                    style: {
                      borderRadius: "40px",
                      border: "1px solid #D0D0D0"
                    }
                }}
            />
            <Typography variant="subtitle1" sx={{
                textAlign: "left",
                color: '#000',
                fontFamily: 'Arial',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
            }}>
            Phone Number
                <Typography sx={{
                    color: '#F44336',
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }} display = "inline">
                    *
                </Typography>
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="phone"
                label="Enter your phone number"
                name="phone"
                autoComplete="tel"
                InputProps={{
                    style: {
                      borderRadius: "40px",
                      border: "1px solid #D0D0D0"
                    }
                }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ 
                    width: '160px',
                    height: '45px',
                    flexShrink: '0',
                    borderRadius: '60px',
                    background: 'linear-gradient(100deg, #00B1D2 -5.85%, #5038ED 109.55%)',
                    boxShadow: '0px 8px 21px 0px rgba(0, 0, 0, 0.16)',
                }}
            >
                Next
            </Button>
            </form>
        </div>
        </Container>
    </Container>
  );
};

export default SignUp1;