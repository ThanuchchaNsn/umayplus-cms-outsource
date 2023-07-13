/** PreviewPage Function */

import { GetAmphurByProvince, GetProvinceAll, GetTambolByAmphur } from "../../api/data.js";
import { getForm } from "../../storage/local-storage.js";
import { FullFormMapValue } from "../../storage/mapping.js";

const selectedOtherRender = () => {
  const FULL_FORM = "ApplyFullForm";
  const formValue = getForm(FULL_FORM);
  $("option")
    .filter(":selected")
    .each((i, e) => {
      if ($(e).val() == "other") {
        // console.log($(e).parent().attr("id"));
        $(`#${$(e).parent().attr("id")} option[value=other]`).text(formValue[`step${$(e).parent().attr("id").split("step")[1].charAt(0)}otherMail`])
      }
    });
    
};

const selectedAddressRender = () => {
  const FullForm = FullFormMapValue();
  $("#PreviewForm #step2province").val(FullForm.ddlHomeProvince)
  $("#PreviewForm #step2district").val(FullForm.ddlHomeAmphur)
  $("#PreviewForm #step2subdistrict").val(FullForm.ddlHomeTambol)
  $("#PreviewForm #step3province").val(FullForm.ddlOfficeProvince)
  $("#PreviewForm #step3district").val(FullForm.ddlOfficeAmphur)
  $("#PreviewForm #step3subdistrict").val(FullForm.ddlOfficeTambol)
  $("#PreviewForm #step1mailProvider").val(FullForm.txtEmailProvider)
  $("#PreviewForm #step4StatementMail").val(FullForm.tmpEmail)
  $("#PreviewForm #step4StatementMailProvider").val(FullForm.txtEmailProvider)
};

$("#pdpacustomer").click(()=>{
  window.open(
    'https://www.easybuy.co.th/th/pdpacustomer',
    '_blank' 
  );
});

if ($("#PreviewForm").length > 0) {
  const FullForm = FullFormMapValue();
  const provinceData = await GetProvinceAll();
  provinceData?.forEach((element) => {
    $("#PreviewForm #step2province").append(
      `<option value="${element.PROVINCE_CODE}" >${element.THAI_DESCRIPTION}</option>`
    );
  });
  provinceData?.forEach((element) => {
    $("#PreviewForm #step3province").append(
      `<option value="${element.PROVINCE_CODE}" >${element.THAI_DESCRIPTION}</option>`
    );
  });

  let step2amphur = await GetAmphurByProvince(FullForm.ddlHomeProvince);
  step2amphur?.forEach((element) => {
      $("#PreviewForm #step2district").append(
        `<option value="${element.AMPHUR_CODE}">${element.THAI_DESCRIPTION}</option>`
      );
    });
  
  let step2tambol = await GetTambolByAmphur(FullForm.ddlHomeAmphur)
  step2tambol?.forEach((element) => {
    $("#PreviewForm #step2subdistrict").append(
      `<option value="${element.TAMBOL_CODE}">${element.THAI_DESCRIPTION}</option>`
    );
  });

  let step3amphur = await GetAmphurByProvince(FullForm.ddlOfficeProvince);
  step3amphur?.forEach((element) => {
      $("#PreviewForm #step3district").append(
        `<option value="${element.AMPHUR_CODE}">${element.THAI_DESCRIPTION}</option>`
      );
    });
  
  let step3tambol = await GetTambolByAmphur(FullForm.ddlOfficeAmphur)
  step3tambol?.forEach((element) => {
    $("#PreviewForm #step3subdistrict").append(
      `<option value="${element.TAMBOL_CODE}">${element.THAI_DESCRIPTION}</option>`
    );
  });

  $(document).ready(() => {
    selectedOtherRender();
    selectedAddressRender();
  });


}
