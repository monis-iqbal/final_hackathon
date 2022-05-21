import Navbar from '../Navbar';
import './form.css'
import Lock from "../pics/Lock.jpg"
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { auth } from '../authentication/Firebase';


const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const signUp = e => { 
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        ).then(user => { 
            console.log(user)
        }).catch(err => { 
            console.log(err)
        })
    } 

    return (
        <>
            <Navbar />

            <div className='login_main_div'>
                <form>
                    <img src={Lock} alt="auth icon" className='lock_form' />
                    <h2 className='form_heading'>LOGIN</h2>
                    <label>Email:</label>
                    <br />
                    <input type="email" className='input_width' ref={emailRef}/>
                    <br />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" className='input_width' ref={passwordRef} />
                    <br />
                    <button className='form_button'>LOGIN</button>
                    <br />
                    <p>Don't have Account &nbsp;<span className='switch_form'><Link to="/Signup" className='navbar_button'><b>Sign up</b></Link></span></p>
                </form>

            </div>
        </>
    );
};
export default Login;