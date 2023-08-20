export const step1Rule = {
  step1idCard: {
    required: true,
    minlength: 17,
    maxlength: 17,
    idCardPattern: true,
  },
  step1prefix: {
    required: true,
    maxlength: 3,
  },
  step1prefixOther: {
    required: '#step1prefix4[value="4"]:checked',
    maxlength: 50,
  },
  step1firstNameThai: {
    required: true,
    maxlength: 50,
  },
  step1lastNameThai: {
    required: true,
    maxlength: 50,
  },
  step1firstNameEnglish: {
    required: true,
    maxlength: 50,
  },
  step1lastNameEnglish: {
    required: true,
    maxlength: 50,
  },
  step1nickname: {
    required: false,
    maxlength: 50,
  },
  step1dayOfBirth: {
    required: true,
  },
  step1dateOfBirth: {
    required: true,
  },
  step1expireDateCard: {
    required: true,
  },
  step1nationality: {
    required: true,
    maxlength: 20,
  },
  step1familyStatus: {
    required: true,
    maxlength: 2,
  },
  step1numberOfChild: {
    required: true,
    // maxlength: 1,
  },
  step1childCount: {
    required: '#step1numberOfChild2[value="1"]:checked',
    moreThanZero: true,
  },
  step1phoneNumber: {
    required: true,
    minlength: 12,
    maxlength: 12,
    step1phoneNumber_Pattern: true,
  },
  step1mail: {
    required: false,
    maxlength: 50,
  },
  step1mailProvider: {
    required: false,
  },
  step1otherMail: {
    required: '#step1mailProvider option[value="other"]:selected'
  },
};

export const step2Rule = {
  homeAddress: {
    required: true,
  },
  step2periodOfResidenceYear: {
    required: true,
    checkOverAge: true,
    // moreThanZero: true,
  },
  step2periodOfResidenceMonth: {
    required: false,
    max: 11,
    maxlength: 2,
  },
  step2numberOfResident: {
    required: true,
    maxlength: 2,
    // moreThanZero: true,
  },
};

export const step2ModalRule = {
  step2housingType: {
    required: true,
    maxlength: 2,
  },
  step2village: {
    required: false,
    maxlength: 50,
  },
  step2building: {
    required: false,
    maxlength: 50,
  },
  step2number: {
    required: true,
    maxlength: 10,
  },
  step2roomNumber: {
    required: false,
    maxlength: 10,
  },
  step2floor: {
    required: false,
    maxlength: 7,
  },
  step2group: {
    required: false,
    maxlength: 2,
  },
  step2alley: {
    required: false,
    maxlength: 30,
  },
  step2road: {
    required: false,
    maxlength: 30,
  },
  step2postcode: {
    required: true,
    maxlength: 5,
  },
  step2subdistrict: {
    required: true,
  },
  step2district: {
    required: true,
  },
  step2province: {
    required: true,
  },
  step2phoneHouse: {
    required: false,
    minlength: 11,
    maxlength: 11,
    step2phoneHouse_Pattern: true,
    step2phoneHouse_Length: true,
    // phoneHomePattern: true,
  },
  step2phoneHouse2: {
    required: false,
    maxlength: 5,
  },
};

export const step3Rule = {
  step3convenientPeriod: {
    required: false,
    maxlength: 20,
  },
  step3businessType: {
    required: true,
    maxlength: 50,
  },
  step3numberOfEmployee: {
    required: true,
    maxlength: 6,
    moreThanZero: true,
  },
  step3department: {
    required: true,
    maxlength: 50,
  },
  step3postion: {
    required: true,
    maxlength: 50,
  },
  step3workType: {
    required: true,
    maxlength: 3,
  },
  step3employmentCondition: {
    required: true,
    maxlength: 3,
  },
  step3salary: {
    required: true,
    min: 7000,
    maxlength: 11,
  },
  step3periodOfWorkYear: {
    required: true,
    maxlength: 2,
  },
  step3periodOfWorkMonth: {
    required: $("#step3periodOfWorkYear[value=0]"),
    max: 11,
    maxlength: 2,
  },
  step3incomeType: {
    required: true,
    maxlength: 3,
  },
  step3incomeCount: {
    required: true,
    maxlength: 2,
    moreThanZero: true,
  },
  step3incomeDay: {
    required: true,
    maxlength: 2,
  },
  step3managerFirstName: {
    required: true,
    maxlength: 50,
  },
  step3managerLastName: {
    required: true,
    maxlength: 50,
  },
  step3managerPosition: {
    required: true,
    maxlength: 50,
  },
  step3managerPhoneNumber: {
    required: true,
    maxlength: 12,
    step3managerPhoneNumber_Pattern: true,
    step3managerPhoneNumber_Length: true,
  },
  step3managerPhoneNumber2: {
    required: false,
    maxlength: 15,
  },
};

export const step3ModalRule = {
  step3company: {
    required: true,
    maxlength: 50,
  },
  step3branch: {
    required: false,
    maxlength: 50,
  },
  step3village: {
    required: false,
    maxlength: 50,
  },
  step3building: {
    required: false,
    maxlength: 50,
  },
  step3number: {
    required: true,
    maxlength: 10,
  },
  step3roomNumber: {
    required: false,
    maxlength: 10,
  },
  step3floor: {
    required: false,
    maxlength: 7,
  },
  step3group: {
    required: false,
    maxlength: 2,
  },
  step3alley: {
    required: false,
    maxlength: 30,
  },
  step3road: {
    required: false,
    maxlength: 30,
  },
  step3postcode: {
    required: true,
    // maxlength: 5,
  },
  step3subdistrict: {
    required: true,
  },
  step3district: {
    required: true,
  },
  step3province: {
    required: true,
  },
  step3companyPhone: {
    required: true,
    maxlength: 11,
    step3companyPhone_Pattern: true,
    step3companyPhone_Length: true
  },
  step3companyPhone2: {
    required: false,
    maxlength: 15,
  },
  step3branchPhone: {
    required: true,
    maxlength: 11,
    step3companyPhone_Pattern: true,
    step3branchPhone_Length: true
  },
  step3branchPhone2: {
    required: false,
    maxlength: 15,
  },

  step3phone: {
    required: true,
    maxlength: 12,
    step3phone_Pattern: true,
    step3phone_Length: true,
  },
  step3phone2: {
    required: false,
    maxlength: 12,
    checkPhone9Length: true,
    phoneHomePattern: true, //$("#step3phone2").val()!="-",
  },
};

export const step4Rule = {
  step4contactFirstName1: {
    required: true,
    maxlength: 50,
  },
  step4contactLastName1: {
    required: true,
    maxlength: 50,
  },
  step4contactRelation1: {
    required: true,
    maxlength: 50,
  },
  step4contactPhone1: {
    required: true,
    // minlength: 11,
    step4contactPhone1_Pattern: true,
    step4contactPhone1_Length: true,
    // allowAllPhone: true,
    // phoneHomePattern: true,
    // checkPhoneStartHome: true,
    maxlength: 12,
  },
  step4contactFirstName2: {
    required: false,
    maxlength: 50,
  },
  step4contactLastName2: {
    required: false,
    maxlength: 50,
  },
  step4contactRelation2: {
    required: false,
    maxlength: 50,
  },
  step4contactPhone2: {
    required: false,
    minlength: 11,
    step4contactPhone2_Pattern : true,
    step4contactPhone2_Length: true,
    // phoneHomePattern: true,
    // checkPhoneStartHome: true,
    maxlength: 12,
    // maxlength: 20,
  },
  step4source: {
    required: true,
    maxlength: 3,
  },
  step4friendFromUmay: {
    required: true,
  },
  step4recommenderFirstName: {
    required: '#step4friendFromUmay1[value="06-1"]:checked',
    maxlength: 100,
  },
  step4recommenderLastName: {
    required: '#step4friendFromUmay1[value="06-1"]:checked',
    maxlength: 100,
  },
  step4recommenderPhone: {
    required: '#step4friendFromUmay1[value="06-1"]:checked',
  
    step4recommenderPhone_Pattern: true,
    step4contactPhone2_Length: true,
    minlength: 11,
    maxlength: 12,
  },
  step4otherSource: {
    required: true,
  },
  step4otherSourceInfo: {
    required: false,
  },
  step4otherSourceDetail: {
    required: false,
  },
  step4highRankRelation: {
    required: true,
    maxlength: 1,
  },
  step4highRankRelationFirstName: {
    required: '#step4highRankRelation2[value="1"]:checked',
    maxlength: 50,
  },
  step4highRankRelationLastName: {
    required: '#step4highRankRelation2[value="1"]:checked',
    maxlength: 50,
  },
  step4highRankRelationPosition: {
    required: '#step4highRankRelation2[value="1"]:checked',
    maxlength: 50,
  },
  step4highRankRelationRelation: {
    required: '#step4highRankRelation2[value="1"]:checked',
    maxlength: 50,
  },
  step4credit: {
    required: true,
    maxlength: 1,
  },
  step4creditCount: {
    required: '#step4credit2[value="1"]:checked',
    maxlength: 2,
    moreThanZero: true,
  },
  step4creditAmount: {
    required: '#step4credit2[value="1"]:checked',
    maxlength: 11,
    // moreThanZero: true,
  },
  step4paymentType: {
    required: true,
  },
  step4paymentDate: {
    required: '#step4paymentType1[value="0"]:checked',
  },
  step4paymentWeekend: {
    required: '#step4paymentDate2[value="02"]:checked',
  },
  step4promtpay: {
    required: true,
  },
  step4promtpayAmount: {
    required: '#step4promtpay2[value="Y"]:checked',
    maxlength: 9,
    // moreThanZero: true,
  },
  step4addressType: {
    required: true,
  },
  step4StatementMail: {
    // required: ($('#step4eStatement[value="Y"]:checked') != undefined || $('#step4eLetter[value="Y"]:checked')!= undefined) ? true : false,
    required: true
  },
  step4StatementMailProvider: {
    required: false
  },
  step4termAndConditionMail: {
    required: true
    // required: false,
  },
  step4promotion: {
    required: true
  },
  step4promotionAddress: {
    required: true,
  },
  step4termAndCondition: {
    required: true,
  },
};

export const step5Rule = {
  step5termOfConditionCredit: {
    required: true,
  },
  step5termOfConditionBank: {
    required: true,
  },
  step5bank: {
    required: '#step5termOfConditionBank1:checked',
  },
  step5bankType: {
    required: '#step5termOfConditionBank1:checked',
  },
  step5bankAddress: {
    required: '#step5termOfConditionBank1:checked',
  },
  step5bankName: {
    required: '#step5termOfConditionBank1:checked',
  },
  step5bankBranch: {
    required: '#step5termOfConditionBank1:checked',
  },
  step5phone: {
    required: false,
    step5phone_Pattern: true,
    step5phone_Length: true,
    minlength: 11,
    maxlength: 12,
  },
};