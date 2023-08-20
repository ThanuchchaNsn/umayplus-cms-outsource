$(document).ready(function() {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
    tinymce.init({
        selector: '.tinymce',
        height: 600,
        language: 'th_TH',
        skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
        mobile: {
            theme: 'silver',

        },
        //plugins: 'contextmenu visualblocks advlist autolink stylebuttons link image imagetools media textcolor colorpicker table lists charmap print preview hr anchor pagebreak code responsivefilemanager template',
        plugins: 'wordcount visualblocks advlist autolink link image imagetools media table lists  print preview hr anchor pagebreak code responsivefilemanager template quickbars',
        //plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed tinycomments mentions linkchecker responsivefilemanager',
        content_css: [
            
        ],

        image_caption: true,
        image_advtab: true,
        media_live_embeds: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quicktable',
        toolbar1: 'undo redo | insert | table | anchor link unlink | image responsivefilemanager media | hr | preview code ',
        toolbar2: 'styleselect formatselect | fontsizeselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
        //toolbar3: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image responsivefilemanager media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',


        style_formats: [{
                title: 'Headers',
                items: [
                    { title: 'h1', block: 'h1', styles: { fontFamily: 'Iconic' } },
                    { title: 'h2', block: 'h2', styles: { fontFamily: 'Iconic' } },
                    { title: 'h3', block: 'h3', styles: { fontFamily: 'Iconic' } },
                    { title: 'h4', block: 'h4', styles: { fontFamily: 'Iconic' } },
                    { title: 'h5', block: 'h5', styles: { fontFamily: 'Iconic' } },
                    { title: 'h6', block: 'h6', styles: { fontFamily: 'Iconic' } }
                ]
            },

            {
                title: 'Blocks',
                items: [
                    { title: 'p', block: 'p' },
                    { title: 'div', block: 'div' },
                    { title: 'pre', block: 'pre' }
                ]
            },

            {
                title: 'Containers',
                items: [
                    { title: 'section', block: 'section', wrapper: true, merge_siblings: false },
                    { title: 'article', block: 'article', wrapper: true, merge_siblings: false },
                    { title: 'blockquote', block: 'blockquote', wrapper: true },
                    { title: 'hgroup', block: 'hgroup', wrapper: true },
                    { title: 'aside', block: 'aside', wrapper: true },
                    { title: 'figure', block: 'figure', wrapper: true }
                ]
            },
            {
                title: 'Style',
                items: [
                    { title: 'Badge', inline: 'span', styles: { display: 'inline-block', border: '1px solid #2276d2', 'border-radius': '5px', padding: '2px 5px', margin: '0 2px', color: '#2276d2' } },
                    { title: "VDO FULL", styles: { width: '100%', height: 'auto' } },
                    { title: "IMG WIDE", selector: "figure", classes: "alignwide" },
                    { title: "IMG FULL", selector: "figure", classes: "alignfull" }
                ]

            }
        ],
        relative_urls: false,
        remove_script_host: false,
        force_br_newlines: false,
        force_p_newlines: false,
        forced_root_block: '',
        external_filemanager_path: baseUrl + "static/libs/filemanager/9.14.0/",
        filemanager_title: "จัดการไฟล์",
        external_plugins: { "responsivefilemanager": "static/libs/tinymce/5.0.5/plugins/responsivefilemanager/plugin.min.js" },
        visualblocks_default_state: false,
        end_container_on_empty_block: true
    });
});