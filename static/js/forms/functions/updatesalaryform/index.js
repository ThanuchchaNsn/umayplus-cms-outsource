/** UpdateSalary */
function UpdateSalaryFirstFormFullFilled() {
  let text_filled = true;
  let checkbox_filled = true;
  $("#UpdateSalaryFirstForm input[type=text]").each(function () {
    if ($(this).val() == "") text_filled = false;
  });
  $("#UpdateSalaryFirstForm input:checkbox").each(function () {
    if (!$(this).is(":checked")) checkbox_filled = false;
  });
  if (
    !$("#UpdateSalaryFirstForm input:radio[name='statementCheck']").is(
      ":checked"
    )
  ) {
    checkbox_filled = false;
  }
  return text_filled && checkbox_filled;
}

// const logAPI = async () => {
//   let payload = JSON.stringify({
//     applNumber: FullForm.applNumber,
//   });
//   await $.ajax({
//     type: "POST",
//     url: `/submit_/api/form/shortform/${path}`,
//     data: payload,
//     contentType: "application/json",
//     success: function (response) {
//       console.log(`shortform/${path}`,response);
//     },
//     complete: (response) => {
//       console.log(`shortform/${path}`,response);
//       if (path == "step5") {
//         $("#ApplyFullForm").submit();
//       }
//     },
//   });
// };

if ($("#UpdateSalaryFirstForm").length > 0) {
  $("#acceptTerm").on("click change", (e) => {
    if ($("#UpdateSalaryFirstForm").valid()) {
      $("#acceptTerm").prop('checked', true);
    } else {
      $("#acceptTerm").prop("checked", false);
    }
  });
  
  $("#UpdateSalaryFirstFormSubmitButton").on("click change", (e) => {
    // logAPI();
    if ($("#UpdateSalaryFirstForm").valid()) {
      $("#acceptTerm").prop('checked', true);
    } else {
      $("#acceptTerm").prop("checked", false);
    }
  });

  $("#UpdateSalaryFirstForm").bind("change", function () {
    if (UpdateSalaryFirstFormFullFilled()) {
      $("#UpdateSalaryFirstFormSubmitButton").removeAttr("disabled");
    } else {
      $("#UpdateSalaryFirstFormSubmitButton").attr("disabled", true);
    }
  });

  // $("#acceptTerm").on("click",(e) => {
  //   console.log(1)
  //   if (UpdateSalaryFirstFormFullFilled()) {
  //     $("#UpdateSalaryFirstFormSubmitButton").removeAttr("disabled");
  //   } else {
  //     $("#UpdateSalaryFirstFormSubmitButton").attr("disabled", true);
  //   }
  // });
}

// console.log($("#UpdateSalaryFirstForm").length)

/** File Field Function*/
$("#UpdateSalaryFirstMoreFileButton.btn-more-file").click((e) => {
  const fileField = (index) => `
        <div class="col-12 py-2 py-sm-2" id="divFileOtherFirst${index}">
          <label for="fileOther${index}" class="form-label file-count">
              เอกสารอื่นๆ
          </label>
          <div class="form-control form-control-file form-control-xl w-100 d-flex align-items-center text-nowrap">
            <label class="h-100 w-100 d-flex  align-items-center overflow-hidden">
              <span class="btn-file btn-blue text-white ">เลือกไฟล์</span>
              <span class="text-btn-file" for="fileOther${index}">ยังไม่ได้เลือกไฟล์</span>
              <input type="file" name="fileOther${index}" id="fileOther${index}" accept="application/pdf,image/png,image/jpg">
            </label>
            <span class="justify-self-end d-flex align-self-center delete-icon delete-file-button" name="UpdateSalaryFirstMoreFile-${index}" id="delete-file-${index}"><i class="fas fa-times-circle"></i></span>
          </div>
          <div class="error" for="fileOther${index}"></div>
        </div>
      `;
  const countFileField = $(
    "#UpdateSalaryFirstFormComponents .file-count"
  ).length;
  if (countFileField < 4) {
    let idx = $("#UpdateSalaryFirstFormComponents .file-count").length;
    $("div#UpdateSalaryFirstFormFileForms").append(fileField(idx + 1));
    if (countFileField == 3) {
      $("#DivUpdateSalaryFirstMoreFileButton").hide();
    }
  }
});

$("#UpdateSalarySecondMoreFileButton.btn-more-file").click((e) => {
  const fileField = (index) => `
        <div class="col-12 py-2 py-sm-2 id="divFileOtherSecond${index}">
          <label for="fileOther${index}" class="form-label  file-count">
              เอกสารอื่นๆ
          </label>
          <div class="form-control form-control-file form-control-xl w-100 d-flex align-items-center text-nowrap">
            <label class="h-100 w-100 d-flex  align-items-center overflow-hidden">
              <span class="btn-file btn-blue text-white ">เลือกไฟล์</span>
              <span class="text-btn-file" for="fileOther${index}">ยังไม่ได้เลือกไฟล์</span>
              <input type="file" name="fileOther${index}" id="fileOther${index}" accept="application/pdf,image/png,image/jpg">
              <span class="justify-self-end d-flex align-self-center delete-icon delete-file-button" name="UpdateSalarySecondMoreFile-${index}" id="delete-file-${index}"><i class="fas fa-times-circle"></i></span>
            </label>
          </div>
          <div class="error" for="fileOther${index}"></div>
        </div>
      `;
  const countFileField = $(
    "#UpdateSalarySecondFormComponents .file-count"
  ).length;
  if (countFileField < 4) {
    let idx = $("#UpdateSalarySecondFormComponents .file-count").length;
    $("div#UpdateSalarySecondFormFileForms").append(fileField(idx + 1));
    if (countFileField == 3) {
      $("#UpdateSalarySecondMoreFileButton").hide();
    }
  }
});
