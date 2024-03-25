import React, { useState } from 'react';
import { Container, TextField, Button, Typography, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp2 = () => { 

  // Function to ensure user selected done
  const [done, setdone] = useState('');
  const [doneError, setdoneError] = useState('');

  const handledoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selecteddone = event.target.value;
    setdone(selecteddone);
    setdoneError(selecteddone ? '' : 'Please select all that apply');
  };

  // Function to ensure user selected help
  const [help, sethelp] = useState('');
  const [helpError, sethelpError] = useState('');

  const handlehelpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedhelp = event.target.value;
    sethelp(selectedhelp);
    sethelpError(selectedhelp ? '' : 'Please select all that apply');
  };

  // Function to ensure user selected major
  const [major, setmajor] = useState('');
  const [majorError, setmajorError] = useState('');

  const handlemajorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedmajor = event.target.value;
    setmajor(selectedmajor);
    setmajorError(selectedmajor ? '' : 'Please select all that apply');
  };

  // Function to ensure user selected country
  const [country, setcountry] = useState('');
  const [countryError, setcountryError] = useState('');

  const handlecountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedcountry = event.target.value;
    setcountry(selectedcountry);
    setcountryError(selectedcountry ? '' : 'Please select all that apply');
  };

//   const handleFinishSignUp = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     // Check if any field is empty
//     if (!done) {
//       setdoneError(event.target.value ? '' : 'Please select all that apply');
//     } if (!help){
//       sethelpError(event.target.value ? '' : 'Please select all that apply');
//     } if (!major){
//       setmajorError(event.target.value ? '' : 'Please select all that apply');
//     } if (!country){
//       setcountryError(event.target.value ? '' : 'Please select all that apply');
//     } if(done && help && major && country) {
//         window.location.href = "/mentors";
//         return;
//     } 
//   };
  
  return (
        <Container component="main" maxWidth={false} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', width: '100vw', backgroundColor: 'white', paddingLeft: '0 !important', overflow: 'auto' }}>
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
                Awesome! Tell us more about your goals for college.
                </Typography>
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
                What have you done so far?
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
                    id="done"
                    label="Please select all that apply"
                    name="done"
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
                    value={done}
                    onChange={handledoneChange}
                    error={!!doneError}
                    helperText={doneError}
                >
                    <option aria-label="None" value="" />
                    <option value="youtube">Watch YouTube</option>
                    <option value="talk">Talk to People</option>
                    <option value="apply">Started Application</option>
                    <option value="nothing">Nothing</option>
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
                What do you need help with?
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
                    id="help"
                    label="Please select all that apply"
                    name="help"
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
                    value={help}
                    onChange={handlehelpChange}
                    error={!!helpError}
                    helperText={helpError}
                >
                    <option aria-label="None" value="" />
                    <option value="resume">Resume Review</option>
                    <option value="interview">Mock Interview</option>
                    <option value="application">Application Writing</option>
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
                What majors are you interested in?
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
                    id="major"
                    label="Please select all that apply"
                    name="major"
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
                    value={major}
                    onChange={handlemajorChange}
                    error={!!majorError}
                    helperText={majorError}
                >
                    <option aria-label="None" value="" />
                    <option value="cs">Computer Science</option>
                    <option value="arts">Arts</option>
                    <option value="finance">Finance</option>
                    <option value="ds">Data Science</option>
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
                Which countries do you want to go to?
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
                    id="country"
                    label="Please select all that apply"
                    name="country"
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
                    value={country}
                    onChange={handlecountryChange}
                    error={!!countryError}
                    helperText={countryError}
                >
                    <option aria-label="None" value="" />
                    <option value="us">United States</option>
                    <option value="germany">Germany</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="uk">United Kingdom</option>
                    <option value="other">Other</option>
                </TextField>
                
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        component={Link}
                        to="/signup1"
                        variant="text"
                        style={{ 
                            color: '#00B1D2',
                            fontFamily: 'Arial',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <span style={{ textTransform: 'none' }}>&lt; Back</span>
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                        // onClick={handleFinishSignUp}
                        style={{ 
                            width: '160px',
                            fontFamily: 'Arial',
                            height: '45px',
                            flexShrink: '0',
                            borderRadius: '60px',
                            background: 'linear-gradient(100deg, #00B1D2 -5.85%, #5038ED 109.55%)',
                            boxShadow: '0px 8px 21px 0px rgba(0, 0, 0, 0.16)',
                        }}
                    >
                        <span style={{ textTransform: 'none' }}>Finish Sign Up</span>
                    </Button>
                </div>


                </form>
            </div>
            </Container>
        </Container>
  );
};

export default SignUp2;