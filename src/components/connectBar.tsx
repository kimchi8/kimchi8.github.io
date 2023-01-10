import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function ConnectBar() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [0, 200, 0], transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className="flex flex-row"
        >
            <div className="mt-10">
                <div id="connect-text" className="whitespace-pre-line absolute left-28">
                    {"c \n o \n n \n n \n e \n c \n t"}
                </div>
                <div id="middle-line" className=" h-[40em] border-ultramarine border-x-2  absolute left-24"></div>
                <div id="connect-icons" className="flex flex-col gap-5 absolute bottom-56 left-12">
                    <a href="https://www.linkedin.com/in/kim-gao-71a295184/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/kimchi8" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="mailto: kimmygao808@gmail.com ">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default ConnectBar;
