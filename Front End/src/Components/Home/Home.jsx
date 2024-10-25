import News from "../News/News";
import RecommendedBooks from "../RecommendedBooks/RecommendedBooks";
import Banner from "./Banner/Banner";
import TopSeller from "./TopSeller/TopSeller";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <TopSeller></TopSeller>

            <RecommendedBooks></RecommendedBooks>

            <News></News>

        </div>
    );
}

export default Home;
