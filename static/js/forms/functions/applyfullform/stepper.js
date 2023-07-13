import {
  setHomeAddress,
  setWorkAddress,
  step1otherMailPicker,
  step3otherBankPicker,
  step4otherMailPicker,
  step4otherSourcePicker,
  step5otherBankPicker,
} from "./fields.js";
import { FullFormMapValue } from "../../storage/mapping.js";
import { clearForm } from "../../storage/local-storage.js";

const applyFullFormElement = $("#stepper-apply-full-form").get(0);
if (!!applyFullFormElement) {
  $("html, body").animate(
    {
      scrollTop: $("#apply-full-form-box").offset().top,
    },
    "fast"
  );

  const FullForm = FullFormMapValue();
  const logAPI = async (path) => {
    let payload = JSON.stringify({
      applNumber: FullForm.applNumber,
    });
    console.log(FullForm)
    await $.ajax({
      type: "POST",
      url: `/submit_/api/form/shortform/${path}`,
      data: payload,
      contentType: "application/json",
      success: function (response) {
        console.log(`shortform/${path}`,response);
      },
      complete: (response) => {
        console.log(`shortform/${path}`,response);
        // console.log(FullForm)
        if (path == "step5") {
          $("#ApplyFullForm").submit();
        }
      },
    });
  };

  const checkIntroducer = async () => {
    let payload = JSON.stringify({
      applNumber: FullForm.applNumber,
    });

    await $.ajax({
      type: "POST",
      url: `/submit_/api/form/fullform/checkintroducer`,
      data: payload,
      contentType: "application/json",
      success: function (response) {
        if (response?.result == "200" && response?.data == "true") {
          $("#step4source1").prop("checked", true);
          $("#step4friendFromUmay1").prop("checked", true);
          $("#step4friendFromUmay1").prop("disabled", true);
          $("#step4friendFromUmay2").prop("disabled", true);
          $("#pills-recommender-friend-selected").html("");

          if ($("#step4source1").is(":checked")) {
            const triggerEl = document.querySelector("#step4source1");
            mdb.Tab.getInstance(triggerEl).show();
          }

          if ($("#step4friendFromUmay1").is(":checked")) {
            const triggerEl = document.querySelector("#step4friendFromUmay1");
            mdb.Tab.getInstance(triggerEl).show();
          }
        }
      },
      complete: (response) => {},
    });
  };

  const stepper = new mdb.Stepper(applyFullFormElement);
  let pageState = 1;

  const scrollUp = (callback) => {
    $("html, body")
      .animate(
        {
          scrollTop: $("#apply-full-form-card").offset().top,
        },
        "fast"
      )
      .promise()
      .done(() => callback);
    stepper.changeStep(pageState - 1);
  };

  const reCalHeight = () => {
    stepper._setHeight(stepper.activeStep);
    stepper._toggleActive(stepper.activeStepIndex);
  };

  const nextPageState = () => {
    if (pageState < 5) {
      pageState++;
    }

    if (pageState === 2 || pageState === 3) {
      // setAddressSuggestion(pageState)
    }
    scrollUp(stepper.nextStep());
    $(".stepper-completed .stepper-head-icon").html(
      '<i class="fas fa-check"></i>'
    );
    // if(pageState == 2){
    //   $("#ApplyFullFormStep2").addClass('active-color');
    // }
    $(`#ApplyFullFormStep${pageState}`).addClass("active-color");
  };

  const modalStep2Element = document.getElementById("step2Modal");
  let instanceStep2Modal = mdb.Modal.getInstance(modalStep2Element);
  if (instanceStep2Modal) {
  } else {
    instanceStep2Modal = new mdb.Modal(modalStep2Element, {
      backdrop: "static",
    });
  }

  modalStep2Element.addEventListener("hidden.mdb.modal", (e) => {
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
    $("body").removeAttr("style");
  });

  const modalStep3Element = document.getElementById("step3Modal");
  let instanceStep3Modal = mdb.Modal.getInstance(modalStep3Element);
  if (instanceStep3Modal) {
  } else {
    instanceStep3Modal = new mdb.Modal(modalStep3Element, {
      backdrop: "static",
    });
  }

  modalStep3Element.addEventListener("hidden.mdb.modal", (e) => {
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
    $("body").removeAttr("style");
  });

  const previousPageState = () => {
    if (pageState > 1) {
      pageState--;
    }
    if (pageState === 2 || pageState === 3) {
      // setAddressSuggestion(pageState)
    }
  };
  $("#apply-full-form-prev-step").hide();

  $(".stepper-height-trigger").click(() => {
    stepper._setHeight(stepper.activeStep);
    stepper._toggleActive(stepper.activeStepIndex);
  });

  $("#step1mailProvider").change(() => {
    step1otherMailPicker();
    reCalHeight();
  });

  $("#step3bank").change(() => {
    step3otherBankPicker();
    reCalHeight();
  });

  $("#step4otherSource").change(() => {
    step4otherSourcePicker();
    reCalHeight();
  });

  $("#step4StatementMailProvider").change(() => {
    step4otherMailPicker();
    reCalHeight();
  });

  $("#step5bank").change(() => {
    step5otherBankPicker();
    reCalHeight();
  });

  $(document).ready(() => {
    $("input").on("change", () => {
      reCalHeight();
    });
  });

  if (pageState === 1) {
    $(document).ready(() => {
      if ($("#step1prefix4").is(":checked")) {
        const triggerEl = document.querySelector("#step1prefix4");
        mdb.Tab.getInstance(triggerEl).show();
      }

      if ($("#step1numberOfChild2").is(":checked")) {
        const triggerEl = document.querySelector("#step1numberOfChild2");
        mdb.Tab.getInstance(triggerEl).show();
      }

      step1otherMailPicker();
      reCalHeight();
      setHomeAddress();
      setWorkAddress();

      if ($("#step3prefix1").is(":checked")) {
        const triggerEl = document.querySelector("#step3prefix1");
        mdb.Tab.getInstance(triggerEl).show();
      }

      if ($("#step4source1").is(":checked")) {
        const triggerEl = document.querySelector("#step4source1");
        mdb.Tab.getInstance(triggerEl).show();
      }

      if ($("#step4friendFromUmay1").is(":checked")) {
        const triggerEl = document.querySelector("#step4friendFromUmay1");
        mdb.Tab.getInstance(triggerEl).show();
      }

      if ($("#step4source2").is(":checked")) {
        const triggerEl = document.querySelector("#step4source2");
        mdb.Tab.getInstance(triggerEl).show();
      }

      if ($("#step4highRankRelation2").is(":checked")) {
        const triggerEl = document.querySelector("#step4highRankRelation2");
        mdb.Tab.getInstance(triggerEl).show();
      }

      if ($("#step4credit2").is(":checked")) {
        const triggerEl = document.querySelector("#step4credit2");
        mdb.Tab.getInstance(triggerEl).show();
      }
      if ($("#step4paymentType1").is(":checked")) {
        const triggerEl = document.querySelector("#step4paymentType1");
        mdb.Tab.getInstance(triggerEl).show();
      }
      if ($("#step4paymentDate2").is(":checked")) {
        const triggerEl = document.querySelector("#step4paymentDate2");
        mdb.Tab.getInstance(triggerEl).show();
      }

      if(localStorage.getItem('submit-document-type') == "1"){
        $("#step4paymentType2").prop("checked", true);
        $("#step4paymentType1").prop("disabled", true);
        $("#step4paymentType2").prop("disabled", true);
        $(".step5-type-ndid").css("display" , "none");
      }
      
      $("input[name='step4promtpay2']").click(function() {
        console.log($("#step4promtpay2").is(":checked"));
        if ($("#step4promtpay2").is(":checked") == false) {
          $("#ApplyFullFormStep4 .step4-for-promtpay-2 .tab-pane").removeClass('active');
        }else{
          $("#ApplyFullFormStep4 .step4-for-promtpay-2 .tab-pane").addClass('active');
        }
      });

      if ($("#step4promtpay2").is(":checked")) {
        const triggerEl = document.querySelector("#step4promtpay2");
        mdb.Tab.getInstance(triggerEl).show();
      }
      if ($("#step4promotion2").is(":checked")) {
        const triggerEl = document.querySelector("#step4promotion2");
        mdb.Tab.getInstance(triggerEl).show();
      }

      checkIntroducer();
    });
  }

  $(".apply-full-form-next-step").click(() => {
    console.log("FullFormMapValue",FullFormMapValue())
    var state = ($('#step4eStatement[value="Y"]:checked').val() != undefined || $('#step4eLetter[value="Y"]:checked').val() != undefined) ? true : false;
          if (state == false) {
            $('#step4StatementMail-labal').removeClass('error-msg')
            $('#step4StatementMail').removeClass('error')
            // $('#step4StatementMail-error').css({display:"none"})
          }

    // current is 3
    if (pageState === 2) {
      if ($("#step3prefix1").is(":checked")) {
        step3otherBankPicker();
        reCalHeight();
      }
    }

    // current is 4
    if (pageState === 3) {
      if ($("#step4source2").is(":checked")) {
        step4otherSourcePicker();
        step4otherMailPicker();
        reCalHeight();
        // $(document).ready(()=>{
        //   getForm("ApplyFullForm")
        // })
      }

      if ($("#step1mail").val() != "") {
        if ($("#step4StatementMail").val().trim() == "") {
          $("#step4StatementMail").val($("#step1mail").val());
          $("#step4StatementMailProvider").val($("#step1mailProvider").val());
          step4otherMailPicker();
          if ($("#step1otherMail").val() != "") {
            $("#step4otherMail").val($("#step1otherMail").val());
          }
        }
      }
    }

    // current is 5
    if (pageState === 4) {
      if($("#flush-headingContactPeople").hasClass("collapsed")){
        $("#flush-headingContactPeople").click();
      }

      // if($("#step4contactFirstName1").val().length === 0){
      //   console.log("empty_name")
      //   $("#flush-headingContactPeople").click();
      // }
      // if($("#step4contactLastName1").val().length === 0){
      //   console.log("empty_Lname")
      //   $("#flush-headingContactPeople").click();
      // }
      // if($("#step4contactPhone1").val().length === 0){
      //   console.log("empty_Phone")
      //   $("#flush-headingContactPeople").click();
      // }

      if ($("#step5termOfConditionBank1").is(":checked")) {
        step5otherBankPicker();
        reCalHeight();
      }
    }

    if ($("#ApplyFullForm").valid()) {
      if (pageState === 1) {
        dataLayer.push({				
          'event': 'CURRENT_ADDRESS',				
          'pageview': {				
              'funnelName': 'applyCashCard',				
              'stepNumber': '4',				
              'stepName': 'current_address'				
          }				
        });				
        logAPI("step1");
        dataLayer.push({						
          'event': 'BUTTON_NEXT_CLICK_ON_PAGE1_CUSTOMER_INFO' ,						
          'pageview': {						
              'funnelName': 'applyCashCard',						
              'stepNumber': 'BtnNEXT-1',						
              'stepName': 'button_next_click_on_page1_customer_info'						
          }						
      });						
      }  

      if (pageState === 2) {
        dataLayer.push({			
          'event': 'OFFICE_ADDRESS',			
          'pageview': {			
              'funnelName': 'applyCashCard',			
              'stepNumber': '5',			
              'stepName': 'office_address'			
          }			
        });

        dataLayer.push({						
          'event': 'BUTTON_NEXT_CLICK_ON_PAGE2_CURRENT_ADDRESS' ,						
          'pageview': {						
              'funnelName': 'applyCashCard',						
              'stepNumber': 'BtnNEXT-2',						
              'stepName': 'button_next_click_on_page2_current_address'						
          }						
        });								
        if ($("#insertHomeAddress").length > 0) {
          logAPI("step2");
          nextPageState();
          return;
        } else {
          console.log("insertHomeAddress")
          $("#homeAddress").removeClass("color-dark-grey");
          $("#homeAddress").addClass("text-red");

          if ($("#homeAddress").hasClass("text-red")) {
            $("#addHomeAddress").focus();
          }
        }
        return;
      }

      if (pageState === 3) {
        dataLayer.push({				
          'event': 'OTHER_INFO',				
          'pageview': {				
              'funnelName': 'applyCashCard',				
              'stepNumber': '6',				
              'stepName': 'other_info'				
          }				
        });		
        dataLayer.push({						
          'event': 'BUTTON_NEXT_CLICK_ON_PAGE3_OFFICE_ADDRESS' ,						
          'pageview': {						
              'funnelName': 'applyCashCard',						
              'stepNumber': 'BtnNEXT-3',						
              'stepName': 'button_next_click_on_page3_office_address'						
          }						
      });								
        if ($("#insertWorkAddress").length > 0) {
          const fullFormMapValue = FullFormMapValue();
          // console.log(fullFormMapValue?.txtCompanyName)
          // console.log($("#insertWorkAddress")[0].innerHTML)
          if($("#insertWorkAddress")[0].innerHTML == fullFormMapValue?.txtCompanyName){
            $("#workAddress").removeClass("color-dark-grey");
            // $("#workAddress").addClass("text-red");
            // if ($("#workAddress").hasClass("text-red")) {
            $("#addWorkAddress").focus();
            // }
          }else{
          logAPI("step3");
          nextPageState();
          return;
          }
          // stepper.nextStep();
          // pageState++;
        } else {
          $("#workAddress").removeClass("color-dark-grey");
          $("#workAddress").addClass("text-red");
          if ($("#workAddress").hasClass("text-red")) {
            $("#addWorkAddress").focus();
          }
        }
        return;
      }
      if (pageState === 4) {
        dataLayer.push({				
          'event': 'CONSENT',				
          'pageview': {				
              'funnelName': 'applyCashCard',				
              'stepNumber': '7',				
              'stepName': 'consent'				
          }				
        });		
      			
        // console.log($('#step4paymentType1:checked').length > 0);
        if ($("#step4paymentType1").is(":checked")) {
          $("#step5termOfConditionBank1").prop("checked", true);
          const triggerEl = document.querySelector(
            "#step5termOfConditionBank1"
          );
          mdb.Tab.getInstance(triggerEl).show();
        } else if ($("#step4paymentType2").is(":checked")) {
          $("#step5termOfConditionBank2").prop("checked", true);
          const triggerEl = document.querySelector(
            "#step5termOfConditionBank2"
          );
          mdb.Tab.getInstance(triggerEl).show();
        }
        logAPI("step4");
        dataLayer.push({						
          'event': 'BUTTON_NEXT_CLICK_ON_PAGE4_OTHER_INFO' ,						
          'pageview': {						
              'funnelName': 'applyCashCard',						
              'stepNumber': 'BtnNEXT-4',						
              'stepName': 'button_next_click_on_page4_other_info'						
          }						
      });					
        // $('#step5termOfConditionBank1').prop('checked', true);
      }

      if (pageState === 5) {
        dataLayer.push({						
          'event': 'BUTTON_SUBMIT_CLICK_ON_PAGE5_CONSENT',						
          'pageview': {						
              'funnelName': 'applyCashCard',						
              'stepNumber': 'BtnSUMIT-5',						
              'stepName': 'button_SUBMIT_click_on_page5_CONSENT'						
          }						
      });						
        const fullFormMapValue = FullFormMapValue();
        console.log("fullFormMapValue", fullFormMapValue);
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
        logAPI("step5");
      }

      $("#apply-full-form-prev-step").show();
      // if(pageState<5){
      //   pageState++;
      // }
      nextPageState();

      // $('stepper-completed.stepper-head.stepper-head-icon').html("test");
    }else{
      // invalid form
    }

    stepper._setHeight(stepper.activeStep);
    stepper._toggleActive(stepper.activeStepIndex);
    return;
  });

  $(".btn-confirm").click(() => {
    // return;
    if($('#step3companyPhone').val() == "-" && $('#step3branchPhone').val() == "-" && $('#step3phone').val() == "-"){
      console.log($('#step3companyPhone').val() == "-" && $('#step3branchPhone').val() == "-" && $('#step3phone').val() == "-")
      $('#recommandPhone_lb').html("กรุณาระบุ โทรศัพท์อย่างน้อย 1 เบอร์");
      $("#recommandPhone_lb").addClass("text-red");
      return;
    }else{
      $('#recommandPhone_lb').html("");
      $("#recommandPhone_lb").removeClass("text-red");
    }
    if ($("#homeAddress").hasClass("text-red")) {
      $("#homeAddress").removeClass("text-red");
      $("#homeAddress").addClass("color-dark-grey");
    }
    if ($("#workAddress").hasClass("text-red")) {
      $("#workAddress").removeClass("text-red");
      $("#workAddress").addClass("color-dark-grey");
    }
    if ($("#ApplyFullForm").valid()) {
      $("#step2field").show();
      $("#step3field").show();
      setHomeAddress();
      setWorkAddress();


      if($("").val() == "-"){

      }

      if (instanceStep2Modal) {
        instanceStep2Modal.hide();
      }

      if (instanceStep3Modal) {
        instanceStep3Modal.hide();
      }
      stepper._setHeight(stepper.activeStep);
      stepper._toggleActive(stepper.activeStepIndex);
    }
  });

  $(".apply-full-form-prev-step").click(() => {
    if (pageState === 2) {
      dataLayer.push({							
        'event': 'BUTTON_PREVIOUS_CLICK_ON_PAGE2_CURRENT_ADDRESS' ,							
        'pageview': {							
            'funnelName': 'applyCashCard',							
            'stepNumber': 'BtnNEXT-2',							
            'stepName': 'button_previous_click_on_page2_current_address'							
        }							
       });	
      dataLayer.push({			
        'event': 'CUSTOMER_INFO',			
        'pageview': {			
            'funnelName': 'applyCashCard',			
            'stepNumber': '3',			
            'stepName': 'customer_info'			
        }			
      });									
      logAPI("backtostep1");
    }
    if (pageState === 3) {
      dataLayer.push({							
        'event': 'BUTTON_PREVIOUS_CLICK_ON_PAGE3_OFFICE_ADDRESS' ,							
        'pageview': {							
            'funnelName': 'applyCashCard',							
            'stepNumber': 'BtnNEXT-2',							
            'stepName': 'button_previous_click_on_page3_office_address'							
        }							
      });			
      dataLayer.push({			
        'event': 'CURRENT_ADDRESS',			
        'pageview': {			
          'funnelName': 'applyCashCard',			
          'stepNumber': '4',			
          'stepName': 'current_address'			
        }			
      });							
      logAPI("backtostep2");
    }
    if (pageState === 4) {
        dataLayer.push({						
          'event': 'BUTTON_PREVIOUS_CLICK_ON_PAGE4_OTHER_INFO' ,						
          'pageview': {						
              'funnelName': 'applyCashCard',						
              'stepNumber': 'BtnPREVIOUS-4',						
              'stepName': 'button_previous_click_on_page4_other_info'						
          }						
        });						
        dataLayer.push({				
        'event': OFFICE_ADDRESS,				
        'pageview': {				
            'funnelName': 'applyCashCard',				
            'stepNumber': 5,				
            'stepName': office_address				
          }				
        });				
      logAPI("backtostep3");
    }
    if (pageState === 5) {
      dataLayer.push({					
        'event': 'BUTTON_PREVIOUS_CLICK_ON_PAGE5_CONSENT' ,					
        'pageview': {					
            'funnelName': 'applyCashCard',					
            'stepNumber': 'BtnPREVIOUS-5',					
            'stepName': 'button_previous_click_on_page5_consent'					
          }					
      });					
      dataLayer.push({			
        'event': OTHER_INFO,			
        'pageview': {			
            'funnelName': 'applyCashCard',			
            'stepNumber': 6,			
            'stepName': other_info			
          }			
      });			
      logAPI("backtostep4");
    }

    previousPageState();
    if (pageState === 1) {
      $("#apply-full-form-prev-step").hide();
    }

    $(`#ApplyFullFormStep${pageState} .stepper-head-icon`).html(pageState);
    scrollUp(stepper.previousStep());
    console.log(1)

    $(`#ApplyFullFormStep${pageState + 1}`).removeClass(
      "stepper-completed active-color"
    );
    // $(`#ApplyFullFormStep${pageState+1}`).removeClass('active-color');
  });

  $("#addHomeAddress").click(() => {
    $("#step2field").hide();
    // $("#step2Modal input").val("");
    // $("#step2Modal select").val("");
  });

  //Remove When Edit
  let step3ModalStore = {};
  $("#addWorkAddress").click(() => {
    $.each($("#step3Modal input"), (idx, ele) => {
      step3ModalStore[$(ele)[0].id] = $(ele).val();
    });
    $.each($("#step3Modal select"), (idx, ele) => {
      step3ModalStore[$(ele)[0].id] = $(ele).val();
    });
    // $("#step3Modal input").val("");
    // $("#step3Modal select").val("");
    $("#step3field").hide();
  });

  $("#step3CancelModal").on("click", () => {
    $.each($("#step3Modal input"), (idx, ele) => {
      $(ele).val(step3ModalStore[$(ele)[0].id]);
      if ($(ele).hasClass("error")) {
        $(ele).removeClass("error");
      }
    });
    $.each($("#step3Modal select"), (idx, ele) => {
      $(ele).val(step3ModalStore[$(ele)[0].id]);
      if ($(ele).hasClass("error")) {
        $(ele).removeClass("error");
      }
    });

    $.each($("#step3Modal .form-label"), (idx, ele) => {
      if ($(ele).hasClass("error-msg")) {
        $(ele).removeClass("error-msg");
      }
    });
    $.each($(`#step3Modal label`), (idx, ele) => {
      if (!!$(ele)[0]?.id) {
        $(ele)?.parent()?.parent()?.html("");
      }
    });
  });

  let step2ModalStore = {};
  $("#addHomeAddress").click(() => {
    $.each($("#step2Modal input"), (idx, ele) => {
      step2ModalStore[$(ele)[0].id] = $(ele).val();
    });
    $.each($("#step2Modal select"), (idx, ele) => {
      step2ModalStore[$(ele)[0].id] = $(ele).val();
    });
    // $("#step2Modal input").val("");
    // $("#step2Modal select").val("");
    $("#step2field").hide();
  });

  $("#step2CancelModal").on("click", () => {
    $.each($("#step2Modal input"), (idx, ele) => {
      $(ele).val(step2ModalStore[$(ele)[0].id]);
      if ($(ele).hasClass("error")) {
        $(ele).removeClass("error");
      }
    });
    $.each($("#step2Modal select"), (idx, ele) => {
      $(ele).val(step2ModalStore[$(ele)[0].id]);
      if ($(ele).hasClass("error")) {
        $(ele).removeClass("error");
      }
    });

    $.each($("#step2Modal .form-label"), (idx, ele) => {
      if ($(ele).hasClass("error-msg")) {
        $(ele).removeClass("error-msg");
      }
    });

    $.each($(`#step2Modal label`), (idx, ele) => {
      if (!!$(ele)[0]?.id) {
        $(ele)?.parent()?.parent()?.html("");
      }
    });
  });

  //

  $(".btn-cancel").click(() => {
    $("#step2field").show();
    $("#step3field").show();
    reCalHeight();
  });


  //clear value
  $("input[name=step1prefix]").change(() => {
    if (!$("#step1prefix4").is(":checked")) {
      clearError("step1prefixOther");
      $("#step1prefixOther").val("");
    }
  });
  $("input[name=step1numberOfChild]").change(() => {
    try {
      if ($("#step1numberOfChild1").is(":checked")) {
        // clearError("step1childCount");
        // $("#step1childCount").val("");
      }
    } catch (error) {
      console.log(error)
    }
  });

  $("input[name=step4friendFromUmay]").change(() => {
    if ($("#step4friendFromUmay2").is(":checked")) {
      clearError("step4recommenderFirstName");
      clearError("step4recommenderLastName");
      clearError("step4recommenderNickname");
      clearError("step4recommenderIdCard");
      clearError("step4recommenderPhone");
      $("#step4recommenderFirstName").val("");
      $("#step4recommenderLastName").val("");
      $("#step4recommenderNickname").val("");
      $("#step4recommenderIdCard").val("");
      $("#step4recommenderPhone").val("");
    }
  });

  $("input[name=step4highRankRelation]").change(() => {
    if ($("#step4highRankRelation1").is(":checked")) {
      clearError("step4highRankRelationFirstName");
      clearError("step4highRankRelationLastName");
      clearError("step4highRankRelationPosition");
      clearError("step4highRankRelationRelation");
      $("#step4highRankRelationFirstName").val("");
      $("#step4highRankRelationLastName").val("");
      $("#step4highRankRelationPosition").val("");
      $("#step4highRankRelationRelation").val("");
    }
  });
  $("input[name=step4credit]").change(() => {
    if ($("#step4credit1").is(":checked")) {
      clearError("step4creditCount");
      clearError("step4creditAmount");
      $("#step4creditCount").val("");
      $("#step4creditAmount").val("");
    }
    if ($("#step4credit2").is(":checked")) {
      console.log(111)
      clearError("step4creditCount");
      clearError("step4creditAmount");
      
    }
  });

  $("input[name=step4promtpay]").change(() => {
    if ($("#step4promtpay1").is(":checked")) {
      clearError("step4promtpayAmount");
      
    }
  });

  //clear error
  const clearError = (id) => {
    $.each($("input"), (idx, ele) => {
      if (id == $(ele)[0]?.id) {
        if ($(ele).hasClass("error")) {
          $(ele).removeClass("error");
        }
      }
    });
    $.each($("select"), (idx, ele) => {
      if (id == $(ele)[0]?.id) {
        if ($(ele).hasClass("error")) {
          $(ele).removeClass("error");
        }
      }
    });

    $.each($(".form-label"), (idx, ele) => {
      if (id == $(ele)[0]?.id) {
        if ($(ele).hasClass("error-msg")) {
          $(ele).removeClass("error-msg");
        }
      }
    });
    $.each($(`label`), (idx, ele) => {
      if (id == $(ele)[0]?.id) {
        if (!!$(ele)[0]?.id) {
          $(ele)?.parent()?.parent()?.html("");
        }
      }
    });

    $(`div.error[for=${id}]`).html("");
  };
}
