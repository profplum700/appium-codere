import { config } from 'dotenv';
import { expect } from 'chai';
import { remote } from 'webdriverio';

config();

const waitTimeInMs = 400000;

describe('My Tests', function () {
    this.timeout(60000);
    let driver;

    before(async function () {
        driver = await remote({
            path: '/wd/hub',
            port: 4723,
            capabilities: {
                platformName: 'Android',
                'appium:deviceName': 'emulator-5554',
                'appium:appActivity': '.MainActivity',
                'appium:automationName': 'UiAutomator2',
                'appium:appPackage': 'spain.codere.apuestas',
                'appium:appActivity': '.MainActivity'
            }
        });

        await driver.$('android=new UiSelector().resourceId("//android.widget.Button[@text="Acceder"]")')
            .waitUntil(async function () {
                return (await this.getText()) === 'Acceder';
            }, waitTimeInMs);

        let cookiesPopup = await driver.$('android=new UiSelector().text("Configuración de cookies")');
        if (await cookiesPopup.isDisplayed()) {
            let acceptButton = await driver.$('android=new UiSelector().text("ACEPTAR")');
            await acceptButton.click();
        }
    });

    after(async function () {
        await driver.deleteSession();
    });

    it('should log in with valid credentials', async function () {
        await driver.$('android=new UiSelector().resourceId("spain.codere.apuestas:id/username")').setValue(process.env.USERNAME);
        await driver.$('android=new UiSelector().resourceId("spain.codere.apuestas:id/password")').setValue(process.env.PASSWORD);
        await driver.$('android=new UiSelector().text("Login")').click();
    
        let successMessage = await driver.$('android=new UiSelector().text("Success")');
        await expect(successMessage).toExist();
    });
});


//   ("should refuse log in with valid username and invalid password")
//   ("should refuse log in with invalid username and valid password")
//   ("should refuse log in with invalid username and invalid password")