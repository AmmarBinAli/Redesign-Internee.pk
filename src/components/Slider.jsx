import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "Internships that matter",
    description: "Join top companies and build real skills.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Grow your career",
    description: "Learn and earn with remote opportunities.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Your journey starts here",
    description: "Kickstart your future with internee.pk.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  }
];

const Slider = () => {
  return (
    <div className="mb-10">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="rounded-lg overflow-hidden shadow-xl"
      >
        {slides.map(slide => (
<SwiperSlide key={slide.id}>
  <div
    className="relative h-64 md:h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
    style={{ backgroundImage: `url(${slide.image})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
    <div className="relative z-10 px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        {slide.title}
      </h2>
      <p className="text-md md:text-xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] max-w-lg mx-auto">
        {slide.description}
      </p>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
