import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ConnectBar() {
    return (
        <div className="flex flex-row">
            <div id="connect-text" className="whitespace-pre-line absolute left-24">
                {"c \n o \n n \n n \n e \n c \n t"}
            </div>
            <div id="middle-line" className=" h-[40em] border-ultramarine border-x-2  absolute left-20"></div>
            <div id="connect-icons" className="flex flex-col gap-5 absolute bottom-20 left-8">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </div>
        </div>
    );
}

export default ConnectBar;
