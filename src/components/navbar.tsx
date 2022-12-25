// This component renders the fixed top navbar

import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [homeUnderline, setHomeUnderline] = useState(false);
    const [aboutUnderline, setAboutUnderline] = useState(false);
    const [workUnderline, setWorkUnderline] = useState(false);

    const waveAnimationCss = `relative z-1000 overflow-hidden pb-2
                        decoration-2
                        before:content-[attr(data-text)attr(data-text)] 
                        before:underline before:underline-offset-8 
                        before:decoration-wavy before:decoration-ultramarine
                        before:absolute before:whitespace-nowrap 
                        before:text-transparent hover:before:animate-wave
                        hover:cursor-pointer
                        `;
    return (
        <div className="w-screen h-10 fixed pb-14 z-1000">
            <div className="justify-center items-center text-center pt-5 fixed left-[42%]">
                <ul className="flex flex-row gap-14 ">
                    <li
                        data-text="Home"
                        onMouseOver={() => {
                            setHomeUnderline(true);
                        }}
                        onMouseLeave={() => {
                            setHomeUnderline(false);
                        }}
                        className={homeUnderline ? `${waveAnimationCss}` : "underline-none"}
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
                        className={aboutUnderline ? `${waveAnimationCss}` : "underline-none"}
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
                        className={workUnderline ? `${waveAnimationCss}` : "underline-none"}
                    >
                        Work
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
