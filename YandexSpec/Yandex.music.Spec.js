const helper = require("protractor-helper");
const PreLogin = require("../pages/pre_login");
const YandexMusic = require("../pages/music");

describe('Yandex music test', () => {

    const prelogin = new PreLogin();

    browser.get('https://yandex.by');

    it('login to yandex', () => {

        prelogin.loginToMail();
        prelogin.fillWithDataAndSubmit();
        prelogin.checkUser();
    });

        describe('Yandex music', () => {

            const music = new YandexMusic();

                beforeEach(() => {
        
                    browser.get('https://yandex.by');
                });

                it('find metallica', () => {

                    music.gotoMusic();
                    music.fillInputAndChooseMetallica();
                    music.checkArtist();
                    music.checkAlbum();
            
                });

                it('find beyonce', () => {

                    music.gotoMusic();
                    music.fillInputAndChooseBeyonce();
                    /*music.playFirstPopularTrack();
                    music.stopPlayingTheMusic();*/
                    
                });
        
        });
    
});