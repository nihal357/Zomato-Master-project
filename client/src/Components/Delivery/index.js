import React, { useState } from "react";


// components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard"

const Delivery = () => {
    // const [restaurantList, setRestaurantList] = useState([
    //     {
    //         _id: "1234567",
    //         photos: ["https://b.zmtcdn.com/data/reviews_photos/c53/819476e0225ebc6b3debaa2c4fce0c53_1627552252.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
    //         name: "Dacdenil's Burger",
    //         isPro: true,
    //         isOff: 80,
    //         durationOfdelivery: 47,
    //         restaurantReviewValue: 4,
    //         cuisine: ["Burger", "Fast Food"],
    //         averageCost: 100,
    //     },
    // ]);
    return (
        <>
            <DeliveryCarousal />
            {/* <Brand /> */}
            {/* <div className="flex justify-between flex-wrap">
                {
                    restaurantList.map((restaurant) => {
                        <RestaurantCard {...restaurant}
                            key={restaurant._id}
                        />
                    })
                }
            </div> */}
            <RestaurantCard />
        </>
    );
};

export default Delivery;