import { getForm } from "./local-storage.js";
import { getUtmQuery } from "../utils.js";

const FULL_FORM = "ApplyFullForm";
const SHORT_FORM = "ApplyForm";

export const FullFormMapValue = () => {
  const formValue = getForm(FULL_FORM);
  const shortFormValue = getForm(SHORT_FORM);
  const data = {
    txtPeopleId: formValue?.step1idCard?.replaceAll("-", ""),
    rdbPrefix: formValue?.step1prefix,
    txtPrefixOther: formValue?.step1prefixOther,
    txtNameThai: formValue?.step1firstNameThai,
    txtSurnameThai: formValue?.step1lastNameThai,
    txtNameEnglish: formValue?.step1firstNameEnglish,
    txtSurnameEnglish: formValue?.step1lastNameEnglish,
    ddlBirthDay: !!formValue?.step1dateOfBirth?.split("/")[0]
      ? formValue?.step1dateOfBirth?.split("/")[0]
      : shortFormValue?.dateOfBirth?.split("/")[0],
    ddlBirthMonth:
      formValue?.step1dateOfBirth?.split("/")[1] ??
      shortFormValue?.dateOfBirth?.split("/")[1],
    ddlBirthYear:
      formValue?.step1dateOfBirth?.split("/")[2] ??
      shortFormValue?.dateOfBirth?.split("/")[2],
    ddlExpireDay: formValue?.step1expireDateCard?.split("/")[0],
    ddlExpireMonth: formValue?.step1expireDateCard?.split("/")[1],
    ddlExpireYear: formValue?.step1expireDateCard?.split("/")[2],
    txtCompanyName: shortFormValue?.company,
    txtNationality: formValue?.step1nationality,
    txtNickname: formValue?.step1nickname,
    rdbMaritalStatus: formValue?.step1familyStatus,
    ddlBirthdate: formValue?.step1dayOfBirth,
    rdbHaveChildren: formValue?.step1numberOfChild,
    txtTotalChild: formValue?.step1childCount,
    txtEmail: formValue?.step1mail?.concat(
      formValue?.step1mailProvider != "other"
        ? "@" + formValue?.step1mailProvider + ".com"
        : formValue?.step1otherMail
    ),
    txtHomeVillage: formValue?.step2village,
    txtHomeBuilding: formValue?.step2building,
    txtHomeAddressNo: formValue?.step2number,
    txtHomeRoomNo: formValue?.step2roomNumber,
    txtHomeFloor: formValue?.step2floor,
    txtHomeMoo: formValue?.step2group,
    txtHomeSoi: formValue?.step2alley,
    txtHomeRoad: formValue?.step2road,
    ddlHomeProvince: formValue?.step2province,
    ddlHomeAmphur: formValue?.step2district,
    ddlHomeTambol: formValue?.step2subdistrict,
    txtHomeZipcode: formValue?.step2postcode,
    txtHomeTelephoneNo: formValue?.step2phoneHouse2?.replaceAll("-", ""),
    txtHomeExtension: formValue?.step2phoneHouse?.replaceAll("-", ""),
    txtHomeMobileNo: formValue?.step1phoneNumber?.replaceAll("-", ""),
    txtLivingYear: formValue?.step2periodOfResidenceYear,
    txtLivingMonth: formValue?.step2periodOfResidenceMonth,
    txtTotalPeople: formValue?.step2numberOfResident,
    ddlResidenceType: formValue?.step2housingType,
    txtOfficeName: formValue?.step3company,
    txtOfficePlace: formValue?.step3branch,
    txtOfficeVillage: formValue?.step3village,
    txtOfficeBuilding: formValue?.step3building,
    txtOfficeAddressNo: formValue?.step3number,
    txtOfficeRoomNo: formValue?.step3roomNumber,
    txtOfficeFloor: formValue?.step3floor,
    txtOfficeMoo: formValue?.step3group,
    txtOfficeSoi: formValue?.step3alley,
    txtOfficeRoad: formValue?.step3road,
    ddlOfficeProvince: formValue?.step3province, //1
    ddlOfficeAmphur: formValue?.step3district, //47
    ddlOfficeTambol: formValue?.step3subdistrict, //78
    txtOfficeZipcode: formValue?.step3postcode,
    txtOfficeTelephoneHQ:
      formValue?.step3companyPhone?.trim().replaceAll("-", "") == ""
        ? "-"
        : formValue?.step3companyPhone?.trim().replaceAll("-", ""),
    txtOfficeTelephoneBranch:
      formValue?.step3branchPhone?.trim().replaceAll("-", "") == ""
        ? "-"
        : formValue?.step3branchPhone?.trim().replaceAll("-", ""),
    txtOfficeMobile:
      formValue?.step3phone?.trim().replaceAll("-", "") == ""
        ? "-"
        : formValue?.step3phone?.trim().replaceAll("-", ""),
    txtOfficeTelephoneHQExtension: formValue?.step3companyPhone2?.trim().replaceAll(
      "-",
      ""
    ),
    txtOfficeTelephoneBranchExtension: formValue?.step3branchPhone2?.trim().replaceAll(
      "-",
      ""
    ),
    txtOfficeFax:
      formValue?.step3phone2?.trim().replaceAll("-", "") == ""
        ? "-"
        : formValue?.step3phone2?.trim().replaceAll("-", ""),
    ddlContactTime: formValue?.step3convenientPeriod,
    txtTotalEmployee: formValue?.step3numberOfEmployee,
    ddlBizType: formValue?.step3businessType,
    txtDepartment: formValue?.step3department,
    txtPosition: formValue?.step3postion,
    ddlOccupationFull: formValue?.step3workType,
    rdbEmploymentType: formValue?.step3employmentCondition,
    txtSalaryAmount: formValue?.step3salary,
    txtWorkingYear: formValue?.step3periodOfWorkYear,
    txtWorkingMonth: formValue?.step3periodOfWorkMonth,
    rdbSalaryType: formValue?.step3incomeType,
    //   txtSalaryBankName: formValue?."-",
    txtSalaryTimes: formValue?.step3incomeCount,
    ddlSalaryDate: formValue?.step3incomeDay,
    txtBossName: formValue?.step3managerFirstName,
    txtBossSurname: formValue?.step3managerLastName,
    txtBossPosition: formValue?.step3managerPosition,
    txtBossTelephoneNo:
      formValue?.step3managerPhoneNumber?.trim().replaceAll("-", "") == ""
        ? "-"
        : formValue?.step3managerPhoneNumber?.replaceAll("-", ""),
    txtBossExtensionNo: formValue?.step3managerPhoneNumber2?.trim().replaceAll(
      "-",
      ""
    ),
    txtReferencePerson1Name: formValue?.step4contactFirstName1,
    txtReferencePerson1Surname: formValue?.step4contactLastName1,
    ddlReferencePerson1Relation: formValue?.step4contactRelation1,
    txtReferencePerson1TelephoneNo: formValue?.step4contactPhone1?.trim().replaceAll(
      "-",
      ""
    ),
    txtReferencePerson2Name: formValue?.step4contactFirstName2,
    txtReferencePerson2Surname: formValue?.step4contactLastName2,
    ddlReferencePerson2Relation: formValue?.step4contactRelation2,
    txtReferencePerson2TelephoneNo: formValue?.step4contactPhone2?.trim().replaceAll(
      "-",
      ""
    ),
    ddlMediaChannel: formValue?.step4otherSource,
    rdbHaveReferencePolitical: formValue?.step4highRankRelation,
    txtReferencePoliticalName: formValue?.step4highRankRelationFirstName,
    txtReferencePoliticalSurname: formValue?.step4highRankRelationLastName,
    ddlReferencePoliticalRelation: formValue?.step4highRankRelationRelation,
    txtReferencePoliticalPosition: formValue?.step4highRankRelationPosition,
    rdbHaveBOTRegulation: formValue?.step4credit,
    txtBOTRegulationIssuer: formValue?.step4creditCount == ""?undefined:formValue?.step4creditCount,
    txtBOTRegulationLoanAmount:formValue?.step4creditAmount == ""?undefined:formValue?.step4creditAmount,
    rdbShipTo: formValue?.step4addressType,
    cbxeNCB: formValue?.step4eLetter,
    cbxeStatement: formValue?.step4eStatement,
    textEmail: formValue?.step4StatementMail?.concat(
      formValue?.step4StatementMailProvider != "other"
        ? "@" + formValue?.step4StatementMailProvider + ".com"
        : formValue?.step4otherMail
    ),
    txtEmailProvider: 
      formValue?.step1mailProvider != "other"
        ? "@" + formValue?.step1mailProvider + ".com"
        : formValue?.step1otherMail,
    tmpEmail: formValue?.step1mail,
    txtFirstLoanAmount: formValue?.step4promtpayAmount == ""?undefined:formValue?.step4promtpayAmount.replaceAll(",", ""),
    cbxFirstLoanSave: formValue?.step4promtpay2,
    rdbCreditModel: formValue?.step5termOfConditionCredit,
    rdbAcceptAutoPayment: formValue?.step5termOfConditionBank == undefined ? 0 : formValue?.step5termOfConditionBank,
    ddlBank: formValue?.step5bank,
    ddlAccountType: formValue?.step5bankType,
    txtAccountNumber: formValue?.step5bankAddress,
    txtAccountName: formValue?.step5bankName,
    txtBankBranch: formValue?.step5bankBranch,
    txtBankTelephoneNo: formValue?.step5phone?.trim().replaceAll("-", ""),
    ipAddress: window?.JSONIP?.ip || "",
    applChannel: GetApplChannel() ?? "",
    applNumber: shortFormValue?.applNumber || "",
    applNdid: shortFormValue?.applNdid || "",
    rdbPaymentType: formValue?.step4paymentType == "" ||  formValue?.step4paymentType == undefined ? 0 : formValue?.step4paymentType,
    rdbDeductType1: formValue?.step4paymentDate,
    rdbDeductType2: formValue?.step4paymentWeekend,
    rdbChannel: formValue?.step4source,
    rdbChannel02_LocationType: formValue?.step4otherSourceInfo,
    txtChannel02_LocationOther: formValue?.step4otherSourceDetail,
    txtChannelTelevisionNo: formValue?.step4otherSourceDetail,
    txtChannelWebsite: formValue?.step4otherSourceDetail,
    txtChannelOther: formValue?.step4otherSourceDetail,
    rdbChannel06_AdviserMemberType: formValue?.step4friendFromUmay,
    txtMGM_FullName: formValue?.step4recommenderFirstName?.concat(
      " ",
      formValue?.step4recommenderLastName
    ),
    txtMGM_Name: formValue?.step4recommenderFirstName,
    txtMGM_SurName: formValue?.step4recommenderLastName,
    txtMGM_NickName: formValue?.step4recommenderNickname,
    txtMGM_PersonalID: formValue?.step4recommenderIdCard?.replaceAll("-", ""),
    txtMGM_Mobile: formValue?.step4recommenderPhone?.replaceAll("-", ""),
    cbxAcceptCondition: formValue?.step4termAndCondition ?? false,
    // cbxFirstLoanFull: formValue?.step4promtpay1||"",
    txtSaleAgentCode:
      shortFormValue?.forStaff ?? "",
    txtIntroducerCode:
      shortFormValue?.idStaff ?? "",
    rdbPromotion: formValue?.step4promotion,
    rdbPromotionAddress: formValue?.step4promotionAddress ?? ""
  };

  if(formValue?.step4promtpay1 != undefined){
    data.cbxFirstLoanSave = formValue?.step4promtpay1;
  }
  if(formValue?.step4promtpay2 != undefined){
    data.cbxFirstLoanSave = formValue?.step4promtpay2;
  }
  // console.log("formValue", formValue)
  return data;
};

export const ShortFormMapValue = () => {
  const formValue = getForm(SHORT_FORM);
  // console.log("formValue", formValue)
  const utm = getUtmQuery();
  const data = {
    txtThaiName: formValue?.firstName,
    txtLastName: formValue?.lastName,
    txtPeopleId: formValue?.idCard?.replaceAll("-", ""),
    ddlDay: formValue?.dateOfBirth?.split("/")[0],
    ddlMonth: formValue?.dateOfBirth?.split("/")[1],
    ddlYear: parseInt(formValue?.dateOfBirth?.split("/")[2]),
    ddlOfficeProvince: formValue?.province,
    ddlOfficeZipcode: formValue?.postcode,
    txtPhoneNo: formValue?.phone?.replaceAll("-", ""),
    txtSalary: formValue?.salary,
    ddlOccupation: formValue?.career,
    ipAddress: window?.JSONIP?.ip || "",
    applChannel: formValue?.applChannel || (GetApplChannel() ?? ""),
    applNumber: formValue?.applNumber || "",
    applNo: formValue?.applNo || "",
    applChoice: formValue?.applChoice || "",
    applStatus: formValue?.applStatus || "",
    txtCompanyName: formValue?.company,
    ddlConvenientTime: formValue?.time,
    appType: formValue?.appType || "",
    utm_source: utm?.utm_source || "",
    utm_medium: utm?.utm_medium || "",
    utm_campaign: utm?.utm_campaign || "",
    utm_term: utm?.utm_term || "",
    utm_content: utm?.utm_content || "",
    applNdid: formValue?.applNdid || "",
    gclid: formValue?.gclid || "",
    cbxeNCB: "",
    cbxeStatement: "",
    txtSaleAgentCode:
      formValue?.forStaff || ($("#ApplyForm #forStaff").val() ?? ""),
    txtIntroducerCode:
      formValue?.idStaff || ($("#ApplyForm #idStaff").val() ?? ""),
  };
  console.log(data)
  return data;
};

export const UpdateSalaryValue = () => {
  const data = {
    seq: 0,
    fullName : "",
    csnNumber : "",
    idCardNumber : "",
    mobileNumber : "",
    fileUploadName : "",
    fileUpload : [],
    fileUploadExtension : "",
    fileIdCardNumber : "",
    fileSalaryStatement : "",
    fileBankStatement : "",
    fileOther1 : "",
    fileOther2 : "",
    fileOther3 : "",
    fileOther4 : "",
    fileOther5 : "",
    fileByteIdCardNumber : "",
    fileByteSalaryStatement : "",
    fileByteBankStatement : "",
    fileByteOther1 : "",
    fileByteOther2 : "",
    fileByteOther3 : "",
    fileByteOther4 : "",
    fileByteOther5 : "",
    transactionNo : "",
    branch : "",
    path_channel : "",
    IPAddress : "",
    urlUI : "",
    flagAccept : "",
    lastFile : "",
    logId : "",
    listFileToUpload : [],
    csn : "",
    isSalaryReject : "",
    ck_slip : true,
    ck_slipAndBank : true,
    newSalary : 0,
    document_Type : ""
  }
  return data;
}

function GetApplChannel() {
  try {
    const utm = getUtmQuery();
    let _key = utm?.Channel;
    if (_key != "WEB" && _key != "MB") {
      _key = "WEB";
    }
    return _key;
  } catch (e) {
    return "WEB";
  }
}
