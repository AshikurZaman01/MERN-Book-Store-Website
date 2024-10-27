import { Navigate } from "react-router-dom"; 
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />; 
    }

    return children;
};

export default PrivateRoute;
