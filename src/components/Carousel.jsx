import { useState, useEffect } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const Carousel = ({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current => (current === 0 ? children.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent(current => (current === children.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='slides-container'>
      <div
        className='slides'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>

      <div className='buttons'>
        <button onClick={prev} className='button'>
          <BsChevronLeft size={40} />
        </button>

        <button onClick={next} className='button'>
          <BsChevronRight size={40} />
        </button>
      </div>

      <div className='indicator-container'>
        <div className='indicators'>
          {children.map((_, i) => (
            <div
              key={i}
              className='indicator'
              style={current === i ? { padding: '0.2rem' } : { opacity: '0.5' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
