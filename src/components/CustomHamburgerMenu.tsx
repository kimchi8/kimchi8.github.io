import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { scrollToSection } from "./Navbar";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/**
 * This component is the custom hamburger menu for mobile view
 * Features include an animated slide in and out transition for opening and closing
 * the menu, navigation with auto-scrolls to the appropraite section and displays the
 * connect with me on social media component.
 * @returns a hamburger menu
 */
function CustomHamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            id="custom-hamburger-container"
            className={`${isOpen && "h-screen"} relative w-screen transition ease-in-out`}
        >
            <FontAwesomeIcon
                id="hamburger-icon"
                className={`${isOpen && "hidden"} fixed right-5 top-5 text-2xl z-10 bg-transparent`}
                icon={faBars}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            />
            <FontAwesomeIcon
                id="exit-icon"
                className={`${!isOpen && "hidden"} fixed right-5 top-5 text-2xl z-[101] bg-transparent`}
                icon={faX}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            />
            <div
                id="open-menu-container"
                className={`${
                    !isOpen ? "translate-x-full " : "translate-x-100"
                } h-screen w-screen flex fixed z-[100] justify-between flex-col items-center py-20 ease-in-out duration-500
`}
            >
                <ul id="nav-list" className="flex justify-center text-center flex-col">
                    <li
                        id="home"
                        className="text-ultramarine p-1 my-3"
                        onClick={() => {
                            scrollToSection("welcome-message-component");
                            setIsOpen(!isOpen);
                        }}
                    >
                        Home
                    </li>
                    <li
                        id="about"
                        className="text-ultramarine p-1 my-3"
                        onClick={() => {
                            scrollToSection("about-card-container");
                            setIsOpen(!isOpen);
                        }}
                    >
                        About
                    </li>
                    <li
                        id="work"
                        className="text-ultramarine p-1 my-3"
                        onClick={() => {
                            scrollToSection("work-carousel-containers");
                            setIsOpen(!isOpen);
                        }}
                    >
                        Work
                    </li>
                </ul>
                <div
                    id="connect-container"
                    className="text-ultramarine p-1 my-3 absolute bottom-10 flex justify-center items-center text-center flex-col"
                >
                    <p id="mobile-tablet-connect-text-bottom" className="py-3">
                        {"c o n n e c t"}
                    </p>

                    <div id="connect-icons" className=" gap-5 flex flex-row">
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
        </div>
    );
}

export default CustomHamburgerMenu;
