import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { motion, useAnimation } from "framer-motion";
import { ReactComponent as Polaroid } from "../images/assets/polaroid-blank.svg";
import TypeAnimation from "react-type-animation";
import IconButton from "../components/IconButton";

const Home = () => {
    const animation = useAnimation();
    const [colourIndex, setColourindex] = useState<number>(0);
    //List of colours for the polaroid background
    const ColourChanges = ["#6868AD", "#F9E78B", "#BAB9B9", "#1B4182", "#FF7E6A"];

    //sequence of actions for hovering effect
    async function sequence() {
        await animation.start({ y: -10 });
        animation.start({ y: 10 });
    }

    //polaroid animation initial specs for hovering animation effect
    const bobbleAnimation = {
        initial: {
            y: -1000,
        },
        animate: {
            y: [-5, 0, -5],
            transition: {
                duration: 3,
                ease: "linear",
                repeat: Infinity,
            },
        },
    };

    /**
     * This function changes the colour of the polaroid backround
     */
    const shiftColourIndex = (index: number): void => {
        if (index === ColourChanges.length) {
            setColourindex(0);
        } else setColourindex(colourIndex + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            shiftColourIndex(colourIndex);
        }, 5000);
        sequence();
        return () => clearInterval(timer);
    }, [colourIndex]);

    return (
        <div className="overflow-hidden">
            <NavBar labels={["Home", "About", "Work"]} />
            <div className="center-item overflow-hidden">
                <div id="home-text" className="ml-10 w-2/4">
                    <div id="text-container" className=" font-nunito ml-20 mt-20">
                        <div className="w-96">
                            <TypeAnimation
                                className="text-6xl font-bold mb-10"
                                cursor={true}
                                sequence={["<Hello 👋 />", 5000, ""]}
                                wrapper="h2"
                                repeat={Infinity}
                            />
                        </div>
                        <p className="text-lg font-semibold w-10/12 ">
                            My Name is Kim & I am in my 3rd year of Computer Science. I am passionate about empowering
                            other girls in tech, coding & design.
                        </p>
                        <div className="flex mt-14 gap-28">
                            <IconButton type="mail" />
                            <IconButton type="linkedin" />
                            <IconButton type="github" />
                        </div>
                    </div>
                </div>
                <div id="polaroid" className="w-2/4 h-[85vh] ">
                    <motion.div className="relative" variants={bobbleAnimation} initial="initial" animate="animate">
                        <img
                            src={require("../images/home/polaroid-front.png")}
                            className="w-auto h-[85vh] absolute z-10"
                            alt="photo of Kim in a polaroid format"
                        />
                        <Polaroid
                            fill={ColourChanges[colourIndex]}
                            className="absolute left-16 top-14 z-0 w-auto h-[77vh]"
                            transform="scale(1.5,1.5)"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
