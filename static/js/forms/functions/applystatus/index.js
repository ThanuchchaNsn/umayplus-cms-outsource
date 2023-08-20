import { DateThaiLanguageSetting } from "../config/datepicker.js";

if ($(".apply-status-content").length > 0) {

    const inputIdCardElement = document.getElementById("idCard");
    var inputmaskIdCard = new Inputmask("9-9999-99999-99-9", {
      placeholder: " ",
      showMaskOnHover: false,
      showMaskOnFocus: false,
      clearMaskOnLostFocus: true,
    });
    
    $(document).ready(() => {
      inputmaskIdCard.mask(inputIdCardElement);
    });

    $(".datepicker-custom input").keydown(function (e) {
      e.preventDefault();
    });
    $(".datepicker-custom input").focus(function(){
      $(this).blur(); 
    });

    if ($(".datepicker-custom").length > 0) {
      const today = new Date();
      const minDate = new Date(
        today.getFullYear() - 55,
        today.getMonth(),
        today.getDate()
      );
      const maxDate = new Date(
        today.getFullYear() - 20,
        today.getMonth(),
        today.getDate()
      );
      const datepickerEle = document.querySelector(".datepicker-custom");
      const datepicker = new mdb.Datepicker(datepickerEle, {
        min: minDate,
        max: maxDate,
        startDate: maxDate, //maxDate.toLocaleDateString("en-US").split("/").join(","),
        disableFuture: true,
        removeClearBtn: true,
        ...DateThaiLanguageSetting,
      });
      datepickerEle.addEventListener("dateChange.mdb.datepicker", (e) => {
        // if($('#dateOfBirth').hasClass('error')){
        //   $('#dateOfBirth').removeClass('form-control')
        //   $('#dateOfBirth').addClass('form-controlerror');
        // } 
        // else {
        // }
        $('#dateOfBirth').removeClass('error');
        $('#dateOfBirth').removeClass('form-controlerror');
        $('#dateOfBirth').addClass('form-control');
        $("#dateOfBirth-error").hide();
        $("#dateBirthLb").removeClass('error-msg');
      });
    }
}

// $(document).on('close.mdb.datepicker', '.modal', function () {
//   if ($(".modal-backdrop").length > 1) {
//       $(".modal-backdrop").not(':first').remove();
//   }
// });

