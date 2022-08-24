import * as toastr from 'toastr';


export default class Message {
  static success(arg) {
    // must be changed change because Bootstrap UI
    // css overrides the style


    
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "toastClass": "mdc-snackbar__surface",
      "positionClass": "mdc-snackbar",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
      
    }

        
    toastr.options.closeHtml = '<button class="mdc-icon-button mdc-snackbar__dismiss material-icons"><i class="close-icon" >close</i></button>';

    toastr.success(arg);
  }

  
 
  static error(arg) {
    // must be changed change because Bootstrap UI
    // css overrides the style
    toastr.options.toastClass = 'me-3 fas fa-times-circle text-white fs-3';
    toastr.options.positionClass = 'alert alert-danger bg-danger border-2 d-flex align-items-center toast-bottom-left';

    toastr.error(arg);
  }
}
