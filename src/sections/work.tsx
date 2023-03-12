import { ReactComponent as WorkText } from "../images/work-fonts/work.svg";
import { ReactComponent as WorkBlank } from "../images/work-fonts/work-blank.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import WorkCarousel from "../components/workCarousel";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
};

/**
 * This renders the work slide down header and the carousel of past projects
 *
 * @returns the work component
 */
function Work() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <div id="work-container" className="w-screen flex flex-col justify-center bg-transparent mt-40 max-md:px-12">
            <div
                id="work-text-container"
                className="bg-transparent h-[150vh] max-lg:ml-0 lg:ml-40 lg:mb-0 mb-10 md:px-28 lg:px-0"
            >
                <WorkText className="bg-transparent w-48 sticky z-10 top-[40vh] max-lg:ml-0 lg:ml-40 " />
                <WorkBlank className="bg-transparent w-48 sticky z-50 top-[40vh] mt-[100vh] max-lg:ml-[.2rem] lg:ml-[10.3rem]" />
            </div>
            <div id="work-carousel-containers">
                <motion.div
                    id="mobile-work-carousel"
                    className="lg:hidden md:hidden max-md:block z-1 flex"
                    initial="hidden"
                    animate={control}
                    ref={ref}
                >
                    <div className="bg-transparent w-full">
                        <WorkCarousel isMobile={true} />
                    </div>
                </motion.div>
                <div
                    id="web-tablet-work-container"
                    className=" md:block lg:block sm:hidden md:min-h-[60vh] lg:min-h-[90vh] flex w-screen  object-center"
                >
                    <motion.div
                        id="web-tablet-work-carousel"
                        className="lg:w-screen md:h-0 lg:h-[70vh] md:w-5/6 z-1 bg-transparent"
                        variants={boxVariant}
                        initial="hidden"
                        animate={control}
                        ref={ref}
                    >
                        <div className="bg-transparent lg:w-5/6 lg:ml-36 md:ml-5 md:w-[90vw]">
                            <WorkCarousel isMobile={false} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Work;
