import React from "react";

//This is a helper file for string manipulation stuff

/**
 * This function capitalises the first char in a string
 * @param word a string > 0
 * @returns a string with the first char capitalised
 */
export const makeFirstLetterUpperCase = (word: string) => {
    if (word == undefined || word == "" || word == null) {
        console.error("error, this is not a word");
    }
    return `${word[0].toUpperCase()}${word.slice(1)}`;
};
