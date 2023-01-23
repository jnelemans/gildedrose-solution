import { Item } from './item';
import { ExpiringItem } from './expiring-item';
import { AgedBrie } from './aged-brie';
import { ConjuredItem } from './conjured-item';

export class GildedRose {
  items: Array<ExpiringItem | AgedBrie>;

  constructor(items = [] as Array<Item>) {
    this.items = items.map((item) => {
      switch(item.name) {
        case 'Aged Brie': return new AgedBrie(item.name, item.sellIn, item.quality);
        case 'Conjured Mana Cake': return new ConjuredItem(item.name, item.sellIn, item.quality);
        default: return new ExpiringItem(item.name, item.sellIn, item.quality)
      }
    })
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateItem();
    });
  }
}
