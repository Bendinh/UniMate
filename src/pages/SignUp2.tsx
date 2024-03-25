import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Avatar, CssBaseline, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp2 = () => { 

  // Function to ensure user selected done
  const [done, setdone] = useState('');
  const [doneError, setdoneError] = useState('');

  const handledoneChange = (event) => {
    const selecteddone = event.target.value;
    setdone(selecteddone);
    setdoneError(selecteddone ? '' : 'Please select all that apply');
  };
  
  return (
        <Container component="main" maxWidth={false} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', width: '100vw', backgroundColor: 'white', paddingLeft: '0 !important' }}>
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
                    <option value="male">Resume Review</option>
                    <option value="female">Mock Interview</option>
                    <option value="nonbinary">Option 3</option>
                    <option value="selfdescribe">Option 4</option>
                    <option value="prefernottoanswer">Option 5</option>
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
                    <option value="male">Resume Review</option>
                    <option value="female">Mock Interview</option>
                    <option value="nonbinary">Option 3</option>
                    <option value="selfdescribe">Option 4</option>
                    <option value="prefernottoanswer">Option 5</option>
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
                    <option value="male">Resume Review</option>
                    <option value="female">Mock Interview</option>
                    <option value="nonbinary">Option 3</option>
                    <option value="selfdescribe">Option 4</option>
                    <option value="prefernottoanswer">Option 5</option>
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
                    <option value="male">Resume Review</option>
                    <option value="female">Mock Interview</option>
                    <option value="nonbinary">Option 3</option>
                    <option value="selfdescribe">Option 4</option>
                    <option value="prefernottoanswer">Option 5</option>
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