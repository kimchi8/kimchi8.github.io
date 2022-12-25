// This component renders the fixed top navbar

import { useState } from "react";

function Navbar() {
    const [homeUnderline, setHomeUnderline] = useState(false);
    const [aboutUnderline, setAboutUnderline] = useState(false);
    const [workUnderline, setWorkUnderline] = useState(false);

    const waveAnimationCss = `relative overflow-hidden pb-2
                        decoration-2
                        before:content-[attr(data-text)attr(data-text)] 
                        before:underline before:underline-offset-8 
                        before:decoration-wavy before:decoration-ultramarine
                        before:absolute before:whitespace-nowrap 
                        before:text-transparent hover:before:animate-wave`;
    return (
        <div className="flex gap-14 justify-center items-center text-center pt-5 fixed left-[42%]">
            <a
                data-text="Home"
                onMouseOver={() => {
                    setHomeUnderline(true);
                }}
                onMouseLeave={() => {
                    setHomeUnderline(false);
                }}
                className={homeUnderline ? `${waveAnimationCss}` : "underline-none"}
            >
                Home
            </a>
            <a
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
            </a>
            <a
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
            </a>
        </div>
    );
}

export default Navbar;
