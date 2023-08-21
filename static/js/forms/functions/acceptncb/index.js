import { FullFormMapValue } from "../../storage/mapping.js"


if ($("#ncb-information").length > 0) {

    const data = FullFormMapValue();
    $("#ncb-information #firstName").text(data?.txtNameThai)
    $("#ncb-information #lastName").text(data?.txtSurnameThai)
    $("#ncb-information #dateOfBirth").text(data?.ddlBirthDay + "/" + data?.ddlBirthMonth + "/" + data?.ddlBirthYear)
    $("#ncb-information #idCard").text(data?.txtPeopleId)
    $("#ncb-information #phone").text(data?.txtHomeMobileNo)
    $("#ncb-information #type").text("สินเชื่อหมุนเวียน")
}
  