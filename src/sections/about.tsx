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
            className="flex justify-center sm:mt-8 md:mt-4 md:py-5 lg:mt-64 lg:py-44 w-4/6 "
            variants={boxVariant}
            initial="hidden"
            animate={control}
            ref={ref}
        >
            <div id="container-about-card" className="relative flex z-0 ">
                <img src={aboutCard} alt="a card with rounded borders shape" className="ml-[14vw] z-0" />
                <h1 className="absolute left-[20vw] top-[-3vh] text-6xl bg-transparent z-0">About</h1>
                <div className="absolute top-20 w-1/2 left-[20vw] bg-transparent font-raleway font-bold text-black">
                    <p className="bg-transparent font-raleway font-thin text-black pb-10">
                        I am currently studying for my Bachelor in Computer Science at the University of Queensland.
                    </p>
                    <p className="bg-transparent font-raleway font-thin text-black pb-10">
                        I also work as a web developer at eLIPSE and love to take on new opportunities related to all
                        things design, code & tech.
                    </p>
                </div>
                <img src={actualKimchi} alt="kim" className="absolute right-[-10vw] top-20 w-2/6" />
                <p className="absolute right-[-3.5vw] top-[73vh] bg-transparent text-[.7em]">
                    Selfie of Me, Circa 2022
                </p>
            </div>
        </motion.div>
    );
}

export default About;
