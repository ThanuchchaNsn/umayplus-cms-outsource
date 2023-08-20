(function ($) {
  $(document).on('ready', function () {
    // Menu Main
    const modalMainMenu = document.getElementById('dataMainMenuModalCenter');
    const modalInstanceMainMenu = new mdb.Modal(modalMainMenu);

    var updateOutputmenuMain = function () {
        $('#menuMain-output').val(JSON.stringify($('#menuMain').nestable('serialize')));
    };

    $('#menuMain').nestable({maxDepth:2}).on('change', updateOutputmenuMain);

    updateOutputmenuMain();

    $("#addItemMenuMain").submit(function (e) {
        e.preventDefault();
        id = Date.now();
        var label = $('#addItemMenuMain').find('input[name="navLabel"]').val();
        var url = $('#addItemMenuMain').find('input[name="navURL"]').val();
        if ((url == "") || (label == "")) return;
        var item =
            `<li class="dd-item" data-id="`+id+`" data-label="`+label+`" data-url="`+url+`">
                <div class="accordion py-2" id="accordionFlushExample">
                  <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading9 ">
                          <button class="accordion-button fs-20 py-2 font-weight-medium text-dark collapsed bg-header-accordion" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9"
                          >
                          <div class="dd-handle dd3-handle"></div>
                                    <span class="ms-3 navName">`+label+`</span>
                            
                          </button>
                        </h2>
                        <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-mdb-parent="#accordionFlushExample"
                        >
                            <div class="accordion-body">
                                <!-- Navigation Label -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navLabel" name="navLabel" value="`+label+`" class="form-control rounded" />
                                  <label class="form-label" for="navLabel">Navigation Label</label>
                                </div>
                                <!-- End Navigation Label -->
                                <!-- URL -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navURL" name="navURL" class="form-control rounded" value="`+url+`" />
                                  <label class="form-label" for="navURL">URL</label>
                                </div>
                                <!-- End URL -->
                                <a href="javascript:;" class="text-danger item-delete"><i class="far fa-trash-can text-danger"></i> <span class="font-weight-medium mx-2 fs-18">Remove menu</span></a>
                            </div>
                      </div>
                    </div>
                </div>
            </li>`;

        $("#menuMain > .dd-list").append(item);
        $("#menuMain").find('.dd-empty').remove();
        $('#addItemMenuMain').find('input[name="navLabel"]').val('');
        $('#addItemMenuMain').find('input[name="navURL"]').val('');
        updateOutputmenuMain();

        // Update formOutline
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).update();
        });

        modalInstanceMainMenu.hide();
    });

    $("body").delegate("input[name='navLabel']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("label", $(this).val());
        $(this).closest(".dd-item").find("span.navName").text($(this).val());
    });

    $("body").delegate("input[name='navURL']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("url", $(this).val());
    });

    $("body").delegate(".item-delete", "click", function (e) {
        $(this).closest(".dd-item").remove();
        updateOutputmenuMain();
    });


    // Menu Right
    const modalRightMenu = document.getElementById('dataRightMenuModalCenter');
    const modalInstanceRightMenu = new mdb.Modal(modalRightMenu);

    var updateOutputmenuRight = function () {
        $('#menuRight-output').val(JSON.stringify($('#menuRight').nestable('serialize')));
    };

    $('#menuRight').nestable({maxDepth:2}).on('change', updateOutputmenuRight);

    updateOutputmenuRight();

    $("#addItemMenuRight").submit(function (e) {
        e.preventDefault();
        id = Date.now();
        var label = $('#addItemMenuRight').find('input[name="navLabel"]').val();
        var url = $('#addItemMenuRight').find('input[name="navURL"]').val();
        if ((url == "") || (label == "")) return;
        var item =
            `<li class="dd-item" data-id="`+id+`" data-label="`+label+`" data-url="`+url+`">
                <div class="accordion py-2" id="accordionFlushExample">
                  <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading9 ">
                          <button class="accordion-button fs-20 py-2 font-weight-medium text-dark collapsed bg-header-accordion" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9"
                          >
                          <div class="dd-handle dd3-handle"></div>
                                    <span class="ms-3 navRName">`+label+`</span>
                            
                          </button>
                        </h2>
                        <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-mdb-parent="#accordionFlushExample"
                        >
                            <div class="accordion-body">
                                <!-- Navigation Label -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navRLabel" name="navRLabel" value="`+label+`" class="form-control rounded" />
                                  <label class="form-label" for="navRLabel">Navigation Label</label>
                                </div>
                                <!-- End Navigation Label -->
                                <!-- URL -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navRURL" name="navRURL" class="form-control rounded" value="`+url+`" />
                                  <label class="form-label" for="navRURL">URL</label>
                                </div>
                                <!-- End URL -->
                                <a href="javascript:;" class="text-danger item-delete-right"><i class="far fa-trash-can text-danger"></i> <span class="font-weight-medium mx-2 fs-18">Remove menu</span></a>
                            </div>
                      </div>
                    </div>
                </div>
            </li>`;

        $("#menuRight > .dd-list").append(item);
        $("#menuRight").find('.dd-empty').remove();
        $('#addItemMenuRight').find('input[name="navRLabel"]').val('');
        $('#addItemMenuRight').find('input[name="navRURL"]').val('');
        updateOutputmenuRight();

        // Update formOutline
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).update();
        });

        modalInstanceRightMenu.hide();
    });

    $("body").delegate("input[name='navRLabel']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("label", $(this).val());
        $(this).closest(".dd-item").find("span.navRName").text($(this).val());
    });

    $("body").delegate("input[name='navRURL']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("url", $(this).val());
    });

    $("body").delegate(".item-delete-right", "click", function (e) {
        $(this).closest(".dd-item").remove();
        updateOutputmenuRight();
    });

    // Upload Image Logo
     $(function () {
        var fileupload = $("#imgUpload");
        var filePath = $("#imgFilePath");
        var button = $("#btnImgUpload");
        button.click(function () {
            fileupload.click();
        });
        fileupload.change(function () {
            var $input = $(this);
            var files = $input[0].files;
            var filename = files[0].name;
            // filePath.html("<b>Selected File: </b>" + filename);

            button.text('Change Image');
            fileupload.next().show();

            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                //Validate the File
                image.onload = function () {
                    //Preview
                    var isImage = document.getElementById('isImage');
                    isImage.src = e.target.result;
                    isImage.onload = function() {
                      URL.revokeObjectURL(isImage.src);

                    }
                };
            }

        });

        $('a.removeImage').click(function(){
          var idImageDel = $(this).data('image-id');
          var imgDefault = 'static/images/header/empty.jpg';
          $('#'+idImageDel).attr('src',imgDefault);
          button.text('Upload Image');
          fileupload.val('');
          $(this).hide();
          filePath.html('');
        });



    });


    



  });


})(jQuery);

