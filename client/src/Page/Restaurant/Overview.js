import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";

// components
import MenuCollection from '../../Components/restaurant/MenuCollection';

const Overview = () => {
    const { id } = useParams();
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full ">
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
                            image="https://b.zmtcdn.com/data/menus/890/19242890/bd0489816e78ae3296de4b6504b65e07.jpg"
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
                    </div>
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className="hidden md:block md:w-2/5 sticky top-2 bg-white p-3 shadow-xl"></aside>
            </div>
        </>
    );
};

export default Overview;
