(function ($) {
  $(document).on('ready', function () {
    // Menu Main C2
    const modalMainMenuC2 = document.getElementById('dataMainMenuC2ModalCenter');
    const modalInstanceMainMenuC2 = new mdb.Modal(modalMainMenuC2);

    var updateOutputmenuMainC2 = function () {
        $('#menuMainC2-output').val(JSON.stringify($('#menuMainC2').nestable('serialize')));
    };

    $('#menuMainC2').nestable({maxDepth:1}).on('change', updateOutputmenuMainC2);

    updateOutputmenuMainC2();

    $("#addItemMenuMainC2").submit(function (e) {
        e.preventDefault();
        id = Date.now();
        var label = $('#addItemMenuMainC2').find('input[name="navLabelC2"]').val();
        var url = $('#addItemMenuMainC2').find('input[name="navURLC2"]').val();
        if ((url == "") || (label == "")) return;
        var item =
            `<li class="dd-item" data-id="`+id+`" data-label="`+label+`" data-url="`+url+`">
                <div class="accordion py-2" id="accordionFlushExample">
                  <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading9 ">
                          <button class="accordion-button fs-20 py-2 font-weight-medium text-dark collapsed bg-header-accordion" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9"
                          >
                          <div class="dd-handle dd3-handle"></div>
                                    <span class="ms-3 navNameC2">`+label+`</span>
                            
                          </button>
                        </h2>
                        <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-mdb-parent="#accordionFlushExample"
                        >
                            <div class="accordion-body">
                                <!-- Navigation Label -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navLabelC2" name="navLabelC2" value="`+label+`" class="form-control rounded" />
                                  <label class="form-label" for="navLabelC2">Navigation Label</label>
                                </div>
                                <!-- End Navigation Label -->
                                <!-- URL -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navURLC2" name="navURLC2" class="form-control rounded" value="`+url+`" />
                                  <label class="form-label" for="navURLC2">URL</label>
                                </div>
                                <!-- End URL -->
                                <a href="javascript:;" class="text-danger item-delete"><i class="far fa-trash-can text-danger"></i> <span class="font-weight-medium mx-2 fs-18">Remove menu</span></a>
                            </div>
                      </div>
                    </div>
                </div>
            </li>`;

        $("#menuMainC2 > .dd-list").append(item);
        $("#menuMainC2").find('.dd-empty').remove();
        $('#addItemMenuMainC2').find('input[name="navLabelC2"]').val('');
        $('#addItemMenuMainC2').find('input[name="navURLC2"]').val('');
        updateOutputmenuMainC2();

        // Update formOutline
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).update();
        });

        modalInstanceMainMenuC2.hide();
    });

    $("body").delegate("input[name='navLabelC2']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("label", $(this).val());
        $(this).closest(".dd-item").find("span.navNameC2").text($(this).val());
    });

    $("body").delegate("input[name='navURLC2']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("url", $(this).val());
    });

    $("body").delegate(".item-delete", "click", function (e) {
        $(this).closest(".dd-item").remove();
        updateOutputmenuMainC2();
    });


    // Menu Main C3
    const modalMainMenuC3 = document.getElementById('dataMainMenuC3ModalCenter');
    const modalInstanceMainMenuC3 = new mdb.Modal(modalMainMenuC3);

    var updateOutputmenuMainC3 = function () {
        $('#menuMainC3-output').val(JSON.stringify($('#menuMainC3').nestable('serialize')));
    };

    $('#menuMainC3').nestable({maxDepth:1}).on('change', updateOutputmenuMainC3);

    updateOutputmenuMainC3();

    $("#addItemMenuMainC3").submit(function (e) {
        e.preventDefault();
        id = Date.now();
        var label = $('#addItemMenuMainC3').find('input[name="navLabelC3"]').val();
        var url = $('#addItemMenuMainC3').find('input[name="navURLC3"]').val();
        if ((url == "") || (label == "")) return;
        var item =
            `<li class="dd-item" data-id="`+id+`" data-label="`+label+`" data-url="`+url+`">
                <div class="accordion py-2" id="accordionFlushExample">
                  <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading9 ">
                          <button class="accordion-button fs-20 py-2 font-weight-medium text-dark collapsed bg-header-accordion" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9"
                          >
                          <div class="dd-handle dd3-handle"></div>
                                    <span class="ms-3 navNameC2">`+label+`</span>
                            
                          </button>
                        </h2>
                        <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-mdb-parent="#accordionFlushExample"
                        >
                            <div class="accordion-body">
                                <!-- Navigation Label -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navLabelC3" name="navLabelC3" value="`+label+`" class="form-control rounded" />
                                  <label class="form-label" for="navLabelC3">Navigation Label</label>
                                </div>
                                <!-- End Navigation Label -->
                                <!-- URL -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navURLC3" name="navURLC3" class="form-control rounded" value="`+url+`" />
                                  <label class="form-label" for="navURLC3">URL</label>
                                </div>
                                <!-- End URL -->
                                <a href="javascript:;" class="text-danger item-delete"><i class="far fa-trash-can text-danger"></i> <span class="font-weight-medium mx-2 fs-18">Remove menu</span></a>
                            </div>
                      </div>
                    </div>
                </div>
            </li>`;

        $("#menuMainC3 > .dd-list").append(item);
        $("#menuMainC3").find('.dd-empty').remove();
        $('#addItemMenuMainC3').find('input[name="navLabelC3"]').val('');
        $('#addItemMenuMainC3').find('input[name="navURLC3"]').val('');
        updateOutputmenuMainC3();

        // Update formOutline
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).update();
        });

        modalInstanceMainMenuC3.hide();
    });

    $("body").delegate("input[name='navLabelC3']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("label", $(this).val());
        $(this).closest(".dd-item").find("span.navNameC3").text($(this).val());
    });

    $("body").delegate("input[name='navURLC3']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("url", $(this).val());
    });

    $("body").delegate(".item-delete", "click", function (e) {
        $(this).closest(".dd-item").remove();
        updateOutputmenuMainC3();
    });

    // Menu Main C4
    const modalMainMenuC4 = document.getElementById('dataMainMenuC4ModalCenter');
    const modalInstanceMainMenuC4 = new mdb.Modal(modalMainMenuC4);

    var updateOutputmenuMainC4 = function () {
        $('#menuMainC4-output').val(JSON.stringify($('#menuMainC4').nestable('serialize')));
    };

    $('#menuMainC4').nestable({maxDepth:1}).on('change', updateOutputmenuMainC4);

    updateOutputmenuMainC4();

    $("#addItemMenuMainC4").submit(function (e) {
        e.preventDefault();
        id = Date.now();
        var label = $('#addItemMenuMainC4').find('input[name="navLabelC4"]').val();
        var url = $('#addItemMenuMainC4').find('input[name="navURLC4"]').val();
        if ((url == "") || (label == "")) return;
        var item =
            `<li class="dd-item" data-id="`+id+`" data-label="`+label+`" data-url="`+url+`">
                <div class="accordion py-2" id="accordionFlushExample">
                  <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading9 ">
                          <button class="accordion-button fs-20 py-2 font-weight-medium text-dark collapsed bg-header-accordion" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9"
                          >
                          <div class="dd-handle dd3-handle"></div>
                                    <span class="ms-3 navNameC2">`+label+`</span>
                            
                          </button>
                        </h2>
                        <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-mdb-parent="#accordionFlushExample"
                        >
                            <div class="accordion-body">
                                <!-- Navigation Label -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navLabelC4" name="navLabelC4" value="`+label+`" class="form-control rounded" />
                                  <label class="form-label" for="navLabelC4">Navigation Label</label>
                                </div>
                                <!-- End Navigation Label -->
                                <!-- URL -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navURLC4" name="navURLC4" class="form-control rounded" value="`+url+`" />
                                  <label class="form-label" for="navURLC4">URL</label>
                                </div>
                                <!-- End URL -->
                                <a href="javascript:;" class="text-danger item-delete"><i class="far fa-trash-can text-danger"></i> <span class="font-weight-medium mx-2 fs-18">Remove menu</span></a>
                            </div>
                      </div>
                    </div>
                </div>
            </li>`;

        $("#menuMainC4 > .dd-list").append(item);
        $("#menuMainC4").find('.dd-empty').remove();
        $('#addItemMenuMainC4').find('input[name="navLabelC4"]').val('');
        $('#addItemMenuMainC4').find('input[name="navURLC4"]').val('');
        updateOutputmenuMainC4();

        // Update formOutline
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).update();
        });

        modalInstanceMainMenuC4.hide();
    });

    $("body").delegate("input[name='navLabelC4']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("label", $(this).val());
        $(this).closest(".dd-item").find("span.navNameC4").text($(this).val());
    });

    $("body").delegate("input[name='navURLC4']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("url", $(this).val());
    });

    $("body").delegate(".item-delete", "click", function (e) {
        $(this).closest(".dd-item").remove();
        updateOutputmenuMainC4();
    });

    // Menu Main C5
    const modalMainMenuC5 = document.getElementById('dataMainMenuC5ModalCenter');
    const modalInstanceMainMenuC5 = new mdb.Modal(modalMainMenuC5);

    var updateOutputmenuMainC5 = function () {
        $('#menuMainC5-output').val(JSON.stringify($('#menuMainC5').nestable('serialize')));
    };

    $('#menuMainC5').nestable({maxDepth:1}).on('change', updateOutputmenuMainC5);

    updateOutputmenuMainC5();

    $("#addItemMenuMainC5").submit(function (e) {
        e.preventDefault();
        id = Date.now();
        var label = $('#addItemMenuMainC5').find('input[name="navLabelC5"]').val();
        var url = $('#addItemMenuMainC5').find('input[name="navURLC5"]').val();
        if ((url == "") || (label == "")) return;
        var item =
            `<li class="dd-item" data-id="`+id+`" data-label="`+label+`" data-url="`+url+`">
                <div class="accordion py-2" id="accordionFlushExample">
                  <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading9 ">
                          <button class="accordion-button fs-20 py-2 font-weight-medium text-dark collapsed bg-header-accordion" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9"
                          >
                          <div class="dd-handle dd3-handle"></div>
                                    <span class="ms-3 navNameC2">`+label+`</span>
                            
                          </button>
                        </h2>
                        <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-mdb-parent="#accordionFlushExample"
                        >
                            <div class="accordion-body">
                                <!-- Navigation Label -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navLabelC5" name="navLabelC5" value="`+label+`" class="form-control rounded" />
                                  <label class="form-label" for="navLabelC5">Navigation Label</label>
                                </div>
                                <!-- End Navigation Label -->
                                <!-- URL -->
                                <div class="form-group form-outline">
                                  <input type="text" id="navURLC5" name="navURLC5" class="form-control rounded" value="`+url+`" />
                                  <label class="form-label" for="navURLC5">URL</label>
                                </div>
                                <!-- End URL -->
                                <a href="javascript:;" class="text-danger item-delete"><i class="far fa-trash-can text-danger"></i> <span class="font-weight-medium mx-2 fs-18">Remove menu</span></a>
                            </div>
                      </div>
                    </div>
                </div>
            </li>`;

        $("#menuMainC5 > .dd-list").append(item);
        $("#menuMainC5").find('.dd-empty').remove();
        $('#addItemMenuMainC5').find('input[name="navLabelC5"]').val('');
        $('#addItemMenuMainC5').find('input[name="navURLC5"]').val('');
        updateOutputmenuMainC5();

        // Update formOutline
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).update();
        });

        modalInstanceMainMenuC5.hide();
    });

    $("body").delegate("input[name='navLabelC5']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("label", $(this).val());
        $(this).closest(".dd-item").find("span.navNameC5").text($(this).val());
    });

    $("body").delegate("input[name='navURLC5']", "change paste keyup", function (e) {
        $(this).closest(".dd-item").data("url", $(this).val());
    });

    $("body").delegate(".item-delete", "click", function (e) {
        $(this).closest(".dd-item").remove();
        updateOutputmenuMainC5();
    });

    // Upload Image Logo
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
                        var isImage = document.getElementById('isImage'+keyUpload);
                        isImage.src = e.target.result;
                        isImage.onload = function() {
                          URL.revokeObjectURL(isImage.src);
                          
                        }
                    };
                }

            });

            $(document).on('click','a.removeImage',function(){
              var idImageDel = $(this).data('image-id');
              var imgDefault = 'static/images/footer/empty.jpg';
              $('#'+idImageDel).attr('src',imgDefault);
              button.text('Upload Image');
              $(this).hide();
              fileupload.val('');

            });

        });



    });


    



  });


})(jQuery);

