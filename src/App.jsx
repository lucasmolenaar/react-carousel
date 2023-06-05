import Carousel from './components/Carousel';
import Image1 from './assets/1.jpg';
import Image2 from './assets/2.jpg';
import Image3 from './assets/3.jpg';
import Image4 from './assets/4.jpg';

function App() {
  const slides = [Image1, Image2, Image3, Image4];

  return (
    <div>
      <div className='container'>
        <Carousel autoSlide={true} autoSlideInterval={4000}>
          {slides.map(slide => (
            <img className='slide' key={slide} src={slide} alt='Slide' />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
