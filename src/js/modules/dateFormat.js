export let now = new Date(Date.now())
// set the date of 'now' to the current date, essentially removing the time component
now.setDate(now.getDate())

// define a function to format a date string based on the provided date
export const dateFormat = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    // if the date is today, return a string indicating so with the current time
    if (date.getDate() == now.getDate()) {
        return `Today ${hours}:${minutes}`
    }
    // the samee for yesterday
    else if (date.getDate() === (now.getDate() - 1)) {
        return `Yesterday ${hours}:${minutes}`
    }
    // other
    else {
        return `${days[date.getDay()]} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }
}
