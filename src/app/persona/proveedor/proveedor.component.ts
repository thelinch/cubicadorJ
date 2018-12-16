import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Proveedor } from './../../model/proveedor';
import { Observable } from 'rxjs';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Alert } from 'src/app/miscelaneo/swettAlert';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  formularioProveedor: FormGroup
  listProveedor: Observable<Proveedor[]>
  proveedorSeleccionado: Proveedor
  constructor(private render: Renderer2, private proveedorService: ProveedorService) { }

  ngOnInit() {
    this.formularioProveedor = new FormGroup(
      {
        nombre: new FormControl("", Validators.required),
        apellidoPaterno: new FormControl("", Validators.required),
        apellidoMaterno: new FormControl("", Validators.required),
        direccion: new FormControl(""),
        numeroTelefonico: new FormControl("", Validators.required)
      })
    this.getAllProveedor()
  }
  getAllProveedor() {
    this.listProveedor = this.proveedorService.getAllProveedor()
  }
  seleccionarProveedor(proveedor: Proveedor) {
    this.proveedorSeleccionado = proveedor;
  }
  toggleModal(modal: ElementRef, opcion: string) {
    if (opcion == "abrir") {
      this.formularioProveedor.reset()
      this.render.addClass(modal, "is-active")
    } else {
      this.render.removeClass(modal, "is-active")
    }
  }
  saveProveedor(proveedor: Proveedor) {
    this.proveedorService.saveProveedor(proveedor).subscribe(respuesta => {

      Alert.getAlertSweetAlert()
    })
  }

}
