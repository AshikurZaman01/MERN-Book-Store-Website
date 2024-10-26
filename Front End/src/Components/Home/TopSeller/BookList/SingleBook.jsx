import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchSingleBookQuery } from '../../../../Redux/features/book/bookApi';
import { FaSpinner } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Redux/features/Cart/cartSlice';

const SingleBook = () => {

    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchSingleBookQuery(id);

    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (book) => {
        dispatch(addToCart(book?.data));
        setIsAdded(true);
    }

    if (isLoading) {
        return <div className='flex justify-center items-center h-[calc(100vh-120px)]'>
            <span><FaSpinner className='text-blue-500 text-4xl animate-spin mx-auto'></FaSpinner></span>
        </div>
    }

    if (isError) {
        return <div>Error...</div>
    }


    return (
        <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{book?.data?.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={book?.data?.coverImage}
                        alt={book?.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {book?.data?.category}
                    </p>
                    <p className="text-gray-700 text-justify md:w-[700px] bg-red"><strong>Description:</strong> {book?.data?.description}</p>
                </div>

                <button onClick={() => handleAddToCart(book)} className={`bg-primary px-6 py-2 rounded-md btn btn-md space-x-1 flex items-center gap-1 ${isAdded ? 'disabled' : ''}`} disabled={isAdded}>
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>

                </button>
            </div>
        </div>
    )
}

export default SingleBook