import { ExpiringItem } from "./expiring-item";

export class AgedBrie extends ExpiringItem {
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }
  }
  updateItem() {
    this.updateQuality();
    this.decreaseSellIn();
    this.checkMaximumQuality();
  }
}