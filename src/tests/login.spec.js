import { expect, should } from "chai";
import loginMain from "../screens/login.main.js"
import { environment } from "../config/environment.js";

describe('Login Screen', () => {
    describe('Login Button State', () => {
        it('should enable login button if email and pass are populated', async() => {
            await loginMain.navMailLogin();
            await loginMain.enterUserEmail('sample@mail.com');
            expect(await loginMain.getLoginBtnState()).to.be.false;

            await loginMain.enterUserPassword('sample_password');
            expect(await loginMain.getLoginBtnState()).to.be.true;
        });
    });

    describe('Login Mail Validation',() => {
        it('should display error wording for incorrect email/password', async() => {
           
            await loginMain.mailLoginFlow({
                email: environment.userEmail,
                password: 'wrong-password'
            });

            expect(await loginMain.isErrMsgDisplayed()).to.be.true;
            expect(await loginMain.getErrMsg()).to.equal('•メールアドレスまたは、パスワードに誤りがあります。');
            
        });

        it('should display and navigate forgot pass screen', async() => {
            await loginMain.forgetPassBtn();
            expect(await loginMain.forgetPassScreenDisplayed()).to.be.true;
            await loginMain.backBtn();
        });

        it('should login successfully', async() => {
            await loginMain.mailLoginFlow({
                email: environment.userEmail,
                password: environment.userPass
            });

            expect(await loginMain.isPermissionDisplayed()).to.be.true;
        });

    });


})