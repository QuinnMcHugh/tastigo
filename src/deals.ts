import { IDeal } from "./interfaces";

export const allKnownDeals: IDeal[] = [
    {
        id: 1,
        title: "$2 Beers",
        description: "$2 Rainier Tall Boys, $3.49 Microbrew & Craft Ciders",
        establishmentName: "Royal Grinders",
        neighborhood: "Fremont",
        createdDateTime: new Date("2024-06-23T21:00:00Z"),
        location: "https://maps.app.goo.gl/vHtYSrhQyadoNdsd6",
        imageUrl: "/img/RoyalGrinders.webp",
        dealProof: "",
        occurrence: {
            allDay: true,
            recurrence: {
                pattern: 'weekly',
                patternSpecifics: {
                    days: ['thursday', 'friday', 'saturday', 'sunday'],
                },
                description: 'Thursday through Sunday',
            },
        },
    },
    {
        id: 2,
        title: "Mariner's Value Beers",
        description: "$4.5, $5.5, $6.5 beers available in certain sections",
        establishmentName: "T-Mobile Park",
        neighborhood: "SoDo",
        createdDateTime: new Date("2024-06-23T21:00:00Z"),
        dealProof: "https://www.mlb.com/mariners/ballpark/information/value-options/value-menu",
        location: "https://maps.app.goo.gl/NbEcAHqTBPqvKnvz6",
        imageUrl: "/img/marinersstadium.jpg",
        occurrence: {
            allDay: true,
            recurrence: {
                pattern: 'whenOpen',
            },
        },
    },
    {
        id: 3,
        title: "Happy Hour",
        description: "$11 cocktails all Sunday long",
        establishmentName: "Stampede",
        neighborhood: "Fremont",
        createdDateTime: new Date("2024-06-23T21:00:00Z"),
        location: "https://maps.app.goo.gl/FjpovUU5hgs5FVrm6",
        imageUrl: "/img/stampede_cocktail_club.webp",
        dealProof: "https://www.stampedecocktailclub.com/current-menu",
        occurrence: {
            allDay: true,
            recurrence: {
                pattern: 'weekly',
                patternSpecifics: {
                    days: ['sunday'],
                },
                description: "Sunday's",
            },
        },
    },
    {
        id: 4,
        title: "Happy Hour",
        description: "$10 = 16oz Sapporo beer, 5oz sake, chef's choice of appetizer every day",
        establishmentName: "Rondo Japanese Kitchen",
        neighborhood: "Capitol Hill",
        createdDateTime: new Date("2024-06-23T21:00:00Z"),
        dealProof: "https://www.rondojapanesekitchen.com/menu",
        location: "https://maps.app.goo.gl/tAmFDFzf2MzHhfSC9",
        imageUrl: "/img/rondo_japanese.jpg",
        occurrence: {
            startTime: "2:00pm",
            endTime: "5:30pm",
            recurrence: {
                pattern: 'weekly',
                patternSpecifics: {
                    days: ['sunday', 'monday', 'wednesday', 'thursday', 'friday', 'saturday'],
                },
                description: "Every day except Tuesday's",
            },
        },
    },
    {
        id: 5,
        title: "99¢ Taco Tuesday",
        description: "99 cent tacos every Tuesday",
        establishmentName: "The Tin Hat Bar & Grill",
        neighborhood: "Phinney Ridge",
        createdDateTime: new Date("2024-06-23T21:00:00Z"),
        location: "https://maps.app.goo.gl/rxVsktsgp44M7wwCA",
        imageUrl: "/img/tin_hat.jpg",
        dealProof: "",
        occurrence: {
            allDay: true,
            recurrence: {
                pattern: 'weekly',
                patternSpecifics: {
                    days: ['tuesday'],
                },
                description: "Tuesday's",
            },
        },
    },
    {
        id: 6,
        title: "$6 Movie Tuesday's",
        description: "All movies are $6 on Tuesday",
        establishmentName: "Majestic Bay Theatres",
        neighborhood: "Ballard",
        createdDateTime: new Date("2024-06-23T21:00:00Z"),
        dealProof: "https://www.instagram.com/p/C8X91K0SY1H/",
        location: "https://maps.app.goo.gl/61U6vhMK6oZrhanC6",
        imageUrl: "/img/majestic_bay.webp",
        occurrence: {
            allDay: true,
            recurrence: {
                pattern: 'weekly',
                patternSpecifics: {
                    days: ['tuesday'],
                },
                description: "Tuesday's",
            },
        },
    },
    {
        id: 7,
        title: "$5 Macaron and Champagne",
        description: "All day long, at every location you can get a macaron and a glass of champagne for $5",
        establishmentName: "Lady Yum",
        neighborhood: "Denny Triangle",
        createdDateTime: new Date("2024-11-01T00:00:00Z"),
        dealProof: "https://www.instagram.com/p/CvVXLMitn9B/",
        location: "https://maps.app.goo.gl/gU4BLYm283k57jxA9",
        imageUrl: "/img/lady_yum.jpg",
        occurrence: {
            allDay: true,
            recurrence: {
                pattern: 'weekly',
                patternSpecifics: {
                    days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
                },
                description: "Every day",
            },
        },
    }
];

// include Seattle Art Museum free first Thursday's - once there's a lifestyle deals page, this would be useful
// first thursday free admission at: seattle asian art museum, Seattle art museum, nordic, NAAM, Burke Museum, Seattle Japanese Garden, MOHAI 
