(function ($) {
  $(document).on('ready', function () {


    $('input[name="isTemplate"]').on('change',function(){
        $('img.isTemplate').removeClass('checked');
        var val = $(this).val();
        $('img#imgTemplate'+val).addClass('checked');
        
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


    $(document).on('click', '.addSocialMedia', function (ev) {
      var $clone = $(this).parent().parent().clone(true);
      var $newbuttons = '<a href="javascript:;" class="text-primary font-weight-medium text-decoration-underline addSocialMedia pe-3"><i class="fas fa-plus fs-12"></i> Add Social Media</a><a href="javascript:;" class="text-primary font-weight-medium text-decoration-underline removeSocialMedia"><i class="fas fa-remove fs-12"></i> Remove Social Media</a>';
      $clone.find('.tn-buttons').html($newbuttons).end().appendTo($('#cloneSocialMediaAppendHere'));
    });

    $(document).on('click', '.removeSocialMedia', function () {
      $(this).parent().parent().remove();
    });

    $(document).on('click', '.addButtons', function (ev) {
      var $clone = $(this).parent().parent().clone(true);
      var $newbuttons = '<a href="javascript:;" class="text-primary font-weight-medium text-decoration-underline addButtons pe-3"><i class="fas fa-plus fs-12"></i> Add Buttons</a><a href="javascript:;" class="text-primary font-weight-medium text-decoration-underline removeButtons"><i class="fas fa-remove fs-12"></i> Remove Buttons</a>';
      $clone.find('.tn-buttons').html($newbuttons).end().appendTo($('#cloneButtonsAppendHere'));
    });

    $(document).on('click', '.removeButtons', function () {
      $(this).parent().parent().remove();
    });


  });
})(jQuery);