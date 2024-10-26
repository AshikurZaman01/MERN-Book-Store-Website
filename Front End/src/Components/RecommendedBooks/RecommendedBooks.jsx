import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from "../Home/TopSeller/BookList/BookCard";
import { useFetchAllBooksQuery } from "../../Redux/features/book/bookApi";

const RecommendedBooks = () => {
    const { data: books = [] } = useFetchAllBooksQuery();

    const bookList = books.data || [];

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
                {bookList.length > 0 ? (
                    bookList.slice(8, 20).map(book => (
                        <SwiperSlide key={book._id}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="text-center">No books available.</div>
                )}
            </Swiper>
        </div>
    );
}

export default RecommendedBooks;
