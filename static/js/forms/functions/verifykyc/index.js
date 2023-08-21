/** VerifyKYC Function */

import { deleteCookie, getCookie } from "../../storage/cookie.js";
import { clearForm } from "../../storage/local-storage.js";
import { ShortFormMapValue } from "../../storage/mapping.js";

const getAllBank = () => {
  $.ajax({
    type: "GET",
    url: "/submit_/api/bank/data/idp",
    success: function (response) {
      console.log(response);
      if (response?.data?.idpData?.length > 0) {
        response?.data?.idpData?.forEach((data) => {
          let img = data.company_code;
          $("#list-all-bank").append(`
            <div class="col-12 col-xl-6">
              <div class="form-check selected-payment d-flex align-items-center gap-3">
                  <input class="form-check-input" type="radio" name="bankAccount" value="${data.marketing_name_en}"
                        id="${data.node_id}" />
                  <img class="img-fluid bank-icon" id="img-bank-${data.company_code}" src="../../static/images/banks/bank_${img}.png" />
                  <label class="form-check-label" for="bankAccount2">${data.marketing_name_th}</label>
                </div>
            </div>
            `);
          $.ajax({
            url: `../../static/images/banks/bank_${data.company_code}.png`,
            type: "HEAD",
            error: () => {
              $(`#img-bank-${data.company_code}`).attr(
                "src",
                "../../static/images/banks/bank_.png"
              );
            },
          });
        });
      }
    },
    complete: (response) => {},
  });
};

const getMyAllBank = () => {
  const shortFormData = ShortFormMapValue();
  const payload = JSON.stringify(shortFormData);
  $.ajax({
    type: "POST",
    url: "/submit_/api/bank/data/myidp",
    data: payload,
    contentType: "application/json",
    success: function (response) {
      console.log(response);
      if (response?.data?.idpData?.length > 0) {
        response?.data?.idpData?.forEach((data) => {
          let img = data.company_code;
          $("#list-my-all-bank").append(`
            <div class="col-12 col-xl-6">
              <div class="form-check selected-payment d-flex align-items-center gap-3">
                  <input class="form-check-input" type="radio" name="bankAccount" value="${data.company_code}"
                        id="${data.node_id}" />
                  <img class="img-fluid bank-icon" id="img-bank-${data.company_code}" src="../../static/images/banks/bank_${img}.png" />
                  <label class="form-check-label" for="bankAccount2">${data.marketing_name_th}</label>
                </div>
            </div>
            `);
          $.ajax({
            url: `../../static/images/banks/bank_${data.company_code}.png`,
            type: "HEAD",
            error: () => {
              $(`#img-bank-${data.company_code}`).attr(
                "src",
                "../../static/images/banks/bank_.png"
              );
            },
          });
        });
      } else {
        $("#no-my-bank").show();
      }
    },
    complete: (response) => {},
  });
};

const clearData = () =>{
    clearForm("ApplyForm");
    clearForm("ApplyFullForm");
    deleteCookie("formsession");
    deleteCookie("count_error_msg");
    var UmayplusWebsiteUI = $('#UmayplusWebsiteUI').val();
    window.location.href = UmayplusWebsiteUI;
}

if ($("#VerifykycForm").length > 0) {
  getAllBank();
  getMyAllBank();

  if (getCookie("count_error_msg") > 3) {
    deleteCookie("count_error_msg");
  }

  $(".btn-back-to-home").click(() => {
    clearData();
  });
}
