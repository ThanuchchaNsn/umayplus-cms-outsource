(function ($) {
  $(document).on('ready', function () {
      const modalStatus = document.getElementById('editStatusModal');
      const modalInstanceStatus = new mdb.Modal(modalStatus);

      const modalVisibility = document.getElementById('editVisibilityModal');
      const modalInstanceVisibility = new mdb.Modal(modalVisibility);

      const modalPublish = document.getElementById('editPublishDateModal');
      const modalInstancePublish = new mdb.Modal(modalPublish);

      var input = document.querySelector('input[name=tags]');
      var tagify = new Tagify(input);


      $(document).on('click','.addTagsNew',function(){
        var n =  $('input[name="tagsName"]').val();
        var tags = [];
        tags.push(n);
        tagify.addTags(tags);
        $('input[name="tagsName"]').val('');
      });

      
      //Publish Date
      const publishDateTimePicker = document.querySelector('#publishDateTimePicker');
      new mdb.Datetimepicker(publishDateTimePicker, {
        datepicker: { format: 'dd mmm yyyy'},
      });

      $(document).on('click','.timepicker-submit',function(){
          var valpublishDate = $('input[name="publishDate"]').val();
          $('input[name="publishDate"]').val(ft.publishDateFormat(valpublishDate));
          $('#publishDateDetail').html(ft.publishDateFormat(valpublishDate));
          modalInstancePublish.hide();
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

      //Category

      const modalCategory = document.getElementById('dataCategoriesModalCenter');
      const modalInstanceCategory = new mdb.Modal(modalCategory);

      var indexCategory = 2;
      $(document).on('click','.btn-apply-category',function(){
        var row = jQuery('.rssRowContainerCategory .rssRow:last').clone();
        jQuery('input[name="category[]"]', row).val(indexCategory).prop('checked',false)
        jQuery('.islabel', row).text($('input[name="categoryName"]').val())
        jQuery('.rssRowContainerCategory').append(row);
        indexCategory++;

        $('input[name="categoryName"]').val('');
        modalInstanceCategory.hide();
      });



    $(document).on('change', 'input[type="file"][name="imageMobilePicture"],input[type="file"][name="imageDesktopPicture"]', function (e) {
      
        
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

        console.log(validFileExtensions);
        console.log('xxxxxxxxx');
        console.log(extension);


        reader.readAsDataURL(files[0]);
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;

            console.log('dddd');
            //Validate the File
            image.onload = function () {
                var height = this.height;
                var width = this.width;

                console.log($.inArray(extension, validFileExtensions));
                console.log('aaaaaa');

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
    



  });

  


})(jQuery);