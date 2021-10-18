import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import TabContainer from '../Components/restaurant/Tabs';


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
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarOutline /> Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div className="my-4">
                    <TabContainer />
                </div>
            </div>
        </>
    )
}

export default RestaurantLayout;
