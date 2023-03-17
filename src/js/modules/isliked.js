import { commentsStorage } from "./storage.js"

/**
 * this function increments likes parametre, and change color of like button 
 */
export function isLIked(event) {
    const parent = event.target.parentNode
    for (let item = 0; item < commentsStorage.length; item++) {
        if (event.target.id == commentsStorage[item].id && !commentsStorage[item].liked) {
            commentsStorage[item].liked = true
            commentsStorage[item].likes += 1
            parent.parentNode.querySelector(`#likes-counter${commentsStorage[item].id}`).innerHTML = `Likes: ${commentsStorage[item].likes}`
            parent.style.setProperty('--color-pseudo', 'red')

        }
        else if (event.target.id == commentsStorage[item].id && commentsStorage[item].liked) {
            commentsStorage[item].liked = false
            commentsStorage[item].likes -= 1
            parent.parentNode.querySelector(`#likes-counter${commentsStorage[item].id}`).innerHTML = `Likes: ${commentsStorage[item].likes}`
            parent.style.setProperty('--color-pseudo', 'grey')

        }

    }



}