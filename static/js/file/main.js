(function ($) {
  $(document).on('ready', function () {

    
    const table = document.getElementById('datatable-clickable-rows');
    const modal = document.getElementById('dataConfirmModal');
    const modalBody = document.getElementById('modalBodyConfirm');
    const modalHeader = document.getElementById('modalHeaderConfirm');

    const modalInstance = new mdb.Modal(modal);

    const modalEditFile = document.getElementById('dataEditFileModal');
    const modalBodyEditFile = document.getElementById('modalBodyEditFile');
    const modalHeaderEditFile = document.getElementById('modalHeaderEditFile');
    const modalInstanceEditFile = new mdb.Modal(modalEditFile);

    const modalAddFile = document.getElementById('dataAddFileModal');
    const modalBodyAddFile = document.getElementById('modalBodyAddFile');
    const modalHeaderAddFile = document.getElementById('modalHeaderAddFile');
    const modalInstanceAddFile = new mdb.Modal(modalAddFile);

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

          if(action == 'delete'){
            console.log('delete');

            modalBody.innerHTML = `
              <div class="pb-4"><i class="far fa-trash-alt fs-55 text-danger"></i></div>
              <h5 class="fs-24 fw-bold">You are about to delete a file.</h5>
              <div class="pt-3">
              <p class="fs-20 text-start">
                <span>File Name : <span><span class="font-weight-medium">`+messages[index].name+`</span><br>
                <span>File code : <span><span class="font-weight-medium">`+messages[index].id+`</span> 
              </p>
              </div>
            `;

            const href = 'file.html'
            $('#dataConfirmOK').attr('href', href);

            modalInstance.show();
          }

          if(action == 'view'){
            console.log('view');
          }

          if(action == 'edit'){
            console.log('edit');

            modalBodyEditFile.innerHTML = `<div class="box1">
                <h3 class="fs-18"> Upload files  <span class="text-disabled">(Can choose files.)</span></h3>
                <div class="form-group">
              <input type="file" class="form-control mb-2 w-50 rounded" name="fileAttachment" accept=".pdf" id="fileAttachment" value="`+messages[index].name+`"  />
                </div>
                <label class="form-label text-lh-1" for="fileAttachment">
              Allowed size : [Not over 1MB]<br>
              Allowed type : .pdf
            </label>
                <div id="filesList">
                  <ul id="files-names" class="list-unstyled">

                  </ul>
                </div>  
              </div>
            `;

            document.querySelectorAll('.form-outline').forEach((formOutline) => {
              new mdb.Input(formOutline).update();
            });

            const href = 'file.html?edit='+messages[index].id
            $('#dataConfirmEditFileOK').attr('href', href);

            modalInstanceEditFile.show();

          }

          if(action == 'add'){
            console.log('add');

            modalBodyAddFile.innerHTML = `<div class="box1">
                <h3 class="fs-18"> Upload files  <span class="text-disabled">(Can choose files.)</span></h3>
                <div class="form-group">
              <input type="file" class="form-control mb-2 w-50 rounded" name="fileAttachment" accept=".pdf" id="fileAttachment"  />
                </div>
                <label class="form-label text-lh-1" for="fileAttachment">
              Allowed size : [Not over 1MB]<br>
              Allowed type : .pdf
            </label>
                <div id="filesList">
                  <ul id="files-names" class="list-unstyled">

                  </ul>
                </div>  
              </div>
            `;

            document.querySelectorAll('.form-outline').forEach((formOutline) => {
              new mdb.Input(formOutline).update();
            });

            const href = 'file.html?add=new'
            $('#dataConfirmAddFileOK').attr('href', href);


            modalInstanceAddFile.show();

          }

          console.log(`${action} message: ${index}`, messages[index]);
        });


      });
    };

    const columns = [
      { label: 'ID', field: 'id' },
      { label: 'File Name', field: 'name',width:300 },
      { label: 'Status', field: 'status' },
      { label: 'Updated Date', field: 'updateddate' },
      { label: 'Actions', field: 'actions', sort: false }
    ];

    const messages = [
      { 
        id: 'P1234567',
        name: 'Umay Plus Lorem Ipsum.pdf',
        status:'<span class="badge badge-success rounded-pill px-3">Active</span>',
        updateddate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Lorem Ipsum is simply dummy.pdf',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        updateddate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Umay Plus Lorem Ipsum.pdf',
        status:'<span class="badge badge-success rounded-pill px-3">Active</span>',
        updateddate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Lorem Ipsum is simply dummy.pdf',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        updateddate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Lorem Ipsum is simply dummy.pdf',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        updateddate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      }
    ];

    const rows = messages.map((email, i) => {
      const getPreview = (message, length) => {
        if (message.length <= length) return message;

        return `${message.slice(0, length)}...`;
      };

      return {
        ...
        email,
        preview: getPreview(email.message, 20),
        actions: `
          <a role="button" class="view-button text-disabled me-1" data-mdb-index="${i}">
            <i class="far fa-eye text-disabled"></i>
          </a>
          <a role="button" class="edit-button text-disabled me-1" data-mdb-index="${i}">
            <i class="far fa-pen-to-square"></i>
          </a>
          <a role="button" class="delete-button text-disabled me-1" data-mdb-index="${i}">
            <i class="far fa-trash-alt"></i>

          </a>
        `,
      };
    });


    table.addEventListener('render.mdb.datatable', () => {
      setupButtons('view');
      setupButtons('add');
      setupButtons('edit');
      setupButtons('delete');
    })

    const datatableInstance = new mdb.Datatable(table, {
      columns,
      rows,
    });

    const dt = new DataTransfer();
      $(document).on('change','#fileAttachment', function(e){

        console.log('xxxxxx');
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