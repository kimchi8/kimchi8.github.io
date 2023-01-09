import { Swiper, SwiperSlide } from "swiper/react";
import audeara from "../images/companies/audeara.png";

import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function WorkCarousel() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                className=" h-[80vh]"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide className="mt-10">
                    <div className="flex w-[60vw] flex-row bg-transparent justify-between">
                        <img src={audeara} className="w-[30vw] ml-0" />
                        <p>some text</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}

export default WorkCarousel;
