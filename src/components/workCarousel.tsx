import { Swiper, SwiperSlide } from "swiper/react";
import audeara from "../images/companies/audeara.png";
import swyftx from "../images/companies/swyftx.png";
import uq from "../images/companies/uq.png";
import ventures from "../images/companies/ventures.png";
import elipse from "../images/companies/elipse.png";
import lit from "../images/companies/lit.png";

import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface WorkCarouselInterface {
    isMobile: boolean;
}

function WorkCarousel(props: WorkCarouselInterface) {
    const { isMobile } = props;

    return (
        <>
            <Swiper
                navigation={isMobile ? false : true}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                className={`${!isMobile && "md:my-12 lg:h-[80vh]"}`}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                <SwiperSlide className="flex justify-center items-center text-center">
                    <div className="flex md:w-[55vw] lg:w-[60vw] lg: max-lg:flex-col lg:flex-row bg-transparent justify-between max-md:justify-center max-lg:items-center max-md:w-5/6 max-md:-ml-12 max-md:mt-12 ">
                        <img alt="audeara-logo" src={audeara} className="w-[30vw] ml-0" />
                        <p className="max-lg:pb-24 flex justify-center items-center text-center lg:text-left px-8">
                            Developed a login authentication site using Firebase + Javascript
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-center">
                    <div className="flex md:w-[55vw] lg:w-[60vw] lg: max-lg:flex-col lg:flex-row bg-transparent justify-between max-md:justify-center max-lg:items-center max-md:w-5/6 max-md:-ml-12 max-md:mt-12 ">
                        <img alt="swyftx-logo" src={swyftx} className="w-[30vw] ml-0" />
                        <p className="max-lg:pb-24 flex justify-center items-center text-center lg:text-left px-8">
                            Collaborated in a team of 6, developing a new feature aimed at introducing and education
                            users to cryptocurrency Acted as a product manager, front-end coder and team leader in the
                            team Used React, Typescript & Figma as front-end stack Created and presented several pitches
                            to the Swyftx team
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-center">
                    <div className="flex md:w-[55vw] lg:w-[60vw] lg: max-lg:flex-col lg:flex-row bg-transparent justify-between max-md:justify-center max-lg:items-center max-md:w-5/6 max-md:-ml-12 max-md:mt-12 ">
                        <img alt="ventures-logo" src={ventures} className="w-[30vw] ml-0" />
                        <p className="max-lg:pb-24 flex justify-center items-center text-center lg:text-left px-8">
                            Represented and promoted UQ's entreprenurial start-up space throughout a range of community
                            led events
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-center">
                    <div className="flex md:w-[55vw] lg:w-[60vw] lg: max-lg:flex-col lg:flex-row bg-transparent justify-between max-md:justify-center max-lg:items-center max-md:w-5/6 max-md:-ml-12 max-md:mt-12 ">
                        <img alt="elipse-logo" src={elipse} className="w-[30vw] ml-0" />
                        <p className="max-lg:pb-24 flex justify-center items-center text-center lg:text-left px-8">
                            web developer stuff
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-center">
                    <div className="flex md:w-[55vw] lg:w-[60vw] lg: max-lg:flex-col lg:flex-row bg-transparent justify-between max-md:justify-center max-lg:items-center max-md:w-5/6 max-md:-ml-12 max-md:mt-12 ">
                        <img alt="lit-logo" src={lit} className="w-[30vw] ml-0" />
                        <p className="max-lg:pb-24 flex justify-center items-center text-center lg:text-left px-8">
                            marketing
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-center">
                    <div className="flex md:w-[55vw] lg:w-[60vw] lg: max-lg:flex-col lg:flex-row bg-transparent justify-between max-md:justify-center max-lg:items-center max-md:w-5/6 max-md:-ml-12 max-md:mt-12 ">
                        <img alt="uq-logo" src={uq} className="w-[30vw] ml-0" />
                        <p className="max-lg:pb-24 flex justify-center items-center text-center lg:text-left px-8">
                            student stuff
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default WorkCarousel;
