import { IDeal } from "./interfaces";

class DealsRepo {
  private _deals: IDeal[] = [
    {
      id: 1,
      title: "Cheap Beer at Royal Grinders",
      description: "$2 Rainier Tall Boys, $3.49 Microbrew & Craft Ciders",
      establishment: "Royal Grinders",
      occurrence: "All times",
      neighborhood: "Fremont",
      createdDateTime: new Date("2024-06-23T21:00:00Z"),
      image: ""
    },
    {
      id: 2,
      title: "Mariner's baseball value beers",
      description: "$4.5, $5.5, $6.5 beers available in certain sections",
      establishment: "T-Mobile Park",
      occurrence: "All times",
      neighborhood: "SoDo",
      createdDateTime: new Date("2024-06-23T21:00:00Z"),
      "dealProof": "https://www.mlb.com/mariners/ballpark/information/value-options/value-menu",
      image: ""
    },
    {
      id: 3,
      title: "The Dock Happy Hour",
      description: "From 2pm-6pm every week day",
      establishment: "The Dock",
      occurrence: "2-6pm",
      neighborhood: "Fremont",
      createdDateTime: new Date("2024-06-23T21:00:00Z"),
      "dealProof": "https://fremontdock.com/seattle-fremont-the-dock-sport-bar-and-grill-happy-occurrence-specials",
      image: ""
    },
    {
      id: 4,
      title: "Stampede Sunday Happy Hour",
      description: "$11 cocktails all Sunday long",
      establishment: "Stampede",
      occurrence: "Sunday's",
      neighborhood: "Fremont",
      createdDateTime: new Date("2024-06-23T21:00:00Z"),
      "dealProof": "need an image for this one...",
      image: ""
    },
    {
      id: 5,
      title: "Rondo Japanese Happy Hour",
      description: "$10 = 16oz Sapporo beer, 5oz sake, chef's choice of appetizer every day",
      establishment: "Rondo Japanese Kitchen",
      occurrence: "2-5:30pm",
      neighborhood: "Capitol Hill",
      createdDateTime: new Date("2024-06-23T21:00:00Z"),
      "dealProof": "https://www.rondojapanesekitchen.com/menu",
      image: ""
    },
    {
      id: 6,
      title: "Taco Tuesday 99¢",
      description: "99 cent tacos every Tuesday",
      establishment: "The Tin Hat Bar & Grill",
      occurrence: "Tuesday's",
      neighborhood: "Phinney Ridge",
      createdDateTime: new Date("2024-06-23T21:00:00Z"),
      "dealProof": "need an image for this one...",
      image: ""
    },
    {
      id: 7,
      title: "$6 Movie Tuesday's",
      description: "All movies are $6 on Tuesday",
      establishment: "Majestic Bay Theatres",
      occurrence: "Tuesday's",
      neighborhood: "Ballard",
      createdDateTime: new Date("2024-06-23T21:00:00Z"),
      "dealProof": "https://www.instagram.com/p/C8X91K0SY1H/",
      image: ""
    }
  ];

  public getDeal(id: number) {
    return this._deals.find(deal => id === deal.id);
  }

  public getAllDeals() {
    return this._deals;
  }
}

export const dealsRepo = new DealsRepo();