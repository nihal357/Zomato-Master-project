import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = (props) => {
    return (
        <>
            <div className="bg-white p-4 w-full mb-7 md:w-1/2 lg:w-1/3 transition duration-700 ease-in-out rounded-2xl hover:shadow-lg">
                <div className="w-full h-56 lg:h-64 relative">
                    <div className="absolute w-full bottom-4 flex items-end justify-between">
                        <div className="flex flex-col gap-2 items-start">

                         
                                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
                           


                            
                                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹ 80 off</span>
                            

                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded mr-3">44 min</span>
                    </div>
                    <img
                        src="https://b.zmtcdn.com/data/pictures/chains/6/3300046/fc013e28cda53e1d3a11657c44bf3d41.jpg?fit=around|300:273&crop=300:273;*,*"
                        alt="food"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="my-2 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">Panino The Sandwich World</h4>
                        <span className="bg-green-800 text-white flex items-center text-sm p-1 rounded">3.7 <AiTwotoneStar /></span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>Sandwich, Fast Food, Beverages, Shake</p>
                        <p>₹ 150 for one</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantCard;