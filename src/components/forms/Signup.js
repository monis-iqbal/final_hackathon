import Navbar from '../Navbar';
import './form.css'
import Lock from "../pics/Lock.jpg"
import { Link } from 'react-router-dom';
import { useState } from "react";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged
// } from "firebase/auth";
// import { auth } from '../authentication/Firebase';


const Signup = () => {

    
    


    return (
        <>
            <Navbar />

            <div className='login_main_div'>
                <form method='POST' action={"/"}>
                    <img src={Lock} alt="auth icon" className='lock_form' />
                    <h2 className='form_heading'>SIGNUP</h2>

                    <label>Email:</label>

                    <br />
                    <input type="email" placeholder='Email...' className='input_width' name='email' id='2' 
                    />
                    <br />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" placeholder='Password...' className='input_width' name='password' id='1' />
                    <br />
                    <button className='form_button' >SIGNUP</button>
                    <br />
                    <p>Already have Account &nbsp;<span className='switch_form'><Link to="/Login" className='navbar_button'><b>Log in</b></Link></span></p>
                </form>

            </div>
        </>
    );
};
export default Signup;