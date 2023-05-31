import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import {list} from '../data'


const Carousel = () => {
  
  const [people] = useState(list)
  
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(()=>{
    let sliderId = setInterval(()=>{
      nextSlide();
    },2000)

    return()=>{
      clearInterval(sliderId);
    }
  },[])
  // const {id,image,name,title,quote} = currentPerson

  return (
    <main className="slider-container">
      {people.map((person: any, personIndex: number) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1: 0,
              visibility: personIndex === currentPerson ? "visible": "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>

            <button className="prev" onClick={prevSlide}>
              <RxCaretLeft />
            </button>
            <button className="next" onClick={nextSlide}>
              <RxCaretRight />
            </button>

            <FaQuoteRight className="icon" />
          </article>
        );
      })}
    </main>
  );
};
export default Carousel;
