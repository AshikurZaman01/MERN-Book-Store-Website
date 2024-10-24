import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from "../Home/TopSeller/BookList/BookCard";

const RecommendedBooks = () => {
    const { data: books, isLoading, error } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axios.get('/Data/data.json');
            return res.data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading books: {error.message}</div>;
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6 mt-20">Recommended For You</h2>
            <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {books && books.length > 0 ? (
                    books.map(book => (
                        <SwiperSlide key={book._id}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                ) : (
                    <div>No books available.</div>
                )}
            </Swiper>
        </div>
    );
}

export default RecommendedBooks;
