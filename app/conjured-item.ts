import { ExpiringItem } from "./expiring-item";
import { CONJURED_ITEM_MULTIPLIER } from './constants';

export class ConjuredItem extends ExpiringItem {
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality -= (2 * CONJURED_ITEM_MULTIPLIER);
    } else {
      this.quality -= (1 * CONJURED_ITEM_MULTIPLIER);
    }
  }

  updateItem() {
    this.updateQuality();
    this.decreaseSellIn();
    this.checkMinimumQuality();
  }
}