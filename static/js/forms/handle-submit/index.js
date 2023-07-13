// import {deleteCookie} from './formCookie.js';

import { deleteAllCookie, deleteCookie, getCookie, saveCookie } from "../storage/cookie.js";
import { clearForm, getForm, saveForm } from "../storage/local-storage.js";
import { FullFormMapValue, ShortFormMapValue, UpdateSalaryValue } from "../storage/mapping.js";
import { countTimeFormat, getUtmQuery } from "../utils.js";

$("#ApplyForm").submit(function (e) {
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  e.preventDefault();
  if ($(this).valid()) {
    const modalLoadingElement = document.getElementById("modal-loading");
    let instanceLoadingModal = mdb.Modal.getInstance(modalLoadingElement);
    if (instanceLoadingModal) {
      instanceLoadingModal.show();
    } else {
      instanceLoadingModal = new mdb.Modal(modalLoadingElement, {
        backdrop: "static",
      });
      instanceLoadingModal.show();
    }
    // let modalResult;
    const shortFormData = ShortFormMapValue();
    const payload = JSON.stringify(shortFormData);
    var data_gclid = JSON.parse(localStorage.getItem('gclid'));

    // if (data_gclid) {
    //     data.gclid = data_gclid.value;
    // }

    $.ajax({
      type: "POST",
      url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/submit",
      data: payload,
      contentType: "application/json",
      success: function (response) {
        console.log("shortform/submit",response);
        if (response?.result == "200") {
        
          const newShortFormData = saveForm("ApplyForm", {
            ...shortFormData,
            applNumber: response?.applNo,
            applNo: response?.applNo,
            applNdid: response?.datandid,
            gclid : data_gclid?.value
          });
          const newPayload = JSON.stringify(newShortFormData);
          $.ajax({
            type: "POST",
            url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/complete",
            data: newPayload,
            contentType: "application/json",
            success: function (res) {
              console.log("shortform/complete",res);
            },
            complete: (res) => {
              console.log("shortform/complete",res);
              instanceLoadingModal.hide();
              // console.log(newShortFormData?.applNdid);
              if (newShortFormData?.applNdid == "N") {
                dataLayer.push({
                  'event': 'POPUP_APPROVAL_APPLYING_SHORT',
                  'pageview': {
                      'funnelName': 'applyCashCard',
                      'stepNumber': '2-2',
                      'stepName': 'continue input popup'
                    }
                });
                // modalResult = new mdb.Modal(
                //   document.getElementById("modal-not-ndid"),
                //   {
                //     backdrop: "static",
                //   }
                // );
                // modalResult.show();
                const modalNotNDIDElement =
                  document.getElementById("modal-not-ndid");
                let instanceNotNDIDModal =
                  mdb.Modal.getInstance(modalNotNDIDElement);
                if (instanceNotNDIDModal) {
                  instanceNotNDIDModal.show();
                } else {
                  instanceNotNDIDModal = new mdb.Modal(modalNotNDIDElement, {
                    backdrop: "static",
                  });
                  instanceNotNDIDModal.show();
                }
              } else if (newShortFormData?.applNdid == "Y") {
                dataLayer.push({ 'event': 'POP_UP_CHOOSE_DOCUMENT' });
                // modalResult = new mdb.Modal(
                //   document.getElementById("submit-document-modal"),
                //   {
                //     backdrop: "static",
                //   }
                // );
                // modalResult.show();
                const modalSubmitDocumentElement = document.getElementById(
                  "submit-document-modal"
                );
                let instanceSubmitDocumentModal = mdb.Modal.getInstance(
                  modalSubmitDocumentElement
                );

                if (instanceSubmitDocumentModal) {
                  instanceSubmitDocumentModal.show();
                } else {
                  instanceSubmitDocumentModal = new mdb.Modal(
                    modalSubmitDocumentElement,
                    {
                      backdrop: "static",
                    }
                  );
                  instanceSubmitDocumentModal.show();
                }
              }
            },
          });
        } else if (response?.result == "453") {
          dataLayer.push({
            'event': 'POPUP_APPROVAL_APPLYING_NOT_PASSED',
            'pageview': {
                'funnelName': 'applyCashCard',
                'stepNumber': '2-1',
                'stepName': 'not passed because duplicate'
            }
        });
          instanceLoadingModal.hide();
          // modalResult = new mdb.Modal(
          //   document.getElementById("modal-duiplicate"),
          //   {
          //     backdrop: "static",
          //   }
          // );
          // modalResult.show();
          const modalDuplicateElement =
            document.getElementById("modal-duiplicate");
          let instanceDuplicateModal = mdb.Modal.getInstance(
            modalDuplicateElement
          );
          if (instanceDuplicateModal) {
            instanceDuplicateModal.show();
          } else {
            instanceDuplicateModal = new mdb.Modal(modalDuplicateElement, {
              backdrop: "static",
            });
            instanceDuplicateModal.show();
          }
        } else if (response?.result == "400") {
          instanceLoadingModal.hide();
          // modalResult = new mdb.Modal(
          //   document.getElementById("modal-error-validation")
          // );
          // modalResult.show();

          const modalErrorValidationElement = document.getElementById(
            "modal-error-validation"
          );
          let instanceErrorValidationModal = mdb.Modal.getInstance(
            modalErrorValidationElement
          );
          if (instanceErrorValidationModal) {
            instanceErrorValidationModal.show();
          } else {
            instanceErrorValidationModal = new mdb.Modal(
              modalErrorValidationElement,
              {
                backdrop: "static",
              }
            );
            instanceErrorValidationModal.show();
          }
        } else if (response?.result == "500") {
          instanceLoadingModal.hide();
          // modalResult = new mdb.Modal(document.getElementById("modal-error"));
          // modalResult.show();

          const modalErrorElement = document.getElementById("modal-error");
          let instanceErrorModal = mdb.Modal.getInstance(modalErrorElement);
          if (instanceErrorModal) {
            instanceErrorModal.show();
          } else {
            instanceErrorModal = new mdb.Modal(modalErrorElement, {
              backdrop: "static",
            });
            instanceErrorModal.show();
          }
        } else {
          dataLayer.push({
            'event': 'POPUP_APPROVAL_APPLYING_NOT_PASSED',
            'pageview': {
                'funnelName': 'applyCashCard',
                'stepNumber': '2-1',
                'stepName': 'not passed'
            }
          });
          dataLayer.push({ 'event': 'POP_UP_NOT_PASS_CRITERIA' });
          instanceLoadingModal.hide();
          // modalResult = new mdb.Modal(
          //   document.getElementById("modal-not-pass")
          // );
          // modalResult.show();

          const modalNotPassElement = document.getElementById("modal-not-pass");
          let instanceNotPassModal = mdb.Modal.getInstance(modalNotPassElement);
          if (instanceNotPassModal) {
            instanceNotPassModal.show();
          } else {
            instanceNotPassModal = new mdb.Modal(modalNotPassElement, {
              backdrop: "static",
            });
            instanceNotPassModal.show();
          }
        }
      },
      complete: (response) => {
        console.log("shortform/submit",response);
      },
    });
  }
});

$("#updateApplyForm").click((e) => {
  // let modalResult;
  // modalResult = new mdb.Modal(document.getElementById("modal-loading"), {
  //   backdrop: "static",
  // });
  // modalResult.show();
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const modalLoadingElement = document.getElementById("modal-loading");
  let instanceLoadingModal = mdb.Modal.getInstance(modalLoadingElement);
  if (instanceLoadingModal) {
    instanceLoadingModal.show();
  } else {
    instanceLoadingModal = new mdb.Modal(modalLoadingElement, {
      backdrop: "static",
    });
    instanceLoadingModal.show();
  }

  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/ShortForm/updateform",
    // url: "/submit_/api/form/ShortForm/updateform",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      var Channel = response.data.applChannel;
      if(Channel == "01"){
        dataLayer.push({									
          'event': 'NOT_CONTINUE_APPLY_FULL_FORM_AUTO_CHOOSE_WALK-IN_UNDER_10000',									
          'pageview': {									
              'funnelName': 'applyCashCard',									
              'stepNumber': '2-13',									
              'stepName': 'not continue apply full form - auto choose walk-in under 10000'									
          }									
      });			
      dataLayer.push({						
        'event': 'NOT_CONTINUE_APPLY_FULL_FORM_LESS_THAN_10000_DELIVERY_AT_BRANCH',						
        'pageview': {						
            'funnelName': 'applyCashCard',						
            'stepNumber': '2-15',						
            'stepName': 'not continue apply full form deliver at branch'						
        }						
    });																				
      }
      else if(Channel == "02"){
        dataLayer.push({									
          'event': 'NOT_CONTINUE_APPLY_FULL_FORM_AUTO_CHOOSE_DELIVERY_OVER_10000',									
          'pageview': {									
              'funnelName': 'applyCashCard',									
              'stepNumber': '2-14',									
              'stepName': 'not continue apply full form - auto choose direct-sale over 10000'									
          }									
        });		
        dataLayer.push({					
          'event': 'NOT_CONTINUE_APPLY_FULL_FORM_OVER_10000_DELIVER_BY_STAFF',					
          'pageview': {					
              'funnelName': 'applyCashCard',					
              'stepNumber': '2-16',					
              'stepName': 'not continue apply full form deliver by staff'					
          }					
      });															
      }

      instanceLoadingModal.hide();
      if (response?.result) {
        clearForm("ApplyForm");
        clearForm("ApplyFullForm");
        deleteCookie("formsession");
        switch (response?.result) {
          case "thankyou":
            try{
              clearForm("ApplyForm");
              clearForm("ApplyFullForm");
              deleteAllCookie();
              localStorage.removeItem("NdidSelectOffline");
              localStorage.removeItem("submit-document-type");
            }catch{
              window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
            }
            window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
            break;
          default:
            try{
              clearForm("ApplyForm");
              clearForm("ApplyFullForm");
              deleteAllCookie();
              localStorage.removeItem("NdidSelectOffline");
              localStorage.removeItem("submit-document-type");
            }catch{
              window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
            }
            window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
        }
      }
    },
    complete: (response) => {
      // console.log(response);
    },
  });
});

$("#online-chanel").click((e) => {
  dataLayer.push({ 'event': 'BUTTON_SELECT_NDID' });		
  dataLayer.push({ 'event': 'POP_UP_ABOUT_NDID' });		
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/ShortForm/online",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("ShortForm/online",response);
    },
    complete: (response) => {
      console.log("ShortForm/online",response);
    },
  });
});

$("#offline-chanel").click((e) => {
  dataLayer.push({ 'event': 'POP_UP_PASS_CRITERIA_TGNDID' });		
  dataLayer.push({ 'event': 'BUTTON_SELECT_OFFLINE' });		
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/offline",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      localStorage.setItem("NdidSelectOffline", "Y");
      console.log(response);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/ShortForm/ndidacceptlog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("ShortForm/ndidacceptlog",response);
        },
        complete: (response) => {
          console.log("ShortForm/ndidacceptlog",response);
          const modalSubmitElement = document.getElementById("submit-document-modal");
          let instanceSubmitModal = mdb.Modal.getInstance(modalSubmitElement);
          if (instanceSubmitModal) {
            instanceSubmitModal.hide();
          } else {
          }
    
          const modalNotNdidElement = document.getElementById("modal-not-ndid");
          let instanceNotNdidModal = mdb.Modal.getInstance(modalNotNdidElement);
          if (instanceNotNdidModal) {
            instanceNotNdidModal.show();
          } else {
            instanceNotNdidModal = new mdb.Modal(modalNotNdidElement, {
              backdrop: "static",
            });
            instanceNotNdidModal.show();
          }
        },
      });
    },
    complete: (response) => {

    },
  });
});

$("#btn-next-ndid").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/ndidaccept",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      // console.log(response);
    },
    complete: (response) => {
      // console.log(response);
      window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/accepttermandcondition";
    },
  });
});

$("#btn-accept-term").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  const modalLoadingElement = document.getElementById("modal-loading");
    let instanceLoadingModal = mdb.Modal.getInstance(modalLoadingElement);
    if (instanceLoadingModal) {
      instanceLoadingModal.show();
    } else {
      instanceLoadingModal = new mdb.Modal(modalLoadingElement, {
        backdrop: "static",
      });
      instanceLoadingModal.show();
    }
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/acceptterm",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/acceptterm",response);
    },
    complete: (response) => {
      instanceLoadingModal.hide()
      console.log("shortform/acceptterm",response);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/accepttermlog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("shortform/accepttermlog",response);
        },
        complete: (response) => {
          console.log("shortform/accepttermlog",response);
          saveCookie("notAcceptNdid", "N");
          window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyfullform/";
        },
      });
    },
  });
});

$("#btn-no-accept-term").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/noacceptterm",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
    complete: (response) => {
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/noaccepttermlog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("noaccepttermlog",response.data);
        },
        complete: (response) => {
          console.log("noaccepttermlog",response.data);

          saveCookie("notAcceptNdid", "Y");
          
          dataLayer.push({ 'event': 'CLICK_BUTTON_UNACCEPT' });

          const modalNoAcceptElement =
            document.getElementById("modal-no-accept");
          let instanceNoAcceptModal =
            mdb.Modal.getInstance(modalNoAcceptElement);
          if (instanceNoAcceptModal) {
            instanceNoAcceptModal.show();
          } else {
            instanceNoAcceptModal = new mdb.Modal(modalNoAcceptElement, {
              backdrop: "static",
            });
            instanceNoAcceptModal.show();
          }
        },
      });
    },
  });
});

$("#PreviewForm").submit(function (e) {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  e.preventDefault();
  // let modalResult;
  // modalResult = new mdb.Modal(
  //   document.getElementById("modal-preview-loading"),
  //   {
  //     backdrop: "static",
  //   }
  // );
  // modalResult.show();

  const modalPreviewLoadingElement = document.getElementById(
    "modal-preview-loading"
  );
  let instanceLoadingModal = mdb.Modal.getInstance(modalPreviewLoadingElement);
  if (instanceLoadingModal) {
    instanceLoadingModal.show();
  } else {
    instanceLoadingModal = new mdb.Modal(modalPreviewLoadingElement, {
      backdrop: "static",
    });
    instanceLoadingModal.show();
  }

  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/otp/request",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log(response);
      if (response?.result == "200") {
        saveCookie("otp", JSON.stringify(response?.data));
        window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/RequireOtp";
      } else {
        window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/RequireOtp";
      }
    },
    complete: () => {
      instanceLoadingModal.hide();
      // window.location.href = "/cashcard/applyform/RequireOtp";
    },
  });
});

$("#request-otp").click(() => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/otp/request",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("otp/request",response);
      if (response?.result == "200") {
        saveCookie("otp", JSON.stringify(response?.data));
        window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/RequireOtp";
      }
    },
    complete: (response) => {
      console.log("otp/request",response);
    },
  });
});

/** OTP Submit */
$("#SubmitOTP").submit(async (e) => {
  dataLayer.push({ 'event': 'BUTTON_OTP_ACCEPT' });		
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  e.preventDefault();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);

  const a = $("#otp-first").val();
  const b = $("#otp-second").val();
  const c = $("#otp-third").val();
  const d = $("#otp-fourth").val();
  const h = $("#otp-fifth").val();
  const f = $("#otp-sixth").val();

  if (!!a && !!b && !!c && !!d && !!h && !!f) {
    $(".btn-verifyOTP").prop("disabled", true);
    let otp = JSON.parse(await getCookie("otp"));
    if (!!otp) {
      otp["otp"] = a + b + c + d + h + f;
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/otpsubmit",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("hortform/otpsubmit",response);
          $.ajax({
            type: "POST",
            url: OnlineUmayplusWebsiteUI + "/submit_/api/form/otp/confirm",
            data: JSON.stringify(otp),
            contentType: "application/json",
            success: async (response) => {
              $(".btn-verifyOTP").prop("disabled", false);
              if (response?.result == "200") {
                const FullForm = FullFormMapValue();
                let payload = JSON.stringify({
                  applNumber: FullForm.applNumber,
                });
                
                $.ajax({
                  type: "POST",
                  url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/otppass",
                  data: payload,
                  contentType: "application/json",
                  success: function (res) {
                    console.log("shortform/otppass",res);
                  },
                  complete: (res) => {
                    console.log("shortform/otppass",res);
                    window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/acceptndid";
                  },
                });
              } else if (response?.result == "500") {
                const count = await getCookie("count_otp");
                if (!count) {
                  saveCookie("count_otp", 1);
                  // let modalTryAgain = new mdb.Modal(
                  //   document.getElementById("modal-otp-try-again"),
                  //   {
                  //     backdrop: "static",
                  //   }
                  // );
                  // modalTryAgain.show();
    
                  const modalTryAgainElement = document.getElementById(
                    "modal-otp-try-again"
                  );
                  let instanceTryAgainModal =
                    mdb.Modal.getInstance(modalTryAgainElement);
                  if (instanceTryAgainModal) {
                    instanceTryAgainModal.show();
                  } else {
                    instanceTryAgainModal = new mdb.Modal(modalTryAgainElement, {
                      backdrop: "static",
                    });
                    instanceTryAgainModal.show();
                  }
                } else {
                  if (count == 3) {
                    const FullForm = FullFormMapValue();
                    let payload = JSON.stringify({
                      applNumber: FullForm.applNumber,
                    });
                    $.ajax({
                      type: "POST",
                      url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/otpnotpass",
                      data: payload,
                      contentType: "application/json",
                      success: function (res) {
                        console.log("shortform/otppass",res);
                        deleteCookie("count_otp");
                      },
                      complete: (res) => {
                        console.log("shortform/otppass",res);

                        // let modalNotPass = new mdb.Modal(
                        //   document.getElementById("modal-otp-fail"),
                        //   {
                        //     backdrop: "static",
                        //   }
                        // );
                        // modalNotPass.show();
    
                        const modalOTPFailElement =
                          document.getElementById("modal-otp-fail");
                        let instanceOTPFailModal =
                          mdb.Modal.getInstance(modalOTPFailElement);
                        if (instanceOTPFailModal) {
                          instanceOTPFailModal.show();
                        } else {
                          instanceOTPFailModal = new mdb.Modal(
                            modalOTPFailElement,
                            {
                              backdrop: "static",
                            }
                          );
                          instanceOTPFailModal.show();
                        }
                      },
                    });
                  } else {
                    const num = parseInt(count) + 1;
                    saveCookie("count_otp", num);
    
                    // let modalTryAgain = new mdb.Modal(
                    //   document.getElementById("modal-otp-try-again"),
                    //   {
                    //     backdrop: "static",
                    //   }
                    // );
                    // modalTryAgain.show();
    
                    const modalOTPTryAgainElement = document.getElementById(
                      "modal-otp-try-again"
                    );
                    let instanceTryAgainModal = mdb.Modal.getInstance(
                      modalOTPTryAgainElement
                    );
                    if (instanceTryAgainModal) {
                      instanceTryAgainModal.show();
                    } else {
                      instanceTryAgainModal = new mdb.Modal(
                        modalOTPTryAgainElement,
                        {
                          backdrop: "static",
                        }
                      );
                      instanceTryAgainModal.show();
                    }
                  }
                }
              } else {
                // let modalTryAgain = new mdb.Modal(
                //   document.getElementById("modal-otp-try-again"),
                //   {
                //     backdrop: "static",
                //   }
                // );
                // modalTryAgain.show();
    
                const modalOTPTryAgainElement = document.getElementById(
                  "modal-otp-try-again"
                );
                let instanceTryAgainModal = mdb.Modal.getInstance(
                  modalOTPTryAgainElement
                );
                if (instanceTryAgainModal) {
                  instanceTryAgainModal.show();
                } else {
                  instanceTryAgainModal = new mdb.Modal(modalOTPTryAgainElement, {
                    backdrop: "static",
                  });
                  instanceTryAgainModal.show();
                }
              }
            },
            complete: () => {
              // modalResult.hide();
            },
          });
        },
        complete: function (response) {
          console.log("hortform/otpsubmit",response);
        },
      });

      
    } else {
      // let modalTryAgain = new mdb.Modal(
      //   document.getElementById("modal-otp-try-again"),
      //   {
      //     backdrop: "static",
      //   }
      // );
      // modalTryAgain.show();
      const modalOTPTryAgainElement = document.getElementById(
        "modal-otp-try-again"
      );
      let instanceTryAgainModal = mdb.Modal.getInstance(
        modalOTPTryAgainElement
      );
      if (instanceTryAgainModal) {
        instanceTryAgainModal.show();
      } else {
        instanceTryAgainModal = new mdb.Modal(modalOTPTryAgainElement, {
          backdrop: "static",
        });
        instanceTryAgainModal.show();
      }
    }
  }
});

/** Uploadimage page*/
const setFileName = (id, fileName) => {
  const date = new Date().toISOString().replace(/[-T:\.Z]/g, "");
  const extension = fileName?.substr(fileName?.lastIndexOf(".") + 1);
  switch (id) {
    case "fileIdCard":
      return `IdCardNumber_${date}.${extension}`;
    case "fileStatement1":
      return `SalarySatement1_${date}.${extension}`;
    case "fileStatement2":
      return `SalarySatement2_${date}.${extension}`;
    case "bankAccount1":
      return `BankStatement1_${date}.${extension}`;
    case "bankAccount2":
      return `BankStatement2_${date}.${extension}`;
    case "bankAccount3":
      return `BankStatement3_${date}.${extension}`;
    case "bankAccount4":
      return `BankStatement4_${date}.${extension}`;
    case "bankAccount5":
      return `BankStatement5_${date}.${extension}`;
    case "bankAccount6":
      return `BankStatement6_${date}.${extension}`;
    case "fileOther":
      return `FileOther_${date}.${extension}`;
    default:
      return "";
  }
};

$("#UploadimageForm").submit(function (e) {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  e.preventDefault();
  if ($(this).valid()) {
    const modalLoadingElement = document.getElementById("modal-loading");
    let instanceLoadingModal = mdb.Modal.getInstance(modalLoadingElement);
    if (instanceLoadingModal) {
      instanceLoadingModal.show();
    } else {
      instanceLoadingModal = new mdb.Modal(modalLoadingElement, {
        backdrop: "static",
      });
      instanceLoadingModal.show();
    }

    const fdata = new FormData($("#UploadimageForm")[0]);
    const filesName = [];
    $("#UploadimageForm input[type=file]")?.each((idx, file) => {
      console.log(file.length)
      const fileItem = $(file)[0]?.files[0];
      if (!!fileItem) {
        const fileName = setFileName($(file)[0].id, fileItem?.name);
        if (fileName == "") {
          alert("ไฟล์ไม่ถูกต้อง");
          return;
        } else {
          fdata.append("files", $(file)[0]?.files[0], fileName);
          filesName.push({ FILENAME: fileName });
        }
      }
    });
    const data = ShortFormMapValue();
    fdata.append("idNo", data?.txtPeopleId);
    fdata.append("ipAddress", data?.ipAddress);
    fdata.append("applNumber", data?.applNumber);
    fdata.append("fileLogs", JSON.stringify(filesName));

    $.ajax({
      type: "POST",
      url: OnlineUmayplusWebsiteUI + "/submit_/api/uploadimage/submit",
      data: fdata,
      contentType: false,
      processData: false,
      success: async (response) => {
        console.log(response);
        instanceLoadingModal.hide();
        if (response?.result == "success") {
          let status = response?.data?.data?.status;
          if (status == "200") {
            window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/previewpage";
          } else if (status == "500") {
            const count = await getCookie("count_upload");
            if (!count) {
              saveCookie("count_upload", 1);
              alert("รหัส OTP ผิดพลาด กรุณาลองใหม่อีกครั้ง");
            } else {
              if (count == 3) {
                $.ajax({
                  type: "POST",
                  url: OnlineUmayplusWebsiteUI + "/submit_/api/form/uploadimage/uploadotplog",
                  data: payload,
                  contentType: "application/json",
                  success: function (resp) {
                    // console.log(resp);
                  },
                  complete: (resp) => {
                    const utm = getUtmQuery();
                    if (!!utm?.tranno) {
                      deleteCookie("count_upload");
                      window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/previewpage";
                    } else {
                      const modalUploadElement = document.getElementById(
                        "modal-upload-complete"
                      );
                      let instanceUploadModal =
                        mdb.Modal.getInstance(modalUploadElement);
                      if (instanceUploadModal) {
                        instanceUploadModal.show();
                      } else {
                        instanceUploadModal = new mdb.Modal(
                          modalUploadElement,
                          {
                            backdrop: "static",
                          }
                        );
                        instanceUploadModal.show();
                      }
                      deleteCookie("count_upload");
                    }
                  },
                });
              } else {
                alert("รหัส OTP ผิดพลาด กรุณาลองใหม่อีกครั้ง");
                const num = parseInt(count) + 1;
                saveCookie("count_upload", num);
              }
            }
          } else {
            alert("เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง");
          }
        } else if (response?.result == "error") {
          alert("เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง");
        } else {
          alert("เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง");
        }
      },
    });
  }
});

$("#btn-uploadimage-back").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/backtofullform",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/backtofullform",response);
      dataLayer.push({ 'event': 'BUTTON_SEND_INFORMATION' });	
    },
    complete: (response) => {
      dataLayer.push({ 'event': 'BUTTON_PREVIOUS' });	
      console.log("shortform/backtofullform",response);
      window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyfullform/";
    },
  });
});

$("#btn-uploadimage-submit").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
 

  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);

  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/previewinfosubmit",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/previewinfosubmit",response);
    },
    complete: (response) => {
      console.log("shortform/previewinfosubmit",response);
    },
  });
});

$("#btn-preview-info-edit").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/previewinfoedit",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/previewinfoedit",response);
    },
    complete: (response) => {
      console.log("shortform/previewinfoedit",response);
      dataLayer.push({ 'event': 'BUTTON_EDIT' });		
      window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyfullform/";
    },
  });
});

$("#btn-preview-info-submit").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/sendfile",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/sendfile",response);
    },
    complete: (response) => {
      dataLayer.push({ 'event': 'BUTTON_CONFIRM' });			
      console.log("shortform/sendfile",response);
    },
  });
});

// $("#btn-preview-info-submit").click((e) => {
//   var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
//   const shortFormData = ShortFormMapValue();
//   const payload = JSON.stringify(shortFormData);
//   $.ajax({
//     type: "POST",
//     url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/sendfile",
//     data: payload,
//     contentType: "application/json",
//     success: function (response) {
//       console.log("shortform/sendfile",response);
//     },
//     complete: (response) => {
//       console.log("shortform/sendfile",response);
//     },
//   });
// });

$("#ApplyFullForm").submit(function (e) {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  e.preventDefault();
  if ($(this).valid()) {
    // let modalResult;
    // modalResult = new mdb.Modal(
    //   document.getElementById("modal-data-loading")
    //   // , {
    //   //   backdrop: "static",
    //   // }
    // );
    // modalResult.show();

    const modalLoadingElement = document.getElementById("modal-data-loading");
    let instanceLoadingModal = mdb.Modal.getInstance(modalLoadingElement);
    if (instanceLoadingModal) {
      // instanceLoadingModal.show();
    } else {
      instanceLoadingModal = new mdb.Modal(
        modalLoadingElement
        //   {
        //   backdrop: "static",
        //  }
      );
      // instanceLoadingModal.show();
    }

    // var formData = new FormData(this);
    const fullFormData = FullFormMapValue();
    const payload = JSON.stringify(fullFormData);
    console.log(fullFormData)
    
    $.ajax({
      type: "POST",
      url: OnlineUmayplusWebsiteUI + "/submit_/api/form/fullform/submit",
      // url: "https://localhost:7009" + "/submit_/api/form/fullform/submit",
      data: payload,
      contentType: "application/json",
      success: function (response) {
        console.log("fullform/submit",response.error);
        console.log("fullform/submit",response);
        // instanceLoadingModal.hide();
        if (response?.result == 200) {
          if (
            response?.applChoice != undefined &&
            response?.applChoice != null &&
            response?.applChoice != ""
          ) {
            let shortFormData = ShortFormMapValue();
            shortFormData = {
              applNumber: response?.applno,
              applChoice: response?.applChoice,
            };
            const newPayload = JSON.stringify(shortFormData);
            // instanceLoadingModal.show();
            $.ajax({
              type: "POST",
              url: OnlineUmayplusWebsiteUI + "/submit_/api/form/fullform/updateshort",
              data: newPayload,
              contentType: "application/json",
              success: (res) => {
                // console.log(res)
              },
              complete: async (res) => {
                const notAcceptTerm = await getCookie("notAcceptNdid");
                if (response?.ndidFlag != "Y") {
                  try{
                    clearForm("ApplyForm");
                    clearForm("ApplyFullForm");
                    deleteAllCookie();
                    localStorage.removeItem("NdidSelectOffline");
                    localStorage.removeItem("submit-document-type");
                  }catch{
                    window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
                  }
                  window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
                } else if (response?.ndidFlag == "Y" && notAcceptTerm == "Y") {
                  try{
                    clearForm("ApplyForm");
                    clearForm("ApplyFullForm");
                    deleteAllCookie();
                    localStorage.removeItem("NdidSelectOffline");
                    localStorage.removeItem("submit-document-type");
                  }catch{
                    window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
                  }
                  window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
                } else if (response?.ndidFlag == "Y" && notAcceptTerm == "N") {
                  window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/Uploadimage";
                } else {
                  try{
                    clearForm("ApplyForm");
                    clearForm("ApplyFullForm");
                    deleteAllCookie();
                    localStorage.removeItem("NdidSelectOffline");
                    localStorage.removeItem("submit-document-type");
                  }catch{
                    window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
                  }
                  window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
                }
              },
            });
          } else {
            try{
              clearForm("ApplyForm");
              clearForm("ApplyFullForm");
              deleteAllCookie();
              localStorage.removeItem("NdidSelectOffline");
              localStorage.removeItem("submit-document-type");
            }catch{
              window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
            }
            window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
          }
        } else {
          // modalResult = new mdb.Modal(
          //   document.getElementById("modal-data-error"),
          //   {
          //     backdrop: "static",
          //   }
          // );
          // modalResult.show();
          // instanceLoadingModal.hide();
          const modalDataErrorElement =
            document.getElementById("modal-data-error");
          let instanceDataErrorModal = mdb.Modal.getInstance(
            modalDataErrorElement
          );
          if (instanceDataErrorModal) {
            instanceDataErrorModal.show();
            return;
          } else {
            instanceDataErrorModal = new mdb.Modal(modalDataErrorElement, {
              backdrop: "static",
            });
            instanceDataErrorModal.show();
            return;
          }
        }
      },
      complete: () => {
        // window.location.href = "/cashcard/applyform/previewpage";
        // window.location.href = "/cashcard/applyform/Uploadimage";
      },
    });
  }
});

$("#UpdateSalaryFirstForm").submit(function (e) {
  e.preventDefault();
  if ($(this).valid()) {
    var formData = new FormData(this);
    $.ajax({
      type: "POST",
      url: "test",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        console.log(response);
      },
    });
  }
});

$("#UpdateSalarySecondForm").submit(function (e) {
  e.preventDefault();
  if ($(this).valid()) {
    var formData = new FormData(this);
    $.ajax({
      type: "POST",
      url: "test",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        console.log(response);
      },
    });
  }
});

/** NDID TERM */

$("#btn-ndid-accept-term").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/ndidtermaccept",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/ndidtermaccept",response);
    },
    complete: (response) => {
      console.log("shortform/ndidtermaccept",response);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/ndidtermacceptlog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("shortform/ndidtermacceptlog",response);
        },
        complete: (response) => {
          console.log("shortform/ndidtermacceptlog",response);
          window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/acceptncb";
        },
      });
    },
  });
});

$("#btn-ndid-not-accept-term").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/ndidtermnotaccept",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/ndidtermnotaccept",response);
    },
    complete: (response) => {
      console.log("shortform/ndidtermnotaccept",response);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/ndidtermnotacceptlog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("shortform/ndidtermnotacceptlog",response);
        },
        complete: (response) => {
          console.log("shortform/ndidtermnotacceptlog",response);
          try{
            clearForm("ApplyForm");
            clearForm("ApplyFullForm");
            deleteAllCookie();
            localStorage.removeItem("NdidSelectOffline");
            localStorage.removeItem("submit-document-type");
          }catch{
            window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
          }
          window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
        },
      });
    },
  });
});

/** NCB */
$("#btn-accept-ncb").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  e.preventDefault();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/acceptncb",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/acceptncb",response);
    },
    complete: (response) => {
      console.log("shortform/acceptncb",response);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/acceptncblog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("shortform/acceptncblog",response);
        },
        complete: (response) => {
          console.log("shortform/acceptncblog",response);
          window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/verifykyc";
        },
      });
    },
  });
});

$("#btn-not-accept-ncb").click((e) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/notacceptncb",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("shortform/notacceptncb",response);
    },
    complete: (response) => {
      console.log("shortform/notacceptncb",response);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/shortform/notacceptncblog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("shortform/notacceptncblog",response);
        },
        complete: (response) => {
          console.log("shortform/notacceptncblog",response);
          try{
            clearForm("ApplyForm");
            clearForm("ApplyFullForm");
            deleteAllCookie();
            localStorage.removeItem("NdidSelectOffline");
            localStorage.removeItem("submit-document-type");
          }catch{
            window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
          }
          window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
        },
      });
    },
  });
});

/** verifykyc */

$("#btn-kyc-cancel").click((e) => {
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  // e.preventDefault();
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/bank/cancelkyc",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("bank/cancelkyc",response);
    },
    complete: (response) => {
      console.log("bank/cancelkyc",response);
    },
  });
});

const IdPReSelect = [
  "30000",
  "30200",
  "30300",
  "30300",
  "30400",
  "30500",
  "30510",
  "30520",
  "30530",
  "30600",
  "30610",
  "30700",
];
const IdPError = ["30800", "30900"];
const ASError = ["40000", "40200", "40300", "40400", "40500"];
const Success = ["completed"];
const TimeOut = ["Timeout"];
const Reject = ["rejected"];
const checkErrorCode = async (errCode) => {
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const modalErrorMessageElement = document.getElementById(
    "modal-error-message"
  );
  let instanceErrorMessageModal = mdb.Modal.getInstance(
    modalErrorMessageElement
  );
  if (instanceErrorMessageModal) {
    // instanceErrorMessageModal.show();
  } else {
    instanceErrorMessageModal = new mdb.Modal(modalErrorMessageElement, {
      backdrop: "static",
    });
    // instanceErrorMessageModal.show();
  }

  const modalErrorMessageOkElement = document.getElementById(
    "modal-error-message-ok"
  );
  let instanceErrorMessageOkModal = mdb.Modal.getInstance(
    modalErrorMessageOkElement
  );
  if (instanceErrorMessageOkModal) {
  } else {
    instanceErrorMessageOkModal = new mdb.Modal(modalErrorMessageOkElement, {
      backdrop: "static",
    });
    // instanceErrorMessageOkModal.show();
  }

  const count = await getCookie("count_error_msg");
  let msg = "";
  $.get(`${UmayplusWebsiteUI}/submit_/api/bank/error/msg/${errCode}`, (response) => {
    if (!!response && response != "") {
      console.log(response);
      msg = response;
    }
  }).then(() => {
    if (
      IdPError.includes(errCode) ||
      ASError.includes(errCode) ||
      Success.includes(errCode) ||
      TimeOut.includes(errCode)
    ) {
      //popup
      if (errCode == "completed" || errCode == "Timeout") {
        // console.log(msg)
        $("#error-message").text(msg);
      } else {
        $("#error-message").text(errCode + " " + msg);
      }

      instanceErrorMessageModal.show();
      return;
    } else if (IdPReSelect.includes(errCode) || Reject.includes(errCode)) {
      //popup

      $("#error-message").text(errCode + " " + msg);
      $("#error-message-ok").text(errCode + " " + msg);

      if (!count) {
        saveCookie("count_error_msg", 1);
        instanceErrorMessageOkModal.show();
        return;
      } else {
        if (count == 3) {
          instanceErrorMessageModal.show();
          deleteCookie("count_error_msg");
          return;
        }
        instanceErrorMessageOkModal.show();
        const num = parseInt(count) + 1;
        saveCookie("count_error_msg", num);
        return;
      }
    } else {
      //popup
      $("#error-message").text(errCode);
      instanceErrorMessageModal.show();
      return;
    }
  });
  // $.ajax({
  //   type: "GET",
  //   url: `/submit_/api/bank/error/msg/${errCode}`,
  //   success: function (response) {
  //     if(!!response && response != ""){
  //       console.log(response)
  //       msg = response
  //     }
  //   },
  // })
};
let handleIdidInterval;

$("#submitBank").click((e) => {
  dataLayer.push({ 'event': 'BUTTON_VERIFY_NEXT' });	
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  e.preventDefault();
  // $(".date-count").attr("data-mdb-countdown", countTime);

  let shortFormData = ShortFormMapValue();
  shortFormData["idpcode"] = $(
    "input[name='bankAccount'][type='radio']:checked"
  ).val();
  let payload = JSON.stringify(shortFormData);

  const fullFormData = FullFormMapValue();

  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/bank/confirmkyc",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("bank/confirmkyc",response);
    },
    complete: (response) => {
      console.log("bank/confirmkyc",response);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/bank/confirmkyclog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("bank/confirmkyclog",response);
          if (response?.data?.status == "200") {
            // shortFormData["txtEmail"]
            shortFormData["node_id"] = $(
              "input[name='bankAccount'][type='radio']:checked"
            ).attr("id");
            const reqData = {
              mail: fullFormData.txtEmail,
              ...shortFormData,
            };
            payload = JSON.stringify(reqData);
            $.ajax({
              type: "POST",
              url: OnlineUmayplusWebsiteUI + "/submit_/api/bank/ndid/request",
              data: payload,
              contentType: "application/json",
              success: function (res) {
                if (res?.result == "check") {
                  const errCode = res?.errorCode;
                  //check errCode
                  checkErrorCode(errCode.toString());
                } else if (res?.result == "msg" || res?.data == "null") {
                  dataLayer.push({ 'event': 'POP_UP_123_LENDING' });
                  alert("ขออภัยค่ะ ระบบขัดข้อง กรุณาลองใหม่อีกครั้งค่ะ");
                } else if (res?.result == "count") {
                  CountDownTime();
                  if (!handleIdidInterval) {
                    const refId = res?.data?.reference_id;
                    const reqId = res?.data?.request_id;
                    handleIdidInterval = setInterval(() => {
                      handleNdid(refId, reqId);
                    }, 60000);
                  }
                }else{
                  alert("ขออภัยค่ะ ระบบขัดข้อง กรุณาลองใหม่อีกครั้งค่ะ");
                }
              },
              complete: (res) => {},
            });
          }
        },
        complete: (response) => {
          console.log("bank/confirmkyclog",response);
        },
      });
    },
  });
});
 $("#cancle-register").click((e)=>{
  e.preventDefault();
 });

 $("#btn-error-message").click((e)=>{
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  e.preventDefault();
  window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
 });

 $("#btn-confirm-register").click((e)=>{
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  e.preventDefault();
  window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
 });

 $("#btn-kyc-confirm-cancle").click((e)=>{
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  e.preventDefault();
  let shortFormData = ShortFormMapValue();
  let payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/bank/unsuccessconfirmkyclog",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log("bank/unsuccessconfirmkyclog",response);
      if (response?.data.status == 200) {
        clearInterval(handleIdidInterval);
        clearForm("ApplyForm");
        clearForm("ApplyFullForm");
        deleteAllCookie();
        localStorage.removeItem("NdidSelectOffline");
        localStorage.removeItem("submit-document-type");
        window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyform/thankyou";
      }
    },
    complete: (response) => {
      console.log("bank/unsuccessconfirmkyclog",response);
    },
  });
 });

const handleNdid = (refId, reqId) => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const shortFormData = ShortFormMapValue();
  shortFormData["idpCode"] = $(
    "input[name='bankAccount'][type='radio']:checked"
  ).val();
  const dataPayload = {
    ...shortFormData,
    reference_id: refId,
    request_id: reqId,
  };
  const payload = JSON.stringify(dataPayload);

  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/bank/ndidhandle",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log(response);
      if (response?.result == "success") {
        if (
          response?.data?.status == "500" ||
          (response?.data?.errorCode == null && response?.data?.message != null)
        ) {
          alert("ขออภัยค่ะ ระบบขัดข้อง กรุณาลองใหม่อีกครั้งค่ะ");
        } else if (
          response?.data?.status != "500" &&
          response?.data?.errorCode != null
        ) {
          const sms = {
            mobileNumber: shortFormData.txtPhoneNo,
            messageSMS: response?.data?.msg,
            errorCode: response?.data?.errorCode,
          };
          $.ajax({
            type: "POST",
            url: OnlineUmayplusWebsiteUI + "/submit_/api/bank/sms",
            data: JSON.stringify(sms),
            contentType: "application/json",
            success: function (res) {
              console.log(res);
              if (res?.result == "success" && res?.data?.data == true) {
                clearInterval(handleIdidInterval);
                //check errorCode
                checkErrorCode(response?.data?.errorCode?.toString());
                const ndid_payload = {
                  appl_no: shortFormData?.applNumber,
                  refId: refId,
                };
                $.ajax({
                  type: "POST",
                  url: OnlineUmayplusWebsiteUI + "/submit_/api/bank/ndidlog",
                  data: JSON.stringify(ndid_payload),
                  contentType: "application/json",
                  success: function (resp) {
                    if (resp?.result == "success") {
                      const arr = JSON.parse(resp?.data);
                      arr.forEach((element) => {
                        // console.log(element)
                        let item = JSON.parse(JSON.stringify(element));
                        if (item?.refType == "Data") {
                          let refMessage = JSON.parse(item?.responseMessage);
                          const data = refMessage[0].data;
                          const econ = JSON.parse(
                            refMessage[1]?.data
                          )?.e_consent_reference;
                          const sendData = {
                            ...data,
                            E_Consent_reference: econ,
                          };
                          $.ajax({
                            type: "POST",
                            url: OnlineUmayplusWebsiteUI + "/submit_/api/bank/ndidsavecase",
                            data: JSON.stringify(sendData),
                            contentType: "application/json",
                            success: (rs) => {
                              // if (rs?.result == "success") {
                              // }
                            },
                            complete: () => {},
                          });
                        }
                      });
                    }
                  },
                  complete: () => {},
                });
              } else {
                //continuous interval
              }
            },
            complete: (response) => {},
          });
        }
      }
    },
    complete: (response) => {},
  });
};

const CountDownTime = () => {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  const countdownElement = document.getElementById("date-count");
  const instance = Countdown.getInstance(countdownElement);
  if (instance) {
  } else {
    new Countdown(countdownElement, {
      countdown: countTimeFormat(),
      countdownSeparator: ":",
    });
    document.addEventListener('end.mdb.countdown', (e)=> {
      let shortFormData = ShortFormMapValue();
      let payload = JSON.stringify(shortFormData);
      $.ajax({
        type: "POST",
        url: OnlineUmayplusWebsiteUI + "/submit_/api/form/bank/unsuccessconfirmkyclog",
        data: payload,
        contentType: "application/json",
        success: function (response) {
          console.log("bank/unsuccessconfirmkyclog",response);
        
          if (response?.data.status == 200) {
            const countdownModalElement = document.getElementById("modal-error-message");
            let modalResult = new mdb.Modal(countdownModalElement, {
              backdrop: "static",
              keyboard: false
            });
            $("#countdown-modal").modal('hide');
            modalResult.show();
            clearInterval(handleIdidInterval);
            clearForm("ApplyForm");
            clearForm("ApplyFullForm");
            deleteAllCookie();
            localStorage.removeItem("NdidSelectOffline");
            localStorage.removeItem("apply-full-form-next-step");
          }
        },
        complete: (response) => {
          console.log("bank/unsuccessconfirmkyclog",response);
        },
      });
    })
  }

  const countdownModalElement = document.getElementById("countdown-modal");
  const instanceModal = mdb.Modal.getInstance(countdownModalElement);
  if (instanceModal) {
    instanceModal.show();
    return;
  } else {
    let modalResult = new mdb.Modal(countdownModalElement, {
      backdrop: "static",
    });
    modalResult.show();
  }
};

$("#check-status").submit(function (e) {
  var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  e.preventDefault();
  if ($(this).valid() != false) {
    const msgImages = {
      "ขออภัยค่ะ ยังไม่มีข้อมูลของท่านในระบบ ขอบคุณค่ะ" : "incorrect",
      "ใบสมัครของท่านกำลังอยู่ระหว่างการพิจารณา ขอบคุณค่ะ" : "wait",
      "เอกสารการสมัครของท่านไม่ครบถ้วน กำลังอยู่ระหว่างการติดตามเอกสาร ขอบคุณค่ะ" : "document",
      "ขออภัยค่ะ ใบสมัครของท่านไม่ผ่านการพิจารณา ทางบริษัทหวังเป็นอย่างยิ่งว่าจะได้รับใช้ท่านอีกในโอกาสต่อไป ขอบคุณค่ะ" : "incorrect",
      "ใบสมัครของท่านได้รับการอนุมัติแล้ว ขอบคุณค่ะ" : "correct"
    }
  const id = $("#check-status #idCard").val().replaceAll("-", "");
  const dateOfBirth = $("#check-status #dateOfBirth").val().replaceAll("", "");
  const payload = {
    txtPeopleId: id,
    ddlDay: parseInt(dateOfBirth?.split("/")[0]),
    ddlMonth: parseInt(dateOfBirth?.split("/")[1]),
    ddlYear: parseInt(dateOfBirth?.split("/")[2]),
    applChannel :"WEB"
  };
  console.log(UmayplusWebsiteUI);
  $.ajax({
    type: "POST",
    url: OnlineUmayplusWebsiteUI + "/submit_/api/form/checking/status",
    data: JSON.stringify(payload),
    contentType: "application/json",
    success: function (response) {
      console.log("1 =>",response?.data);
      if (response?.data.status == 200) {
        $('#apply-status-respone').modal('show');
        $("#img-respone").attr("src",`../static/images/ApplyStatus/icon/${msgImages[response?.data.data]}.png`);
        $("#msg-respone").html(response?.data.data.replaceAll("ขอบคุณค่ะ", "<br> ขอบคุณค่ะ"))
      }
    },
    complete: (response) => {},
  });
}
});

$("#UpdateSalaryFirstForm").submit(function (e) {
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  e.preventDefault();
  if ($(this).valid()) {

    // const modalLoadingElement = document.getElementById("modal-loading");
    // let instanceLoadingModal = mdb.Modal.getInstance(modalLoadingElement);
    // if (instanceLoadingModal) {
    //   instanceLoadingModal.show();
    // } else {
    //   instanceLoadingModal = new mdb.Modal(modalLoadingElement, {
    //     backdrop: "static",
    //   });
    //   instanceLoadingModal.show();
    // }

    var data = UpdateSalaryValue();
    let payload = JSON.stringify(data);
    $.ajax({
      type: "POST",
      // url: UpdateSalaryUmayplusWebsiteUI + "/submit_/api/form/shortform/submit",
      url: UmayplusWebsiteUI + "/CustUpdateSalary/SaveDataAllocate",
      data: payload,
      contentType: "application/json",
      success: function (response) {
        console.log("UpdateSalaryFirstForm/submit",response);
      },
      complete: (response) => {
        console.log("UpdateSalaryFirstForm/submit",response);
      },
    });
  }
});