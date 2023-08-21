import { isValidThaiNationalID } from "../../utils.js";

function calculateAge(birthday) {
  let birthdayArr = birthday.split("/");
  let birthDay = new Date(birthdayArr[2], birthdayArr[1] - 1, birthdayArr[0]);
  let ageDifMs = Date.now() - birthDay.getTime();
  let ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear()+543 - 1970);
}

function getAge() {
  let birthdayArr = $('#step1dateOfBirth').val()?.split("/");
  let birthDay = new Date(birthdayArr[2], birthdayArr[1] - 1, birthdayArr[0]);
  let ageDifMs = Date.now() - birthDay.getTime();
  let ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear()+543 - 1970);
}

const checkLessOnePhone = () => {
  let step3companyPhone = $('#step3companyPhone').val()
  let step3branchPhone = $('#step3branchPhone').val()
  let step3phone = $('#step3phone').val()

  if(step3companyPhone == "-" && step3branchPhone == "-" && step3phone == "-"){
    return false;
  }
  return true;
};

const checkPhone9Length = (v) => {
  if (!!v) {
    if (v != "-") {
      return v.replaceAll("-", "").replaceAll(" ", "").length === 9;
    } else {
      return v.replaceAll("-", "").replaceAll(" ", "").length === 0;
    }
  }
  return typeof v == String;
};

const checkPhone10Length = (v) => {
  if (!!v) {
    if (v != "-") {
      return v.replaceAll("-", "").replaceAll(" ", "").length === 10;
    } else {
      return v.replaceAll("-", "").replaceAll(" ", "").length === 0;
    }
  }
  return typeof v == String;
};

const checkPhone9Or10Length = (v) => {
  if (!!v) {
    if (v != "-") {
      return v.replaceAll("-", "").replaceAll(" ", "").length === 9 || v.replaceAll("-", "").replaceAll(" ", "").length === 10;
    } else {
      return v.replaceAll("-", "").replaceAll(" ", "").length === 0;
    }
  }
  return typeof v == String;
};

const checkPhoneStartHome = (v) => {
  const startHomeList = ["02" ,"03" ,"04" ,"05" , "07"]
  if (!!v) {
    if (v != "-") {
      var start  = v.replaceAll("-", "").replaceAll(" ", "").trim().slice(0,2)
      if(startHomeList.includes(start)){
        return v.replaceAll("-", "").replaceAll(" ", "").length === 9
      }else{
        return v.replaceAll("-", "").replaceAll(" ", "").length === 10;
      }
    } else {
      return v.replaceAll("-", "").replaceAll(" ", "").length === 0;
    }
  }
  return typeof v == String;
};

$.validator.addMethod(
  "filesize",
  function (value, element, param) {
    return this.optional(element) || element?.files[0]?.size <= param * 1000000;
  },
  "รองรับขนาดไฟล์ไม่เกิน {0} MB เท่านั้น"
);

$.validator.addMethod(
  "checkLessOnePhone",
  function (value, element, param) {
    return checkLessOnePhone();
  },
  "กรุณาระบุ โทรศัพท์อย่างน้อย 1 เบอร์"
);

$.validator.addMethod(
  "dateFormat",
  function (value, element) {
    return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
  },
  "Please enter a date in the format dd/mm/yyyy"
);

$.validator.addMethod(
  "moreThanZero",
  function (value, element) {
    return value > 0;
  },
  "จำนวนต้องมากกว่า 0"
);

$.validator.addMethod(
  "checkOverAge",
  function (value, element) {
    let age = getAge();
    return value <= age;
  },
  // "ระยะเวลาที่อยู่อาศัยมากกว่าอายุปัจจุบัน"
  "ระยะเวลาที่อยู่อาศัยต้องไม่มากกว่าอายุลูกค้า"
);

$.validator.addMethod(
  "ageRange",
  function (value, element) {
    let age = calculateAge(value);
    return age >= 20 && age <= 55;
  },
  "ผู้สมัครต้องมีอายุระหว่าง 20-55 ปี ณ วันที่สมัคร"
);

$.validator.addMethod(
  "phoneMinLength",
  function (value, element) {
    return value?.trim()?.length == 12;
  },
  "เบอร์โทรศัพท์มือถือไม่ครบถ้วน"
);

// 06/08/09
$.validator.addMethod(
  "phonePattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(06|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์มือถือต้องขึ้นต้นด้วย 06/08/09"
);

// 05/06/08/09
$.validator.addMethod(
  "ShortFormPhone_Pattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(05|06|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์มือถือต้องขึ้นต้นด้วย 05/06/08/09"
);

// 05/06/08/09
$.validator.addMethod(
  "step1phoneNumber_Pattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(05|06|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์มือถือต้องขึ้นต้นด้วย 05/06/08/09"
);

// 02/03/04/05/07
$.validator.addMethod(
  "step2phoneHouse_Pattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(02|03|04|05|07)/i.test(value);
  },
  "เบอร์โทรศัพท์บ้านต้องขึ้นต้นด้วย 02/03/04/05/07"
);

$.validator.addMethod(
  "step2phoneHouse_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Length(value, element);
  },
  "เบอร์โทรศัพท์บ้านไม่ครบถ้วน"
);

// 02/03/04/05/07
$.validator.addMethod(
  "step3companyPhone_Pattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(02|03|04|05|07)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง หรือหากไม่มีกรุณาใส่เครื่องหมาย - "
);

$.validator.addMethod(
  "step3companyPhone_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

// 02/03/04/05/07
$.validator.addMethod(
  "step3branchPhone_Pattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(02|03|04|05|07)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง หรือหากไม่มีกรุณาใส่เครื่องหมาย - "
);

$.validator.addMethod(
  "step3branchPhone_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

// 05|06|08|09
$.validator.addMethod(
  "step3phone_Pattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(05|06|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์มือถือที่ทำงานต้องขึ้นต้นด้วย 05/06/08/09 หรือถ้าไม่มีให้ใส่ -"
);

$.validator.addMethod(
  "step3phone_Length",
  function (value, element) {
    return this.optional(element) || checkPhone10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

// 02|03|04|05|06|07|08|09
$.validator.addMethod(
  "step3managerPhoneNumber_Pattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(02|03|04|05|06|07|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง หรือหากไม่มีกรุณาใส่เครื่องหมาย - "
);

$.validator.addMethod(
  "step3managerPhoneNumber_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Or10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

// 02|03|04|05|06|07|08|09
$.validator.addMethod(
  "step4contactPhone1_Pattern",
  function (value, element) {
    return this.optional(element) || /^(02|03|04|05|06|07|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง"
);

$.validator.addMethod(
  "step4contactPhone1_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Or10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

// 02|03|04|05|06|07|08|09
$.validator.addMethod(
  "step4contactPhone2_Pattern",
  function (value, element) {
    return this.optional(element) || /^(02|03|04|05|06|07|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง"
);

$.validator.addMethod(
  "step4contactPhone2_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Or10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);
// 02|03|04|05|06|07|08|09
$.validator.addMethod(
  "step4recommenderPhone_Pattern",
  function (value, element) {
    return this.optional(element) || /^(02|03|04|05|06|07|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง"
);

$.validator.addMethod(
  "step4recommenderPhone_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Or10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

// 02|03|04|05|06|07|08|09
$.validator.addMethod(
  "step5phone_Pattern",
  function (value, element) {
    return this.optional(element) || /^(02|03|04|05|06|07|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง"
);


$.validator.addMethod(
  "step5phone_Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Or10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

// 02/03/04/05/07
$.validator.addMethod(
  "phoneHomePattern",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(02|03|04|05|07)/i.test(value);
  },
  "เบอร์โทรศัพท์มือถือต้องขึ้นต้นด้วย 02/03/04/05/07"
);

// 02/03/04/05/06/07/08/09
$.validator.addMethod(
  "allowAllPhone",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(02|03|04|05|06|07|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง"
);

// 02/03/04/05/06/07/08/09
$.validator.addMethod(
  "allowAllPhoneAndAllowDash",
  function (value, element) {
    if(value == "-"){
      return true;
    }
    return this.optional(element) || /^(02|03|04|05|06|07|08|09)/i.test(value);
  },
  "เบอร์โทรศัพท์ไม่ถูกต้อง หรือหากไม่มีกรุณาใส่เครื่องหมาย - "
);

$.validator.addMethod(
  "idCardLength",
  function (value, element) {
    return value?.trim()?.length == 17;
  },
  "เลขที่บัตรประชาชนไม่ครบถ้วน"
);

$.validator.addMethod(
  "idCardLengthApplystatus",
  function (value, element) {
    return value?.trim()?.length == 17;
  },
  "หมายเลขบัตรประชาชน ไม่ครบถ้วน"
);

$.validator.addMethod(
  "idCardPattern",
  function (value, element) {
    if(value?.trim()?.length < 17){
      return true;
    }
    return this.optional(element) || isValidThaiNationalID(value);
  },
  "เลขที่บัตรประชาชนรูปแบบไม่ถูกต้อง"
);

$.validator.addMethod(
  "idCardPatternApplystatus",
  function (value, element) {
    if(value?.trim()?.length < 17){
      return true;
    }
    return this.optional(element) || isValidThaiNationalID(value);
  },
  "หมายเลขบัตรประชาชนรูปแบบไม่ถูกต้อง"
);

$.validator.addMethod(
  "checkPhone9Or10Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Or10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

$.validator.addMethod(
  "checkPhone9Length",
  function (value, element) {
    return this.optional(element) || checkPhone9Length(value, element);
  },
  "เบอร์โทรศัพท์บ้านต้องขึ้นต้นด้วย 02/03/04/05/07 "
);

$.validator.addMethod(
  "checkPhone10Length",
  function (value, element) {
    return this.optional(element) || checkPhone10Length(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

$.validator.addMethod(
  "checkPhoneStartHome",
  function (value, element) {
    return this.optional(element) || checkPhoneStartHome(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);

$.validator.addMethod(
  "checkStep3periodOfWorkYear",
  function (value, element) {
    return this.optional(element) || checkStep3periodOfWorkYear(value, element);
  },
  "เบอร์โทรศัพท์ไม่ครบถ้วน"
);



// $.validator.addMethod(
//   "model3checkPhone",
//   function (value, element) {
//     return this.optional(element) || model3checkPhone();
//   },
//   "กรุณาระบุ โทรศัพท์อย่างน้อย 1 เบอร์"
// );

// function model3checkPhone() {
//   return $('#step3companyPhone').val().length > 0 || $('#step3branchPhone').val().length > 0 || $('#step3phone').val().length > 0;
// }
