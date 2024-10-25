import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";
import { useSelector } from "react-redux";

const Navitems = () => {
    const currentUser = false;

    const { cartItems } = useSelector((state) => state.cart);

    return (
        <div className="flex items-center md:gap-5 gap-3">
            <div className="flex items-center gap-3">
                <UserProfile currentUser={currentUser}></UserProfile>

                <IoHeartOutline className="w-6 h-6 cursor-pointer hover:text-primary transition duration-200" />

            </div>

            <div>
                <Link to={"/cart"}>
                    <button className="btn btn-sm bg-primary text-black capitalize flex items-center">
                        <BsCart4 className="w-6 h-6" />
                        <span className={`text-md font-semibold ml-1 ${cartItems.length > 0 && "text-red-600"}`}>{cartItems.length}</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navitems;
