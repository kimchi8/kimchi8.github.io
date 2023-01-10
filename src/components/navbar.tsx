// This component renders the fixed top navbar

import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [homeUnderline, setHomeUnderline] = useState(false);
    const [aboutUnderline, setAboutUnderline] = useState(false);
    const [workUnderline, setWorkUnderline] = useState(false);

    /**
     * This styling handles the wave animation when you hover over
     * home,about or work
     */
    const waveAnimationCss = `relative z-1000 overflow-hidden pb-2
                        decoration-2
                        before:content-[attr(data-text)attr(data-text)] 
                        before:underline before:underline-offset-8 
                        before:decoration-wavy before:decoration-ultramarine
                        before:absolute before:whitespace-nowrap 
                        before:text-transparent hover:before:animate-wave
                        hover:cursor-pointer
                        `;

    const scrollToSection = (sectionName: string) => {
        const element = document.getElementById(sectionName);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-screen h-10 absolute pb-14 bg-transparent" style={{ zIndex: 1, padding: "1vw" }}>
            <div className="justify-center items-center text-center pt-5 fixed left-[42%] bg-transparent">
                <ul className="flex flex-row gap-14 bg-transparent ">
                    <li
                        data-text="Home"
                        onMouseOver={() => {
                            setHomeUnderline(true);
                        }}
                        onMouseLeave={() => {
                            setHomeUnderline(false);
                        }}
                        onClick={() => {
                            scrollToSection("home");
                        }}
                        className={`${homeUnderline ? `${waveAnimationCss}` : "underline-none"} bg-transparent `}
                    >
                        <Link activeClass="active" to="welcome" spy={true} smooth={true} duration={500}></Link>
                        Home
                    </li>
                    <li
                        data-text="About"
                        onMouseOver={() => {
                            setAboutUnderline(true);
                        }}
                        onMouseLeave={() => {
                            setAboutUnderline(false);
                        }}
                        onClick={() => {
                            scrollToSection("about");
                        }}
                        className={`${aboutUnderline ? `${waveAnimationCss}` : "underline-none"} bg-transparent `}
                    >
                        About
                    </li>
                    <li
                        data-text="Work"
                        onMouseOver={() => {
                            setWorkUnderline(true);
                        }}
                        onMouseLeave={() => {
                            setWorkUnderline(false);
                        }}
                        onClick={() => {
                            scrollToSection("work");
                        }}
                        className={`${workUnderline ? `${waveAnimationCss}` : "underline-none"} bg-transparent `}
                    >
                        Work
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
