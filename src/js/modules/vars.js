export let now = new Date(Date.now())
// select the DOM elements for the comment section and delete button
export const commentSection = document.querySelector('.comments')
export const DeleteBtn = document.querySelector('.comment__delete-btn')

// select the DOM elements for the form
export const nameInput = document.querySelector('.comment-form__userName-input')
export const dateInput = document.querySelector('.comment-form__date-input')
export const mainTextInput = document.querySelector('.comment-form__mainText-input')
export const publishBtn = document.querySelector('.comment-form__publishBtn')
export const warningText = document.querySelector('.comments-warning')