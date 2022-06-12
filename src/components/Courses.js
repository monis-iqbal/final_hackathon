import Navbar from "./Navbar"
import '../components/forms/courses.css'
import Web_deve from "../components/pics/Web_deve.jpeg"
import Ccna from "../components/pics/Ccna.jpg"
import Video_editing from "../components/pics/Video_editing.png"
import Cca from "../components/pics/Cca.jpg"
import Python from "../components/pics/Python.jpeg"
import Graphic from "../components/pics/Graphic.jpg"
const Courses = () => {
    return (

        <>
            <Navbar />
            <h1 className="heading_course" ><b>Courses</b></h1>
            <div className="courses_div">
                <div className="column_all">
                    <img src={Web_deve} alt="web development logo" className="courses_img">
                    </img><br /><h5>Web Development</h5>
                    <span className="open"><b>OPEN</b></span><br />
                    <button className="apply_button">Apply</button>
                </div>

                <div className="column_all">
                    <img src={Ccna} alt="Ccna logo" className="courses_img">
                    </img><br /><h5>CCNA </h5>
                    <span className="open"><b>OPEN</b></span><br />
                    <button className="apply_button">Apply</button>
                </div>


                <div className="column_all">
                    <img src={Cca} alt="Cca logo" className="courses_img">
                    </img><br /><h5>CCA </h5>
                    <span className="open"><b>OPEN</b></span><br />
                    <button className="apply_button">Apply</button>
                </div>


                <div className="column_all">
                    <img src={Video_editing} alt="web development logo" className="courses_img">
                    </img><br /><h5>Video Editing</h5>
                    <span className="open"><b>OPEN</b></span><br />
                    <button className="apply_button">Apply</button>
                </div>


                <div className="column_all">

                    <img src={Python} alt="Python logo" className="courses_img">
                    </img><br /><h5>PYTHON</h5>
                    <span className="close"><b>CLOSE</b></span><br />
                    <button className="close_button">Soon</button>
                </div>


                <div className="column_all">
                    <img src={Graphic} alt="Graphic desiging logo" className="courses_img">
                    </img><br /><h5>Web Development</h5>
                    <span className="close"><b>CLOSE</b></span><br />
                    <button className="close_button">Soon</button>
                </div>
            </div>
        </>
    )
}

export default Courses;