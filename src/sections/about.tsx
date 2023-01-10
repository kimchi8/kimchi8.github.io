import aboutCard from "../images/about-card.png";
import actualKimchi from "../images/actual-kimchi.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import MiniConnectBar from "../components/miniConnectBar";

const boxVariant = {
    visible: { opacity: 1, y: [300, 0, 0], transition: { duration: 1.2 } },
    hidden: { opacity: 0, scale: 1 },
};

function About() {
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
        <motion.div
            id="about"
            className="flex justify-center mt-64 w-4/6"
            variants={boxVariant}
            initial="hidden"
            animate={control}
            ref={ref}
        >
            <div className="absolute">
                <MiniConnectBar />
            </div>
            <div id="container-about-card" className="relative flex z-0 ">
                <img src={aboutCard} className="ml-[14vw] z-0" />
                <h1 className="absolute left-[20vw] top-[-5vh] text-6xl bg-transparent z-0">About</h1>
                <p className="absolute top-20 left-[20vw] bg-transparent font-raleway font-bold text-black">
                    some text
                </p>
                <img src={actualKimchi} className="absolute right-[-10vw] top-20 w-2/6" />
                <p className="absolute right-[-3.5vw] top-[73vh] bg-transparent text-[.7em]">
                    Selfie of Me, Circa 2022
                </p>
            </div>
        </motion.div>
    );
}

export default About;
