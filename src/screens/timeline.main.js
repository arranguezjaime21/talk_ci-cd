import { TimelineSelector } from "../selectors/timeline.selector.js";
import { BasePage } from "./base.js";

class TimelineMain extends BasePage { 
    selectors = TimelineSelector;

    async navTimelineOwnpost() { 
        await this.waitAndClick(this.selectors.timelineIcon);
        await this.waitAndClick(this.selectors.ownedPost);
    };

    async newPost() { 
        await this.waitAndClick(this.selectors.newPost);
    };

    async inputContent(description) { 
        await this.setValue(this.selectors.timelineDescription, description);
    };

    async getInputtedContent() {
        return await this.waitAndGetText(this.selectors.timelineDescription);
    };

    async discardPost() { 
        await this.waitAndClick(this.selectors.discardPost);
    };

    async submitPost() {
        await this.waitAndClick(this.selectors.postTimeline);
    };

    async isSubmitPostEnabled() {
        return await this.isElementEnabled(this.selectors.postTimeline);
    };


    async getRecentPost() {
        const posts = await this.waitAndFindAll(this.selectors.timelineListItem);

        if(posts.length === 0) {
            throw new Error('No timeline post is displayed or not found');
        };

        return await posts[0];
    };

    async getRecentPostContent() { 
        const recentPost = await this.getRecentPost();
        const content = recentPost.$(this.selectors.timelinePostContent);
        return await content.getAttribute("text");
    };

    async getRecentPostImg() {
        const recentPost = await this.getRecentPost();
        const img = recentPost.$(this.selectors.timelineImgPost);
        return await img.isDisplayed();
    }

    async isWaitingForApproval() { 
        const recentPost = await this.getRecentPost();
        const status = recentPost.$(this.selectors.waitingForApproval);
        return await status.isDisplayed();
    };

    async getInReviewMsg() {
        const recentPost = await this.getRecentPost();
        const msg = recentPost.$(this.selectors.waitingForApproval);
        return await msg.getAttribute("text");
    };

    async uploadViaCamera() { 
        await this.waitAndClick(this.selectors.captureImg);
    };

    async uploadViaGallery() {
        await this.waitAndClick(this.selectors.galleryImg);
    };

    async isImgAttached() {
        return await this.isElementExist(this.selectors.imgAttached);
    };

    async removeAttachedImg() {
        await this.waitAndClick(this.selectors.removeAttchedImg);
    };

    async approvedPost() {
        const posts = await this.waitAndFindAll(this.selectors.timelineListItem);
        const status = posts.$(this.selectors.waitingForApproval);
        return await status.isDisplayed
    };


    async deleteTemplate() {
        await this.waitAndClick(this.selectors.ellipsisIcon);
        await this.waitAndClick(this.selectors.confirmDelete);
        await this.isElementExist(this.selectors.deleteToast);
    };
}

export default new TimelineMain();