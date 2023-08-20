/** ApplyFullForm Function */

import {
    GetAmphurByProvince,
    GetProvinceAll,
    GetTambolByAmphur,
  } from "../../api/data.js";
  import { getForm, saveForm } from "../../storage/local-storage.js";
  import { DateThaiLanguageSetting } from "../config/datepicker.js";
  import Inputmask from "../../../../libs/inputmask/dist/inputmask.es6.js";
  

  if ($("#ApplyFullForm").length > 0) {
    $("#step3phone").on("keydown", async (e) => {
      if($('#step3companyPhone').val() == "-" && $('#step3branchPhone').val() == "-" && $('#step3phone').val() == "-"){
        $('#recommandPhone_lb').html("กรุณาระบุ โทรศัพท์อย่างน้อย 1 เบอร์");
        $("#recommandPhone_lb").addClass("text-red");
      }else{
        $('#recommandPhone_lb').html("");
        $("#recommandPhone_lb").removeClass("text-red");
      }
    });

    $("#ApplyFullForm #step2province").on("change", async (e) => {
      if (!!e.target.value) {
        let districtData = [];
        const distric = $("#ApplyFullForm #step2province option")
          .filter(":selected")
          .val();
        if (!!distric && distric != "") {
          districtData = await GetAmphurByProvince(distric);
          $("#ApplyFullForm #step2district option:not(:first-child)").remove();
          $("#ApplyFullForm #step2subdistrict option:not(:first-child)").remove();
          districtData.forEach((element) => {
            $("#ApplyFullForm #step2district").append(
              `<option value="${element.AMPHUR_CODE}">${element.THAI_DESCRIPTION}</option>`
            );
          });
        }
      }
    });
  
    $("#ApplyFullForm #step2district").on("change", async (e) => {
      if (!!e.target.value) {
        let districtData = [];
        const district = $("#ApplyFullForm #step2district option")
          .filter(":selected")
          .val();
        if (!!district && district != "") {
          districtData = await GetTambolByAmphur(district);
          // console.log(districtData);
          $("#ApplyFullForm #step2subdistrict option:not(:first-child)").remove();
          districtData.forEach((element) => {
            $("#ApplyFullForm #step2subdistrict").append(
              `<option value="${element.TAMBOL_CODE}">${element.THAI_DESCRIPTION}</option>`
            );
          });
        }
      }
    });

    $("#ApplyFullForm #step2subdistrict").on("change", async (e) => {
      if (!!e.target.value) {
          const val = $(`#ApplyFullForm #step2subdistrict option`).filter(':selected').text()
          $(`#ApplyFullForm #step2postcode`).val(val?.substring(
            val?.indexOf("(") + 1, 
            val?.lastIndexOf(")")
          ));
          if($("#step2postcode").hasClass("error")){
            $(".form-label[for=step2postcode]")
            .removeClass("error-msg");
            $("#step2postcode").removeClass("error");
            $("#step2postcode-error").html("");
          }
      }
    });
  
    $("#ApplyFullForm #step3province").on("change", async (e) => {
      if (!!e.target.value) {
        let districtData = [];
        const district = $("#ApplyFullForm #step3province option")
          .filter(":selected")
          .val();
        if (!!district && district != "") {
          districtData = await GetAmphurByProvince(district);
          $("#ApplyFullForm #step3district option:not(:first-child)").remove();
          $("#ApplyFullForm #step3subdistrict option:not(:first-child)").remove();
          districtData.forEach((element) => {
            $("#ApplyFullForm #step3district").append(
              `<option value="${element.AMPHUR_CODE}">${element.THAI_DESCRIPTION}</option>`
            );
          });
        }
      }
    });
  
    $("#ApplyFullForm #step3district").on("change", async (e) => {
      if (!!e.target.value) {
        let districtData = [];
        const district = $("#ApplyFullForm #step3district option")
          .filter(":selected")
          .val();
        if (!!district && district != "") {
          districtData = await GetTambolByAmphur(district);
          $("#ApplyFullForm #step3subdistrict option:not(:first-child)").remove();
          districtData.forEach((element) => {
            $("#ApplyFullForm #step3subdistrict").append(
              `<option value="${element.TAMBOL_CODE}">${element.THAI_DESCRIPTION}</option>`
            );
          });
        }
      }
    });
  
    $("#ApplyFullForm #step3subdistrict").on("change", async (e) => {
      if (!!e.target.value) {
          const val = $(`#ApplyFullForm #step3subdistrict option`).filter(':selected').text()
          $(`#ApplyFullForm #step3postcode`).val(val?.substring(
            val?.indexOf("(") + 1, 
            val?.lastIndexOf(")")
          ));
          if($("#step3postcode").hasClass("error")){
            $(".form-label[for=step3postcode]")
            .removeClass("error-msg");
            $("#step3postcode").removeClass("error");
            $("#step3postcode-error").html("");
          }
      }
    });

    const provinceData = await GetProvinceAll();
    provinceData?.forEach((element) => {
      $("#ApplyFullForm #step2province").append(
        `<option value="${element.PROVINCE_CODE}" >${element.THAI_DESCRIPTION}</option>`
      );
    });
    provinceData?.forEach((element) => {
      $("#ApplyFullForm #step3province").append(
        `<option value="${element.PROVINCE_CODE}" >${element.THAI_DESCRIPTION}</option>`
      );
    });
  
    const data = getForm("ApplyFullForm");
  
    if ($("#ApplyForm #step2province")) {
      let arrData = [];
      const selectedValue =
        $("#ApplyForm #step2province option").filter(":selected").val() ||
        data?.step2province;
      if (!!selectedValue && selectedValue != "") {
        arrData = await GetAmphurByProvince(selectedValue);
        $("#ApplyFullForm #step2district option:not(:first-child)").remove();
        arrData?.forEach((element) => {
          $("#ApplyFullForm #step2district").append(
            `<option value="${element.AMPHUR_CODE}">${element.THAI_DESCRIPTION}</option>`
          );
        });
        if (data?.step2district) {
          $(`#ApplyFullForm #step2district`).val(data?.step2district);
        }
      }
    }
  
    if ($("#ApplyForm #step2district")) {
      let arrData = [];
      const selectedValue =
        $("#ApplyForm #step2district option").filter(":selected").val() ||
        data?.step2district;
      if (!!selectedValue && selectedValue != "") {
        arrData = await GetTambolByAmphur(selectedValue);
        $("#ApplyFullForm #step2subdistrict option:not(:first-child)").remove();
        arrData?.forEach((element) => {
          $("#ApplyFullForm #step2subdistrict").append(
            `<option value="${element.TAMBOL_CODE}">${element.THAI_DESCRIPTION}</option>`
          );
          if(data?.step2subdistrict){
            $(`#ApplyFullForm #step2postcode`).val(element.THAI_DESCRIPTION?.substring(
              element.THAI_DESCRIPTION?.indexOf("(") + 1, 
              element.THAI_DESCRIPTION?.lastIndexOf(")")
            ));
          }
        });
        if (data?.step2subdistrict) {
          $(`#ApplyFullForm #step2subdistrict`).val(data?.step2subdistrict);
        }
      }
    }
  
    if ($("#ApplyForm #step3province")) {
      let arrData = [];
      const selectedValue =
        $("#ApplyForm #step3province option").filter(":selected").val() ||
        data?.step3province;
      if (!!selectedValue && selectedValue != "") {
        arrData = await GetAmphurByProvince(selectedValue);
        $("#ApplyFullForm #step3district option:not(:first-child)").remove();
        arrData?.forEach((element) => {
          $("#ApplyFullForm #step3district").append(
            `<option value="${element.AMPHUR_CODE}">${element.THAI_DESCRIPTION}</option>`
          );
        });
        if (data?.step3district) {
          $(`#ApplyFullForm #step3district`).val(data?.step3district);
        }
      }
    }
  
    if ($("#ApplyForm #step3district")) {
      let arrData = [];
      const selectedValue =
        $("#ApplyForm #step3district option").filter(":selected").val() ||
        data?.step3district;
      if (!!selectedValue && selectedValue != "") {
        arrData = await GetTambolByAmphur(selectedValue);
        $("#ApplyFullForm #step3subdistrict option:not(:first-child)").remove();
        arrData?.forEach((element) => {
          $("#ApplyFullForm #step3subdistrict").append(
            `<option value="${element.TAMBOL_CODE}">${element.THAI_DESCRIPTION}</option>`
          );
          if(data?.step3subdistrict){
            $(`#ApplyFullForm #step3postcode`).val(element.THAI_DESCRIPTION?.substring(
              element.THAI_DESCRIPTION?.indexOf("(") + 1, 
              element.THAI_DESCRIPTION?.lastIndexOf(")")
            ));
          }
        });
        if (data?.step3subdistrict) {
          $(`#ApplyFullForm #step3subdistrict`).val(data?.step3subdistrict);
        }
      }
    }
    
    $(".datepicker-custom input").keydown(function (e) {
      e.preventDefault();
    });
    $(".datepicker-custom input").focus(function(){
      $(this).blur(); 
    });

    $('#step4promtpay1').on("click", ()=>{
      $("#step4promtpay2").prop( "checked", false );
      $("#step4promtpayAmount").val("");
    })
    $('#step4promtpay2').on("click", ()=>{
      $("#step4promtpay1").prop( "checked", false );
      $("#step4promtpayAmount").val("");
    })
    if ($(".datepicker-custom").length > 0) {
      // const datepickerStep1dateOfBirthElement = document.querySelector(
      //   ".datepicker-custom:has(#step1dateOfBirth) "
      // );
      var dateOfBirthInput = document.querySelector('#step1dateOfBirth');
      var datepickerStep1dateOfBirthElement = dateOfBirthInput.parentNode.closest('.datepicker-custom');

      // const datepickerSstep1expireDateCardElement = document.querySelector(
      //   ".datepicker-custom:has(#step1expireDateCard)"
      // );
      var dateOfExpireInput = document.querySelector('#step1expireDateCard');
      var datepickerSstep1expireDateCardElement = dateOfExpireInput.parentNode.closest('.datepicker-custom');
      const datepicker1 = new mdb.Datepicker(datepickerStep1dateOfBirthElement, {
        removeClearBtn: true,
        ...DateThaiLanguageSetting,
      });
      const today = new Date();
      const maxDate = new Date(
        today.getFullYear() + 10,
        today.getMonth(),
        today.getDate()
      );
      const startDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
      );
      const datepicker2 = new mdb.Datepicker(
        datepickerSstep1expireDateCardElement,
        {
          startDate: startDate,
          filter: (date) => {
            return !(
              today.getFullYear() == date.getFullYear() &&
              today.getMonth() == date.getMonth() &&
              today.getDate() == date.getDate()
            );
          },
          max: maxDate,
          removeClearBtn: true,
          disablePast: true,
          ...DateThaiLanguageSetting,
        }
      );
  
      datepickerSstep1expireDateCardElement.addEventListener(
        "dateChange.mdb.datepicker",
        (e) => {
          saveForm("ApplyFullForm");
          if($("#step1expireDateCard").hasClass("error")){
              $(".form-label[for=step1expireDateCard]")
              .removeClass("error-msg");
              $("#step1expireDateCard").removeClass("error");
              $("#step1expireDateCard-error").html("");
          }
        }
      );
    }
  
    var step3managerPhoneNumberElement = document.getElementById(
      "step3managerPhoneNumber"
    );
    var step2phoneHouse = document.getElementById("step2phoneHouse");
    var step3phoneElement = document.getElementById("step3phone");
    var step3phone2Element = document.getElementById("step3phone2");
    var step3branchPhoneElement = document.getElementById("step3branchPhone");
    var step3companyPhoneElement = document.getElementById("step3companyPhone");
    var step4contactPhone1Element = document.getElementById("step4contactPhone1");
    var step4contactPhone2Element = document.getElementById("step4contactPhone2");

  
    var inputmaskPhone = new Inputmask(["999-999-9999", "x"], {
      placeholder: " ",
      keepStatic: true,
      showMaskOnHover: false,
      showMaskOnFocus: false,
      clearMaskOnLostFocus: true,
      definitions: {
        x: {
          validator: "[-]",
        },
      },
   
    });

    var inputmaskHomePhone = new Inputmask(["999-999-999", "x"], {
      placeholder: " ",
      keepStatic: true,
      showMaskOnHover: false,
      showMaskOnFocus: false,
      clearMaskOnLostFocus: true,
      definitions: {
        x: {
          validator: "[-]",
        },
      },
    });

    var inputmaskPhoneNumber2 = new Inputmask(["999999999999999", "x"], {
      placeholder: " ",
      keepStatic: true,
      showMaskOnHover: false,
      showMaskOnFocus: false,
      clearMaskOnLostFocus: true,
      definitions: {
        x: {
          validator: "[-]",
        },
      },
    });
    
   
    inputmaskPhone.mask(step3managerPhoneNumberElement);
    inputmaskPhone.mask(step3phoneElement);
    inputmaskPhone.mask(step4contactPhone1Element);    
    inputmaskPhone.mask(step4contactPhone2Element);
    inputmaskHomePhone.mask(step3companyPhoneElement);
    inputmaskHomePhone.mask(step3branchPhoneElement);
    inputmaskHomePhone.mask(step2phoneHouse);
    inputmaskHomePhone.mask(step3phone2Element);
    inputmaskPhoneNumber2.mask(step3managerPhoneNumber2);


    const inputStep4recommenderIdCard = document.getElementById("step4recommenderIdCard");
    let inputmaskIdCard = new Inputmask("9-9999-99999-99-9", {
      placeholder: " ",
      showMaskOnHover: false,
      showMaskOnFocus: false,
      clearMaskOnLostFocus: true,
    });

    $(document).ready(() => {
      inputmaskIdCard.mask(inputStep4recommenderIdCard);
    });

    $("#step4StatementMail").val(data?.step1mail);
    $("#step4StatementMailProvider").val(data?.step1mailProvider).change();
    $("#step4otherMail").val(data?.step1otherMail);
    if(data?.step1mailProvider == "other"){
      // $("#divStep4otherMail").css("display", "block");
      // console.log("show")
    }else{
      $("#divStep4otherMail").css("display", "none");
    }
    // console.log(data)
  }
  
  $("input[type=radio][name=step4promotion]").change(() => {
    $("input[type=radio][name=step4promotionAddress]:checked").prop(
      "checked",
      false
    );
  });
  
  $("input[type=radio][name=step4paymentType]").change(() => {
    let value = $("input[type=radio][name=step4paymentType]:checked").val();
    if (value != "0") {
      $("input[type=radio][name=step4paymentWeekend]:checked").prop(
        "checked",
        false
      );
      if ($("input[type=radio][name=step4paymentDate]").hasClass("active")) {
        const triggerEl = document.querySelector("#step4paymentDate1");
        mdb.Tab.getInstance(triggerEl).show();
        $("input[type=radio][name=step4paymentDate]").removeClass("active");
        $("input[type=radio][name=step4paymentDate]:checked").prop(
          "checked",
          false
        );
      }
    } else {
    }
  });
  
  $("input[type=radio][name=step4paymentDate]").change(() => {
    let value = $("input[type=radio][name=step4paymentDate]:checked").val();
    if (value != "02") {
      $("input[type=radio][name=step4paymentWeekend]:checked").prop(
        "checked",
        false
      );
    }
  });
  
  $("input[type=radio][name=step4source]").change(() => {
    let value = $("input[type=radio][name=step4source]:checked").val();
    if (value != "06") {
      if ($("input[type=radio][name=step4friendFromUmay]").hasClass("active")) {
        const triggerEl = document.querySelector("#step4friendFromUmay2");
        mdb.Tab.getInstance(triggerEl).show();
        $("input[type=radio][name=step4friendFromUmay]").removeClass("active");
      }
      $("input[type=radio][name=step4friendFromUmay]:checked").prop(
        "checked",
        false
      );
    } else {
      $("#step4otherSource").val("").change();
    }
  });
  
  const step4otherSourcePickerBoxHTML = (placeholder) => {
    return `
        <div class="col-12 col-md-12 py-2 py-md-3">
          <input type="text" class="form-control form-control-xl w-100 rounded-1" maxlength="50"
                name="step4otherSourceDetail" id="step4otherSourceDetail" placeholder="${placeholder}">
          <div class="error" for="step4otherSourceDetail"></div>
        </div>
        `;
  };
  const step4otherSourcePickerHTML = `
      <div role="tablist">
          <div class="form-check ">
            <div>
              <input class="form-check-input"
                     data-mdb-toggle="pill"
                     type="radio"
                     name="step4otherSourceInfo"
                     id="step4otherSourceInfo1"
                     data-mdb-target="#pills-other-source-1"
                     value="01" />
            </div>
            <div>
              <label class="form-check-label" for="step4otherSourceInfo1">BTS/MRT</label>
            </div>
          </div>
          <div class="form-check ">
            <div>
              <input class="form-check-input" type="radio" name="step4otherSourceInfo" id="step4otherSourceInfo2"
                     data-mdb-toggle="pill" data-mdb-target="#pills-other-source-2"
                     value="02" />
            </div>
            <div>
              <label class="form-check-label" for="step4otherSourceInfo2">ห้างสรรพสินค้า</label>
            </div>
          </div>
          <div class="form-check">
            <div>
              <input class="form-check-input" type="radio" name="step4otherSourceInfo" id="step4otherSourceInfo3"
                     data-mdb-toggle="pill"
                     data-mdb-target="#pills-other-source"
                     aria-controls="pills-other-source"
                     
                     value="03" />
            </div>
            <div>
              <label class="form-check-label" for="step4otherSourceInfo3">สถานที่อื่น ๆ</label>
            </div>
          </div>
          <div class="tab-content">
            <div id="pills-other-source-1"></div>
            <div id="pills-other-source-2"></div>
              <div class="tab-pane fade"
                   id="pills-other-source"
                   role="tabpanel"
                   aria-labelledby="pills-other-source"
                   >
                      <div class="ps-4 py-2 py-md-3">
                          <input type="text" class="form-control form-control-xl w-100 rounded-1" maxlength="50"
                                 name="step4otherSourceDetail" id="step4otherSourceDetail" placeholder="โปรดระบุ">
                          <div class="error" for="step4otherSourceDetail"></div>
                      </div>
              </div>
          </div>
      </div>
    `;
  
  export const step4otherSourcePicker = () => {
    if (
      !!$("input[name=step4source]:checked").val() &&
      $("input[name=step4source]:checked").val() != "06"
    ) {
      // console.log($('#step4otherSource').val())
      switch ($("#step4otherSource").val()) {
        case "02":
          $("#step4otherSourcePicker").html(step4otherSourcePickerHTML);
          break;
        case "03":
          $("#step4otherSourcePicker").html(
            step4otherSourcePickerBoxHTML("โปรดระบุช่อง")
          );
          break;
        case "07":
          $("#step4otherSourcePicker").html(
            step4otherSourcePickerBoxHTML("โปรดระบุชื่อ")
          );
          break;
        case "11":
          $("#step4otherSourcePicker").html(
            step4otherSourcePickerBoxHTML("โปรดระบุ")
          );
          break;
        default:
          $("#step4otherSourcePicker").html("");
      }
    } else {
      $("#step4otherSourcePicker").html("");
    }
  };
  
  const step1otherMailField = `
      <label for="step1otherMail" class="form-label">
      </label>
      <input type="text" class="form-control form-control-xl w-100 rounded-1"
        name="step1otherMail" id="step1otherMail" placeholder="โปรดระบุ">
      <div class="error" for="step1otherMail"></div>
    `;
  
  export const step1otherMailPicker = () => {
    if ($("#step1mailProvider option").filter(":selected").val() === "other") {
      $("#step1otherMail").show();
      // $("#divStep1otherMail").html(step1otherMailField);
      // $("#divStep1otherMail").fadeIn(200);
    } else {
      $("#step1otherMail").hide();
      // $("#divStep1otherMail").fadeToggle(200, () => {
      //   $("#divStep1otherMail").empty();
      // });
    }
  };
  
  const step4otherMailField = `
      <label for="step4otherMail" class="form-label">
      </label>
      <input type="text" class="form-control form-control-xl w-100 rounded-1"
        name="step4otherMail" id="step4otherMail" placeholder="โปรดระบุ">
      <div class="error" for="step4otherMail"></div>
    `;
  
  export const step4otherMailPicker = () => {
    if (
      $("#step4StatementMailProvider option").filter(":selected").val() ===
      "other"
    ) {
      $("#step4otherMail").show();
      // $("#divStep4otherMail").html(step4otherMailField);
      // $("#divStep4otherMail").fadeIn(200);
    } else {
      $("#step4otherMail").hide();
      // $("#divStep4otherMail").fadeToggle(200, () => {
      //   $("#divStep4otherMail").empty();
      // });
    }
  };
  
  const step5otherBankField = `
      <label for="step5otherBank" class="form-label">
      </label>
      <input type="text" class="form-control form-control-xl w-100 rounded-1" maxlength="50"
        name="step5otherBank" id="step5otherBank" placeholder="โปรดระบุ">
      <div class="error" for="step5otherBank"></div>
    `;
  
  export const step5otherBankPicker = () => {
    if ($("#step5bank option").filter(":selected").val() === "other") {
      $("#divStep5bank").html(step5otherBankField);
      $("#divStep5bank").fadeIn(200);
      // $("#divStep5bank").show();

    //Only Thai & English
    function thaiAndEnglish(e) {
      $(this).val(function(i, v) {
        return v.replace(/[^a-z\u0E00-\u0E7F]|[๐-๙]|฿/gi, "");
      });
    }
    $(`
    #step5otherBank
    `).on({
      input: thaiAndEnglish,
      paste: thaiAndEnglish,
    });

    } else {
      $("#divStep5bank").fadeToggle(200, () => {
        $("#divStep5bank").empty();
      });
    }
  };
  
  const step3otherBankField = `
      <label for="step3otherBank" class="form-label">
      </label>
      <input type="text" class="form-control form-control-xl w-100 rounded-1"
        name="step3otherBank" id="step3otherBank" placeholder="โปรดระบุ">
      <div class="error" for="step3otherBank"></div>
    `;
  
  export const step3otherBankPicker = () => {
    if ($("#step3bank option").filter(":selected").val() === "other") {
      $("#divStep3bank").html(step3otherBankField);
      $("#divStep3bank").fadeToggle(200);
    } else {
      $("#divStep3bank").fadeToggle(200, () => {
        $("#divStep3bank").empty();
      });
    }
  };
  
  export const setWorkAddress = () => {
    const workAddress = [
      "step3company",
      "step3branch",
      "step3village",
      "step3building",
      "step3number",
      "step3roomNumber",
      "step3floor",
      "step3group",
      "step3alley",
      "step3road",
      "step3postcode",
      "step3province",
      "step3district",
      "step3subdistrict",
      "step3companyPhone",
      "step3companyPhone2",
      "step3branchPhone",
      "step3branchPhone2",
      "step3phone",
      "step3phone2",
    ];
  
    let workAddressStringArray = [];
    workAddress.forEach((formName, index) => {
      // console.log(index, formName)
      if (
        !!$(`[name=${formName}]`).val() &&
        $(`[name=${formName}]`).val() != ""
      ) {
        let prefix = "";
        switch (index) {
          case 1:
            prefix = "สาขา";
            break;
          case 2:
            prefix = "หมู่บ้าน";
            break;
          case 3:
            prefix = "อาคาร";
            break;
          case 4:
            prefix = "เลขที่ ";
            break;
          case 5:
            prefix = "ห้องเลขที่ ";
            break;
          case 6:
            prefix = "ชั้น ";
            break;
          case 7:
            prefix = "หมู่ ";
            break;
          case 8:
            prefix = "ตรอก/ซอย";
            break;
          case 9:
            prefix = "ถนน";
            break;
          case 10:
            prefix = "รหัสไปรษณีย์";
            break;
          case 11:
            prefix = "จังหวัด";
            break;
          case 12:
            prefix = "อำเภอ/เขต";
            break;
          case 13:
            prefix = "ตำบล/แขวง";
            break;
          case 14:
            prefix = "โทรศัพท์ (สำนักงานใหญ่):";
            break;
          case 15:
            prefix = "ต่อ ";
            break;
          case 16:
            prefix = "โทรศัพท์ (สถานที่ประจำ):";
            break;
          case 17:
            prefix = "ต่อ ";
            break;
          case 18:
            prefix = "โทรศัพท์มือถือ(ที่ทำงาน):";
            break;
          case 19:
            prefix = "โทรสาร ";
            break;
          default:
            prefix = "";
        }
        if(index != 10) {
          if(index == 11 || index == 12 || index == 13){
          workAddressStringArray.push(
            prefix + $(`[name=${formName}]`).find(":selected").text()
          );
        }else{
          const text = $(`[name=${formName}]`).val()?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          workAddressStringArray.push(prefix + text);
        }
      }
    }});
  
    if (workAddressStringArray.length > 0) {
      $("#workAddress").html(
        `<div id='insertWorkAddress'>${workAddressStringArray.join(" ")}</div>`
      );
      $("#addWorkAddress").text("แก้ไขที่อยู่ที่ทำงาน");
      $("#addWorkAddress").css("background-color", "#00B4F1");
    }
  };

  export const setHomeAddress = () => {
    const homeAddress = [
      "step2housingType",
      "step2village",
      "step2building",
      "step2number",
      "step2roomNumber",
      "step2floor",
      "step2group",
      "step2alley",
      "step2road",
      "step2postcode",
      "step2province",
      "step2district",
      "step2subdistrict",
      "step2phoneHouse",
      "step2phoneHouse2",
    ];
  
    let homeAddressStringArray = [];
    homeAddress.forEach((formName, index) => {
      // console.log(index, formName)
      if (
        !!$(`[name=${formName}]`).val() &&
        $(`[name=${formName}]`).val() != ""
      ) {
        if (homeAddressStringArray.length <= 0) {
          homeAddressStringArray.push(
            $(`[name=${formName}]`).find(":selected").text() + "<br>"
          );
        } else {
          let prefix = "";
          switch (index) {
            case 1:
              prefix = "หมู่บ้าน";
              break;
            case 2:
              prefix = "อาคาร";
              break;
            case 3:
              prefix = "เลขที่ ";
              break;
            case 4:
              prefix = "ห้องเลขที่ ";
              break;
            case 5:
              prefix = "ชั้น ";
              break;
            case 6:
              prefix = "หมู่ ";
              break;
            case 7:
              prefix = "ตรอก/ซอย";
              break;
            case 8:
              prefix = "ถนน";
              break;
            case 9:
              prefix = "รหัสไปรษณีย์";
              break;
            case 10:
              prefix = "จังหวัด";
              break;
            case 11:
              prefix = "อำเภอ/เขต";
              break;
            case 12:
              prefix = "ตำบล/แขวง";
              break;
            case 13:
              prefix = "โทรศัพท์ (บ้าน):";
              break;
            case 14:
              prefix = "ต่อ ";
              break;
            default:
              prefix = "";
          }
          // ignore zipcode
          if(index != 9){
          if(index == 10 || index ==11 || index ==12){
            homeAddressStringArray.push(
              prefix + $(`[name=${formName}]`).find(":selected").text()
            );
          }else{
            const text = $(`[name=${formName}]`).val()?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            homeAddressStringArray.push(prefix + text);
          }
          }

        }
      }
    });
  
    if (homeAddressStringArray.length > 0) {
      $("#homeAddress").html(
        `<div id='insertHomeAddress'>${homeAddressStringArray.join(" ")}</div>`
      );
      $("#addHomeAddress").text("แก้ไขที่อยู่ที่ปัจจุบัน");
      $("#addHomeAddress").css("background-color", "#00B4F1");
    }
  };


  $("#step1otherMail").keyup(()=>{
    $("#step4otherMail").val($("#step1otherMail").val());
  });
  $("#step1mail").keyup(()=>{
    $("#step4StatementMail").val($("#step1mail").val());
  });
  $("#step4otherMail").keyup(()=>{
    $("#step1otherMail").val($("#step4otherMail").val());
  });
  $("#step4StatementMail").keyup(()=>{
    $("#step1mail").val($("#step4StatementMail").val());
  });
  $("#step1mailProvider").on("change", (e)=>{
    $("#step4StatementMailProvider").val($("#step1mailProvider").val())
    // console.log($("#step1mailProvider").val())
    if($("#step1mailProvider").val() === "other"){
      $("#step4otherMail").val($("#step1otherMail").val());
      $("#step4otherMail").css("display", "block");
    }else{
      $("#step4otherMail").css("display", "none");
      // $("#step4otherMail").css("display", "none");
    }
  });

  $("#step4StatementMailProvider").on("change", (e)=>{
    $("#step1mailProvider").val($("#step4StatementMailProvider").val()).change();
  
    if($("#step4StatementMailProvider").val() === "other"){
      $("#step1otherMail").val($("#step4otherMail").val());
      $("#step1otherMail").css("display", "block");
    }else{
      $("#step1otherMail").css("display", "none");
    }
  });
  