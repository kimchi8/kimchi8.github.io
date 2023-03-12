import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { scrollToSection } from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MobileNavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const styles = {
        bmBurgerButton: {
            position: "fixed",
            width: "40px",
            height: "30px",
            right: "36px",
            top: "36px",
        },
        bmBurgerBars: {
            background: "#2644F5",
        },
        bmBurgerBarsHover: {
            background: "#a90000",
        },
        bmCrossButton: {
            height: "40px",
            width: "40px",
        },
        bmCross: {
            background: "#2644F5",
        },
        bmMenu: {
            background: "#FCF8E5",
            padding: "2em 0em 0em",
            fontSize: "1.15em",
            overflow: "none",
        },
        bmOverlay: {
            background: "rgba(0, 0, 0, 0.5)",
        },
    };
    return (
        <div className="md:hidden lg:hidden">
            <Menu
                right
                className="flex justify-center text-center bg-butter"
                width={"25em"}
                isOpen={isOpen}
                onOpen={() => {
                    setIsOpen(!isOpen);
                }}
                styles={styles}
            >
                <ul>
                    <li
                        id="home"
                        className="text-ultramarine p-1 my-3"
                        onClick={() => {
                            scrollToSection("home");
                            setIsOpen(!isOpen);
                        }}
                    >
                        Home
                    </li>
                    <li
                        id="about"
                        className="text-ultramarine p-1 my-3"
                        onClick={() => {
                            scrollToSection("about");
                            setIsOpen(!isOpen);
                        }}
                    >
                        About
                    </li>
                    <li
                        id="work"
                        className="text-ultramarine p-1 my-3"
                        onClick={() => {
                            scrollToSection("work");
                            setIsOpen(!isOpen);
                        }}
                    >
                        Work
                    </li>
                </ul>
                <div
                    id="connect-container"
                    className="text-ultramarine p-1 my-3 absolute bottom-10 flex justify-center items-center text-center -ml-10"
                >
                    <p id="mobile-tablet-connect-text-bottom" className="py-3">
                        {"c o n n e c t"}
                    </p>

                    <div id="connect-icons" className="w-5/6 gap-5 flex flex-row">
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
            </Menu>
        </div>
    );
}

export default MobileNavBar;
