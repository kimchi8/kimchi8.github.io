import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import * as StringUtil from "../utils/String";

interface NavBarInterface {
    labels: string[];
}

const NavBar = ({ labels }: NavBarInterface) => {
    return (
        <nav>
            <div className="container flex flex-wrap gap-28 items-center mx-auto ">
                <a className="flex items-center" href={""}>
                    <img src={require("../images/navbar/chiken.jpeg")} className="sm:h-14" alt="Home Logo Button" />
                </a>
                {labels.map((name: string) => {
                    return (
                        <div className="w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <a
                                        className="list-none"
                                        // className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                        href={name}
                                    >
                                        {name}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default NavBar;
