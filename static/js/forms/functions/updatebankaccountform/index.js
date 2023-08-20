/** Update Bank Account */
const updateBankAccountOtherMail = `
  <label for="updateBankAccountOtherMail" class="form-label">
  </label>
  <input type="text" class="form-control form-control-xl w-100 rounded-1"
    name="updateBankAccountOtherMail" id="updateBankAccountOtherMail" placeholder="โปรดระบุ">
  <div class="error" for="updateBankAccountOtherMail"></div>
`;

export const updateBankAccountOtherMailPicker = () => {
  if (
    $("#updateBankAccountMailProvider option").filter(":selected").val() ===
    "other"
  ) {
    $("#divUpdateBankAccountOtherMail").html(updateBankAccountOtherMail);
    $("#divUpdateBankAccountOtherMail").fadeToggle(200);
  } else {
    $("#divUpdateBankAccountOtherMail").fadeToggle(200, () => {
      $("#divUpdateBankAccountOtherMail").empty();
    });
  }
};

if ($("#UpdateBankAccountForm").length > 0) {
  console.log("test");
  $("#updateBankAccountMailProvider").change(() => {
    updateBankAccountOtherMailPicker();
  });
}

$("#UploadimageBankAccountMoreFileButton.btn-more-file").click((e) => {
  const fileField = (index) => `
      <div class="col-12 py-2 py-sm-2" id="divBankFile${index}">
        <div class="form-control form-control-file  form-control-xl w-100 d-flex  align-items-center text-nowrap file-count">
            <label class="h-100 w-100 d-flex  align-items-center overflow-hidden">
                <span class="btn-file btn-blue text-white ">เลือกไฟล์</span>
                <span class="text-btn-file d-inline-block text-truncate" for="bankAccount${index}">ยังไม่ได้เลือกไฟล์</span>
                <input type="file" name="bankAccount${index}" id="bankAccount${index}" accept="application/pdf,image/png,image/jpg">
              </label>
              <span class="justify-self-end d-flex align-self-center delete-icon delete-bnak-file-button" name="bankAccount-${index}" id="delete-bank-file-${index}"><i class="fas fa-times-circle"></i></span>
            </div>
        <div class="error" for="bankAccount${index}"></div>
      </div>
    `;
  const countFileField = $(
    "#UploadimageBankAccountFileForm .file-count"
  ).length;
  if (countFileField < 6) {
    let idx = $("#UploadimageBankAccountFileForm .file-count").length;
    $("div#UploadimageBankAccountFileForm").append(fileField(idx + 1));
    if (countFileField == 5) {
      $("#DivUploadimageBankAccountMoreFileButton").hide();
      // $('#UploadimageBankAccountMoreFileButton').html('<i class="fas fa-minus-circle"></i> <span>แนบไฟล์เพิ่ม</span>')
    }
  }
});

$(document).on("click", ".delete-bnak-file-button", (e) => {
  let fieldForm = e.currentTarget.parentElement.parentElement.id;
  $(`#${fieldForm}`).remove();
  let countFileField = $("#UploadimageBankAccountFileForm .file-count").length;
  if (countFileField < 6) {
    $("#DivUploadimageBankAccountMoreFileButton").show();
  }
});
