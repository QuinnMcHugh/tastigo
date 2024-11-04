import { IDeal } from "./interfaces";

export const allKnownDeals: IDeal[] = [
    {
        id: 1,
        title: "$2 Beers",
        shortDescription: "$2 Rainier Tall Boys, $3.49 Microbrew & Craft Ciders",
        longDescription: "$2 Rainier Tall Boys, $3.49 Microbrew & Craft Ciders located right next to the Lenin statue in Fremont. Possibly the cheapest beers in all of Seattle and amazing grinders to pair with them.",
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
        shortDescription: "$4.5, $5.5, $6.5 beers available at certain vendors",
        longDescription: "Beers from $4.5, $5.5 and $6.5 available in certain sections during the 2024 Mariner's season. The vendors are somewhat hidden around the stadium and the deal is only valid while supplies last at those locations.",
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
        shortDescription: "$11 cocktails all Sunday long",
        longDescription: "$11 cocktails all Sunday long at one of Fremont's coolest cocktail bars. That's close to 50% off normal prices. The menu and quirky decorations are always in flux so come often.",
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
        shortDescription: "$10 = 16oz Sapporo beer, 5oz sake, chef's choice of appetizer every day",
        longDescription: "$10 gets you one Sapporo beer + one 5oz. sake + chef's choice of appetizer. As their menu says: $10 makes you Bero-Bero (drunk).",
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
        shortDescription: "99 cent tacos every Tuesday",
        longDescription: "Come any Tuesday to the Tin Hat Bar & Grill for their famous Taco Tuesday deal! Both beef and black bean tacos are just 99 cents each. It's the perfect after work excuse to get your friends out for pitchers at this classic neighborhood dive.",
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
        shortDescription: "All movies are $6 on Tuesday",
        longDescription: "All movies at Majestic Bay are $6 every Tuesday. Be sure to get tickets online, though, as this deal is popular and can sell out. Support local independent cinema at this classic Ballard institution.",
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
        shortDescription: "All day long, at every location you can get a macaron and a glass of champagne for $5",
        longDescription: "Where else can you get a glass of champagne and a delicious macaron for $5? The macaron selection is incredible and this deal is valid at every Lady Yum location while they're open.",
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
