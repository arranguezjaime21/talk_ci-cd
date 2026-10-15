import { LoginSelectors } from "../selectors/login.selector.js";
import { BasePage } from "./base.js";

export class LoginScreen extends BasePage { 
    selectors = LoginSelectors;

    async navMailLogin() { 
        await this.waitAndClick(this.selectors.navLogin);
        await this.waitAndClick(this.selectors.mailMethod);
        await this.waitAndClick(this.selectors.mailLogin);
    };

    async enterUserEmail(email) { 
        await this.setValue(this.selectors.inputEmail, email);
    };

    async enterUserPassword(password) { 
        await this.setValue(this.selectors.inputPass, password);
    };

    async getLoginBtnState() { 
        const el = $(this.selectors.loginBtn);
        return await el.isEnabled();
    };

    async clickLoginBtn() {
        await this.waitAndClick(this.selectors.loginBtn);
    };

    async getErrMsg() { 
        return await this.waitAndGetText(this.selectors.errMsg)
    };

    async isErrMsgDisplayed() { 
        return await this.isElementExist(this.selectors.errMsg);
    };

    async isOnLoginScreen() { 
        const isEmailDisplayed = await this.isElementExist(this.selectors.email);

        if(!isEmailDisplayed) { 
            await this.navMailLogin();
        }
    };

    async mailLoginFlow({ email, password }) {
        await this.enterUserEmail(email);
        await this.enterUserPassword(password);
        await this.clickLoginBtn();
    };

    async forgetPassBtn() { 
        await this.waitAndClick(this.selectors.forgetPass);
    };

    async forgetPassScreenDisplayed() { 
        return await this.isElementExist(this.selectors.forgetPassTitle);
    };

    async backBtn() { 
        await this.waitAndClick(this.selectors.backBtn);
    };

    async isPermissionDisplayed() { 
        return await this.isElementExist(this.selectors.permission);
    }
}

export default new LoginScreen();