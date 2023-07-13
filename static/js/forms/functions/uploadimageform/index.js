import { getUtmQuery } from "../../utils.js";

//UploadImagePage
const utm = getUtmQuery();
// console.log(utm?.tranno)

if (!!utm?.tranno) {
  $("#header-text").text("กรุณานำส่งเอกสารเพิ่มเติม");
  $("#btn-uploadimage-back").hide();
  $("#UploadimageForm input").prop("disabled", true);
  $("#UploadimageForm .btn-file").css("background-color", "#A2AAAD");
  $("#DivUploadimageBankAccountMoreFileButton").hide();
  $.ajax({
    type: "GET",
    url: `/submit_/api/form/uploadimage/tran/${utm?.tranno}`,
    success: function (response) {
      if (response?.result == "success") {
        const data = response?.data?.data;
        if (data?.idCode === "Y") {
          $("#UploadimageForm #fileIdCard").prop("disabled", false);
          $("#UploadimageForm #fileIdCard")
            .siblings(".btn-file")
            .css("background-color", "#00b4f1");
        }

        if (data?.salcerCode === "Y" || data?.salslipCode === "Y") {
          $("#UploadimageForm #fileStatement1").prop("disabled", false);
          $("#UploadimageForm #fileStatement1")
            .siblings(".btn-file")
            .css("background-color", "#00b4f1");

          $("#UploadimageForm #fileStatement2").prop("disabled", false);
          $("#UploadimageForm #fileStatement2")
            .siblings(".btn-file")
            .css("background-color", "#00b4f1");
        }

        if (data?.bankstaCode === "Y") {
          $("#DivUploadimageBankAccountMoreFileButton").show();

          $("#UploadimageForm #bankAccount1").prop("disabled", false);
          $("#UploadimageForm #bankAccount1")
            .siblings(".btn-file")
            .css("background-color", "#00b4f1");

          $("#UploadimageForm #bankAccount2").prop("disabled", false);
          $("#UploadimageForm #bankAccount2")
            .siblings(".btn-file")
            .css("background-color", "#00b4f1");

          $("#UploadimageForm #bankAccount3").prop("disabled", false);
          $("#UploadimageForm #bankAccount3")
            .siblings(".btn-file")
            .css("background-color", "#00b4f1");
        }

        if (
          data?.empcardCode === "Y" ||
          data?.otherCode === "Y" ||
          data?.cnccerCode === "Y"
        ) {
          $("#UploadimageForm #fileOther").prop("disabled", false);
          $("#UploadimageForm #fileOther")
            .siblings(".btn-file")
            .css("background-color", "#00b4f1");
        }
      } else {
        const modalUploadElement = document.getElementById(
          "modal-upload-try-again"
        );
        let instanceUploadModal = mdb.Modal.getInstance(modalUploadElement);
        if (instanceUploadModal) {
          instanceUploadModal.show();
        } else {
          instanceUploadModal = new mdb.Modal(modalUploadElement, {
            backdrop: "static",
          });
          instanceUploadModal.show();
        }
      }
    },
    complete: (response) => {},
  });
}


