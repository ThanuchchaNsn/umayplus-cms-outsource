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
      datepicker: { format: 'dd mmm yyyy'}
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
      disablePast:true
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