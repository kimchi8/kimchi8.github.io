import React from "react";
import NavBarMobile from "./mobile/NavBarMobile";

interface NavBarInterface {
    labels: string[];
}

const NavBar = ({ labels }: NavBarInterface) => {
    return (
        <nav className="container-lg flex flex-wrap justify-between max-w-7xl">
            <a className="hidden md:flex items-center py-4 px-2" href={""}>
                <img src={require("../images/navbar/chiken.jpeg")} className="sm:h-14" alt="Home Logo Button" />
            </a>
            <div id="regular-navbar" className="hidden md:flex flex-wrap gap-28 items-center mx-auto font-nunito">
                {labels.map((name: string) => {
                    return (
                        <div className="w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                                <li>
                                    <a className="list-none hover:underline decoration-wavy" href={name}>
                                        {name}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
            {/* mobile version  */}
            <NavBarMobile labels={labels} />
        </nav>
    );
};

export default NavBar;
