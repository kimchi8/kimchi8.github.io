import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function MiniConnectBar() {
    return (
        <div className="flex flex-col">
            <div className="mt-10">
                <div id="connect-text" className="whitespace-nowrap absolute left-[55vw] top-[-6vh]">
                    {"c o n n e c t"}
                </div>
                <div
                    id="middle-line"
                    className=" w-[20em] border-ultramarine border-y-2 absolute left-[43vw] top-[-7vh]"
                ></div>
                <div id="connect-icons" className="flex flex-row gap-5 absolute bottom-28 left-[52vw]">
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
        </div>
    );
}

export default MiniConnectBar;
