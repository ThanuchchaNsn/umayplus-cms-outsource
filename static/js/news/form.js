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

      var input = document.querySelector('input[name=tags]');
      var tagify = new Tagify(input);


      $(document).on('click','.addTagsNew',function(){
        var n =  $('input[name="tagsName"]').val();
        var tags = [];
        tags.push(n);
        tagify.addTags(tags);
        $('input[name="tagsName"]').val('');
      });

      // Apply Path URL

      const modalPathURL = document.getElementById('editPathURLModal');
      const modalInstancePathURL = new mdb.Modal(modalPathURL);

      $(document).on('click','#editPathURLModal .btn-apply',function(){
          var valpathURL = $('input[name="pathURL"]').val();
          $('#pathURLReplace').html(valpathURL);
          modalInstancePathURL.hide();
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

      $('input[name="startDate"],input[name="endDate"]').keyup(function (e) {
        var key = String.fromCharCode(e.keyCode);
        if (!(key >= 0 && key <= 9)) $(this).val($(this).val().substr(0, $(this).val().length - 1));
        var value = $(this).val();
        if (value.length == 2 || value.length == 5) $(this).val($(this).val() + '/');
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


    $('input[name="isTemplate"]').on('change',function(){
        $('img.isTemplate').removeClass('checked');
        var val = $(this).val();
        $('img#imgTemplate'+val).addClass('checked');
    });

    $("a.isTemplateImg").click(function() {
        //$(this).next().prop("checked", "checked");
        $('img.isTemplate').removeClass('checked');
        $(this).find('img').addClass('checked');
        $(this).parent().children("div.form-check").find('input').prop("checked", "checked");  
    });



    $('.btn-choose-template').on('click',function(){
        var valTemplate = $('input[name="isTemplate"]:checked').val();
        $('#isTemplateSelect').html('Template '+valTemplate);
        $("#dataTemplateModalCenter").on('hidden.bs.modal', function(){
            
        });
    });

    $('input[name="dateOptions"]').on('change',function(){
        var val = $(this).val();
        if(val == 1){
          $('input[name="startDate"]').prop('disabled', true);
        }else{
          $('input[name="startDate"]').prop('disabled', false);
        }
        
    });
      var indexMedia = 2;
      $('#addRowSocialMedia').click(function() {
        var row = jQuery('.rssRowContainerSocialMedia .rssRow:last').clone();
        jQuery('.rssHeader', row).find('span.no').html(indexMedia)
        jQuery('.rssHeader', row).find('div.isDelete').html('<span class="removeRowSocialMedia"><a href="javascript:;"><i class="far fa-trash-can text-danger fs-16"></i></a></span>')
        jQuery('.rssLink', row).attr('id', 'link' + indexMedia)
        jQuery('.rssImageSocial', row).attr('id', 'imageSocial' + indexMedia).attr('data-preview', 'imageSocialPreview' + indexMedia)
        jQuery('.rssImgPreview', row).attr('id', 'imageSocialPreview' + indexMedia).attr('data-input-id','imageSocial'+indexMedia)
        jQuery('.rssRowContainerSocialMedia').append(row);
        indexMedia++;
      });

      $('body').on('click','.removeRowSocialMedia', function() {
        $(this).closest('.rssRow').remove();
      });

      var indexButtons = 2;
      $('#addRowButtons').click(function() {
        var row = jQuery('.rssRowContainerButtons .rssRow:last').clone();
        jQuery('.rssHeader', row).find('span.no').html(indexButtons)
        jQuery('.rssHeader', row).find('div.isDelete').html('<span class="removeRowButtons"><a href="javascript:;"><i class="far fa-trash-can text-danger fs-16"></i></a></span>')
        jQuery('.rssLink', row).attr('id', 'link' + indexButtons)
        jQuery('.rssImageButtons', row).attr('id', 'imageButtons' + indexButtons).attr('data-preview', 'imageButtonsPreview' + indexButtons)
        jQuery('.rssImgPreview', row).attr('id', 'imageButtonsPreview' + indexButtons).attr('data-input-id','imageButtons'+indexButtons)
        jQuery('.rssRowContainerButtons').append(row);
        indexButtons++;
      });

      $('body').on('click','.removeRowButtons', function() {
        $(this).closest('.rssRow').remove();
      });

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

      const dt = new DataTransfer();
      $("#fileAttachment").on('change', function(e){
        $(this).next().remove();
        for(var i = 0; i < this.files.length; i++){

          console.log('name:'+this.files.item(i).name);
          console.log('size:'+this.files.item(i).size);
          var totalBytes = this.files.item(i).size;
          if(totalBytes < 1000000){
             var _size = Math.floor(totalBytes/1000) + ' KB';
          }else{
             var _size = Math.floor(totalBytes/1000000) + ' MB';  
          }

          if(this.files.item(i).size > 1000141){
            $(this).addClass('is-invalid');
            $(this).parent().append('<div class="invalid-feedback fs-18 position-relative">file size must be less than 1MB.</div>');
            return false;  
          }

          let fileBloc = $('<li/>', {class: 'file-block'}),
             fileName = $('<span/>', {class: 'name font-weight-medium ms-2 me-1', text: this.files.item(i).name});
          fileBloc.html('<i class="far fa-file-pdf text-deepblue"></i>').append(fileName).append('<span class="font-weight-medium me-2">('+_size+')</span>').append('<span class="file-delete"><i class="far fa-trash-can text-danger"></i></span>');
          $("#filesList > #files-names").append(fileBloc);
        };
        for (let file of this.files) {
          dt.items.add(file);
        }
        this.files = dt.files;
        $('span.file-delete').click(function(){
          let name = $(this).prev().prev('span.name').text();
          $(this).parent().remove();
          for(let i = 0; i < dt.items.length; i++){
            // Correspondance du fichier et du nom
            if(name === dt.items[i].getAsFile().name){
              dt.items.remove(i);
              continue;
            }
          }
          document.getElementById('fileAttachment').files = dt.files;
        });
      });



    $(document).on('change', '.rssRowContainerButtons input[type="file"],.rssRowContainerSocialMedia input[type="file"],input[type="file"][name="imageNews"],input[type="file"][name="bannerNews"]', function (e) {
      
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

            console.log(image.src);
            //Validate the File
            image.onload = function () {

                console.log('xxxxxx');

                var height = this.height;
                var width = this.width;

                console.log($.inArray(extension, validFileExtensions));
                console.log('xxxxx');
                console.log(parseInt(strimgSize[1]));

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

     //SEO

    const seoTags = (action='') => {

      //Gen Tags Meta

      var title = $('input[name="SEOTitle"]').val();
      var description = $('textarea[name="MetaDescription"]').val();
      var url = 'https://ideabranch.co.th/';

      var titleFacebook = $('input[name="facebookTitle"]').val();
      var descriptionFacebook = $('textarea[name="facebookDesc"]').val();
      var imageFacebook = $('input[type="hidden"][name="facebookImageURL"]').val();
      var imageWidthFacebook = $('input[type="hidden"][name="facebookImageWidth"]').val();
      var imageHeightFacebook = $('input[type="hidden"][name="facebookImageHeight"]').val();
      var imageTypeFacebook = $('input[type="hidden"][name="facebookImageType"]').val();

      var titleTwiter = $('input[name="twitterTitle"]').val();
      var descriptionTwitter = $('textarea[name="twitterDesc"]').val();
      var imageTwitter = $('input[type="hidden"][name="twitterImageURL"]').val();
      var imageWidthTwitter = $('input[type="hidden"][name="twitterImageWidth"]').val();
      var imageHeightTwitter = $('input[type="hidden"][name="twitterImageHeight"]').val();
      var imageTypeTwitter = $('input[type="hidden"][name="twitterImageType"]').val();


      var Tags = `
      <title>`+title+`</title>
      <meta name="description" content="`+description+`"/>
      <link rel="canonical" href="`+url+`" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="`+titleFacebook+`" />
      <meta property="og:description" content="`+descriptionFacebook+`"/>
      <meta property="og:url" content="`+url+`" />
      <meta property="og:site_name" content="IDEA BRANCH" />
      <meta property="article:publisher" content="https://www.facebook.com/IDEABRANCH/" />
      <meta property="article:modified_time" content="2023-03-13T08:16:31+00:00" />
      <meta property="og:image" content="`+imageFacebook+`" />
      <meta property="og:image:width" content="`+imageWidthFacebook+`" /> 
      <meta property="og:image:height" content="`+imageHeightFacebook+`" />
      <meta property="og:image:type" content="`+imageTypeFacebook+`" /> 
      <meta name="twitter:card" content="summary_large_image" /> 
      <meta name="twitter:title" content="`+titleTwiter+`" />
      <meta name="twitter:description" content="`+descriptionTwitter+`"/>
      <meta name="twitter:image" content="`+imageTwitter+`" />`;

        $('textarea[name="tags"]').val(Tags);

  };

    $(function () {

      $(document).on('change','input[name="seoOptions"]',function(){
        var valOption = $(this).val();
        $('.isBoxSEOOptions').addClass('d-none').removeClass('d-block');
        $('#isBoxSEOOptions'+valOption).addClass('d-block').removeClass('d-none');;
          
      });

      $(document).on('keypress','input[name="SEOTitle"]',function(){
          var valTitle = $(this).val();
          $('.isPreviewTitleSEO').text(valTitle);
          seoAnalysis('title',valTitle);
          seoTags();
      });

      $(document).on('keypress','textarea[name="MetaDescription"]',function(){
          var valDesc = $(this).val();
          $('.isPreviewDescSEO').text(valDesc);
          seoAnalysis('desc',valDesc);
          seoTags();
      });

      const seoAnalysis = (action,text) => {
          // if else
          $('#isPreviewAnalysisSEO').html('<span class="text-warning">Low</span>');

      };


      

    });

    // Twitter
     $(function () {
        var fileupload = $("#imgTwiterUpload");
        var filePath = $("#imgTwiterFilePath");
        var button = $("#btnImgTwiterUpload");
        button.click(function () {
            fileupload.click();
        });
        fileupload.change(function () {
            var $input = $(this);
            var files = $input[0].files;
            var filename = files[0].name;
            var extension = filename.substr(filename.lastIndexOf(".")+1);
            filePath.html("<b>Selected File: </b>" + filename);
            button.text('Change Image');

            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                //Validate the File
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    $('input[type="hidden"][name="twitterImageWidth"]').val(width);
                    $('input[type="hidden"][name="twitterImageHeight"]').val(height);
                    $('input[type="hidden"][name="twitterImageType"]').val(extension);
                    //Preview
                    var isImage = document.getElementById('isImageTwitter');
                    isImage.src = e.target.result;
                    isImage.onload = function() {
                      URL.revokeObjectURL(isImage.src);
                      $('#isImageTwitter').show();
                      $('.removeImageTwitter').show();
                      $('input[type="hidden"][name="twitterImageURL"]').val('/'+filename);
                      seoTags();
                    }

                    var isPreview = document.getElementById('isPreviewImageTwitter');
                    isPreview.src = e.target.result;
                    isPreview.onload = function() {
                      URL.revokeObjectURL(isPreview.src);
                    }
                    
                };

            }

        });


        $('a.removeImageTwitter').click(function(){
          var idImageDel = $(this).data('image-id');
          $('#'+idImageDel).attr('src','').hide();
          button.text('Upload Image');
          fileupload.val('');
          $(this).hide();
          filePath.html('');
        });

        $(document).on('keypress','input[name="twitterTitle"]',function(){
            var valTitle = $(this).val();
            $('#isPreviewTitleTwitter').text(valTitle);
            seoTags();
        });

        $(document).on('keypress','textarea[name="twitterDesc"]',function(){
            var valDesc = $(this).val();
            $('#isPreviewDescTwitter').text(valDesc);
            seoTags();
        });


    });

     // Facebook
     $(function () {
        var fileupload = $("#imgFacebookUpload");
        var filePath = $("#imgFacebookFilePath");
        var button = $("#btnImgFacebookUpload");
        button.click(function () {
            fileupload.click();
        });
        fileupload.change(function () {
            var $input = $(this);
            var files = $input[0].files;
            var filename = files[0].name;
            var extension = filename.substr(filename.lastIndexOf(".")+1);
            filePath.html("<b>Selected File: </b>" + filename);
            button.text('Change Image');

            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                //Validate the File
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    $('input[type="hidden"][name="facebookImageWidth"]').val(width);
                    $('input[type="hidden"][name="facebookImageHeight"]').val(height);
                    $('input[type="hidden"][name="facebookImageType"]').val(extension);
                    //Preview
                    var isImage = document.getElementById('isImageFacebook');
                    isImage.src = e.target.result;
                    isImage.onload = function() {
                      URL.revokeObjectURL(isImage.src);
                      $('#isImageFacebook').show();
                      $('.removeImageFacebook').show();
                      $('input[type="hidden"][name="facebookImageURL"]').val('/'+filename);
                      seoTags();
                    }


                    var isPreview = document.getElementById('isPreviewImageFacebook');
                    isPreview.src = e.target.result;
                    isPreview.onload = function() {
                      URL.revokeObjectURL(isPreview.src);
                    }
                    
                };

            }

        });


        $('a.removeImageFacebook').click(function(){
          var idImageDel = $(this).data('image-id');
          $('#'+idImageDel).attr('src','').hide();
          button.text('Upload Image');
          fileupload.val('');
          $(this).hide();
          filePath.html('');
        });

        $(document).on('keypress','input[name="facebookTitle"]',function(){
            var valTitle = $(this).val();
            $('#isPreviewTitleFacebook').text(valTitle);
            seoTags();
        });

        $(document).on('keypress','textarea[name="facebookDesc"]',function(){
            var valDesc = $(this).val();
            $('#isPreviewDescFacebook').text(valDesc);
            seoTags();
        });


    });

     //END Facebook



  });

  


})(jQuery);