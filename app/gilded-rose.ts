import { Item } from './item';
import { ExpiringItem } from './expiring-item';
import { AgedBrie } from './aged-brie';
import { ConjuredItem } from './conjured-item';
import { BackstagePass } from './backstage-pass';
import { LegendaryItem } from './legendary-item';

export class GildedRose {
  items: Array<ExpiringItem | AgedBrie | LegendaryItem | ConjuredItem | BackstagePass>;

  constructor(items = [] as Array<Item>) {
    this.items = items.map((item) => {
      switch(item.name) {
        case 'Aged Brie': return new AgedBrie(item.name, item.sellIn, item.quality);
        case 'Conjured Mana Cake': return new ConjuredItem(item.name, item.sellIn, item.quality);
        case 'Backstage passes to a TAFKAL80ETC concert': return new BackstagePass(item.name, item.sellIn, item.quality);
        case 'Sulfuras, Hand of Ragnaros': return new LegendaryItem(item.name, item.sellIn, item.quality);
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
