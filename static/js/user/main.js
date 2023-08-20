(function ($) {
  $(document).on('ready', function () {

    
    const table = document.getElementById('datatable-clickable-rows');
    const modal = document.getElementById('dataConfirmModal');
    const modalBody = document.getElementById('modalBodyConfirm');
    const modalHeader = document.getElementById('modalHeaderConfirm');

    const modalInstance = new mdb.Modal(modal);


    const modalEditUser = document.getElementById('dataEditUserModal');
    const modalBodyEditUser = document.getElementById('modalBodyEditUser');
    const modalHeaderEditUser = document.getElementById('modalHeaderEditUser');
    const modalInstanceEditUser = new mdb.Modal(modalEditUser);

    const modalAddUser = document.getElementById('dataAddUserModal');
    const modalBodyAddUser = document.getElementById('modalBodyAddUser');
    const modalHeaderAddUser = document.getElementById('modalHeaderAddUser');
    const modalInstanceAddUser = new mdb.Modal(modalAddUser);

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
              <h5 class="fs-24 fw-bold">You are about to delete a user.</h5>
              <div class="pt-3">
              <p class="fs-20 text-start">
                <span>User : <span><span class="font-weight-medium">`+messages[index].name+`</span><br>
                <span>User code : <span><span class="font-weight-medium">`+messages[index].id+`</span> 
              </p>
              </div>
            `;

            const href = 'user.html'
            $('#dataConfirmOK').attr('href', href);

            modalInstance.show();
          }


          if(action == 'edit'){
            console.log('edit');

            $('#dataEditUserModal input[name="email"]').val(messages[index].email);


            $("#role option[value=" + messages[index].roleName + "]").attr('selected', 'selected');

            const href = 'user.html?edit='+messages[index].id
            $('#dataConfirmEditUserOK').attr('href', href);

            modalInstanceEditUser.show();

          }

          if(action == 'add'){
            console.log('add');

    

            const href = 'user.html'
            $('#dataConfirmAddUserOK').attr('href', href);

            modalInstanceAddUser.show();

          }

          console.log(`${action} message: ${index}`, messages[index]);
        });


      });
    };

    const columns = [
      { label: 'ID', field: 'id' },
      { label: 'Name', field: 'name' },
      { label: 'Email', field: 'email' },
      { label: 'Role', field: 'role' },
      { label: 'Status', field: 'status' },
      { label: 'Create Date', field: 'createdate'},
      { label: 'Last Login', field: 'lastlogin' },
      { label: 'Actions', field: 'actions', sort: false }
    ];

    const messages = [
      { 
        id: 'P1234567',
        name: 'Umay Plus Lorem Ipsum',
        email: 'umayplus@easybuy.co.th',
        role:'<span class="text-info rounded-pill px-3">Admin</span>',
        status:'<span class="badge badge-success rounded-pill px-3">Active</span>',
        createdate: '10/03/2023',
        lastlogin: '10/03/2023 12:50 PM',
        roleName:'Admin',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Lorem Ipsum is simply dummy',
        email: 'umayplus@easybuy.co.th',
        role:'<span class="text-dark rounded-pill px-3">User</span>',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        createdate: '10/03/2023',
        lastlogin: '10/03/2023 12:50 PM',
        roleName:'User',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Umay Plus Lorem Ipsum',
        email: 'umayplus@easybuy.co.th',
        role:'<span class="text-dark rounded-pill px-3">User</span>',
        status:'<span class="badge badge-success rounded-pill px-3">Active</span>',
        createdate: '10/03/2023',
        lastlogin: '10/03/2023 12:50 PM',
        roleName:'User',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Lorem Ipsum is simply dummy',
        email: 'umayplus@easybuy.co.th',
        role:'<span class="text-dark rounded-pill px-3">User</span>',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        createdate: '10/03/2023',
        lastlogin: '10/03/2023 12:50 PM',
        roleName:'User',
        message:'xxxxx'
      },
      { 
        id: 'P1234567',
        name: 'Lorem Ipsum is simply dummy',
        email: 'umayplus@easybuy.co.th',
        role:'<span class="text-dark rounded-pill px-3">User</span>',
        status:'<span class="badge badge-danger rounded-pill px-3">Inactive</span>',
        createdate: '10/03/2023',
        lastlogin: '10/03/2023 12:50 PM',
        roleName:'User',
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
      setupButtons('add');
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