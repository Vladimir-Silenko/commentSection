import { nameInput, dateInput, mainTextInput, commentSection } from "./vars.js";
import { inputValidator } from './inputValidator.js'
import { resetForms } from './resetForms.js'
import { dateFormat, now } from './dateFormat.js'
import { commentsStorage } from "./storage.js";
import { showComments } from "./showComments.js";

export function publishComment() {
    // get  values or set initial values
    const userName = nameInput.value ? nameInput.value : 'Anonymous';
    const date = dateInput.value ? new Date(dateInput.value) : new Date(now);
    const mainText = mainTextInput.value;
    const commentId = Math.floor((Math.random() * 1000) + 1);
    // validate main text input
    inputValidator(mainTextInput);
    // check if main text input and user name input have values
    if (mainText && userName) {
        // create new comment object
        let newComment = {
            user: userName,
            date: dateFormat(date),
            text: mainText,
            id: commentId,
            liked: false,
            likes: 0
        };
        // add new comment object to comments array
        commentsStorage.push(newComment);
        showComments();
        // reset input forms
        resetForms();
        // scroll to bottom of comment section
        commentSection.scroll({
            top: 1000,
            behavior: 'smooth'
        });
    }
}