import { now } from "./dateFormat.js"
import { dateFormat } from "./dateFormat.js"

export let commentsStorage = [
    {
        user: 'Vladimir Silenko',
        date: dateFormat(now),
        text: `Frontend development brings joy and fun through the creation of visually
        appealing and interactive user interfaces that enhance user experience and satisfaction.`,
        id: 1,
        liked: false,
        likes: 1
    },
    {
        user: 'Ivan Petrov',
        date: dateFormat(now),
        text: `I completely agree with this message! Creating visually appealing and interactive user interfaces is a challenging yet rewarding task, as it can greatly enhance the user experience and satisfaction. With the rapid growth of technology, the demand for skilled frontend developers has also increased, making it a promising career path.`,
        id: 2,
        liked: false,
        likes: 1
    },
]


export function updateCommentsStorage(newComments) {
    commentsStorage = newComments
}

