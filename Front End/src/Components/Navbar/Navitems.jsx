import { FiUser } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

const Navitems = () => {
    return (
        <div className="flex items-center md:gap-5 gap-3">
            <div className="flex items-center gap-1 md:gap-3">
                <FiUser className="w-5 h-5 cursor-pointer hover:text-primary duration-200" />
                <IoHeartOutline className="w-5 h-5 cursor-pointer hover:text-primary duration-200" />
            </div>
            <div>
                <button className="btn btn-sm bg-primary text-white capitalize">
                    <span className="hidden md:inline-block">
                        <BsCart4 className="w-5 h-5" />
                    </span>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Navitems;
