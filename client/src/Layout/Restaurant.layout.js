import React from 'react';


//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';

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
            </div>
        </>
    )
}

export default RestaurantLayout;
