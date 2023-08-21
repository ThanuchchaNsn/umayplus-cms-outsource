import {
  step1Message,
  step2Message,
  step2ModalMessage,
  step3Message,
  step3ModalMessage,
  step4Message,
  step5Message
} from "./message.js";
import {
  step1Rule,
  step2ModalRule,
  step2Rule,
  step3ModalRule,
  step3Rule,
  step4Rule,
  step5Rule
} from "./rule.js";

$('#step4eStatement , #step4eLetter').change(function () {
  var state = ($('#step4eStatement[value="Y"]:checked').val() != undefined || $('#step4eLetter[value="Y"]:checked').val() != undefined) ? true : false;
  var newRule = {
    required: state
  }
  $('#ApplyFullForm').validate().settings.rules.step4StatementMail = newRule
  $('#ApplyFullForm').validate().settings.rules.step4termAndConditionMail = newRule
});

$("#ApplyFullForm").validate({
  rules: {
    ...step1Rule,
    ...step2Rule,
    ...step2ModalRule,
    ...step3Rule,
    ...step3ModalRule,
    ...step4Rule,
    ...step5Rule,
  },
  messages: {
    ...step1Message,
    ...step2Message,
    ...step2ModalMessage,
    ...step3Message,
    ...step3ModalMessage,
    ...step4Message,
    ...step5Message,
  },

  errorPlacement: function (error, element) {
    // console.log(element);
    error.addClass("f-ul");
    // error.addClass("error-msg");
    error.appendTo($(`div.error[for=${element.attr("id")}]`));
  },
  wrapper: "div",
  submitHandler: function (form) {
   
    // const fullForm = $("#ApplyFullForm")
    //   .serializeArray()
    //   .reduce((json, { name, value }) => {
    //     json[name] = value;
    //     return json;
    //   }, {});
    // const jsonFullForm = JSON.stringify(fullForm);
    // $.cookie("ApplyFullForm", jsonFullForm);
    // const path = "/cashcard/applyform";

    // saveCookie("ApplyFullForm", "/cashcard/");
  },
  ignore: ":not(:visible), :hidden",
  highlight: function (element, errorClass, validClass) {
    $(element.form)
      .find(".form-label[for=" + element.id + "]")
      // .addClass("error-msg");
    $(element).addClass("error");
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element.form)
      .find(".form-label[for=" + element.id + "]")
      .removeClass("error-msg");
    $(element).removeClass("error");
  },
  invalidHandler: function (form, validator) {
    var errors = validator?.numberOfInvalids();
    if (errors) {                    
        validator?.errorList[0]?.element?.focus();
    }
    
    $('html, body').animate({
      scrollTop: $(`#${validator?.errorList[0]?.element.id}`).offset().top - 200
    });
    console.log(validator?.errorList)
  } 
});