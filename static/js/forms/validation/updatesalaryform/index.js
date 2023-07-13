

$("#UpdateSalaryFirstForm").validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      idCard: {
        required: true,
        minlength: 17,
        maxlength: 17,
      },
      phone: {
        required: true,
        // number: true,
        minlength: 12,
        maxlength: 12,
        pattern: /^\d{3}-\d{3}-\d{4}$/,
        phonePattern: true,
      },
      salary: {
        required: true,
        min: 7000,
      },
      fileIdCard: {
        required: false,
        extension: "png|pdf|jpg|jpeg",
        accept: "application/pdf,image/png,image/jpg,image/jpeg",
        filesize: 2,
      },
      fileStatement: {
        required: false,
        extension: "png|pdf|jpg|jpeg",
        accept: "application/pdf,image/png,image/jpg,image/jpeg",
        filesize: 2,
      },
      bankStatement: {
        required: false,
        extension: "png|pdf|jpg|jpeg",
        accept: "application/pdf,image/png,image/jpg,image/jpeg",
        filesize: 2,
      },
      fileOther: {
        required: false,
        extension: "png|pdf|jpg|jpeg",
        accept: "application/pdf,image/png,image/jpg,image/jpeg",
        filesize: 2,
      },
      fileOther2: {
        required: false,
        extension: "png|pdf|jpg|jpeg",
        accept: "application/pdf,image/png,image/jpg,image/jpeg",
        filesize: 2,
      },
      fileOther3: {
        required: false,
        extension: "png|pdf|jpg|jpeg",
        accept: "application/pdf,image/png,image/jpg,image/jpeg",
        filesize: 2,
      },
      fileOther4: {
        required: false,
        extension: "png|pdf|jpg|jpeg",
        accept: "application/pdf,image/png,image/jpg,image/jpeg",
        filesize: 2,
      },
    },
    messages: {
      firstName: {
        required: "กรุณาระบุ ชื่อ",
      },
      lastName: {
        required: "กรุณาระบุ นามสกุล",
      },
      idCard: {
        required: "กรุณาระบุ เลขที่บัตรประชาชน",
        minlength: "กรุณาตรวจสอบเลขที่บัตรประชาชนอีกครั้ง",
        maxlength: "เลขที่บัตรประชาชนรูปแบบไม่ถูกต้อง",
        pattern: "เลขที่บัตรประชาชนรูปแบบไม่ถูกต้อง",
      },
      phone: {
        required: "กรุณาระบุ เบอร์โทรศัพท์มือถือ",
        minlength: "กรุณาตรวจสอบหมายเลขโทรศัพท์อีกครั้ง",
        maxlength: "เบอร์โทรศัพท์มือถือไม่ครบถ้วน",
        pattern: "เบอร์โทรศัพท์มือถือรูปแบบไม่ถูกต้อง",
      },
      salary: {
        required: "กรุณาระบุ รายได้ประจำต่อเดือน",
        min: "ผู้สมัครต้องมีรายได้ 7,000 บาทขึ้นไป",
      },
      fileIdCard: {
        required: false,
        extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
      },
      fileStatement: {
        required: false,
        extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
      },
      bankStatement: {
        required: false,
        extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
      },
      fileOther1: {
        required: false,
        extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
      },
      fileOther2: {
        required: false,
        extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
      },
      fileOther3: {
        required: false,
        extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
      },
      fileOther4: {
        required: false,
        extension: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
        accept: "รองรับไฟล์ PDF, JPG และ PNG เท่านั้น",
      },
    },
  
    errorPlacement: function (label, element) {
      label.addClass("f-ul ");
      label.appendTo(
        $(`#UpdateSalaryFirstForm div.error[for=${element.attr("id")}]`)
      );
    },
    wrapper: "div",
    submitHandler: function (form) {
      if ($(acceptTerm).is(":checked")) {
        console.log("confirm");
      } else {
        console.log("not confirm");
      }
  
      // if ($(fileStatement)) {
      //   console.log($(fileStatement).val().files);
      // }
    },
    invalidHandler: function(form, validator) {
      var errors = validator?.numberOfInvalids();
      if (errors) {                    
          validator?.errorList[0]?.element?.focus();
      }
    }
  });