const helper = require("protractor-helper");

class PreLogin{
    constructor(){

        this.enteringbutton = element(by.css('.desk-notif-card__login-enter-expanded'));
        this.container = element(by.css('.passport-Domik_mode_addingAccount'));

		this.username = this.container.element(by.css('[type="text"]'));
		this.password = this.container.element(by.css('[type="password"]'));
		this.submitbutton = this.container.element(by.css('[type="submit"]'));

		this.mailUser = element(by.css('.mail-User-Name'));
    }

    loginToMail(){

        helper.clickWhenClickable(this.enteringbutton);
    }

    fillWithDataAndSubmit(){

        helper.fillFieldWithTextWhenVisible(this.username, "AutotestUser" , 7000);
		helper.fillFieldWithTextWhenVisible(this.password, "AutotestUser123");
		helper.clickWhenClickable(this.submitbutton);
    }

    checkUser(){
		 
		helper.waitForElementVisibility(this.mailUser, 10000);
	}
}

module.exports = PreLogin;