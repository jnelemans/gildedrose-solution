import { ExpiringItem } from "@/expiring-item";

describe("Class: ExpiringItem", () => {
  it("Should have a maximum quality of 50", () => {
    const expiringItem = new ExpiringItem("Sword", 4, 52);

    expiringItem.checkMaximumQuality();
    expect(expiringItem.quality).toEqual(50);
  });

  it("Should have a minimum quality of 0", () => {
    const expiringItem = new ExpiringItem("Sword", 4, -3);

    expiringItem.checkMinimumQuality();
    expect(expiringItem.quality).toEqual(0);
  })

  it("Should decrease quality by 1 if sellIn > 0", () => {
    const expiringItem = new ExpiringItem("Sword", 4, 11);

    expiringItem.updateQuality();
    expect(expiringItem.quality).toEqual(10);
  });

  it("Should decrease quality by 2 if sellIn < 0", () => {
    const expiringItem = new ExpiringItem("Sword", -1, 11);

    expiringItem.updateQuality();
    expect(expiringItem.quality).toEqual(9);
  });
});