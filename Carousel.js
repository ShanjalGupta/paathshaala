import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Carousel = () => (
  <Swiper spaceBetween={50} slidesPerView={1}>
    <SwiperSlide>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Lessons and insights from 8 years</h2>
        <p className="text-lg mt-2">Kunal Ahirrao</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Another Slide</h2>
        <p className="text-lg mt-2">Description for the second slide</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Third Slide</h2>
        <p className="text-lg mt-2">Description for the third slide</p>
      </div>
    </SwiperSlide>
  </Swiper>
);

export default Carousel;
