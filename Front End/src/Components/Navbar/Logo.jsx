import { RiMenuFold4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <div>
            <Link to={'/'}> <RiMenuFold4Fill className="w-6 h-6" /></Link>
        </div>
    )
}

export default Logo