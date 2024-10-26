import Categories from "./Categories/Categories";
import BookList from "./BookList/BookList";
import { useState } from "react";
import { useFetchAllBooksQuery } from "../../../Redux/features/book/bookApi";


const TopSeller = () => {

    const [selectedCategory, setSelectedCategory] = useState('Choose a Genre');
    {/*
    const { data: books, isLoading, error } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axios.get('/Data/data.json');
            return res.data
        }
    })
    */}

    const { data: books = [] } = useFetchAllBooksQuery();

    return (
        <div>

            <div className="pt-10">
                <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
            </div>

            {/* category filtering */}
            <div>
                <Categories books={books.data} setSelectedCategory={setSelectedCategory}></Categories>
            </div>
            {/* category filtering */}

            {/* Book List */}
            <BookList books={books.data} selectedCategory={selectedCategory}></BookList>
            {/* Book List */}

        </div>
    )
}

export default TopSeller