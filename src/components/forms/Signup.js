import Navbar from '../Navbar';
import './form.css'
import Lock from "../pics/Lock.jpg"
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <>
            <Navbar />

            <div className='login_main_div'>
                <form>
                <img src={Lock} alt="auth icon" className='lock_form' />
                    <h2 className='form_heading'>SIGNUP</h2>
                    
                    <label>Email:</label>
                    
                    <br />
                    <input type="email" className='input_width' name='email' />
                    <br />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" className='input_width' name='password' />
                    <br />
                    <button className='form_button'>SIGNUP</button>
                    <br />
                    <p>Already have Account &nbsp;<span className='switch_form'><Link to="/Login" className='navbar_button'><b>Log in</b></Link></span></p>
                </form>

            </div>
        </>
    );
};
export default Signup;