import kimchi from "../assets/images/kimchi.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

/**
 * This component renders the kimchi character icon plus the animation text
 * welcome message
 * @returns a welcome message component
 */
function WelcomeMessage() {
    return (
        <div
            id="welcome-message-component"
            className="flex justify-center lg:pt-20 max-lg:h-screen max-md:-mt-28 max-md:px-10 items-center"
        >
            <div className="flex max-md:flex-col md:flex-row justify-between bg-transparent max-md:w-full md:w-10/12 lg:w-8/12">
                <motion.div
                    id="welcome-message-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: [0, 200, 0], transition: { duration: 1.5 } }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-center bg-transparent max-md:order-2 md:order-1"
                >
                    <TypeAnimation
                        sequence={["Hello", 2000, "👋", 2000, "Hello"]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        className="xs:text-5xl md:text-6xl mb-10 bg-transparent"
                    />
                    <h4
                        className="whitespace-pre-wrap xs:text-2xl md:text-3xl
                 font-raleway font-bold text-left"
                    >
                        {`I'm Kim & I like to build \nwebsites`}
                    </h4>
                </motion.div>

                <motion.div
                    id="kimchi-icon"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        x: [0, 100, 0],
                        rotate: [0, 0, 18, 18, 0],
                        transition: { duration: 1.7 },
                    }}
                    whileHover={{ rotate: [0, 18, 0, 0, 0] }}
                    className="max-lg:w-[32vw] lg:w-[25vw] flex max-md:order-1 max-md:pb-10  max-md:pt-56 md:order-2"
                >
                    <img alt="characterised kimchi" src={kimchi} />
                </motion.div>
            </div>
        </div>
    );
}

export default WelcomeMessage;
