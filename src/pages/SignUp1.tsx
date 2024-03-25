import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Avatar, CssBaseline, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp1 = () => {
  // Function to handle file selection for upload photo
  const handleFileSelect = () => {
    // Process the file here (e.g., setting state or uploading)
  };
 
  // Function to validate date format
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const inputDate = event.target.value;
    // Regular expression to match DD/MM/YYYY format
    const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    setIsValid(regex.test(inputDate));
    setDateOfBirth(inputDate);
  };


  // Function to validate name input
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(false);

  const handleFullNameChange = (event) => {
    const inputFullName = event.target.value;
    setFullName(inputFullName);
    const validFullName = /^[a-zA-Z ]+$/.test(inputFullName);
    setError(!validFullName);
  };

  // Function to validate school name
  const [schoolName, setSchoolName] = useState('');
  const [errorSchool, setErrorSchool] = useState(false);

  const handleSchoolNameChange = (event) => {
    const inputSchoolName = event.target.value;
    setSchoolName(inputSchoolName);
    const validSchoolName = /^[a-zA-Z ]+$/.test(inputSchoolName);
    setErrorSchool(!validSchoolName);
  };

  // Function to validate phone number
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validatePhoneNumber = (value) => {
    const phoneNumberPattern = /^\d{10}$/; // Assuming 10-digit phone number
    if (!phoneNumberPattern.test(value)) {
        setPhoneNumberError('Please input a valid phone number!');
        return false;
    } else {
        setPhoneNumberError('');
        return true;
    }
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
    validatePhoneNumber(value);
  };

  // Function to ensure user selected gender
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    setGenderError(selectedGender ? '' : 'Please select a gender');
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
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Avatar style={{ width: '113px', height: '113px', flexShrink: 0, margin: '8px', backgroundColor: 'transparent' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none">
                        <path d="M56.5001 9.4165C30.5101 9.4165 9.41675 30.5098 9.41675 56.4998C9.41675 82.4898 30.5101 103.583 56.5001 103.583C82.4901 103.583 103.583 82.4898 103.583 56.4998C103.583 30.5098 82.4901 9.4165 56.5001 9.4165ZM56.5001 28.2498C65.5872 28.2498 72.9793 35.6419 72.9793 44.729C72.9793 53.8161 65.5872 61.2082 56.5001 61.2082C47.413 61.2082 40.0209 53.8161 40.0209 44.729C40.0209 35.6419 47.413 28.2498 56.5001 28.2498ZM56.5001 94.1665C46.9422 94.1665 35.6422 90.3057 27.5909 80.6065C35.548 74.3915 45.5767 70.6248 56.5001 70.6248C67.4234 70.6248 77.4522 74.3915 85.4092 80.6065C77.358 90.3057 66.058 94.1665 56.5001 94.1665Z" fill="#777777"/>
                    </svg>
                    </Avatar>
                    <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="#E0E0E0"/>
                        <path d="M15.4063 26.7399L13.8549 25.1885L25.6885 13.3549L27.2399 14.9063L15.4063 26.7399ZM17.3549 28.6885L27.2399 18.8035L28.7913 20.3549L18.9063 30.2399H17.3549V28.6885Z" fill="black"/>
                        <path d="M27.9646 10.3281C27.365 9.72851 26.381 9.72851 25.7814 10.3281L24.2814 11.8281L29.7814 17.3281L31.2814 15.8281C31.8809 15.2285 31.8809 14.2446 31.2814 13.645L27.9646 10.3281Z" fill="black"/>
                    </svg>
                    </div>
                </div>
                <Typography sx={{
                    color: '#00B1D2',
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    textAlign: 'left',
                }} display = "inline">
                    Upload a profile photo
                    <Typography sx={{
                        color: '#525252',
                        fontFamily: 'Arial',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                        textAlign: 'left',
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
                        },
                        inputProps: {
                            pattern: "[a-zA-Z ]+",
                            title: "Full name can only contain alphabets and spaces"
                        }
                    }}
                    autoFocus
                    value={fullName}
                    onChange={handleFullNameChange}
                    error={error}
                    helperText={error ? 'Please input your full name!' : ''}
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
                    type="text"
                    InputLabelProps={{ 
                        shrink: true 
                    }}
                    InputProps={{
                        style: {
                        borderRadius: "40px",
                        border: "1px solid #D0D0D0",
                        borderColor: isValid ? "#D0D0D0" : "#F44336", // Change border color based on validation
                        }
                    }}
                    error={!isValid} // Show error if date is invalid
                    helperText={!isValid ? "Please enter a valid format!" : ""}
                    value={dateOfBirth}
                    onChange={handleChange}
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
                    name="gender"
                    label="Enter preferred gender"
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
                    value={gender}
                    onChange={handleGenderChange}
                    error={!!genderError}
                    helperText={genderError}
                >
                    <option aria-label="None" value="" />
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Nonbinary</option>
                    <option value="selfdescribe">Self Describe</option>
                    <option value="prefernottoanswer">Prefer not to answer</option>
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
                        },
                        inputProps: {
                            pattern: "[a-zA-Z ]+",
                            title: "School name can only contain alphabets and spaces"
                        }
                    }}
                    value={schoolName}
                    onChange={handleSchoolNameChange}
                    error={errorSchool}
                    helperText={errorSchool ? 'Please input your current school!' : ''}
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
                    placeholder="Enter your phone number"
                    name="phone"
                    autoComplete="tel"
                    InputProps={{
                        style: {
                        borderRadius: "40px",
                        border: "1px solid #D0D0D0"
                        }
                    }}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    error={!!phoneNumberError}
                    helperText={phoneNumberError ? 'Please input a valid phone number!' : ''}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        component={Link}
                        to="/signup2"
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
                </div>
                </form>
            </div>
            </Container>
        </Container>
  );
};


export default SignUp1;