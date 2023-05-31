import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Slider from 'react-slick'

import { FaQuoteRight } from "react-icons/fa";
import {list as people} from '../data'


const SlickCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    // fade: true,
    slidesToScroll: 1,
    autoplay: true
  };
  

  return (
    <section className="slick-container">
        <Slider {...settings}>
        {people.map((person: any) => {
          const { id, image, name, title, quote } = person;
          return (
            <div
              key={id}
              className="slick-slide"
            >
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>

              <FaQuoteRight className="icon" />
            </div>
          );
        })}
          
        </Slider>
    </section>
  )
}

export default SlickCarousel
