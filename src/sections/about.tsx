import actualKimchi from "../images/actual-kimchi.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
                <div id="about-body" className="card-body bg-white rounded-3xl bg-transparent w-4/6 max-md:w-full">
                    <h1
                        id="about-title"
                        className="card-title absolute left-[4vw] top-[-4vh] 2xl:top-[-1vw] text-6xl bg-transparent z-0"
                    >
                        About
                    </h1>
                    <p className="bg-transparent font-raleway font-thin text-black py-10 max-md:text-center">
                        I'm in my final semester studying for a Bachelor's degree in Computer Science at the University
                        of Queensland. I love all things related to web development and design and have experience in
                        programming languages, web development frameworks & programs such as JavaScript, Typescript,
                        React & Figma. I am also familiar with UI and UX design processes for developing web-based
                        products for clients.
                        <br />
                        <br /> One of my aspirations is to be a leader and role model for other girls in tech. I enjoy
                        taking on challenges and opportunities which advocate for underrepresented groups in the tech
                        industry. Some experiences include my time at UQ Ventures as a Student Ambassador for all things
                        startups and a Marketing Executive for ladies in a technology society.
                    </p>

                    <div className="card-actions md:justify-end max-md:justify-center bg-white">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                window.open(
                                    "https://drive.google.com/file/d/1UlaQ0iJ_bgkuRo8fH7eVTXeuATSjOluu/view?usp=sharing",
                                    "_blank"
                                );
                            }}
                        >
                            Checkout my Resume
                        </button>
                    </div>
                </div>
                <figure className="bg-white md:w-2/6 max-md:hidden">
                    <img src={actualKimchi} alt="kim" className="max-md:hidden" />
                </figure>
            </div>
        </motion.div>
    );
}

export default About;
