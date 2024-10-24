import { useState, useEffect } from "react";

const Categories = ({ books, isLoading, error, setSelectedCategory }) => {
    // Use Set to remove duplicate categories and spread into an array
    const categories = [...new Set(books?.map(book => book.category))];


    const handleCatChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedCategory(selectedCategory);
    };


    return (
        <div>
            <div className="mb-8 flex items-center">
                <select
                    name="category"
                    id="category"
                    onChange={handleCatChange}
                    className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 pb-2 focus:outline-none"
                >
                    <option value="" className="text-gray-500" disabled>
                        Choose a Genre
                    </option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {isLoading ? (
                                <div className="skeleton h-4 w-full"></div>
                            ) : (
                                category.charAt(0).toUpperCase() + category.slice(1)
                            )}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Categories;
