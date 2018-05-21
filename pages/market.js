const helper = require("protractor-helper");

class YandexMarket {
    constructor(){

        this.market = element(by.css('.home-tabs_js_inited .home-tabs__search:nth-of-type(5)'));
        this.search = element(by.css('#header-search'));
        this.searchButton = element(by.css('.search2__button'));
        this.firsthover = element(by.xpath('//div[@class="layout layout_type_maya"]/div[2]/div[1]/div[2]/div/div[1]/div[1]'));
        this.secondhover = element(by.xpath('//div[@class="layout layout_type_maya"]/div[2]/div[1]/div[2]/div/div[1]/div[2]'));
        this.addfirstElem = element(by.xpath('//div[@class="layout layout_type_maya"]/div[2]/div[1]/div[2]/div/div[1]/div[1]//div[@class="n-snippet-cell2__toolbar"]/div/div'));
        this.addsecondElem = element(by.xpath('//div[@class="layout layout_type_maya"]/div[2]/div[1]/div[2]/div/div[1]/div[2]//div[@class="n-snippet-cell2__toolbar"]/div/div'));
        this.informer = element(by.css('.popup-informer__details'));
        this.gotoComparebutton = element(by.css('.button_size_m.button_theme_normal'));
        this.firstCompare = element(by.css('.n-compare-cell_product_1731400950 .n-compare-head__name'));
        this.secondCompare = element(by.css('.n-compare-cell_product_1731400948 .n-compare-head__name'));
        this.deleteButton = element(by.css('.n-compare-toolbar__action-clear'));
        this.titleChecker = element(by.css('.title_size_18'));
        this.gotoElectronics = element(by.css('.topmenu__list .topmenu__item_js_inited:nth-of-type(1) .topmenu__link'));
        this.catalogItem = element(by.css('.catalog-menu__item:nth-of-type(4) .catalog-menu__list > .metrika_js_inited:nth-of-type(3)'));
        this.categoryTittle = element(by.css('.title_changeable_yes'));
        this.sortingButton = element(by.css('.n-filter-block_pos_left .n-filter-sorter_js_inited:nth-of-type(3)'));
        this.highestPrice = element(by.xpath('//div[@class="layout layout_type_maya"]/div[2]/div[1]/div[2]/div/div[1]/div[1]//div[@class="n-snippet-cell2__title"]/a[@title="Экшн-камера Kodak Pixpro ORBIT360 4K"]'));
        this.gotoHouseholdAppliances = element(by.css('.topmenu__list .topmenu__item_js_inited:nth-of-type(3)'));
        this.fridgeCategory = element(by.css('.catalog-menu__item:nth-of-type(2) .catalog-menu__list > .metrika_js_inited:nth-of-type(1)'));
        this.tagInput = element(by.css('[data-autotest-id="15464317"] ._1W_iTekL7P:nth-of-type(2) [type="text"]'));
    }

    gotoMarket(){

        helper.clickWhenClickable(this.market);
    }

    findElements(){

        helper.fillFieldWithTextWhenVisible(this.search, 'Note 8');
        helper.clickWhenClickable(this.searchButton);
        browser.sleep(10000);
    }

    addToComparision(){

        browser.actions().mouseMove( this.firsthover ).perform();
        
        helper.clickWhenClickable(this.addfirstElem);

        browser.actions().mouseMove( this.secondhover ).perform();

        helper.clickWhenClickable(this.addsecondElem, 15000);

        helper.waitForElementVisibility(this.informer, 20000);
    }

    GotoCompare(){

        helper.clickWhenClickable(this.gotoComparebutton);
    }

    checkComparedItems(){

        expect(this.firstCompare.isDisplayed());
        expect(this.firstCompare.getText()).toEqual('Смартфон Samsung Galaxy Note8 128GB');
        expect(this.secondCompare.isDisplayed());
        expect(this.secondCompare.getText()).toEqual('Смартфон Samsung Galaxy Note8 64GB');
    }

    deleteItemsFromCompare(){

        helper.clickWhenClickable(this.deleteButton,10000);
        helper.waitForTextToBePresentInElement(this.titleChecker, 'Товаров нет.');
    }

    GoToElectronicsAndChooseItem(){

        helper.clickWhenClickable(this.gotoElectronics);
        helper.clickWhenClickable(this.catalogItem, 10000);
        helper.waitForTextToBePresentInElement(this.categoryTittle, 'Экшн-камеры');
    }

    SortItemsByPrice(){

        helper.clickWhenClickable(this.sortingButton);

        if (helper.waitForUrlNotToContainString('dprice')) {

            console.log('True');
            
        } else {

            helper.clickWhenClickable(this.sortingButton);   
        }

        helper.waitForElementVisibility(this.highestPrice);
    }

    GoToHouseholdAppliancesAndChooseItem(){

        helper.clickWhenClickable(this.gotoHouseholdAppliances);
        helper.clickWhenClickable(this.fridgeCategory, 10000);
    }

    SortItemsByTag(){

        helper.fillFieldWithTextWhenVisible(this.tagInput, '50');
        helper.waitForTextToBePresentInElement(this.categoryTittle, 'Холодильники шириной до 50 см');

    }
}

module.exports = YandexMarket;