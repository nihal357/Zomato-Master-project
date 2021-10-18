import React from 'react';


//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto lg:px-20">
                <ImageGrid images={[
                    "https://b.zmtcdn.com/data/pictures/0/19242890/14805d09420cc46017245a5e34ba6290.jpg",
                    "https://b.zmtcdn.com/data/pictures/0/19242890/14805d09420cc46017245a5e34ba6290.jpg",
                    "https://b.zmtcdn.com/data/pictures/0/19242890/14805d09420cc46017245a5e34ba6290.jpg",
                    "https://b.zmtcdn.com/data/pictures/0/19242890/14805d09420cc46017245a5e34ba6290.jpg",
                    "https://b.zmtcdn.com/data/pictures/0/19242890/14805d09420cc46017245a5e34ba6290.jpg",
                ]} />
                <RestaurantInfo
                    name="Biryani"
                    restaurantRating="3.8"
                    deliveryRating="3.5"
                    cuisine="Biryani"
                    address="Sadar, Nagpur" />
            </div>
        </>
    )
}

export default RestaurantLayout;
