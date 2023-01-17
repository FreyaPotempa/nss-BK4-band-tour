import { getVenues } from "./database.js";


const venues = getVenues()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.venueName}</li>`
    }

    html += "</ul>"

    return html
}