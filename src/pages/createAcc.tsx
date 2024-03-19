import React, { useState } from 'react';
import "../pages/createAcc.css";
import WhiteLogo from "../assets/WhiteUniMate.png"
import BlueRegion from "../assets/createAcc_blue.png"

export const CreateAcc = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the form submission
    };
    return (
        <div style={{height: '100vh', backgroundColor: 'white', fontFamily: 'Montserrat'}}>
            {/* Blue region on the left*/}
            <div style={{ position:'absolute', top: 0, left: 0, width: '30%', height: '100%', color: 'white', display: 'inline-block'}}>
                <img src={BlueRegion} alt="Blue Region Image" style={{ height: '100vh', width: 'auto' }} />
                <div style={{ position: 'absolute', top: '2%', left: '5%', color: 'white' }}>
                    <img src={WhiteLogo} alt="WhiteUniMate Logo" style={{display: 'block',width: '30%'}} />
                    <h1 style={{textAlign: 'left', marginLeft: '3%', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '600'}}>Welcome to UniMate</h1>    
                </div>
            </div>
            {/* White region on the right*/}
            <div style={{display: 'inline-block', width: '70%'}}>
                <form onSubmit={handleSubmit} style={{textAlign: 'left', width: '100%', maxWidth: '400px', marginLeft: '40%'}}>
                    <h2 style={{alignItems: 'left'}}>Create New Account</h2>
                    <div style={{ marginBottom: '20px'}}>
                        <label style={{display: 'block'}} htmlFor="fullName">Full Name</label>
                        <input style={{ height: '40px', width: '75%', borderRadius: 40, border: '1px #D0D0D0 solid'}} type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{display: 'block'}} htmlFor="phoneNumber">Phone Number</label>
                        <input style={{ height: '40px', width: '75%', borderRadius: 40, border: '1px #D0D0D0 solid'}} type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{display: 'block'}} htmlFor="email">Email Address</label>
                        <input style={{ height: '40px', width: '75%', borderRadius: 40, border: '1px #D0D0D0 solid'}} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{display: 'block'}} htmlFor="password">Create a Password</label>
                        <input style={{ height: '40px', width: '75%', borderRadius: 40, border: '1px #D0D0D0 solid'}} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '20px'}}>
                        <input type="checkbox" id="terms" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                        <label htmlFor="terms">I agree with the Terms of services and Privacy Policy</label>
                    </div>
                    <button style={{ display: 'block', background: 'linear-gradient(100deg, #00B1D2 0%, #5038ED 100%)', boxShadow: '0px 8px 21px rgba(0, 0, 0, 0.16)', color: 'white', margin: '0 auto', borderRadius: 60 }} type="submit">Continue with Email</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAcc;
