import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe('foo');
  });
});
