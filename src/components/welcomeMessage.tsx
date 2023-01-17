import kimchi from "../images/kimchi.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function WelcomeMessage() {
    return (
        <div
            id="home"
            className="lg:grid lg:grid-cols-6 xs:flex xs:justify-center xs:items-center md:ml-14 w-screen h-screen lg:mt-28 xs:w-fit content-center lg:full"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, 200, 0], transition: { duration: 1.5 } }}
                exit={{ opacity: 0 }}
                className="col-span-4 xs:col-span-5 flex flex-col justify-center sm:ml-[10vw] md:ml-[20vw] bg-transparent"
            >
                <TypeAnimation
                    sequence={["Hello", 2000, "👋", 2000, "Hello"]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="text-6xl mb-10 bg-transparent"
                />
                <h4 className="whitespace-pre-wrap sm:text-2xl text-3xl font-raleway font-bold text-left">{`I'm Kim & I like to build \nwebsites`}</h4>
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
                className="col-span-2 sm:hidden w-4/6 ml-14"
            >
                <img alt="characterised kimchi" src={kimchi} />
            </motion.div>
        </div>
    );
}

export default WelcomeMessage;
