import { allKnownDeals } from "./deals";
import { IDeal } from "./interfaces";

class DealsRepo {
  private _deals: IDeal[] = allKnownDeals;

  public getDeal(id: number) {
    return this._deals.find(deal => id === deal.id);
  }

  public getAllDeals() {
    return this._deals;
  }
}

export const dealsRepo = new DealsRepo();
