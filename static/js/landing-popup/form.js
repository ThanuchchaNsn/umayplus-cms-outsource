(function ($) {
  $(document).on('ready', function () {


    const modalStatus = document.getElementById('editStatusModal');
    const modalInstanceStatus = new mdb.Modal(modalStatus);

    const modalVisibility = document.getElementById('editVisibilityModal');
    const modalInstanceVisibility = new mdb.Modal(modalVisibility);

    const modalPublish = document.getElementById('editPublishDateModal');
    const modalInstancePublish = new mdb.Modal(modalPublish);

    const modalStartShowDate = document.getElementById('selectStartDateModal');
    const modalInstanceStartShowDate = new mdb.Modal(modalStartShowDate);

    const modalEndShowDate = document.getElementById('selectEndDateModal');
    const modalInstanceEndShowDate = new mdb.Modal(modalEndShowDate);


    //Page

      const modalSelectPage = document.getElementById('dataSelectPageModalCenter');
      const modalInstanceSelectPage = new mdb.Modal(modalSelectPage);

      var indexSelectPage = 2;
      $(document).on('click','.btn-apply-select-page',function(){
        var row = jQuery('.rssRowContainerSelectPage .rssRow:last').clone();
        jQuery('.rssRowContainerSelectPage').append('<option class="rssRow" value="'+$('input[name="pageName"]').val()+'">'+$('input[name="pageName"]').val()+'</option>');
        indexSelectPage++;

        modalInstanceSelectPage.hide();
      });

    //Publish Date
    const publishDateTimePicker = document.querySelector('#publishDateTimePicker');
    new mdb.Datetimepicker(publishDateTimePicker, {
      datepicker: { format: 'dd mmm yyyy'},
      disablePast:true
    });

    $(document).on('click','.timepicker-submit',function(){
          var valpublishDate = $('input[name="publishDate"]').val();
          if(valpublishDate){
            $('input[name="publishDate"]').val(ft.publishDateFormat(valpublishDate));
            $('#publishDateDetail').html(ft.publishDateFormat(valpublishDate));
          }
          
          modalInstancePublish.hide();
      });

    //StartShow Date
    const startShowDateTimePicker = document.querySelector('#startShowDateTimePicker');
    new mdb.Datetimepicker(startShowDateTimePicker, {
      datepicker: { format: 'dd mmm yyyy'},
      disablePast:true
    });

    $(document).on('click','.timepicker-submit',function(){
          console.log('Start:'+$('input[name="startShowDate"]').val());
          var valstartShowDate = $('input[name="startShowDate"]').val();
          if(valstartShowDate){
            $('input[name="startShowDate"]').val(valstartShowDate);
            $('#startDateSelect').html(ft.publishDateFormat(valstartShowDate));
          }
          
          modalInstanceStartShowDate.hide();
      });

    //EndShow Date
    const endShowDateTimePicker = document.querySelector('#endShowDateTimePicker');
    new mdb.Datetimepicker(endShowDateTimePicker, {
      datepicker: { format: 'dd mmm yyyy'},
    });

    $(document).on('click','.timepicker-submit',function(){
          console.log('End:'+$('input[name="endShowDate"]').val());
          var valendShowDate = $('input[name="endShowDate"]').val();
          if(valendShowDate){
            $('input[name="endShowDate"]').val(valendShowDate);
            $('#endDateSelect').html(ft.publishDateFormat(valendShowDate));
          }
          
          modalInstanceEndShowDate.hide();
      });

    // Status

    $(document).on('change','select[name="status"]', function() {
        $('#statusDetail').text($(this).val());
        modalInstanceStatus.hide();
    })

    // Visibility Status

    $(document).on('change','select[name="visibility"]', function() {
        $('#visibilityDetail').text($(this).val());
        modalInstanceVisibility.hide();
    })


    // var wysiwygElement = document.getElementsByClassName('editor')[0];
    // var wysiwygInstance = new WYSIWYG(wysiwygElement, {
    //   wysiwygStylesSection : false,
    //   wysiwygListsSection : false,
    //   wysiwygFormattingSection : false,
    //   wysiwygShowCodeSection : true,
    //   wysiwygColors : [
    //     '#3949AB',
    //     '#00BCD4',
    //     '#7CB342'
    //   ]
    // });




    $(document).on('change', 'input[type="file"][name="bannerLandingPopup"]', function (e) {
      
        var image = new Image();
        var imgPreview = $(this).data('preview');
        var imgMaxSize = $(this).data('maxsize');
        var imgSize = $(this).data('size');
        var imgType = $(this).data('type');

        strimgSize = imgSize.split(',');

        strImgType = imgType.split(',');
        FileExtensionsArray  = [];

        var validFileExtensions = FileExtensionsArray.concat(strImgType);
        var fileErrors = new Array();
        var $input = $(this);
        var files = $input[0].files;
        var filename = files[0].name;
        var extension = filename.substr(filename.lastIndexOf(".")+1);
        var reader = new FileReader();

        $input.next().remove();


        reader.readAsDataURL(files[0]);
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            //Validate the File
            image.onload = function () {
                var height = this.height;
                var width = this.width;

                if($.inArray(extension, validFileExtensions) == -1){
                  $input.addClass('is-invalid');
                  $input.parent().append('<div class="invalid-feedback fs-18 position-relative">Please upload '+imgType+' file of notice.</div>');
                  return false;  
                }else if(files[0].size > 1000141){
                  $input.addClass('is-invalid');
                  $input.parent().append('<div class="invalid-feedback fs-18 position-relative">file size must be less than '+imgMaxSize+'.</div>');
                  return false;  
                }else if((parseInt(strimgSize[1]) != height) && (parseInt(strimgSize[2]) != width)) {
                  console.log('width');
                  $input.addClass('is-invalid');
                  $input.parent().append('<div class="invalid-feedback fs-18 position-relative">Please upload images bigger than '+strimgSize[0]+'x'+strimgSize[1]+'</div>');
                  return false;  
                }else{
                  $input.parent().next().next().find('.close').show();
                  $input.parent().next().next().find('img').show();

                  $input.removeClass('is-invalid');
                  //Preview
                  $input.parent().next().next().find('.img-wrap').show();
                  var preview = document.getElementById(imgPreview);
                  preview.src = e.target.result;
                  preview.onload = function() {
                    URL.revokeObjectURL(preview.src);
                  }
                  
                }

                
            };

        }

    });

     $(document).on('click','.img-wrap .close', function() {
        var id = $(this).closest('.img-wrap').find('img').data('id');
        var inputId = $(this).closest('.img-wrap').find('img').data('input-id');

        $(this).closest('.img-wrap').hide();
        $(this).closest('.img-wrap').find('img').attr('src','');
        $('input#'+inputId).val('');


        // You can call Ajax delete img by ID
    });

    // Preview

    const modalPreview = document.getElementById('dataPreviewsModalCenter');
    const modalHeadPreview = document.getElementById('modalHeadPreview');
    const modalBodyPreview = document.getElementById('modalBodyPreview');
    const modalInstancePreview = new mdb.Modal(modalPreview);

     const setupPreview = (action) => {
      document.getElementsByClassName(`${action}-button`).forEach((button) => {

        button.addEventListener('click', (e) => {
          e.stopPropagation();

          var valImagePreview = $('#bannerLandingPopupPreview').attr('src');
          var valTitlePreview = $('#mainTitle .wysiwyg-content').html();
          var valSubTitlePreview = $('#subTitle .wysiwyg-content').html();

          var textButton = $('input[name="textButton"]').val();
          var colorButton = $('select[name="colorButton"] option:selected').val();
          var linkButton = $('input[name="linkButton"]').val();

          console.log(valSubTitlePreview);

          if(action == 'preview'){
            console.log('view');
            modalHeadPreview.innerHTML = valTitlePreview;
            modalBodyPreview.innerHTML = `<div class="text-center"><img class="img-fluid" src="`+valImagePreview+`"></div>
            <p class="p-3 fs-18 lh-1">`+valSubTitlePreview+`</p>`;
            if(textButton){
            modalBodyPreview.innerHTML +=`<div class="text-center pb-2">
              <a href="`+linkButton+`" class="btn btn-sm btn-primary btn-with-icon py-2 mb-2 mr-2 mr-md-2 rounded" style="background-color: `+colorButton+`;border-color: `+colorButton+`;">`+textButton+`</a>
            </div>`;
            }
            

            modalInstancePreview.show();
          }

        });


      });
    };

    setupPreview('preview');

    


  });
})(jQuery);