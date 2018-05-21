const helper = require("protractor-helper");

class YandexMusic{
    constructor(){

        this.musicButton = element(by.css('.home-tabs_js_inited .home-tabs__search:nth-of-type(7)'));
        this.search = element(by.css('.head__suggest input'));
        this.MetalResult = element(by.xpath('//ul/li[1]/a[@class="_nb-suggest-item-link ui-corner-all"]'));
        this.artistTittle = element(by.css('.page-artist__title'));
        this.albumTittle = element(by.css('.page-artist__albums .album_selectable:nth-of-type(1) .album__title'));
        this.BeyonResult = element(by.xpath('//ul/li[1]/a[@class="_nb-suggest-item-link ui-corner-all"]'));
        this.pauseButton = element(by.css('.player-controls__btn_play'));
        //this.playButton = element(by.xpath('/html/body/div[@class="page-root page-root_no-player"]/div[@class="centerblock-wrapper"]//div[@class="page-artist"]//div[@class="page-artist__left-side"]/button[@title=""]'));
        //this.playButton = element(by.css('.page-artist__actions [data-b="617"]'));
    }

    gotoMusic(){

        helper.clickWhenClickable(this.musicButton);

    }

    fillInputAndChooseMetallica(){

        helper.fillFieldWithTextWhenVisible(this.search, "Metal");
        helper.waitForTextToBePresentInElement(this.MetalResult, "metallica");
        helper.clickWhenClickable(this.MetalResult);
    }

    checkArtist(){

        helper.waitForTextToBePresentInElement(this.artistTittle, "Metallica");
    }

    checkAlbum(){

        helper.waitForTextToBePresentInElement(this.albumTittle, "Metallica");

    }

    fillInputAndChooseBeyonce(){

        helper.fillFieldWithTextWhenVisible(this.search, 'beyo');
        helper.waitForTextToBePresentInElement(this.BeyonResult, "beyoncé");
        helper.clickWhenClickable(this.BeyonResult);

    }

    playFirstPopularTrack(){

        helper.clickWhenClickable(this.playButton);
    }

    stopPlayingTheMusic(){

        helper.clickWhenClickable(this.pauseButton, 30000);
    }




}

module.exports = YandexMusic;
