import { ConjuredItem } from "@/conjured-item";

describe("Class: ConjuredItem", () => {
  it("Should degrades twice as fast as normal", () => {
    const conjuredItem = new ConjuredItem("Conjured cake", 10, 12);

    conjuredItem.updateItem();
    expect(conjuredItem.quality).toEqual(10);
    
    conjuredItem.updateItem();
    expect(conjuredItem.quality).toEqual(8);
  });
});