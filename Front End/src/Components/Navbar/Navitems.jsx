import { FiUser } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

const Navitems = () => {
    const currentUser = true;

    return (
        <div className="flex items-center md:gap-5 gap-3">
            <div className="flex items-center gap-3">
                <div>
                    {
                        currentUser ? (
                            <img
                                className="w-8 h-8 bg-cover rounded-full cursor-pointer hover:border-primary hover:border-2 transition duration-150"
                                src="https://avatar.iran.liara.run/public/20"
                                alt="User Avatar"
                            />
                        ) : (
                            <FiUser className="w-6 h-6 cursor-pointer hover:text-primary transition duration-200" />
                        )
                    }
                </div>
                <IoHeartOutline className="w-6 h-6 cursor-pointer hover:text-primary transition duration-200" />
            </div>

            <div>
                <button className="btn btn-sm bg-primary text-black capitalize flex items-center">
                    <BsCart4 className="w-6 h-6" />
                    <span className="text-md font-semibold ml-1">0</span>
                </button>
            </div>
        </div>
    );
}

export default Navitems;
