import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <div className="flex justify-center items-center mt-44 text-4xl text-blue-600">
            <FaSpinner className="fa-spin animate-spin mx-auto" />
        </div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
