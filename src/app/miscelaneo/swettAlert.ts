import Swal from 'sweetalert2'
export class Alert {
    public static getAlertSweetAlert() {
        return Swal({
            position: 'top-end',
            type: 'success',
            title: 'Registro Exitosp',
            showConfirmButton: false,
            timer: 2000
        });
    }
}