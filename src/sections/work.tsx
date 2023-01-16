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
        <>
            <div className="mt-[30vh] ml-40">
                <div>
                    <div id="imgBx" className="flex ml-40">
                        <div id="work-title-container" className="lg:h-[120vh] 2xl:h-[115vh] mb-10 bg-transparent ">
                            <div id="blank-audera-text" className="sticky top-[11.5rem] bg-transparent ml-16">
                                <div className=" w-10 bg-transparent tracking-widest">
                                    <WorkText className="bg-transparent w-48 " />
                                </div>
                            </div>
                            <div className="sticky top-10 bg-transparent ml-16" id="full-audera-text">
                                <div className="my-[100vh] w-10 bg-transparent text-6xl tracking-widest">
                                    <WorkBlank className="bg-transparent w-48 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    id="work"
                    className="flex"
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                    ref={ref}
                >
                    <div className="bg-black w-5/6 ml-10">
                        <WorkCarousel />
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Work;
