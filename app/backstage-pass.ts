import { ExpiringItem } from "./expiring-item";

export class BackstagePass extends ExpiringItem {
  updateQuality() {
    if (this.sellIn <= 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn <= 10) {
      this.quality += 2;
    } else {
      this.quality++
    }
  }

  updateItem() {
    this.updateQuality();
    this.decreaseSellIn();
    this.checkMaximumQuality();
  }
}