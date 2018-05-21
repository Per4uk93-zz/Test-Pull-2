const helper = require("protractor-helper");
const YandexMarket = require('../pages/market');

describe('Yandex market test', () => {
    
    const market = new YandexMarket();

    beforeEach(() => {
        
        browser.get('https://yandex.by');
    });

    it('Add items to compare and delete after', () => {
        
        market.gotoMarket();
        market.findElements();
        market.addToComparision();
        market.GotoCompare();
        market.checkComparedItems();
        market.deleteItemsFromCompare();
    });

    it('Sorting by price', () => {

        market.gotoMarket();
        market.GoToElectronicsAndChooseItem();
        market.SortItemsByPrice();
        
    });

    it('Sorting by tag', () => {

        market.gotoMarket();
        market.GoToHouseholdAppliancesAndChooseItem();
        market.SortItemsByTag();
        
    });
});