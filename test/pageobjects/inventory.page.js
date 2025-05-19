class InventoryPage {
  get title() { return $('.title'); }
  get inventoryItems() { return $$('.inventory_item'); }

  async isLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.length).toBeGreaterThan(0);
  }
}

export default new InventoryPage();
