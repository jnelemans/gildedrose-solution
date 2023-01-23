import { BackstagePass } from "@/backstage-pass";

describe("Class: BackstagePass", () => {
  it("Should have quality equal 0 if sellIn < 0", () => {
    const backstagePassItem = new BackstagePass("Backstage pass", -2, 3);

    backstagePassItem.updateItem();
    expect(backstagePassItem.quality).toEqual(0);
  });

  it("Should increase in quality with 3 if sellIn <= 5", () => {
    const backstagePassItem = new BackstagePass("Backstage pass", 5, 3);

    backstagePassItem.updateItem();
    expect(backstagePassItem.quality).toEqual(6);

    backstagePassItem.updateItem();
    expect(backstagePassItem.quality).toEqual(9);
  });  

  it("Should increase in quality with 2 if sellIn <= 10", () => {
    const backstagePassItem = new BackstagePass("Backstage pass", 10, 6);

    backstagePassItem.updateItem();
    expect(backstagePassItem.quality).toEqual(8);
    
    backstagePassItem.updateItem();
    expect(backstagePassItem.quality).toEqual(10);
  });

  it("Should increase in quality by 1 if sellIn > 10", () => {
    const backstagePassItem = new BackstagePass("Backstage pass", 15, 6);

    backstagePassItem.updateItem();
    expect(backstagePassItem.quality).toEqual(7);
    
    backstagePassItem.updateItem();
    expect(backstagePassItem.quality).toEqual(8);
  })
});

