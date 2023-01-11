import kimchi from "../images/kimchi.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function WelcomeMessage() {
    return (
        <div id="home" className="grid grid-cols-6 mt-28">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, 200, 0], transition: { duration: 1.5 } }}
                exit={{ opacity: 0 }}
                className="col-span-4 flex flex-col justify-center ml-[20vw]  bg-transparent"
            >
                <TypeAnimation
                    sequence={["Hello", 2000, "👋", 2000, "Hello"]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="text-6xl mb-10 bg-transparent"
                />
                <h4 className="whitespace-pre-wrap text-3xl font-raleway font-bold">{`I'm Kim & I like to build \nwebsites`}</h4>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    x: [0, 100, 0],
                    rotate: [0, 0, 18, 18, 0],
                    transition: { duration: 1.7 },
                }}
                whileHover={{ rotate: [0, 18, 0, 0, 0] }}
                className="col-span-2 w-4/6 ml-14"
            >
                <img alt="characterised kimchi" src={kimchi} />
            </motion.div>
        </div>
    );
}

export default WelcomeMessage;