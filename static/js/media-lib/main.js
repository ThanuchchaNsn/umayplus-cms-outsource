(function ($) {
  $(document).on('ready', function () {

    const table = document.getElementById('datatable-clickable-rows');
    const modal = document.getElementById('dataConfirmModal');
    const modalBody = document.getElementById('modalBodyConfirm');
    const modalHeader = document.getElementById('modalHeaderConfirm');

    const modalInstance = new mdb.Modal(modal);

    const modalDateFilter = document.getElementById('dateFilterModalCenter');
    const modalInstanceDateFilter = new mdb.Modal(modalDateFilter);

    //DatePicker
    // const startDate = document.querySelector('#startDate');
    // new mdb.Datepicker(startDate, {
      
    // });

    // const endDate = document.querySelector('#endDate');
    // new mdb.Datepicker(endDate, {
      
    // });

    $(document).on('click','.btn-apply-filter',function(){
        var valstartDate = $('input[name="startDate"]').val();
        var valendDate = $('input[name="endDate"]').val();
        $('span.datePreriodFilter').html(valstartDate+' - '+valendDate);
        modalInstanceDateFilter.hide();
    });

    $('input[name="startDate"],input[name="endDate"]').keyup(function (e) {
        var key = String.fromCharCode(e.keyCode);
        if (!(key >= 0 && key <= 9)) $(this).val($(this).val().substr(0, $(this).val().length - 1));
        var value = $(this).val();
        if (value.length == 2 || value.length == 5) $(this).val($(this).val() + '/');
    });
    
    const setupButtons = (action) => {
      document.getElementsByClassName(`${action}-button`).forEach((button) => {

        button.addEventListener('click', (e) => {
          e.stopPropagation();

          const index = button.getAttribute('data-mdb-index');
          const title = button.getAttribute('data-mdb-title');
          const id = button.getAttribute('data-mdb-id');

          if(action == 'delete'){
    
            modalBody.innerHTML = `
              <div class="pb-4"><i class="far fa-trash-alt fs-55 text-danger"></i></div>
              <h5 class="fs-24 fw-bold">You are about to delete a Attachment.</h5>
              <div class="pt-3">
              <p class="fs-20 text-start">
                <span>Attachment : <span><span class="font-weight-medium">`+title+`</span><br>
                <span>Attachment Id : <span><span class="font-weight-medium">`+id+`</span> 
              </p>
              </div>
            `;

            const href = 'media-library.html'
            $('#dataConfirmOK').attr('href', href);

            modalInstance.show();
          }


        });


      });
    };

    setupButtons('delete');


    const modalAttachment = document.getElementById('dataAttachmentModal');
    const modalBodyAttachment = document.getElementById('modalBodyAttachment');
    const modalHeaderAttachment = document.getElementById('modalHeaderAttachment');

    const modalInstanceAttachment = new mdb.Modal(modalAttachment);

    const setupAttachment = (action) => {
      document.getElementsByClassName(`${action}-button`).forEach((button) => {

        button.addEventListener('click', (e) => {
          e.stopPropagation();

          const index = button.getAttribute('data-mdb-index');
          const title = button.getAttribute('data-mdb-title');
          const alt = button.getAttribute('data-mdb-alt');
          const caption = button.getAttribute('data-mdb-caption');
          const desc = button.getAttribute('data-mdb-desc');
          const label = button.getAttribute('data-mdb-label');
          const id = button.getAttribute('data-mdb-id');
          const img = button.getAttribute('data-mdb-img'); 
          const imginfo = button.getAttribute('data-mdb-img-info'); 


          if(action == 'view'){
            console.log('view');
            var imgInfo = imginfo.split("|");

            $('#modalBodyUploadImageView').find('#isImageView').attr('src', img);
            $('#modalBodyUploadImageView').find('a.delete-button').attr('data-mdb-id',id).attr('data-mdb-title',title);

            $('#modalBodyUploadImageView').find('#uploadOn').html(imgInfo[0]);
            $('#modalBodyUploadImageView').find('#uploadBy').html(imgInfo[1]);
            $('#modalBodyUploadImageView').find('#uploadTo').html(imgInfo[2]);
            $('#modalBodyUploadImageView').find('#fileName').html(imgInfo[3]);
            $('#modalBodyUploadImageView').find('#fileType').html(imgInfo[4]);
            $('#modalBodyUploadImageView').find('#fileSize').html(imgInfo[5]);
            $('#modalBodyUploadImageView').find('#fileDimensions').html(imgInfo[6]);

            $('#modalBodyUploadImageView').find('input[name="alternativeText"]').val(alt);
            $('#modalBodyUploadImageView').find('input[name="title"]').val(title);
            $('#modalBodyUploadImageView').find('textarea[name="caption"]').val(caption);
            $('#modalBodyUploadImageView').find('textarea[name="description"]').val(desc);
            $('#modalBodyUploadImageView').find('input[name="label"]').val(label);

            modalInstanceAttachment.show();
          }



        });


      });
    };

    setupAttachment('view');

    //Upload Image

     $(function () {

        $('.uploadImgBox').each(function(){
            var keyUpload = $(this).data('id');
            var fileupload = $("#imgUpload"+keyUpload);
            var button = $("#btnImgUpload"+keyUpload);
            button.click(function () {
                fileupload.click();
            });


            fileupload.change(function () {
                var $input = $(this);
                var files = $input[0].files;
                var filename = files[0].name;

                var totalBytes = files[0].size;
                if(totalBytes < 1000000){
                   var _size = Math.floor(totalBytes/1000) + ' KB';
                }else{
                   var _size = Math.floor(totalBytes/1000000) + ' MB';  
                }

                console.log(filename);

                button.text('Change Image');
         
                var reader = new FileReader();
                reader.readAsDataURL(files[0]);
                reader.onload = function (e) {
                    var image = new Image();
                    image.src = e.target.result;
                    console.log(e.target.result);
                    //Validate the File
                    image.onload = function () {
                        var height = this.height;
                        var width = this.width;
                        //Preview
                        var isImage = document.getElementById('isImage'+keyUpload);
                        isImage.src = e.target.result;
                        isImage.onload = function() {
                          URL.revokeObjectURL(isImage.src);
                          $('#isImageNewEmpty').hide();
                          $('#isImage'+keyUpload).show();
                          $('#boxImageEmpty').removeClass('boxImageEmpty');
                          fileupload.next().show();

                          $('#modalBodyUploadImage'+keyUpload).find('#uploadOn').html('8 Feb 2023, 02:43 PM');
                          $('#modalBodyUploadImage'+keyUpload).find('#uploadBy').html('admin');
                          $('#modalBodyUploadImage'+keyUpload).find('#uploadTo').html('/Page');
                          $('#modalBodyUploadImage'+keyUpload).find('#fileName').html(filename);
                          $('#modalBodyUploadImage'+keyUpload).find('#fileSize').html(_size);
                          $('#modalBodyUploadImage'+keyUpload).find('#fileDimensions').html(width+' x '+height+' pixels');
                        }
                    };
                }

            });

            $('a.removeImage').click(function(){
              var idImageDel = $(this).data('image-id');
              var imgDefault = 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp';
              $('#isImageNewEmpty').show();
              $('#boxImageEmpty').addClass('boxImageEmpty');
              $('#'+idImageDel).attr('src','').hide();
              button.text('Upload Image');
              fileupload.val('');
              $(this).hide();

              $('#modalBodyUploadImage'+keyUpload).find('#uploadOn').html('-');
              $('#modalBodyUploadImage'+keyUpload).find('#uploadBy').html('-');
              $('#modalBodyUploadImage'+keyUpload).find('#uploadTo').html('-');
              $('#modalBodyUploadImage'+keyUpload).find('#fileName').html('-');
              $('#modalBodyUploadImage'+keyUpload).find('#fileSize').html('-');
              $('#modalBodyUploadImage'+keyUpload).find('#fileDimensions').html('-');

            });

        });



    });


    //Copy Link

    const myCopy = document.querySelector('#copyLink');
    const alertInstance = mdb.Alert.getInstance(document.querySelector('#containerAlertCopy'));

    myCopy.addEventListener('copy.mdb.clipboard', ()=> {
      myCopy.innerText = 'COPIED!'
      alertInstance.show()
      setTimeout(() => {
        myCopy.innerText = 'COPY'
      }, 4000);
    })
    

    $(function() {
      var alert_message = $('#alert_message').val();
      if (alert_message != '') {
         var foo = alert_message.split(',');
         notification(foo[0], foo[1]);
      }
   });

   function notification(id, message) {
      let basicInstance = mdb.Toast.getInstance(document.getElementById(id));
      $('#'+id).find('.toast-body').html(message);
      basicInstance.show();

   }


  });
})(jQuery);