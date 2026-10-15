export const TimelineSelector = {
    timelineIcon: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/tabMenu"]/android.widget.LinearLayout/android.widget.LinearLayout[4]',
    ownedPost: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/tab_title" and @text="自分の投稿"]',
    newPost: 'id=com.fdc_machetalk_broadcaster:id/fl_new_post',
    timelineDescription: 'id=com.fdc_machetalk_broadcaster:id/et_post_text',
    postTimeline: 'id=com.fdc_machetalk_broadcaster:id/btn_confirm',
    discardPost: 'id=com.fdc_machetalk_broadcaster:id/tv_cancel',
    timelineList: 'id=com.fdc_machetalk_broadcaster:id/rv_timeline',
    timelineListItem: 'id=com.fdc_machetalk_broadcaster:id/timeline_container',
    timelinePostContent: 'id=com.fdc_machetalk_broadcaster:id/tv_content',
    waitingForApproval: 'id=com.fdc_machetalk_broadcaster:id/tv_for_approval_message',
    timelineImgPost: 'id=com.fdc_machetalk_broadcaster:id/timeline_image',
    captureImg: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/fl_image_container"][1]',
    galleryImg: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/fl_image_container"][2]',

    imgAttached: 'id=com.fdc_machetalk_broadcaster:id/iv_selected_photo',
    removeAttchedImg: 'id=com.fdc_machetalk_broadcaster:id/iv_selected_photo_dismiss',
    

    //capture cancellation
    retakeBtn: 'id=com.android.camera2:id/retake_button',
    cancelBtn: 'di=com.android.camera2:id/cancel_button',
   

    //image confirmation screen
    imgConfirmheader: 'id=com.fdc_machetalk_broadcaster:id/header', //枠内にお顔全体が \n入るように設定してください   
    cancelImg: 'id=com.fdc_machetalk_broadcaster:id/tv_cancel',


    //ellipses
    ellipsisIcon: 'id=com.fdc_machetalk_broadcaster:id/btn_close',
    deletionModalText: 'id=com.fdc_machetalk_broadcaster:id/tv_title',
    //投稿を削除しますか？\nこの投稿を削除すると、タイムライン から完全に削除されます。
    cancelDelete: 'id=com.fdc_machetalk_broadcaster:id/tv_cancel',
    confirmDelete: 'id=com.fdc_machetalk_broadcaster:id/tv_confirm',
    deleteToast: 'id=com.fdc_machetalk_broadcaster:id/text_view_message',
    //投稿を削除しました

}