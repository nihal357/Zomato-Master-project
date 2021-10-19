import React from 'react';

// component 
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200 h-screen overflow-y-scroll w-1/4">
                    <MenuListContainer />
                </aside>
                <div className="w-full md:w-3/4"></div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
