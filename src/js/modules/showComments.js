import { commentSection } from "./vars.js"
import { commentsStorage } from "./storage.js"

export function showComments() {
    commentsStorage.forEach(({ user, id, date, text, likes }) => {
        // check if the comment already exists in the DOM and update the existing comment
        const commentElement = document.querySelector(`#comment-${id}`)
        if (commentElement) {
            commentElement.querySelector('.comment__name').textContent = user
            commentElement.querySelector('.comment__date').textContent = date
            commentElement.querySelector('.comment__text').textContent = text
            commentElement.querySelector('.comment__likes-counter').textContent = `Likes: ${likes}`
        }
        else {
            // create a new comment element and append it to the comment section
            const newComment = document.createElement('div')
            newComment.id = `comment-${id}`
            newComment.classList.add('comment')
            newComment.innerHTML = `
          <div class="comment__header">
           <div class="comment__name">${user}</div>
           <div class="comment__date">${date}</div>
          </div>
          <div class="comment__text">${text}</div>
          <div class="comment__footer">
            <div class="heart"><button id="${id}" class="like-btn"></button></div>
            <span id="likes-counter${id}" class="comment__likes-counter">Likes: ${likes}</span>
            <button class="comment__reply-btn">Reply</button>
            <button id="${id}" class="comment__delete-btn">Delete</button>
          </div>
        `
            commentSection.appendChild(newComment)
        }
    })
}