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
        <>
            <nav>
                <div>icon</div>
                {labels.map((name: string) => {
                    return (
                        <ul>
                            <li>
                                <a href={name}> {StringUtil.makeFirstLetterUpperCase(name)}</a>
                            </li>
                        </ul>
                    );
                })}
            </nav>
        </>
    );
};

export default NavBar;
