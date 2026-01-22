import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './maincaraouselData';

const items = mainCarouselData.map((item)=>
    <img src={item.image}/>
)

const MainCaraousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite    
    />
);
export default MainCaraousel;