import { useAuth } from '../../Context/AuthContext'
import { useGetOrdersByEmailQuery } from '../../Redux/features/Order/orderApi';

const Orders = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isError, isLoading } = useGetOrdersByEmailQuery(currentUser?.email);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching orders</div>;
    }

    return (
        <div>
            <div className='container mx-auto p-6'>
                <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
            </div>

            <div>
                {orders.length === 0 ? (
                    <div className='text-center'>No Orders Found</div>
                ) : (
                    orders.map((order) => (
                        <div key={order._id} className='space-y-2 shadow-sm px-5 py-3 rounded-md hover:shadow-lg transition-all duration-300 ease-in-out'>

                            <div className=' my-3 space-y-1'>
                                <h3 className='font-bold'>Order Id: {order._id}</h3>
                                <h4 className='font-medium text-gray-500'>Name : {order.name}</h4>
                                <h4 className='font-medium text-gray-500'>Name : {order.email}</h4>
                                <h4 className='font-medium text-gray-500'>Phone : {order.phone}</h4>
                                <h4 className='font-medium text-gray-500'>totalPrice : {order.totalPrice}</h4>
                            </div>

                            <div>
                                <h3 className='font-semibold'>Address : </h3>
                                <h4>{order.address.street}</h4>
                            </div>

                            <div>
                                <h3 className='font-semibold'>Product Id:</h3>
                                <h4>{order.productIds.map((id) => (
                                    <div key={id} className='flex items-center'>
                                        <span key={id}>{id}, </span>
                                    </div>
                                ))}</h4>
                            </div>

                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;
