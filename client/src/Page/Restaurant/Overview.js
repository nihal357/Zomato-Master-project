import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/restaurant/MenuSimilarRestaurantcard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview';

const Overview = () => {
    const { id } = useParams();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12 ">
                    <h2 className="font-semibold text-lg md:text-xl my-4">About this Place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">
                            Menu
                        </h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menu <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection
                            menuTitle="Menu"
                            pages="3"
                            image={
                                [
                                    "https://b.zmtcdn.com/data/menus/200/3301200/054a2a2a79ef2a6df277066a0c6204ab.jpg",
                                    "https://b.zmtcdn.com/data/menus/200/3301200/054a2a2a79ef2a6df277066a0c6204ab.jpg",
                                    "https://b.zmtcdn.com/data/menus/200/3301200/a3004a6903bab13d8c03e5a27964538a.jpg",
                                    "https://b.zmtcdn.com/data/menus/200/3301200/c59e82a916f4ad94abf164ac7f518b77.jpg",
                                ]
                            }
                        />
                    </div>
                    <h4 className="text-lg font-medium my-4">
                        Cuisines
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">
                            Biryani
                        </span>
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">
                            Beverages
                        </span>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">
                            Average Cost
                        </h4>
                        <h6>
                            ₹200 for two people (approx.)
                        </h6>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">
                            Similar Restaurants
                        </h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/8/3300548/34cadd8512159e3e56563c607c73103b_featured_v2.jpg"
                                title="Shabana Bakery"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/8/3300548/34cadd8512159e3e56563c607c73103b_featured_v2.jpg"
                                title="Shabana Bakery"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/8/3300548/34cadd8512159e3e56563c607c73103b_featured_v2.jpg"
                                title="Shabana Bakery"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/8/3300548/34cadd8512159e3e56563c607c73103b_featured_v2.jpg"
                                title="Shabana Bakery"
                            />
                        </Slider>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">
                            Rate your experience for
                        </h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                        <Mapview
                            title="Biryani Center"
                            phno="+917700050050"
                            mapLocation={[21.163028433548604, 79.0764758291316]}
                            address="House 227/01, Azad Quare, Plot 141 And 287/141, Sadar, Sadar, Nagpur"
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-xl flex-col gap-4">
                    <Mapview
                        title="Biryani Center"
                        phno="+917700050050"
                        mapLocation={[21.163028433548604, 79.0764758291316]}
                        address="House 227/01, Azad Quare, Plot 141 And 287/141, Sadar, Sadar, Nagpur"
                    />
                </aside>
            </div>
        </>
    );
};

export default Overview;
