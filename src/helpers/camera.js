import { BasePage } from "../screens/base.js"

class CameraHelpers extends BasePage { 
    selectors = { 
        //capture
        shutterBtn: 'id=com.android.camera2:id/shutter_button',
        doneBtn: 'id=com.android.camera2:id/done_button',
        

        //gallery
        imgList: '//android.view.View[@content-desc="Media grid"]',
        imgItems: '//android.view.View[@content-desc="Media grid"]/android.view.View/android.view.View[@clickable="true"]',
        done: '//android.widget.TextView[@text="Done"]',

        confirmImg: 'id=com.fdc_machetalk_broadcaster:id/tv_use_photo',
    };

    async capturePhoto() { 
        await this.waitAndClick(this.selectors.shutterBtn);
        await this.waitAndClick(this.selectors.doneBtn);
        await this.waitAndClick(this.selectors.confirmImg);
    };

    async selectGalleryImg() {
        const images = await this.waitAndFindAll(this.selectors.imgItems);
        
        if(images.length === 0) { 
            throw new Error('no images found in the gallery');
        }

        const randomIndex = Math.floor(Math.random() * images.length);

        await images[randomIndex].click();
        await this.waitAndClick(this.selectors.done);
        await this.waitAndClick(this.selectors.confirmImg);

    };

}

export default new CameraHelpers();