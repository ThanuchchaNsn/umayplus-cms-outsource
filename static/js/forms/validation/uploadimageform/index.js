
$(document).ready(function(){
    $("#UploadimageForm").validate({
      rules: {
        fileIdCard: {
          required: true,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        fileStatement1: {
          required: true,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        fileStatement2: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        bankAccount1: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        bankAccount2: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        bankAccount3: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        bankAccount4: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        bankAccount5: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        bankAccount6: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
        fileOther: {
          required: false,
          extension: "png|pdf|jpg|jpeg",
          accept: "application/pdf,image/png,image/jpg,image/jpeg",
          filesize: 5,
        },
      },
      messages: {
        fileIdCard: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        fileStatement1: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        fileStatement2: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        bankAccount1: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        bankAccount2: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        bankAccount3: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        bankAccount4: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        bankAccount5: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        bankAccount6: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
        fileOther: {
          required: "กรุณา เลือกไฟล์",
          extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
          accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        },
      },
      errorPlacement: function (label, element) {
        label.addClass("f-ul ");
        label.appendTo($(`#UploadimageForm div.error[for=${element.attr("id")}]`));
      },
      wrapper: "div",
      submitHandler: function (form) {
        // if ($(acceptTerm).is(":checked")) {
        //   console.log("confirm");
        // } else {
        //   console.log("not");
        // }
      },
      invalidHandler: function(form, validator) {
        var errors = validator?.numberOfInvalids();
        if (errors) {                    
            validator?.errorList[0]?.element?.focus();
        }
      }
      // ignore: ":not(:visible), :hidden",
    });
  })