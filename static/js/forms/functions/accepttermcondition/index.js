/** AcceptTermCondition Function */

if ($("#modal-no-accept").length > 0) {
  $("#btn-modal-no-accept-more-info").click(() => {

    dataLayer.push({
      'event': 'CLICK_CONTINUE_APPLY_FULL_FORM',
      'pageview': {
          'funnelName': 'applyCashCard',
          'stepNumber': '2-3',
          'stepName': 'click continue to fill full form'
      }
    });
    var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
    // window.location.href = "/cashcard/applyfullform/";
    window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyfullform/";
  });
  
  $("#btn-modal-no-accept-no-more-info").click(() => {
    var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
    window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
  });
}
