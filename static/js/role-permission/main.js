(function ($) {
  $(document).on('ready', function () {

    const table = document.getElementById('datatable-clickable-rows');
    const modal = document.getElementById('dataConfirmModal');
    const modalBody = document.getElementById('modalBodyConfirm');
    const modalHeader = document.getElementById('modalHeaderConfirm');
    const modalInstance = new mdb.Modal(modal);


    const modalEditRole = document.getElementById('dataEditRoleModal');
    const modalBodyEditRole = document.getElementById('modalBodyEditRole');
    const modalHeaderEditRole = document.getElementById('modalHeaderEditRole');
    const modalInstanceEditRole = new mdb.Modal(modalEditRole);

    const modalAddRole = document.getElementById('dataAddRoleModal');
    const modalBodyAddRole = document.getElementById('modalBodyAddRole');
    const modalHeaderAddRole = document.getElementById('modalHeaderAddRole');
    const modalInstanceAddRole = new mdb.Modal(modalAddRole);

    const setupButtons = (action) => {
      document.getElementsByClassName(`${action}-button`).forEach((button) => {

        button.addEventListener('click', (e) => {
          e.stopPropagation();

          const index = button.getAttribute('data-mdb-index');
          const title = button.getAttribute('data-mdb-title');
          const id = button.getAttribute('data-mdb-id');

          if(action == 'delete'){
            console.log('delete');

            modalBody.innerHTML = `
              <div class="pb-4"><i class="far fa-trash-alt fs-55 text-danger"></i></div>
              <h5 class="fs-24 fw-bold">You are about to delete a role.</h5>
              <div class="pt-3">
              <p class="fs-20 text-start">
                <span>Role : <span><span class="font-weight-medium">`+title+`</span><br>
                <span>Role Id : <span><span class="font-weight-medium">`+id+`</span> 
              </p>
              </div>
            `;

            const href = 'role_permission.html'
            $('#dataConfirmOK').attr('href', href);

            modalInstance.show();
          }


          if(action == 'edit'){
            console.log('edit');

            modalBodyEditRole.innerHTML = `<div class="form-group form-outline">
            <input type="text" id="roleName" name="roleName" class="form-control rounded" placeholder="Role Name" value="`+title+`" />
            <label class="form-label" for="roleName">Role Name</label>
          </div>
            `;

            document.querySelectorAll('.form-outline').forEach((formOutline) => {
              new mdb.Input(formOutline).update();
            });

            const href = 'role_permission.html?edit='+id
            $('#dataConfirmEditRoleOK').attr('href', href);

            modalInstanceEditRole.show();

          }

          if(action == 'add'){
            console.log('add');

            modalBodyAddRole.innerHTML = `<div class="form-group form-outline">
            <input type="text" id="roleName" name="roleName" class="form-control rounded" placeholder="Role Name" value="" />
            <label class="form-label" for="roleName">Role Name</label>
          </div>
            `;

            document.querySelectorAll('.form-outline').forEach((formOutline) => {
              new mdb.Input(formOutline).update();
            });

            const href = 'role_permission.html'
            $('#dataConfirmAddRoleOK').attr('href', href);

            modalInstanceAddRole.show();

          }




        });


      });
    };

    setupButtons('add');
    setupButtons('edit');
    setupButtons('delete');

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