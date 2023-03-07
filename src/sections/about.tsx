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
            className="flex md:justify-center max-md:py-32 md:py-24 lg:mt-64 lg:py-44 w-screen bg-transparent max-md:px-10"
            variants={boxVariant}
            initial="hidden"
            animate={control}
            ref={ref}
        >
            <div
                id="about-card-container"
                className="card card-side lg:w-8/12 md:w-10/12 max-md:w-screen bg-white rounded-3xl shadow-[10px_10px_0px_0px_rgba(38,68,245,1)]"
            >
                <div id="about-body" className="card-body bg-white rounded-3xl bg-transparent">
                    <h1
                        id="about-title"
                        className="card-title absolute left-[4vw] top-[-4vh] 2xl:top-[-1vw] text-6xl bg-transparent z-0"
                    >
                        About
                    </h1>
                    <p className="bg-transparent font-raleway font-thin text-black py-10">
                        I am currently studying for my Bachelor in Computer Science at the University of Queensland. I
                        also work as a web developer at eLIPSE and love to take on new opportunities related to all
                        things design, code & tech.
                    </p>
                    <div className="card-actions md:justify-end max-sm:justify-center bg-white">
                        <button className="btn btn-primary">Checkout my Resume</button>
                    </div>
                </div>
                <figure className="bg-white">
                    <img src={actualKimchi} alt="photo of kim" className="max-md:hidden" />
                </figure>
            </div>
        </motion.div>
    );
}

export default About;
