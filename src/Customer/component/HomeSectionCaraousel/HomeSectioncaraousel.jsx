import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Homesectioncard from '../HomeSectioncard/Homesectioncard'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import { Button } from "@mui/material"

const HomeSectioncaraousel = ({data,SectionName}) => {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  }

  const items = data?.map((item, index) => (
    <Homesectioncard key={index} product={item} />
  ))

  const visibleItems = responsive[1024].items
  const lastIndex = items?.length - visibleItems

  return (
    <div className="border">
        <h2 className='text-2xl font-extrabold text-gray-800'>{SectionName}</h2>
      <div className="relative p-5">

        <AliceCarousel
          ref={carouselRef}
          items={items}
          mouseTracking
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={(e) => setCurrentIndex(e.item)}
        />

        {/* NEXT BUTTON */}
        {currentIndex < lastIndex && (
          <Button
            onClick={() => carouselRef.current?.slideNext()}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: 0,
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
              color: 'black',
              zIndex: 50,
            }}
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
          </Button>
        )}

        {/* PREV BUTTON */}
        {currentIndex > 0 && (
          <Button
            onClick={() => carouselRef.current?.slidePrev()}
            sx={{
              position: 'absolute',
              top: '8rem',
              left: 0,
              transform: 'translateX(-50%) rotate(90deg)',
              bgcolor: 'white',
              color: 'black',
              zIndex: 50,
            }}
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)' }} />
          </Button>
        )}

      </div>
    </div>
  )
}

export default HomeSectioncaraousel
