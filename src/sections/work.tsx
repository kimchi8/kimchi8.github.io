import workBox from "../images/work-box.png";
import { ReactComponent as WorkText } from "../images/work-fonts/work.svg";
import { ReactComponent as WorkBlank } from "../images/work-fonts/work-blank.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import audeara from "../images/companies/audeara.png";

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
                <div id="imgBx" className="flex ml-28 ">
                    <div id="work-title-container" className="h-[180vh] bg-transparent ">
                        <div id="blank-audera-text" className="sticky top-10 bg-transparent ml-16">
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
                <div> </div>
                <motion.div
                    id="about"
                    className="flex relative top-[-36vh] left-[-1.5vw] ml-[16vw] w-4/6 bg-transparent"
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                    ref={ref}
                >
                    <div className="flex flex-row gap-[15vw] bg-transparent">
                        {/* <img
                            alt="work experience container box"
                            src={workBox}
                            className="shadow-[0_25px_50px_-12px_#BFC5E8] rounded-3xl w-4/12 fixed z-0 top-20 left-40 "
                        /> */}
                        <img src={audeara} className="w-full" />
                        <p>some text</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Work;
