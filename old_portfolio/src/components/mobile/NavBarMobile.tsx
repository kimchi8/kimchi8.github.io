import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import * as StringUtil from "../../utils/String";

interface NavBarInterface {
    labels: string[];
}

const NavBarMobile = ({ labels }: NavBarInterface) => {
    const [menu, setMenu] = useState<boolean>(false);
    return (
        <div id="mobile-navbar" className="md:hidden flex items-center">
            <button
                className="outline-none mobile-menu-button"
                onClick={() => {
                    setMenu(!menu);
                }}
            >
                <svg
                    className=" w-6 h-6 focus:text-grey-500"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div id="mobile-menu" className={menu ? "" : "hidden"}>
                {labels.map((name: string) => {
                    return (
                        <div className="" id="navbar-mobile-menu">
                            <ul className="">
                                <li>
                                    <a className="" href={name}>
                                        {name}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavBarMobile;
