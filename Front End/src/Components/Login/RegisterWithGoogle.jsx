import { FaGoogle, FaSpinner } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterWithGoogle = () => {
    const { loading, setLoading, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            const result = await signInWithGoogle();
            if (result.user) {
                toast.success("User Registered Successfully");
                navigate('/');
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="w-full flex justify-center items-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none transition duration-200"
            >
                {loading ? <FaSpinner className="animate-spin" /> :
                    <span className="flex  items-center">  <FaGoogle className="mr-2" />
                        <span>Sign in with Google</span></span>
                }
            </button>
        </div>
    );
};

export default RegisterWithGoogle;
