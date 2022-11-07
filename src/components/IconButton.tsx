import React from "react";
import { ReactComponent as ButtonImage } from "../images/assets/button.svg";

interface ButtonInterface {
    type: string;
}
const IconButton = (props: ButtonInterface) => {
    return (
        <button>
            <ButtonImage fill="blue" className="w-20" transform="scale(1,1)" />
        </button>
    );
};

export default IconButton;
