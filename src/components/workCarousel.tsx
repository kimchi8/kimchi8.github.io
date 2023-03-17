import { Swiper, SwiperSlide } from "swiper/react";
import workExperienceData from "../assets/workExperience.json";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * Props for the work carousel
 */
interface WorkCarouselInterface {
    isMobile: boolean;
}

/**
 * This function renders the carousel component for work experiences
 * Images are displayed by their unique id in the workExperience.json file
 * @param isMobile: triggers the left and right arrows to hide for mobile view
 * @returns a work carousel component
 */
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
                {workExperienceData.workExperiences.map((job) => {
                    return (
                        <SwiperSlide className="flex justify-center items-center text-center">
                            <div className="flex md:w-[55vw] lg:w-[60vw] lg: max-lg:flex-col lg:flex-row bg-transparent justify-between max-md:justify-center max-lg:items-center max-md:w-5/6 max-md:-ml-12 max-md:mt-12 ">
                                <img
                                    alt="audeara-logo"
                                    src={require(`../assets/images/companies/${job.id}.png`)}
                                    className="w-[30vw] ml-0"
                                />
                                <p
                                    id="work-experience-description"
                                    className="max-lg:pb-24 max-md:w-[78vw] flex justify-center items-center text-center max-lg:text-start lg:text-left px-8 whitespace-pre-wrap"
                                >
                                    {job.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}

export default WorkCarousel;
