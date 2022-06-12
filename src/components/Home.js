import Navbar from "./Navbar";
import '../components/forms/form.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <h1 className="heading_course"><b>Our Facebook posts</b></h1>
            <div className="post_div">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4754515147983793&show_text=true&width=500" className="post" ></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4752383544863620&show_text=true&width=500" className="post" ></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4746761375425837&show_text=true&width=500" className="post"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4693126394122669&show_text=true&width=500" width="500" className="post" ></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4731155700319738&show_text=true&width=500" className="post" ></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4705246042910704&show_text=true&width=500" className="post" ></iframe>
            </div>
        </>

    )
}


export default Home;