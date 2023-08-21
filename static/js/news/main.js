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
    // const startDate = document.querySelector('.startDate');
    // new mdb.Datepicker(startDate, {
      
    // });

    // const endDate = document.querySelector('.endDate');
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
              <h5 class="fs-24 fw-bold">You are about to delete a news.</h5>
              <div class="pt-3">
              <p class="fs-20 text-start">
                <span>News : <span><span class="font-weight-medium">`+messages[index].title+`</span><br>
                <span>News code : <span><span class="font-weight-medium">`+messages[index].no+`</span> 
              </p>
              </div>
            `;

            const href = 'blog.html'
            $('#dataConfirmOK').attr('href', href);

            modalInstance.show();
          }

          if(action == 'view'){
            console.log('view');
          }

          if(action == 'edit'){
            console.log('edit');
            window.location.href = "news-activity_form.html?id="+messages[index].no;
          }

          console.log(`${action} message: ${index}`, messages[index]);
        });


      });
    };

    const columns = [
      { label: 'No', field: 'no' },
      { label: 'Title', field: 'title' },
      { label: 'Status', field: 'status' },
      { label: 'Categories', field: 'categories' },
      { label: 'Start Date', field: 'startdate' },
      { label: 'End Date', field: 'enddate'},
      { label: 'Create By', field: 'createby'},
      { label: 'Create Date', field: 'createdate' },
      { label: 'Actions', field: 'actions', sort: false }
    ];

    const messages = [
      { 
        no: '2023270000001',
        title: 'Lorem Ipsum is simply dummy text of printing.',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        categories: 'Other',
        startdate: '09/03/2023',
        enddate: '10/03/2023',
        createby: 'P123456',
        createdate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        no: '2023270000002',
        title: 'Lorem Ipsum is simply dummy text of printing.',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        categories: 'Other',
        startdate: '09/03/2023',
        enddate: '10/03/2023',
        createby: 'P123456',
        createdate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        no: '2023270000003',
        title: 'Lorem Ipsum is simply dummy text of printing.',
        status:'<span class="badge rounded-pill badge-success px-3">Active</span>',
        categories: 'Other',
        startdate: '09/03/2023',
        enddate: '10/03/2023',
        createby: 'P123456',
        createdate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        no: '2023270000004',
        title: 'Lorem Ipsum is simply dummy text of printing.',
        status:'<span class="badge rounded-pill badge-success px-3">Active</span>',
        categories: 'Other',
        startdate: '09/03/2023',
        enddate: '10/03/2023',
        createby: 'P123456',
        createdate: '10/03/2023 12:50 PM',
        message:'xxxxx'
      },
      { 
        no: '2023270000005',
        title: 'Lorem Ipsum is simply dummy text of printing.',
        status:'<span class="badge rounded-pill badge-success px-3">Active</span>',
        categories: 'Other',
        startdate: '09/03/2023',
        enddate: '10/03/2023',
        createby: 'P123456',
        createdate: '10/03/2023 12:50 PM',
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
      setupButtons('edit');
      setupButtons('delete');
    })

    const datatableInstance = new mdb.Datatable(table, {
      columns,
      rows,
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

