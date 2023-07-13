import {
  applyStatusMessage
} from "./message.js";
import {
  applyStatusRule
} from "./rule.js";


$("#check-status").validate({
  // ignore: ".select",
  rules: {
    ...applyStatusRule,
  },
  messages: {
    ...applyStatusMessage,
  },
  errorPlacement: function (error, element) {
    error.addClass("f-ul");
    error.appendTo($(`div.error[for=${element.attr("id")}]`));
  },
  wrapper: "div",
  submitHandler: function (form) {
    // if ($(acceptTerm).is(":checked")) {
      // const path = "/cashcard/applyfullform";
      // const path = "/cashcard/";
      // saveCookie("ApplyForm", path);
    // } else {
    //   console.log("not");
    // }
  },
  highlight: function (element, errorClass, validClass) {
    $(element.form)
      .find(".form-label[for=" + element.id + "]")
      .addClass("error-msg");
    $(element).addClass("error");
    // $(element.form).find(".form-outline:has(.form-label[for=" + element.id + "])").addClass("error");
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element.form)
      .find(".form-label[for=" + element.id + "]")
      .removeClass("error-msg");
    $(element).removeClass("error");
  },
  ignore: ":not(:visible)",
  invalidHandler: function(form, validator) {
    var errors = validator?.numberOfInvalids();
    if (errors) { 
      console.log(["validate:" ,validator.errorList],["form:",$("#check-status").serializeArray()]);                   
        validator?.errorList[0]?.element?.focus();
    }
    if($('#dateOfBirth').hasClass('error')){
      $('#dateOfBirth').removeClass('form-control')
      $('#dateOfBirth').addClass('form-controlerror');
    } 
  }
});