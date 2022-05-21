import { Link } from 'react-router-dom';
import '../components/forms/form.css'
import Smit_pic from '../components/pics/Smit_pic.png'

const Navbar = () => {
    return (
        <div className='navbar_div'>
            <img src={Smit_pic} alt="saylani logo" className='navbar_smit_pic'></img>
            <div className='navbar_button_div'>
                <Link to="/" className='navbar_button'><b>HOME</b></Link>
                <Link to="/courses" className='navbar_button'><b>Courses</b></Link>
                <Link to="/Signup" className='navbar_button'><b>Sign up</b></Link>
                <Link to="/Login" className='navbar_button'><b>Log in</b></Link>
                {/* <div className='dropdown_div'>
                    <button className='dropdown' >≡</button>

                </div> */}

            </div>
            {/* <div className='dropdown_div'>
                <button className='dropdown' ><b>≡</b></button>

            </div> */}

        </div>
    )
};

export default Navbar;

