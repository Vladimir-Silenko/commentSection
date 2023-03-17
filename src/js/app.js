
// import { commentsStorage } from './modules/storage.js'
import { commentsStorage, updateCommentsStorage } from './modules/storage.js'
import { showComments } from './modules/showComments.js'
import { commentSection, mainTextInput, publishBtn, } from './modules/vars.js'
import { publishComment } from './modules/publishComment.js'
import { isLIked } from './modules/isliked.js'

showComments()



// add event listener to publish button to publish a comment
publishBtn.addEventListener('click', publishComment)

// add event listener to main text input to allow publishing comment with the 'enter' key
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        publishComment()
    }
}
mainTextInput.addEventListener('keypress', handleKeyPress)


// This event listener deletes a comment object from the comments array and removes the comment element from the DOM
commentSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('comment__delete-btn')) {

        const nodeToDelete = event.target.parentNode.parentNode

        // remove comment object from comments array if delete button is clicked
        updateCommentsStorage(commentsStorage.filter(comment => comment.id !== parseInt(event.target.id)));


        // remove comment element from DOM if delete button is clicked
        nodeToDelete.style.marginLeft = '-100%'
        setTimeout(() => {
            nodeToDelete.remove()
        }, 500);
        ;
    }
})



//=========Like events=========




commentSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('like-btn')) {
        isLIked(event)
    }

})





