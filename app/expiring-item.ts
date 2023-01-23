import { Item } from './item';
import { 
  MIN_QUALITY,
  MAX_QUALITY 
} from './constants';

export class ExpiringItem extends Item {
  decreaseSellIn() {
    this.sellIn -= 1;
  }

  updateQuality() {
    if (this.sellIn < 0) {
      this.quality -= 2;
    } else {
      this.quality -= 1;
    }
  }

  checkMinimumQuality() {
    if (this.quality < MIN_QUALITY) { this.quality = MIN_QUALITY };
  }

  checkMaximumQuality() {
    if (this.quality > MAX_QUALITY) { this.quality = MAX_QUALITY };
  }

  updateItem() {
    this.updateQuality();
    this.decreaseSellIn();
    this.checkMinimumQuality();
  }
}