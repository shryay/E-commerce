import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// const HomeSectioncarousel = () => {
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//     };
//     const items = [1,1,1,1,1].map((item) => <HomeSectionCard />);

    const HomeSectioncarousel = () => {
  
      // Define the responsive breakpoints
      const responsive = {
        0: { items: 1 },      // 1 item on small screens
        720: { items: 2 },    // 2 items for screens wider than 720px
        1024: { items: 4 },   // 4 items for screens wider than 1024px
        1440: { items: 5 },   // 5 items for larger screens
      };
      const items =[1,1,1,1,1,1,1,1,1].fill(null).map((_, index) => (
        <div
          key={index}
          className="flex-shrink-0 mx-4" // Prevent shrinking with margin
          style={{
            width: '100%', 
            maxWidth: '280px', // Maximum width for each card
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <HomeSectionCard />
        </div>
      ));
  
      

  return (
    <div className='border border-black'>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
              />
              <Button variant="contained" className="z-50 bg-white" sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor:"white" }} aria-label="next"> 
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} />
              </Button>

              <Button variant="contained" className="z-50 bg-white" sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor:"white" }} aria-label="next"> 
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} />
              </Button>
      </div>
    </div>
  );
};

export default HomeSectioncarousel;
