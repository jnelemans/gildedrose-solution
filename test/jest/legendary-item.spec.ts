import { LegendaryItem } from '@/legendary-item';

describe("Class: Sulfuras", () => {
  it("Should not change in any values", () => {
    const legendaryItem = new LegendaryItem("Sulfuras", 0, 80);

    legendaryItem.updateItem();

    expect(legendaryItem.quality).toEqual(80);
    expect(legendaryItem.sellIn).toEqual(0);
  });
});