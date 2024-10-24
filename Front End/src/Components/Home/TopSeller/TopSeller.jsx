import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Categories from "./Categories/Categories";
import BookList from "./BookList/BookList";
import { useState } from "react";


const TopSeller = () => {

    const [selectedCategory, setSelectedCategory] = useState('Choose a Genre');

    const { data: books, isLoading, error } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axios.get('/Data/data.json');
            return res.data
        }
    })


    return (
        <div>

            <div className="pt-10">
                <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
            </div>

            {/* category filtering */}
            <div>
                <Categories books={books} isLoading={isLoading} error={error} setSelectedCategory={setSelectedCategory}></Categories>
            </div>
            {/* category filtering */}

            {/* Book List */}
            <BookList books={books} isLoading={isLoading} error={error} selectedCategory={selectedCategory}></BookList>
            {/* Book List */}

        </div>
    )
}

export default TopSeller