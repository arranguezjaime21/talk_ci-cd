import { BasePage } from "../screens/base.js";

class Gestures extends BasePage {
    async swipeUp() {
        const { width, height } = await browser.getWindowRect();
        const centerX = Math.floor(width / 2);

        await browser.execute('mobile: dragGesture', {
            startX: centerX,
            startY: Math.floor(height * 0.8),
            endX: centerX,
            endY: Math.floor(height * 0.2),
            speed: 400
        });

    }
}

export default new Gestures();