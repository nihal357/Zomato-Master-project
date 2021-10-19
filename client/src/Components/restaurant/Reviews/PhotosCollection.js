import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const PhotosCollection = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={props.image}
                    currentIndex={CurrentImg}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}
            <div className="w-32 h-24 flex flex-col md:w-48 md:h-48"
                onClick={openViewer}
            >
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                        src={props.image[0]}
                        alt="menu"
                        className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
                    />
                </div>
            </div>
        </>
    );
};

export default PhotosCollection;
