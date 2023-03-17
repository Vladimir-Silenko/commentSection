import { mainTextInput, warningText } from "./vars.js";
/** This function validates if an input element has a value and changes the input's style if it does not*/
export const inputValidator = (input) => {
    if (!input.value) {
        // set red border if input has no value
        input.style.border = '1px solid red';
        // add oninput event listener to change border to gray when user types in input
        input.oninput = function () {
            mainTextInput.style.border = '1px solid gray'
        };
        // set warning text color to red
        warningText.style.color = 'red';
        // set timeout to change warning text color back to black after 2 seconds
        setTimeout(() => {
            warningText.style.color = "transparent";
        }, 2000);
    }
}