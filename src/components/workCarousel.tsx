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
import MiniConnectBar from "./miniConnectBar";

function WorkCarousel() {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                className=" h-[80vh]"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide className="mt-10">
                    <div className="flex w-[60vw] flex-row bg-transparent justify-between">
                        <img alt="audeara-logo" src={audeara} className="w-[30vw] ml-0" />
                        <p>Developed a login authentication site using Firebase + Javascript</p>
                        <div className="absolute">
                            <MiniConnectBar />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-[60vw] flex-row bg-transparent justify-between">
                        <img alt="swyftx-logo" src={swyftx} className="w-[30vw] ml-0" />
                        <p>
                            Collaborated in a team of 6, developing a new feature aimed at introducing and education
                            users to cryptocurrency Acted as a product manager, front-end coder and team leader in the
                            team Used React, Typescript & Figma as front-end stack Created and presented several pitches
                            to the Swyftx team
                        </p>
                        <div className="absolute">
                            <MiniConnectBar />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-[60vw] flex-row bg-transparent justify-between">
                        <img alt="ventures-logo" src={ventures} className="w-[30vw] ml-0" />
                        <p>
                            Represented and promoted UQ's entreprenurial start-up space throughout a range of community
                            led events
                        </p>
                        <div className="absolute">
                            <MiniConnectBar />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-[60vw] flex-row bg-transparent justify-between">
                        <img alt="elipse-logo" src={elipse} className="w-[30vw] ml-0" />
                        <p>web developer stuff</p>
                        <div className="absolute">
                            <MiniConnectBar />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-[60vw] flex-row bg-transparent justify-between">
                        <img alt="lit-logo" src={lit} className="w-[30vw] ml-0" />
                        <p>marketing</p>
                        <div className="absolute">
                            <MiniConnectBar />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-[60vw] flex-row bg-transparent justify-between">
                        <img alt="uq-logo" src={uq} className="w-[30vw] ml-0" />
                        <p>student stuff</p>
                        <div className="absolute">
                            <MiniConnectBar />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default WorkCarousel;
