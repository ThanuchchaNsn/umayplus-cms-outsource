import { getUtmQuery } from "../utils.js";
import { getCookie, saveCookie } from "./cookie.js";

export const clearForm = (formName) => {
  localStorage.removeItem(`${formName}DataEncrypt`);
};

const expired = await $.cookie("formsession");

if (!expired) {
  clearForm("ApplyForm");
  clearForm("ApplyFullForm");
  saveCookie("formsession", Date.now());
}

const encryptStorage = new EncryptStorage(expired?.toString() || await getCookie("formsession"));

//secret-key-value
export const saveForm = (formName, data) => {
  localStorage.removeItem(`#${formName} `);
  let formData = $(`#${formName}`)
    .serializeArray()
    .reduce((json, { name, value }) => {
      json[name] = value;
      return json;
    }, {});

  if (!!data) {
    formData = {
      ...formData,
      ...data,
    };
  }

  // localStorage.formData = JSON.stringify(formData);
  encryptStorage.setItem(`${formName}DataEncrypt`, JSON.stringify(formData));
  return formData;
};

export const getForm = (formName) => {
  // console.log('get, ',  encryptStorage.getItem('formDataEncrypt'))
  const FORM = `${formName}DataEncrypt`;
  // return;
  if (localStorage[FORM] != undefined) {
    try {
      const data = encryptStorage.getItem(FORM);
      if($('#ApplyFullForm').length != 0 || $('#PreviewForm').length != 0){
        Object.entries(data).forEach(([key, value]) => {

          if (!!value) {
            if (
              $(`input[name=${key}][type="radio"][value="${value}"]`).length > 0
            ) {
              $(`input[name=${key}][type="radio"][value="${value}"]`).prop(
                "checked",
                true
              );
            } else if ($(`input:checkbox[name=${key}]`).length > 0) {
              $(`input:checkbox[name=${key}]`).prop("checked", true);
            } else if ($(`select[name=${key}]`).length > 0) {
              $(`select[name=${key}]`).val(value);
            } else {
              const utm = getUtmQuery();
              let introducerCode = "";
              if(utm?.introducercode && utm?.introducercode != "undefined"){
                introducerCode = utm?.introducercode;
              }else if (utm?.Introducercode && utm?.Introducercode != "undefined" ) {
                introducerCode = utm?.Introducercode;
              }
              if(key=="idStaff" && introducerCode){
                $(`input#${key}`).val(introducerCode);
              }else{
                $(`input#${key}`).val(value);
              }          
            }
          }
        });
        $("#step4otherMail").val(data?.step1otherMail);
        if(data?.step1mailProvider === "other"){
          $("#step4otherMail").show();
        }else{
          $("#step4otherMail").val("");
          $("#step4otherMail").hide();
        }
      }
      // const data = JSON.parse(localStorage.formData);
      return data;
    } catch {
      return {};
    }
  }
};

if ($("#ApplyForm").length > 0) {
  const FORM = "ApplyForm";
  $(document).ready(function () {
    // getForm(FORM); // method to call form data from FORM, when page loaded
    console.log("Save")
  });

  $(document).on("change", function () {
    saveForm(FORM);
    console.log("Save")
  });
}

if ($("#ApplyFullForm").length > 0) {
  const FORM = "ApplyForm";
  const FULL_FORM = "ApplyFullForm";
  $(document).ready(function () {
    getForm(FULL_FORM);
    const shortForm = getForm(FORM);
    if (!!shortForm) {
      const result = {
        step1idCard: shortForm?.idCard,
        step1firstNameThai: shortForm?.firstName,
        step1lastNameThai: shortForm?.lastName,
        step1dateOfBirth: shortForm?.dateOfBirth,
        step1phoneNumber: shortForm?.phone,
        step5phone: shortForm?.phone,
        step3salary: shortForm?.salary,
        applNumber:  shortForm?.applNumber,
        step3company:  shortForm?.company,
        step5bankName: `${shortForm?.firstName} ${shortForm?.lastName}`
      };
      Object.entries(result).forEach(([key, value]) => {
        if (!!value) {
          if (
            (key,
            $(`input[name=${key}][type="radio"][value="${value}"]`).length > 0)
          ) {
            $(`input[name=${key}][type="radio"][value="${value}"]`).prop(
              "checked",
              true
            );
          } else {
            const utm = getUtmQuery();
            let introducerCode = "";
            if(utm?.introducercode && utm?.introducercode != "undefined"){
              introducerCode = utm?.introducercode;
            }else if (utm?.Introducercode && utm?.Introducercode != "undefined" ) {
              introducerCode = utm?.Introducercode;
            }
            if(key=="idStaff" && introducerCode){
              $(`input#${key}`).val(introducerCode);
            }else{
              $(`input#${key}`).val(value);
            }
          }
        }
      });
    }
  });

  $(document).on("change", function () {
    saveForm(FULL_FORM);
  });
}

if ($("#PreviewForm").length > 0) {
  const FULL_FORM = "ApplyFullForm";
  $(document).ready(function () {
    getForm(FULL_FORM);
   
  });
}

$(".submit-document-type-ndid").click(function() {
  localStorage.setItem("submit-document-type", "1");  //save the value
});

$(".submit-document-type-normal").click(function() {
  localStorage.setItem("submit-document-type", "0");  //save the value
});