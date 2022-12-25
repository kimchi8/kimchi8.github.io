import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import ConnectBar from "./components/connectBar";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
};

interface boxInterface {
    num: number;
}
const Box = (props: boxInterface) => {
    const { num } = props;
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
        <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
            <h1 className="mb-[50em] h-48 ">Box {num} </h1>
        </motion.div>
    );
};

function App() {
    return (
        <div className="App">
            <Navbar />
            <ConnectBar />
        </div>
    );
}

export default App;
