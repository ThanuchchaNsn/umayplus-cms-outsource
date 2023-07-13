$(document).on("click", ".delete-file-button", (e) => {
  let fieldForm = e.currentTarget.parentElement.parentElement.id;
  $(`#${fieldForm}`).remove();
  let fieldForms = e.currentTarget
    .getAttribute("name")
    .split("-")
    .shift()
    .replace("MoreFile", "FormComponents");
  let countFileField = $(`#${fieldForms} .file-count`).length;
  if (countFileField < 4) {
    let fieldButton =
      "Div" +
      e.currentTarget.getAttribute("name").split("-").shift() +
      "Button";
    $(`#${fieldButton}`).show();
  }
});

$(document).on("change", 'input[type="file"]', (e) => {
  var fileName = e.target.files[0].name;
  if (fileName) {
    $(e.target).siblings(".text-btn-file").text(fileName);
  }
  // $(`.text-btn-file[for=${e.target.name}]`).text(fileName);
});