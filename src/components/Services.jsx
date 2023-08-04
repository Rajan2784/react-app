import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/2.png'
import img2 from '../assets/1.jpg'
import '../styles/services.scss';

const Services = () => {
  return (
    <div className='services'>

        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={true} interval={2000}
        showThumbs={true} className='carosel'>

            <div className='image'>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack Developer</p>
            </div>

            <div className='image'>
                <img src={img2} alt="Item1" />
                <p className='legend'>Coding Set Up</p>
            </div>

            <div className='image'>
                <img src={img1} alt="Item1" />
                <p className='legend'>FullStack Developer</p>
            </div>

        </Carousel>
      
    </div>
  )
}

export default Services
