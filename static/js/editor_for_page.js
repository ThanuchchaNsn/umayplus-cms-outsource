$(document).ready(function () {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
    tinymce.init({
        selector: ".tinymce_forpage",
        height: 150,
        menubar: !1,
        language: "th_TH",
        skin: window.matchMedia("(prefers-color-scheme: dark)").matches ? "oxide-dark" : "oxide",
        mobile: { theme: "silver" },
        plugins: "wordcount visualblocks advlist autolink link image imagetools media table lists  print preview hr anchor pagebreak code template quickbars fullscreen code case",
        toolbar1: "bold italic underline strikethrough | code | undo redo",
        toolbar2: "",
        content_style: "body { font-family: 'DB Ozone X', sans-serif;font-size:1.125rem; }",
      });
});