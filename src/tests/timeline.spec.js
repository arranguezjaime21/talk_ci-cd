import AllureReporter from "@wdio/allure-reporter";
import timelineMain from "../screens/timeline.main.js"
import { expect } from "chai";
import { TimelineDescription } from "../test-data/data/timeline.desc.js";
import camera from "../helpers/camera.js";
import gesture from "../helpers/gesture.js";


describe('Timeline Screen',() => {
    afterEach(async function() {
        if(this.currentTest.state === 'failed') { 
            const screenshot = await browser.takeScreenshot();

            AllureReporter.addAttachment(
                'Failure Screenshot',
                Buffer.from(screenshot, 'base64'),
                'image/png'
            )
        }
    });

    // describe('Timeline Post Screen Validation',() => {
    //     beforeEach(async function () {
    //         await timelineMain.navTimelineOwnpost();
    //         await timelineMain.newPost();
    //     });

    //     afterEach(async function() {
    //         await timelineMain.discardPost();
    //     });

    //     it('should display disabled submit post by default', async() => {
    //         expect(await timelineMain.isSubmitPostEnabled()).to.be.false;
    //     });

    //     it('should display enabled submit post by populating content', async() => {
    //         await timelineMain.inputContent(TimelineDescription.description);
    //         expect(await timelineMain.isSubmitPostEnabled()).to.be.true;
    //     });

    //     it('should enable submit when img is attached and disable it when removed', async() => {
    //         await timelineMain.uploadViaCamera();
    //         await camera.capturePhoto();
    //         expect(await timelineMain.isImgAttached()).to.be.true;
    //         expect(await timelineMain.isSubmitPostEnabled()).to.be.true;

    //         await timelineMain.removeAttachedImg();
    //         expect(await timelineMain.isSubmitPostEnabled()).to.be.false;


    //     });
    // });

    // describe('Timeline Posting', () => {
    //     beforeEach(async () => {
    //         await timelineMain.navTimelineOwnpost();
    //         await timelineMain.newPost();
    //     });

    //     it('should post timeline text and displays waiting for approval in the timeline list', async () => {
    //         await timelineMain.inputContent(TimelineDescription.description);
    //         expect(await timelineMain.getInputtedContent()).to.equal(TimelineDescription.description);
    //         await timelineMain.submitPost();

    //         expect(await timelineMain.getRecentPostContent()).to.equal(TimelineDescription.description);

    //         const isUunderReview = await timelineMain.isWaitingForApproval();
    //         if(isUunderReview) {
    //             expect(await timelineMain.getInReviewMsg()).to.equal('スタッフが内容を確認中です\n承認後、投稿されます。');
    //             console.log('Submitted post waiting for review');
    //         } else {
    //             console.log('Submitted post appears to be approved');
    //         }
    //     });

    //     it('shoould post timeline image via camera roll', async() => {
    //         await timelineMain.uploadViaCamera();
    //         await camera.capturePhoto();
    //         expect(await timelineMain.isImgAttached()).to.be.true;
    //         await timelineMain.submitPost();

    //         expect(await timelineMain.getRecentPostImg()).to.be.true;

    //         const isUunderReview = await timelineMain.isWaitingForApproval();
    //         if(isUunderReview) { 
    //             expect(await timelineMain.getInReviewMsg()).to.equal('スタッフが内容を確認中です\n承認後、投稿されます。');
    //             console.log('Submitted post waiting for review');
    //         } else {
    //             console.log('Submitted post appears to be approved');
    //         }
    //     });

    //     it('should post timeline image via device gallery', async() => {
    //         await timelineMain.uploadViaGallery();
    //         await camera.selectGalleryImg();
    //         expect(await timelineMain.isImgAttached()).to.be.true;
    //         await timelineMain.submitPost();

    //         expect(await timelineMain.getRecentPostImg()).to.be.true;

    //         const isUunderReview = await timelineMain.isWaitingForApproval();
    //         if(isUunderReview) { 
    //             expect(await timelineMain.getInReviewMsg()).to.equal('スタッフが内容を確認中です\n承認後、投稿されます。');
    //             console.log('Submitted post waiting for review');
    //         } else {
    //             console.log('Submitted post appears to be approved');
    //         }
    //     });
    // });

    describe('Timeline Post Deletion', () => {
        before(async () => {
            await timelineMain.navTimelineOwnpost();
        });

        it('sample', async() => {
            const post = await timelineMain.findApprovedPost();
            await gesture.swipeUp();
            console.log(`number: ${post.length}`);
        })


    })
});