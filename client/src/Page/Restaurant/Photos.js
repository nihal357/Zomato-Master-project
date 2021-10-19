import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';


// component
import PhotoCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/chains/0/3301200/a00f40f2447360c2b9e7cb12981a49ae.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/3301200/a992c1ada6443301c9487784343431ba.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/3301200/2a889b0634873b3621598568ffd09bf2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/3301200/ae42ee0a49892af3433a2e4e1b21ef1d.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/3301200/77f018aeb6d655829683e2a9c92880a9.jpg",
        
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={CurrentImg}
                    disableScroll={false}
                    onClose={closeViewer}
                />
            )}
            <div className="flex flex-wrap gap-2">
                {
                    photos.map((photo) => (
                        <PhotoCollection
                            image={photo}
                            openViewer={openViewer}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Photos;
