export class BasePage { 
    async waitAndFind(selector) { 
        const el = $(selector);
        await el.waitForDisplayed();
        return el;
    };

    async waitAndFindAll(selector) { 
        let elements = [];
        await browser.waitUntil(async() => {
            elements = await $$(selector);
            return elements.length > 0;
        }, {
            timeout: 15000,
            timeoutMsg: `${selector} not found or does not exist`
        });

        for(const element of elements) { 
            await element.waitForDisplayed();
        }

        return elements;
    };

    async safeFindAll(selector) {
        try {
            return await this.waitAndFindAll(selector);
        } catch {
            return [];
        }
    };

    async waitAndClick(selector) {
        const el = await this.waitAndFind(selector);
        await el.waitForEnabled();
        await el.click();
    };

    async waitAndGetText(selector) { 
        const el = await this.waitAndFind(selector);
        return (await el.getText() || await el.getAttribute("text") || "");
    };

    async setValue(selector, value) { 
        const el = await this.waitAndFind(selector);
        await el.clearValue();
        await el.setValue(value);
    };

    async isElementExist(selector) { 
        try {
            const el = await $(selector);
            return await el.waitForDisplayed();
        } catch  {
            return false;
        }
    };

    async isElementEnabled(selector) { 
        try {
            const el =  await this.waitAndFind(selector);
            return await el.isEnabled();
        } catch  {
            return false;
        }
    }
}