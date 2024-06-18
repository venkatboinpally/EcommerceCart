
import { Link } from "react-router-dom"
function Landing() {
    return (
        <>

        <div className="Main-div">
            <div className="Landing-div">

                <h1>

                    DIPPA'S MART



                </h1>
                <p>

                    The King of E-commerce and Personal Recommendations.

                </p>
                <Link to="/main" className="btn btn-primary">Shop Now</Link>
            </div>
            </div>
        </>
    )
}


export default Landing