import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useCreateOrderMutation } from "../../Redux/features/Order/orderApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cartItems, totalPrice }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [checkOutDetails, setCheckOutDetails] = useState({
        name: currentUser?.displayName || '',
        phn: '',
        street: '',
        city: '',
        country: '',
        state: '',
        zipCode: '',
        email: currentUser?.email || ''
    });

    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [createOrder, { isLoading }] = useCreateOrderMutation();

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setIsChecked(checked);
        } else {
            setCheckOutDetails({
                ...checkOutDetails,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            setErrorMessage("You must agree to the Terms & Conditions and Shopping Policy.");
            return;
        }

        const emptyFields = Object.entries(checkOutDetails)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (emptyFields.length > 0) {
            setErrorMessage(`Please provide a value for: ${emptyFields.join(', ')}`);
            return;
        }

        setErrorMessage('');

        const newOrder = {
            name: checkOutDetails.name,
            email: checkOutDetails.email,
            address: {
                street: checkOutDetails.street,
                city: checkOutDetails.city,
                country: checkOutDetails.country,
                state: checkOutDetails.state,
                zipcode: checkOutDetails.zipCode
            },
            phone: checkOutDetails.phn,
            productIds: cartItems.map((item) => item._id),
            totalPrice: totalPrice
        };

        try {
            await createOrder(newOrder).unwrap();
            toast.success('Order placed successfully!');
            setCheckOutDetails({
                name: '',
                city: '',
                country: '',
                state: '',
                street: '',
                zipCode: '',
                phn: '',
                email: currentUser?.email || ''
            });
            setIsChecked(false);
            navigate('/orders');
        } catch (error) {
            setErrorMessage(error.message || "Failed to place order");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                            <label htmlFor="name">Full Name</label>
                            <input
                                value={checkOutDetails.name}
                                onChange={onChange}
                                type="text"
                                name="name"
                                id="name"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="email">Email Address</label>
                            <input
                                value={checkOutDetails.email}
                                onChange={onChange}
                                type="email"
                                name="email"
                                id="email"
                                disabled
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="email@domain.com"
                            />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="phn">Phone Number</label>
                            <input
                                value={checkOutDetails.phn}
                                onChange={onChange}
                                type="tel"
                                name="phn"
                                id="phn"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="+123 456 7890"
                            />
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="street">Address / Street</label>
                            <input
                                value={checkOutDetails.street}
                                onChange={onChange}
                                type="text"
                                name="street"
                                id="street"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="city">City</label>
                            <input
                                value={checkOutDetails.city}
                                onChange={onChange}
                                type="text"
                                name="city"
                                id="city"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="country">Country / region</label>
                            <input
                                value={checkOutDetails.country}
                                onChange={onChange}
                                type="text"
                                name="country"
                                id="country"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Country"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="state">State / province</label>
                            <input
                                value={checkOutDetails.state}
                                onChange={onChange}
                                type="text"
                                name="state"
                                id="state"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="State"
                            />
                        </div>

                        <div className="md:col-span-1">
                            <label htmlFor="zipCode">Zipcode</label>
                            <input
                                value={checkOutDetails.zipCode}
                                onChange={onChange}
                                type="text"
                                name="zipCode"
                                id="zipCode"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>

                        <div className="w-[300px] md:w-[500px]">
                            {errorMessage && <p className="text-red-500 font-semibold w-[100%]">{errorMessage}</p>}
                        </div>

                        <div className="md:col-span-5 mt-3">
                            <div className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="billing_same"
                                    id="billing_same"
                                    className="form-checkbox"
                                    checked={isChecked}
                                    onChange={onChange}
                                />
                                <label htmlFor="billing_same" className="ml-2">
                                    I agree to the <span className="underline text-blue-600">Terms & Conditions</span> and <span className="underline text-blue-600">Shopping Policy.</span>
                                </label>
                            </div>
                        </div>

                        <div className="md:col-span-5 text-right">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit" disabled={isLoading}>
                                {isLoading ? 'Placing Order...' : 'Place an Order'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
