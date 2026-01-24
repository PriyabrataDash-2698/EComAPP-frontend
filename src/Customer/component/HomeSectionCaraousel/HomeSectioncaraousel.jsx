import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Homesectioncard from '../HomeSectioncard/Homesectioncard';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectioncaraousel = () => {
    const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.5 },
};
const items = [1,1,1,1,1].map((item)=><Homesectioncard/>)
  return (
      <div className='border'>
          <div className='relative p-5'>
              <AliceCarousel
                  items={items}
                  disableButtonsControls
                  autoPlay
                  autoPlayInterval={1000}
                  infinite
                  responsive={responsive}
                  disableDotsControls
              />
              <Button
                  variant="contained"
                  sx={{
                      position: 'absolute',
                      top: '8rem',
                      right: '0rem',
                      transform: 'translateX(50%) rotate(90deg)',
                      bgcolor: 'white',
                      color: 'black',
                      zIndex: 50,
                      '&:hover': {
                          bgcolor: 'white',
                      },
                  }}
                  aria-label="next"
              >
                  <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
              </Button>

              <Button
                  variant="contained"
                  sx={{
                      position: 'absolute',
                      top: '8rem',
                      left: '0rem',
                      transform: 'translateX(-50%) rotate(90deg)',
                      bgcolor: 'white',
                      color: 'black',
                      zIndex: 50,
                      '&:hover': {
                          bgcolor: 'white',
                      },
                  }}
                  aria-label="next"
              >
                  <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)' }} />
              </Button>
          </div>
      </div>

  )
}

export default HomeSectioncaraousel