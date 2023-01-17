import { getBands, getBookings, getVenues, getBandMembers } from "./database.js";


const bookings = getBookings()
const venues = getVenues()
const bands = getBands()
const bandMembers = getBandMembers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")
            for (const venue of venues) {
                const bandsBooked = getBandsbyVenue(venue)
                if (venue.id === parseInt(venueId)) {
                    window.alert(`Upcoming Shows at ${venue.venueName}\n ${bandsBooked}`)
                }
            }
        }
    }
)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            for (const band of bands) {
                const members = getBandMembersbyBand(band)
                const venuesByBand = getVenuesbyBand(band)
                if (band.id === parseInt(bandId)) {
                    window.alert(`${band.bandName} is ${members}\n
                    Upcoming shows:\n ${venuesByBand}`)
                }
            }
        }
    }
)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [, bookingId] = itemClicked.id.split("--")
            for (const booking of bookings) {
                const bandInfo = getBandInfo(booking)
                if (booking.id === parseInt(bookingId)) {
                    window.alert(`${bandInfo}`)
                }
            }
        }
    }
)

const getBandMembersbyBand = (band) => {
    let bandMemberList = ""
    for (const member of bandMembers) {
        if (member.bandId === band.id)
        bandMemberList += `${member.firstName} ${member.lastName} (${member.bandRole})\n`
    }
    return bandMemberList
} 

const getBandsbyVenue = (venue) => {
    let bandsAtVenue = ""
    for (const booking of bookings) {
        if (booking.venueId === venue.id) {
            for (const band of bands) {
                if (band.id === booking.bandId) {
                bandsAtVenue += `${band.bandName}\n `
            }
            }
        }
    }
        return bandsAtVenue
    
}

const getVenuesbyBand = (band) => {
    let venuesByBand = ""
    for (const booking of bookings) {
        if (booking.bandId === band.id) {
            for (const venue of venues) {
                if (venue.id === booking.venueId)  {
                    venuesByBand += `${venue.venueName}\n `
                }
            }
        }
    }
    return venuesByBand
}


const getBandInfo = (booking) => {
    let bandInfo = ""
    for (const band of bands) {
        if (booking.bandId === band.id) {
            bandInfo = `${band.bandName}\n
                        ${band.genre}\n
                        Formed in ${band.yearFormed}\n
                        ${band.numOfMembers} band members`
        }
    }
    return bandInfo
}

const findBand = (booking, bands) => {
    let bandBooking = ""

    for (const band of bands) {
        if (band.id === booking.bandId) {
            bandBooking = band
        }
    }

    return bandBooking
}

const findVenue = (booking, venues) => {
    let bookingVenue = ""

    for (const venue of venues) {
        if (booking.venueId === venue.id) {
            bookingVenue = venue
        }
    }
    return bookingVenue
}


export const Bookings = () => {
    let html = "<ul>"
    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)
        html += `<li id="booking--${booking.id}">${band.bandName} is playing at ${venue.venueName} on ${booking.dateOfBooking}</li>`
    }
    html += "</ul>"

    return html
}


/*
Features List:
Create 3 Event Listeners

1. A venue is clicked, window alert
displays all bands that have booked venue
Function creates new array containing all bands

2. A Band is clicked, window alert
displays all venues band has booked

3. When a booking is clicked, window alert
displaying band name, genre, year formed, and members
eg: 
"Rocket Pumpkins
EDM
Formed in 2005
3 Band members"

*/