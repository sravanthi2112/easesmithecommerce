import { Link } from "react-router-dom"
import './index.css'

const Thankyoupage = (props) => {
    const {activeplant} = props
    return(
        <div className="thankyou-page">
            <div>
                <h1>
                    Thank you for your interest in
                </h1>
                <h1 className="active-plant">{activeplant} !</h1>
                <Link to = "/">
                    <button>Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Thankyoupage




