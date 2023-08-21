import {
  applyFormMessage
} from "./message.js";
import {
  applyFormRule
} from "./rule.js";


$("#ApplyForm").validate({
  // ignore: ".select",
  rules: {
    ...applyFormRule,
  },
  messages: {
    ...applyFormMessage,
  },
  errorPlacement: function (error, element) {
    error.addClass("f-ul");
    error.appendTo($(`div.error[for=${element.attr("id")}]`));
  },
  wrapper: "div",
  submitHandler: function (form) {
    if ($(acceptTerm).is(":checked")) {
      // const path = "/cashcard/applyfullform";
      // const path = "/cashcard/";
      // saveCookie("ApplyForm", path);
      console.log("is checked")
    } else {
      console.log("not");
    }
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
      console.log(["validate:" ,validator.errorList],["form:",$("#ApplyForm").serializeArray()]);                   
      validator?.errorList[0]?.element?.focus();
      // $("#dateBirthLb").focus()
      // $("#dateOfBirth").focus()
      // $('body').scrollTo(validator?.errorList[0]?.element);
      // document.querySelector(validator?.errorList[0]?.element).scrollIntoView({ behavior: 'smooth' })
      // $(validator?.errorList[0]?.element).get(0).scrollIntoView({behavior: 'smooth'});
      // console.log(1)
    }
    if($('#dateOfBirth').hasClass('error')){
      $('#dateOfBirth').removeClass('form-control')
      $('#dateOfBirth').addClass('form-controlerror');
      // $("#dateOfBirth_panel").focus()
      // $("#dateOfBirth").focus()
    } 
    // $("#lastName").focus()
    // $("#idCard").focus()
    // $("#province").focus()
    // $("#postcode").focus()
    // $("#phone").focus()
    // $("#salary").focus()
    // $("#career").focus()
    // $("#company").focus()
    // $("#time").focus()
    // console.log(validator?.errorList[0]?.element.id)
   
    // var elements = validator?.errorList;
    // elements.forEach(el => {
    //   $(`${el["element"]}`).focus()
    //   console.log(el["element"].id)
    //   $("#acceptTerm").prop( "checked", false );
    // });
    $('html, body').animate({
      scrollTop: $(`#${validator?.errorList[0]?.element.id}`).offset().top - 200
  }, 100);
    $("#acceptTerm").attr('checked', false); // Unchecks it
    // $("#dateBirthLb").click()
    // if($("#dateOfBirth").val().length === 0){
    // }
  }
});

