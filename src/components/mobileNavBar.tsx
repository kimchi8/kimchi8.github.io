import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { scrollToSection } from "./navbar";

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
            padding: "2em 4em 0em",
            fontSize: "1.15em",
            overflow: "none",
        },
        bmOverlay: {
            background: "rgba(0, 0, 0, 0.5)",
        },
    };
    return (
        <div className="lg:hidden">
            <Menu
                right
                className="flex justify-center bg-butter"
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
            </Menu>
        </div>
    );
}

export default MobileNavBar;
