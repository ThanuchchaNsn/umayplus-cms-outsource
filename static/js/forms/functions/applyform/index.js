/** ApplyForm Function */

import {
  GetConvenientTimeAll,
  GetOccupationAll,
  GetProvinceAll,
  GetZipcodeByProvince,
} from "../../api/data.js";
import Inputmask from "../../../../libs/inputmask/dist/inputmask.es6.js";
import { deleteCookie } from "../../storage/cookie.js";
import { clearForm, getForm, saveForm } from "../../storage/local-storage.js";
import { DateThaiLanguageSetting } from "../config/datepicker.js";
import { getUtmQuery } from "../../utils.js";




const clearData = () => {
  var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
  clearForm("ApplyForm");
  clearForm("ApplyFullForm");
  deleteCookie("formsession");
  window.location.href = UmayplusWebsiteUI;
};

const ApplyFormCheckFullFilled = () => {
  let text_filled = true;
  let checkbox_filled = true;

  $("#ApplyForm input").each(function () {
    if (!(this.id == "idStaff" || this.id == "forStaff" || this.id == "gclid")) {
      if ($(this).val() == "") text_filled = false;
    }
  });

  $("#ApplyForm input:checkbox").each(function () {
    if (!$(this).is(":checked")) checkbox_filled = false;
  });

  return (
    text_filled &&
    checkbox_filled &&
    !!$("#postcode option").filter(":selected").val() &&
    !!$("#province option").filter(":selected").val() &&
    !!$("#career option").filter(":selected").val() &&
    !!$("#time option").filter(":selected").val()
  );
};

if ($("#ApplyForm").length > 0) {
  (function($){
    $(document ).ready(function() {
      dataLayer.push({
        'event': 'SHORT_FORM_CUSTOMER_INFO',
        'pageview': {
            'funnelName': 'applyCashCard',
            'stepNumber': '0',
            'stepName': 'short_form_customer_info'
        }
      });
    });
  })(jQuery)
  $("#acceptTerm").on("click change", (e) => {
    if ($("#ApplyForm").valid()) {
      // $("#acceptTerm").prop('checked', true);
    } else {
      $("#acceptTerm").prop("checked", false);
    }
  });

  $("#ApplyForm").bind("change", function () {
    if (ApplyFormCheckFullFilled()) {
      $("#applyFormSubmitButton").removeClass("btn-disabled");
      $("#applyFormSubmitButton").addClass("btn");
    } else {
      $("#applyFormSubmitButton").removeClass("btn");
      $("#applyFormSubmitButton").addClass("btn-disabled");
    }
  });

  $("#applyFormSubmitButton").on("click", () => {
    dataLayer.push({
      'event': 'CLICK_BUTTON_SUBMIT_APPLYING_SHORT',
      'pageview': {
          'funnelName': 'applyCashCard',
          'stepNumber': '1',
          'stepName': 'click button submit applying short'
      }
  });
    if (ApplyFormCheckFullFilled()) {
      $("#ApplyForm").submit();
    }
  });

  $(".btn-back-to-home").click(() => {
    clearData();
  });

  $(".btn-more-info").click(() => {
    dataLayer.push({
      'event': 'CLICK_CONTINUE_APPLY_FULL_FORM',
      'pageview': {
          'funnelName': 'applyCashCard',
          'stepNumber': '2-3',
          'stepName': 'click continue to fill full form'
      }
    });
    var OnlineUmayplusWebsiteUI = $('#OnlineUmayplusWebsiteUI').val();
    window.location.href = OnlineUmayplusWebsiteUI + "/cashcard/applyfullform/";
  });

  $(".btn-no-more-info").click(() => {
    dataLayer.push({
      'event': 'CLICK_NOT_CONTINUE_APPLY_FULL_FORM',
      'pageview': {
          'funnelName': 'applyCashCard',
          'stepNumber': '2-4',
          'stepName': 'click not continue to fill full form'
      }
    });
  });

  $(".datepicker-custom input").keydown(function (e) {
    e.preventDefault();
  });
  $(".datepicker-custom input").focus(function () {
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
      saveForm("ApplyForm");
      // if($('#dateOfBirth').hasClass('error')){
      //   $('#dateOfBirth').removeClass('form-control')
      //   $('#dateOfBirth').addClass('form-controlerror');
      // } 
      // else {
      // }

      $('#dateOfBirth').removeClass('error');
      $('#dateOfBirth').removeClass('form-controlerror');
      $('#dateOfBirth').addClass('form-control')
      $("#dateOfBirth-error").hide();
      $("#dateBirthLb").removeClass('error-msg');
    });
  }

  const inputIdCardElement = document.getElementById("idCard");
  var inputmaskIdCard = new Inputmask("9-9999-99999-99-9", {
    placeholder: " ",
    showMaskOnHover: false,
    showMaskOnFocus: false,
    clearMaskOnLostFocus: true,
  });

  const inputPhoneElement = document.getElementById("phone");
  var inputmaskPhone = new Inputmask("999-999-9999", {
    placeholder: " ",
    // introducercode,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    clearMaskOnLostFocus: true,
  });

  $(document).ready(() => {
    inputmaskIdCard.mask(inputIdCardElement);
    inputmaskPhone.mask(inputPhoneElement);
  });

  //introducercode
  var forStaff = "";
  var idStaff = "";
  const utm = getUtmQuery();
  var introducerCode = "";

  if(utm?.introducercode && utm?.introducercode != "undefined"){
    introducerCode = utm?.introducercode;
  }else if (utm?.Introducercode && utm?.Introducercode != "undefined" ) {
    introducerCode = utm?.Introducercode;
  } 

  $(document).ready(() => {
    if(introducerCode != ""){
      $("#applyFormMoreButton").click()
      console.log(utm)
    }
  });

  $("#applyFormMoreButton").click(() => { 
    var fileField = `
        <div class="row staff-section" style="display: none">
          <div class="col-12 col-lg-6 py-2 py-lg-2">
              <label for="idStaff" class="form-label f-ul ">รหัสผู้แนะนำ</label>
              <input type="text" class="form-control form-control-xl w-100 rounded-1" ${
                introducerCode != "" ? "disabled" : ""
              } inputmode="numeric"
                  name="idStaff" id="idStaff" value="${
                    introducerCode != "" ? introducerCode : idStaff
                  }" placeholder="สำหรับใส่รหัสผู้แนะนำ" maxlength="8" autocomplete="off" />
              <div for="idStaff" class="error"></div>
          </div>
          <div class="col-12 col-lg-6 py-2 py-lg-2">
              <label for="forStaff"
                  class="form-label f-ul ">สำหรับเจ้าหน้าที่ยูเมะพลัส</label>
              <input type="text" class="form-control form-control-xl w-100 rounded-1"
                  name="forStaff" id="forStaff" placeholder="สำหรับเจ้าหน้าที่ยูเมะพลัส" value="${forStaff}"
                  maxlength="8" autocomplete="off"/>
              <div for="forStaff" class="error"></div>
          </div>
        </div>
      `;
    const countFileField = $("#idStaff").length;
    if (countFileField < 1 ) {
      $("#MoreInfo").html(fileField);
      $(document).ready(() => {
        const inputForStaffElement = document.getElementById("forStaff");
        const inputIdStaffElement = document.getElementById("idStaff");

        var inputmaskIdStaff = new Inputmask("99999999", {
          placeholder: "",
          showMaskOnHover: false,
          showMaskOnFocus: false,
          clearMaskOnLostFocus: true,
        });
        var inputmaskForStaff = new Inputmask("a9999999", {
          placeholder: "",
          showMaskOnHover: false,
          showMaskOnFocus: false,
          clearMaskOnLostFocus: true,
        });

        inputmaskIdStaff.mask(inputIdStaffElement);
        inputmaskForStaff.mask(inputForStaffElement);
      });

      $("#idStaff").on("change", function () {
        idStaff = $(this).val();
        console.log("idStaff",idStaff)
      });

      $("#forStaff").on("change", function () {
        forStaff = $(this).val();
        console.log("forStaff",forStaff)
      });

      $("div.staff-section").slideDown(300);
      $("#applyFormMoreButtonIcon").html(`<i class="fa-solid fa-minus"></i> `);
      $('#idStaff').focus()
      $('#forStaff').focus()
      $('#acceptTerm').focus()
    } else {
      $("#applyFormMoreButtonIcon").html('<i class="fa-solid fa-plus"></i> ');
      $("div.staff-section").slideUp(300, () => {
        $("div#MoreInfo").empty();
      });
    }
  });

  //Filter Address
  $("#ApplyForm #province").on("change", async (e) => {
    if (!!e.target.value) {
      let zipcodeData = [];
      const zipcode = $("#ApplyForm #province option")
        .filter(":selected")
        .val();
      if (!!zipcode && zipcode != "") {
        zipcodeData = await GetZipcodeByProvince(zipcode);
        $("#ApplyForm #postcode option:not(:first-child)").remove();
        zipcodeData.forEach((element) => {
          $("#ApplyForm #postcode").append(
            `<option value="${element.ZIP_CODE}">${element.ZIP_CODE}</option>"`
          );
        });
      }
    }
  });

  const provinceData = await GetProvinceAll();
  provinceData?.forEach((element) => {
    $("#ApplyForm #province").append(
      `<option value="${element.PROVINCE_CODE}" >${element.THAI_DESCRIPTION}</option>"`
    );
  });

  let careerData = [];
  careerData = await GetOccupationAll();

  // เอาอื่นๆไว้ล่างสุด
  var tmp_careerData = {}
  careerData.forEach((element, index) => {
    if(element.THAI_DESCRIPTION == "อื่นๆ"){
      tmp_careerData = careerData[index]
    }
  });
  var arrayWithoutD = careerData.filter(function (el) {
    return el.THAI_DESCRIPTION !== "อื่นๆ";
  });
  arrayWithoutD = [...arrayWithoutD, tmp_careerData]
  careerData = arrayWithoutD

  careerData.forEach((element) => {
    $("#ApplyForm #career").append(
      `<option value="${element.OCCUPATION}" >${element.THAI_DESCRIPTION}</option>"`
    );
  });

  let convenientTimeData = [];
  convenientTimeData = await GetConvenientTimeAll();
  convenientTimeData?.forEach((element) => {
    $("#ApplyForm #time").append(
      `<option value="${element.TIME_ID}" >เวลา ${element.TIME_FROM} - ${element.TIME_TO} น.</option>"`
    );
  });

  if ($("#ApplyForm #province option").filter(":selected")?.val() != "") {
    let zipcodeData = [];
    const zipcode = $("#ApplyForm #province option").filter(":selected").val();
    if (!!zipcode && zipcode != "") {
      $("#ApplyForm #postcode option:not(:first-child)").remove();
      zipcodeData?.forEach((element) => {
        $("#ApplyForm #postcode").append(
          `<option value="${element.ZIP_CODE}">${element.ZIP_CODE}</option>"`
        );
      });
    }
  }

  const data = getForm("ApplyForm");
 
  if ($("#ApplyForm #postcode option")) {
    let zipcodeData = [];
    const zipcode =
      $("#ApplyForm #province option").filter(":selected").val() ||
      data?.postcode;
    if (!!zipcode && zipcode != "") {
      zipcodeData = await GetZipcodeByProvince(zipcode);
      $("#ApplyForm #postcode option:not(:first-child)").remove();
      zipcodeData?.forEach((element) => {
        $("#ApplyForm #postcode").append(
          `<option value="${element.ZIP_CODE}">${element.ZIP_CODE}</option>"`
        );
      });
      if (data?.postcode) {
        $(`#ApplyForm #postcode`).val(data?.postcode);
      }
    }
  }
  // if($('#dateOfBirth').hasClass('error')){
  //   $('#dateOfBirth').removeClass('form-control')
  //   $('#dateOfBirth').addClass('form-controlerror');
  // } 
  // else {
  //   $('#dateOfBirth').removeClass('form-controlerror');
  //   $('#dateOfBirth').addClass('form-control')
  // }
}
    // On load GCLID
	// Google Offline Conversion Tracking GCLID

// addGclid()
// window.addEventListener('load', addGclid);



// Google Offline Conversion Tracking GCLID

//Submit form
// Google Offline Conversion Tracking GCLID

// var data_gclid = JSON.parse(localStorage.getItem('gclid'));
// if (data_gclid) {
//     data.gclid = data_gclid.value;
// }

// Google Offline Conversion Tracking GCLID
//save : api SaveApplyShortData อันเดิม map data
//url : {config url}/Applying/SaveApplyShortData 
// gclid = data.gclid





