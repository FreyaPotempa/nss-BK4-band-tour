const database = {
    venues: [{
        id: 1,
        venueName: "Cobra",
        address: "527 Oak St.",
        squareFootage: 2000,
        maxOccupancy: 330
    }, {
        id: 2,
        venueName: "ExitIn",
        address: "24 ByGone Ave",
        squareFootage: 3000,
        maxOccupancy: 500 
    }, {
        id: 3,
        venueName: "Spotted Cat",
        address: "307 Frenchman St",
        squareFootage: 450,
        maxOccupancy: 75
    }, {
        id: 4,
        venueName: "D.B.A.",
        address: "5 Purple Tiger Dr",
        squareFootage: 900,
        maxOccupancy: 150
    }, {
        id: 5,
        venueName: "Hi-Ho Lounge",
        address: "28 Everyman St",
        squareFootage: 600,
        maxOccupancy: 100
    }, {
        id: 6,
        venueName: "Beaver Lodge",
        address: "82 East Nowhere Ave.",
        squareFootage: 360,
        maxOccupancy: 60
    }],
    bands: [{
        id: 1,
        bandName: "Wild Moustaches",
        numOfMembers: 6,
        genre: "folk",
        yearFormed: 2002
    }, {
        id: 2,
        bandName: "The BooBoos",
        numOfMembers: 4,
        genre: "punk",
        yearFormed: 2020
    }, {
        id: 3,
        bandName: "The Express Line",
        numOfMembers: 8,
        genre: "big band",
        yearFormed: 2015
    }, {
        id: 4,
        bandName: "Echo echo echo",
        numOfMembers: 5,
        genre: "new wave",
        yearFormed: 2017
    }, {
        id: 5,
        bandName: "Hairnet",
        numOfMembers: 4,
        genre: "rock",
        yearFormed: 2010
    }, {
        id: 6,
        bandName: "Mushroom Cloud",
        numOfMembers: 4,
        genre: "jazz",
        yearFormed: 2021
    }],
    bookings: [{
        id: 1, bandId: 6, venueId: 1, dateOfBooking: "03/12/23"
    }, {
        id: 2, bandId: 4, venueId: 1, dateOfBooking: "03/12/23"
    }, {
        id: 3, bandId: 6, venueId: 3, dateOfBooking: "03/12/23"
    }, {
        id: 4, bandId: 1, venueId: 2, dateOfBooking: "03/15/23"
    }, {
        id: 5, bandId: 3, venueId: 3, dateOfBooking: "03/17/23"
    }, {
        id: 6, bandId: 2, venueId: 5, dateOfBooking: "05/01/23"
    }, {
        id: 7, bandId: 3, venueId: 5, dateOfBooking: "08/22/23"
    }, {
        id: 8, bandId: 5, venueId: 5, dateOfBooking: "08/22/23"
    }, {
        id: 9, bandId: 6, venueId: 1, dateOfBooking: "10/31/23"
    }, {
        id: 10, bandId: 4, venueId: 4, dateOfBooking: "11/08/23"
    }],
bandMembers: [{
    id: 1, firstName: "Roger", lastName: "Dodger", yearBorn: 1998, bandRole: "singer", bandId: 1
}, {
    id: 2, firstName: "Bob", lastName: "Bobkins", yearBorn: 1989, bandRole: "drums", bandId: 1
}, {
    id: 3, firstName: "Pete", lastName: "Patout", yearBorn: 1976, bandRole: "guitar", bandId: 1
}, {
    id: 4, firstName: "Steve", lastName: "McQueen", yearBorn: 2004, bandRole: "harmonica", bandId: 2
}, {
    id: 5, firstName: "Jack", lastName: "Janoso", yearBorn: 1998, bandRole: "singer", bandId: 2
}, {
    id: 6, firstName: "Jofa", lastName: "Beets", yearBorn: 1980, bandRole: "singer", bandId: 3
}, {
    id: 7, firstName: "The", lastName: "Boy", yearBorn: 1992, bandRole: "singer", bandId: 4
}, {
    id: 8, firstName: "Gill", lastName: "Gillies", yearBorn: 2008, bandRole: "drums", bandId: 4
}, {
    id: 9, firstName: "Jerrica", lastName: "Star", yearBorn: 1998, bandRole: "singer", bandId: 5
}, {
    id: 10, firstName: "Jill", lastName: "Off", yearBorn: 1995, bandRole: "singer", bandId: 6
}]


}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getBandMembers = () => {
    return database.bandMembers.map(bandMember => ({...bandMember}))
}