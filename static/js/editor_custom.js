$(document).ready(function () {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
    tinymce.init({
        selector: ".tinymce_custom",
        height: 200,
        menubar: !1,
        language: "th_TH",
        skin: window.matchMedia("(prefers-color-scheme: dark)").matches ? "oxide-dark" : "oxide",
        mobile: { theme: "silver" },
        plugins: "wordcount visualblocks advlist autolink link image imagetools media table lists  print preview hr anchor pagebreak code template quickbars fullscreen code case",
        toolbar1: "fontselect | fontsizeselect | bold italic underline strikethrough case forecolor backcolor | link image | fullscreen code | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | undo redo",
        toolbar2: "",
        fontsize_formats: "8px 10px 12px 14px 16px 18px 24px 36px",
        content_style: "body { font-family: Arial;font-size:14px; }",
      });
});