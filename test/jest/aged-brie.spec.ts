import { AgedBrie } from "@/aged-brie";

describe("Class: AgedBrie", () => {
  it("Should increase in quality", () => {
    const agedBrieItem = new AgedBrie("Aged brie", 10, 10);

    agedBrieItem.updateItem();
    expect(agedBrieItem.quality).toEqual(11);
    
    agedBrieItem.updateItem();
    expect(agedBrieItem.quality).toEqual(12);

  });
});
